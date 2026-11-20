import { describe, it, expect, vi, afterEach } from "vitest"
import { withApiHandler, type WithApiHandlerOptions } from "../src/http"
import { NotFoundError } from "../src/errors"
import * as logger from "../src/logger"

afterEach(() => vi.restoreAllMocks())

function spyLogger() {
  const spies = { debug: vi.fn(), info: vi.fn(), warn: vi.fn(), error: vi.fn(), child: vi.fn() }
  vi.spyOn(logger, "getLogger").mockReturnValue(spies as unknown as logger.Logger)
  return spies
}

/** Reloj controlado: el handler "tarda" exactamente `ms` (Date.now avanza dentro del handler). */
function fakeClock() {
  let now = 1_000_000
  vi.spyOn(Date, "now").mockImplementation(() => now)
  return { advance: (ms: number) => { now += ms } }
}

const req = () => new Request("https://x/api/pipeline/next")

describe("withApiHandler sin quietSuccess (regresión: comportamiento de 0.8.0 idéntico)", () => {
  it.each<[string, WithApiHandlerOptions]>([
    ["sin opciones", {}],
    ["quietSuccess: false", { quietSuccess: false }],
  ])("%s: un 200 por objeto rápido se loguea INFO", async (_n, opts) => {
    const spies = spyLogger()
    const res = await withApiHandler(async () => ({ ok: true }), { label: "GET x", ...opts })(req())
    expect(res.status).toBe(200)
    expect(spies.info).toHaveBeenCalledTimes(1)
    expect(spies.info.mock.calls[0][0]).toMatchObject({ status: 200 })
    expect(spies.info.mock.calls[0][1]).toBe("GET x")
  })

  it("sin opciones: una Response 201 rápida se loguea INFO", async () => {
    const spies = spyLogger()
    await withApiHandler(async () => new Response(null, { status: 201 }))(req())
    expect(spies.info).toHaveBeenCalledTimes(1)
    expect(spies.info.mock.calls[0][0]).toMatchObject({ status: 201 })
  })

  it("sin opciones: Response 404 → WARN y 500 → ERROR", async () => {
    const spies = spyLogger()
    await withApiHandler(async () => new Response(null, { status: 404 }))(req())
    await withApiHandler(async () => new Response(null, { status: 500 }))(req())
    expect(spies.warn).toHaveBeenCalledTimes(1)
    expect(spies.error).toHaveBeenCalledTimes(1)
    expect(spies.info).not.toHaveBeenCalled()
  })
})

