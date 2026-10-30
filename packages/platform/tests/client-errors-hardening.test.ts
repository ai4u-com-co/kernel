import { describe, it, expect, vi, afterEach } from "vitest"
import { createClientErrorHandler } from "../src/client-errors"
import * as logger from "../src/logger"

afterEach(() => vi.restoreAllMocks())

const good = { message: "boom", kind: "error", path: "/ventas?x=1", stack: "Error: boom\n  at a" }

function req(body: unknown, headers: Record<string, string> = {}): Request {
  return new Request("https://app.example.com/api/client-error", {
    method: "POST",
    headers: { "content-type": "application/json", origin: "https://app.example.com", "sec-fetch-site": "same-origin", ...headers },
    body: typeof body === "string" ? body : JSON.stringify(body),
  })
}
function spies() {
  const error = vi.fn()
  vi.spyOn(logger, "getLogger").mockReturnValue({ error, warn: vi.fn(), info: vi.fn(), debug: vi.fn() } as never)
  vi.spyOn(logger, "flushLogs").mockResolvedValue()
  return { error }
}

describe("P5 tope de bytes leyendo el stream", () => {
  it("sin content-length, corta la lectura al pasar el tope (no lee todo el cuerpo)", async () => {
    spies()
    let pulled = 0
    const chunk = new Uint8Array(1024 * 1024).fill(97)
    const body = new ReadableStream<Uint8Array>({
      pull(c) {
        pulled++
        if (pulled > 50) return c.close()
        c.enqueue(chunk)
      },
    })
    const r = new Request("https://app.example.com/api/client-error", {
      method: "POST",
      headers: { "content-type": "application/json", origin: "https://app.example.com", "sec-fetch-site": "same-origin" },
      body,
      duplex: "half",
    } as RequestInit)
    const res = await createClientErrorHandler()(r)
    expect(res.status).toBe(413)
    expect(pulled).toBeLessThan(10)
  })

  it("un cuerpo chico sin content-length sigue funcionando (204)", async () => {
    const { error } = spies()
    const r = new Request("https://app.example.com/api/client-error", {
      method: "POST",
      headers: { "content-type": "application/json", origin: "https://app.example.com", "sec-fetch-site": "same-origin" },
      body: new ReadableStream<Uint8Array>({
        start(c) {
          c.enqueue(new TextEncoder().encode(JSON.stringify(good)))
          c.close()
        },
      }),
      duplex: "half",
    } as RequestInit)
    expect((await createClientErrorHandler()(r)).status).toBe(204)
    expect(error).toHaveBeenCalledTimes(1)
  })
})

describe("P5 clave del rate limit", () => {
  it("prefiere x-vercel-forwarded-for sobre x-forwarded-for (que el cliente puede falsificar)", async () => {
    spies()
    const h = createClientErrorHandler({ maxPerMinute: 2 })
    const statuses: number[] = []
    for (let i = 0; i < 4; i++) {
      statuses.push((await h(req(good, { "x-vercel-forwarded-for": "9.9.9.9", "x-forwarded-for": `1.1.1.${i}` }))).status)
    }
    expect(statuses).toEqual([204, 204, 429, 429])
  })

  it("sin cabecera de Vercel usa x-real-ip antes que x-forwarded-for", async () => {
    spies()
    const h = createClientErrorHandler({ maxPerMinute: 1 })
    expect((await h(req(good, { "x-real-ip": "8.8.8.8", "x-forwarded-for": "1.1.1.1" }))).status).toBe(204)
    expect((await h(req(good, { "x-real-ip": "8.8.8.8", "x-forwarded-for": "2.2.2.2" }))).status).toBe(429)
  })
})

describe("P5 Map del rate limit con tope", () => {
  it("con muchas IPs distintas se poda (las más viejas salen) en vez de crecer sin límite", async () => {
    spies()
    const h = createClientErrorHandler({ maxPerMinute: 1 })
    const first = { "x-vercel-forwarded-for": "10.0.0.1" }
    expect((await h(req(good, first))).status).toBe(204)
    expect((await h(req(good, first))).status).toBe(429)
    for (let i = 0; i < 6000; i++) await h(req(good, { "x-vercel-forwarded-for": `20.${i >> 8}.${i & 255}.1` }))
    // La entrada más vieja fue podada por el tope: ya no está limitada.
    expect((await h(req(good, first))).status).toBe(204)
  }, 30_000)
})

describe("P5 validación de service y path", () => {
  it.each([
    ["service con salto de línea", { service: "evil\nservice" }],
    ["service con espacios", { service: "mi app" }],
    ["service muy largo", { service: "a".repeat(81) }],
    ["path sin slash inicial", { path: "ventas" }],
    ["path con caracteres de markup", { path: "/<script>" }],
    ["path con espacios", { path: "/a b" }],
  ])("%s => 400 y no se registra", async (_n, patch) => {
    const { error } = spies()
    expect((await createClientErrorHandler()(req({ ...good, ...patch }))).status).toBe(400)
    expect(error).not.toHaveBeenCalled()
  })

  it("service y path normales pasan", async () => {
    const { error } = spies()
    const h = createClientErrorHandler()
    expect((await h(req({ ...good, service: "mi-app.v2_x", path: "/ventas/2026-10/%C3%B1?x=1#h" }))).status).toBe(204)
    expect(error).toHaveBeenCalledTimes(1)
  })
})
