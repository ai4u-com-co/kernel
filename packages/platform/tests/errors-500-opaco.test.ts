import { describe, it, expect, vi, afterEach, beforeAll } from "vitest"
import { withApiHandler } from "../src/http"
import { toErrorResponse, ValidationError, NotFoundError, ExternalServiceError, AppError } from "../src/errors"
import * as logger from "../src/logger"

const LEAK = 'connect ECONNREFUSED 10.0.0.5:5432 password authentication failed for user "postgres"'

beforeAll(() => {
  process.env.LOG_FORMAT = "json"
})
afterEach(() => vi.restoreAllMocks())

describe("P1: un 500 no operacional no filtra internals al cliente", () => {
  it("Error genérico → {error:'Error interno', code, requestId} sin el mensaje real", async () => {
    vi.spyOn(process.stderr, "write").mockImplementation((() => true) as never)
    const route = withApiHandler(async () => {
      throw new Error(LEAK)
    })
    const res = await route(new Request("https://x/api/test", { headers: { "x-request-id": "r500" } }))
    const text = await res.text()
    expect(res.status).toBe(500)
    expect(text).not.toContain("ECONNREFUSED")
    expect(text).not.toContain("postgres")
    const body = JSON.parse(text)
    expect(body.error).toBe("Error interno")
    expect(body.code).toBe("UNEXPECTED_ERROR")
    expect(body.requestId).toBe("r500")
  })

  it("el mensaje real SÍ va al log (con el detalle para diagnosticar)", async () => {
    const lines: string[] = []
    vi.spyOn(process.stderr, "write").mockImplementation(((c: unknown) => (lines.push(String(c)), true)) as never)
    const route = withApiHandler(async () => {
      throw new Error("falla interna sin secretos")
    })
    await route(new Request("https://x/api/test"))
    expect(lines.join("")).toContain("falla interna sin secretos")
  })

  it("en el log el mensaje real sale redactado (token en URL)", async () => {
    const lines: string[] = []
    vi.spyOn(process.stderr, "write").mockImplementation(((c: unknown) => (lines.push(String(c)), true)) as never)
    const route = withApiHandler(async () => {
      throw new Error("fetch https://api.x.com/v1?key=SUPERSECRETO123 falló")
    })
    await route(new Request("https://x/api/test"))
    expect(lines.join("")).toContain("falló")
    expect(lines.join("")).not.toContain("SUPERSECRETO123")
  })

  it("toErrorResponse oculta también un AppError no operacional 5xx", () => {
    const { status, body } = toErrorResponse(new ExternalServiceError(LEAK), "rid")
    expect(status).toBe(502)
    expect(body.error).toBe("Error interno")
    expect(body.code).toBe("EXTERNAL_SERVICE_ERROR")
    expect(body.requestId).toBe("rid")
  })

  it("errores operacionales conservan su mensaje (4xx y AppError operacional)", () => {
    expect(toErrorResponse(new ValidationError("falta nombre")).body.error).toBe("falta nombre")
    expect(toErrorResponse(new NotFoundError("no existe")).body.error).toBe("no existe")
    const op5xx = new AppError("servicio en mantenimiento", "infrastructure", { httpStatus: 503, isOperational: true })
    expect(toErrorResponse(op5xx).body.error).toBe("servicio en mantenimiento")
  })

  it("un 4xx no operacional explícito conserva su mensaje (es del cliente)", () => {
    const e = new AppError("payload inválido", "validation", { httpStatus: 422, isOperational: false })
    expect(toErrorResponse(e).body.error).toBe("payload inválido")
  })
})