describe("withApiHandler con quietSuccess (rutas de polling/crons)", () => {
  it("200 por objeto rápido: NO loguea nada, pero responde igual (cuerpo + x-request-id)", async () => {
    const spies = spyLogger()
    const res = await withApiHandler(async () => ({ ok: true }), { quietSuccess: true })(
      new Request("https://x/a", { headers: { "x-request-id": "rid-1" } }),
    )
    expect(res.status).toBe(200)
    expect(await res.json()).toEqual({ ok: true })
    expect(res.headers.get("x-request-id")).toBe("rid-1")
    expect(spies.info).not.toHaveBeenCalled()
    expect(spies.warn).not.toHaveBeenCalled()
    expect(spies.error).not.toHaveBeenCalled()
  })

  it.each([200, 201, 204, 302, 399])("Response %i rápida: NO loguea", async (status) => {
    const spies = spyLogger()
    const res = await withApiHandler(async () => new Response(null, { status }), { quietSuccess: true })(req())
    expect(res.status).toBe(status)
    expect(res.headers.get("x-request-id")).toBeTruthy()
    expect(spies.info).not.toHaveBeenCalled()
    expect(spies.warn).not.toHaveBeenCalled()
    expect(spies.error).not.toHaveBeenCalled()
  })

  it.each([
    ["1999 ms (bajo el umbral default 2000)", 1999, false],
    ["2000 ms (en el umbral: ≥ loguea)", 2000, true],
    ["2500 ms", 2500, true],
  ])("200 por objeto que tarda %s", async (_n, ms, logged) => {
    const spies = spyLogger()
    const clock = fakeClock()
    await withApiHandler(async () => { clock.advance(ms); return { ok: true } }, { quietSuccess: true })(req())
    if (logged) {
      expect(spies.info).toHaveBeenCalledTimes(1)
      expect(spies.info.mock.calls[0][0]).toMatchObject({ status: 200, durationMs: ms })
    } else {
      expect(spies.info).not.toHaveBeenCalled()
    }
  })

  it("Response 200 lenta (≥ 2000 ms) se loguea INFO", async () => {
    const spies = spyLogger()
    const clock = fakeClock()
    await withApiHandler(async () => { clock.advance(3000); return new Response("ok") }, { quietSuccess: true })(req())
    expect(spies.info).toHaveBeenCalledTimes(1)
    expect(spies.info.mock.calls[0][0]).toMatchObject({ status: 200, durationMs: 3000 })
  })

  it("{} usa el umbral default de 2000 ms", async () => {
    const spies = spyLogger()
    const clock = fakeClock()
    const h = withApiHandler(async () => { clock.advance(1500); return { ok: true } }, { quietSuccess: {} })
    await h(req())
    expect(spies.info).not.toHaveBeenCalled()
    const h2 = withApiHandler(async () => { clock.advance(2000); return { ok: true } }, { quietSuccess: {} })
    await h2(req())
    expect(spies.info).toHaveBeenCalledTimes(1)
  })

  it("{ slowMs: 100 } cambia el umbral", async () => {
    const spies = spyLogger()
    const clock = fakeClock()
    await withApiHandler(async () => { clock.advance(99); return { ok: true } }, { quietSuccess: { slowMs: 100 } })(req())
    expect(spies.info).not.toHaveBeenCalled()
    await withApiHandler(async () => { clock.advance(100); return { ok: true } }, { quietSuccess: { slowMs: 100 } })(req())
    expect(spies.info).toHaveBeenCalledTimes(1)
    expect(spies.info.mock.calls[0][0]).toMatchObject({ durationMs: 100 })
  })

  it.each([-1, Number.NaN, Number.POSITIVE_INFINITY])("slowMs inválido (%s) cae al default 2000", async (slowMs) => {
    const spies = spyLogger()
    const clock = fakeClock()
    await withApiHandler(async () => { clock.advance(1999); return { ok: true } }, { quietSuccess: { slowMs } })(req())
    expect(spies.info).not.toHaveBeenCalled()
    await withApiHandler(async () => { clock.advance(2000); return { ok: true } }, { quietSuccess: { slowMs } })(req())
    expect(spies.info).toHaveBeenCalledTimes(1)
  })

  it.each([400, 401, 404, 409, 429])("Response %i rápida: sigue en WARN", async (status) => {
    const spies = spyLogger()
    await withApiHandler(async () => new Response(null, { status }), { quietSuccess: true })(req())
    expect(spies.warn).toHaveBeenCalledTimes(1)
    expect(spies.warn.mock.calls[0][0]).toMatchObject({ status })
    expect(spies.info).not.toHaveBeenCalled()
  })

  it.each([500, 502, 503])("Response %i rápida: sigue en ERROR", async (status) => {
    const spies = spyLogger()
    await withApiHandler(async () => new Response(null, { status }), { quietSuccess: true })(req())
    expect(spies.error).toHaveBeenCalledTimes(1)
    expect(spies.error.mock.calls[0][0]).toMatchObject({ status })
  })

  it("excepción genérica: sigue en ERROR con err y responde 500", async () => {
    const spies = spyLogger()
    const res = await withApiHandler(async () => { throw new Error("boom") }, { quietSuccess: true })(req())
    expect(res.status).toBe(500)
    expect(spies.error).toHaveBeenCalledTimes(1)
    expect(spies.error.mock.calls[0][0]).toHaveProperty("err")
  })

  it("4xx lanzado (NotFoundError): sigue en WARN", async () => {
    const spies = spyLogger()
    const res = await withApiHandler(async () => { throw new NotFoundError("no está") }, { quietSuccess: true })(req())
    expect(res.status).toBe(404)
    expect(spies.warn).toHaveBeenCalledTimes(1)
  })

  it("auth de servicio inválida: sigue en WARN (401)", async () => {
    const spies = spyLogger()
    const res = await withApiHandler(async () => ({ ok: true }), {
      quietSuccess: true,
      requireService: true,
      serviceAuth: { sharedSecret: "s3cr3t" },
    })(req())
    expect(res.status).toBe(401)
    expect(spies.warn).toHaveBeenCalledTimes(1)
  })
})
