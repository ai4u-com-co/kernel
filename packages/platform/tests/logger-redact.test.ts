import { describe, it, expect, vi, afterEach, beforeAll } from "vitest"
import { getLogger, redactSecrets } from "../src/logger"

// Todas las claves de este archivo son FALSAS y obvias (repo público).
const FAKE_GOOGLE = "AIzaFAKEFAKEFAKEFAKEFAKE0000"

beforeAll(() => {
  process.env.LOG_FORMAT = "json"
})
afterEach(() => vi.restoreAllMocks())

describe("redactSecrets", () => {
  it("enmascara parámetros de query sensibles conservando el nombre", () => {
    const url = "https://x.test/v1/a?foo=1&key=FAKE123&Api_Key=FAKE456#h"
    expect(redactSecrets(url)).toBe("https://x.test/v1/a?foo=1&key=[redacted]&Api_Key=[redacted]#h")
    for (const n of [
      "key", "api_key", "apikey", "access_token", "id_token", "refresh_token", "token",
      "signature", "sig", "secret", "client_secret", "password", "x-amz-signature",
      "x-goog-signature", "TOKEN",
    ]) {
      expect(redactSecrets(`GET /p?${n}=FAKEVALUE&z=2`)).toBe(`GET /p?${n}=[redacted]&z=2`)
    }
  })

  it("no toca parámetros no sensibles", () => {
    expect(redactSecrets("GET /p?monkey=1&keyboard=2&q=token")).toBe("GET /p?monkey=1&keyboard=2&q=token")
  })

  it("enmascara Bearer y Basic", () => {
    expect(redactSecrets("Authorization: Bearer abc123FAKEtoken.xyz")).toBe("Authorization: Bearer [redacted]")
    expect(redactSecrets("Authorization: Basic dXNlcjpwYXNzOkZBS0U=")).toBe("Authorization: Basic [redacted]")
    expect(redactSecrets("Basic authentication failed")).toBe("Basic authentication failed")
  })

  it("enmascara JWT", () => {
    const jwt = "eyJhbGciOiJGQUtFIn0.eyJzdWIiOiJmYWtlIn0.ZmFrZXNpZw"
    expect(redactSecrets(`token ${jwt} inválido`)).toBe("token [jwt] inválido")
  })

  it("enmascara formatos de clave conocidos", () => {
    const keys = [
      "sk-ant-FAKEFAKEFAKE1234", "sk-FAKEFAKE1234", "sb_secret_FAKEFAKE1234",
      "sb_publishable_FAKEFAKE1234", FAKE_GOOGLE, "ghp_" + "F".repeat(30),
      "github_pat_" + "F".repeat(30),
    ]
    for (const k of keys) {
      expect(redactSecrets(`fallo con ${k} al llamar`)).toBe("fallo con [redacted] al llamar")
    }
  })

  it("enmascara credenciales en URL", () => {
    expect(redactSecrets("connect https://user:FAKEPASS@db.test:5432/x")).toBe(
      "connect https://[redacted]@db.test:5432/x",
    )
  })

  it("deja IDÉNTICO el texto sin secretos", () => {
    const s = "request to https://api.test/v1/items?id=5&page=2 failed, reason: ECONNRESET\n    at fetch (node:internal:1:1)"
    expect(redactSecrets(s)).toBe(s)
    expect(redactSecrets("")).toBe("")
  })

  it("es idempotente", () => {
    const s = `https://u:p@h/x?key=FAKE&a=1 Bearer FAKEFAKEFAKE ${FAKE_GOOGLE} sk-FAKEFAKE1234`
    const once = redactSecrets(s)
    expect(redactSecrets(once)).toBe(once)
  })

  it("no explota con cadenas largas que casi cuadran", () => {
    const inputs = [
      "?key".repeat(25_000), "Bearer ".repeat(15_000), "eyJ" + "a".repeat(100_000),
      "sk-".repeat(33_000), "https://" + "a:".repeat(50_000), "&token".repeat(16_000),
      "Basic " + "A".repeat(100_000),
    ]
    for (const s of inputs) {
      const t0 = performance.now()
      expect(typeof redactSecrets(s)).toBe("string")
      expect(performance.now() - t0).toBeLessThan(500)
    }
  })

  it("nunca lanza con entradas raras", () => {
    expect(() => redactSecrets(undefined as unknown as string)).not.toThrow()
  })
})

describe("logger.error({ err }) enmascara secretos", () => {
  it("no deja la clave en err.message ni en err.stack", () => {
    const lines: string[] = []
    const impl = (c: unknown) => (lines.push(String(c)), true)
    vi.spyOn(process.stderr, "write").mockImplementation(impl as never)
    vi.spyOn(process.stdout, "write").mockImplementation(impl as never)
    const err = new Error(`request to https://api.test/x?key=${FAKE_GOOGLE}&a=1 failed`)
    getLogger("redact").error({ err }, "falló")
    const rec = JSON.parse(lines.join("").trim().split("\n").pop()!)
    expect(rec.err.message).toBe("request to https://api.test/x?key=[redacted]&a=1 failed")
    expect(rec.err.stack).not.toContain(FAKE_GOOGLE)
    expect(lines.join("")).not.toContain(FAKE_GOOGLE)
  })

  it("también redacta cuando err no es un Error", () => {
    const lines: string[] = []
    const impl = (c: unknown) => (lines.push(String(c)), true)
    vi.spyOn(process.stderr, "write").mockImplementation(impl as never)
    getLogger("redact").error({ err: `fallo ?token=FAKESECRET` }, "falló")
    const out = lines.join("")
    expect(out).not.toContain("FAKESECRET")
    expect(out).toContain("token=[redacted]")
  })
})
