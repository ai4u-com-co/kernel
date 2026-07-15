import { beforeEach, describe, expect, it, vi } from "vitest"

const selectMock = vi.fn()

vi.mock("@supabase/supabase-js", () => ({
  createClient: vi.fn(() => ({
    from: () => ({
      select: selectMock,
    }),
  })),
}))

import { clearConfigCache, getConfig } from "../src/index"

const ENV_KEYS = [
  "NEXT_PUBLIC_SUPABASE_URL",
  "NEXT_PUBLIC_SUPABASE_ANON_KEY",
  "SOME_KEY",
  "NO_EXISTE",
  "SAP_BACKEND_URL",
  "OTHER_KEY",
  "ERR_KEY",
  "A",
]

describe("getConfig", () => {
  beforeEach(() => {
    clearConfigCache()
    selectMock.mockReset()
    for (const key of ENV_KEYS) delete process.env[key]
  })

  it("cae a process.env cuando Supabase no está configurado", async () => {
    process.env.SOME_KEY = "valor-env"
    const value = await getConfig("SOME_KEY")
    expect(value).toBe("valor-env")
    expect(selectMock).not.toHaveBeenCalled()
  })

  it("devuelve undefined si no hay Supabase configurado ni la var en process.env", async () => {
    const value = await getConfig("NO_EXISTE")
    expect(value).toBeUndefined()
  })

  it("prioriza el valor de system_settings sobre process.env", async () => {
    process.env.NEXT_PUBLIC_SUPABASE_URL = "https://x.supabase.co"
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = "anon-key"
    process.env.SAP_BACKEND_URL = "http://localhost:4100"
    selectMock.mockResolvedValue({
      data: [{ key: "SAP_BACKEND_URL", value: "https://sap-b1-backend.vercel.app" }],
      error: null,
    })

    const value = await getConfig("SAP_BACKEND_URL")
    expect(value).toBe("https://sap-b1-backend.vercel.app")
  })

  it("cae a process.env si la fila no existe en system_settings", async () => {
    process.env.NEXT_PUBLIC_SUPABASE_URL = "https://x.supabase.co"
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = "anon-key"
    process.env.OTHER_KEY = "otro-valor"
    selectMock.mockResolvedValue({ data: [], error: null })

    const value = await getConfig("OTHER_KEY")
    expect(value).toBe("otro-valor")
  })

  it("cae a process.env si Supabase responde con error", async () => {
    process.env.NEXT_PUBLIC_SUPABASE_URL = "https://x.supabase.co"
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = "anon-key"
    process.env.ERR_KEY = "valor-por-env"
    selectMock.mockResolvedValue({ data: null, error: new Error("network down") })

    const value = await getConfig("ERR_KEY")
    expect(value).toBe("valor-por-env")
  })

  it("cachea el snapshot y no vuelve a llamar a Supabase dentro del TTL", async () => {
    process.env.NEXT_PUBLIC_SUPABASE_URL = "https://x.supabase.co"
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = "anon-key"
    selectMock.mockResolvedValue({ data: [{ key: "A", value: "1" }], error: null })

    await getConfig("A")
    await getConfig("A")

    expect(selectMock).toHaveBeenCalledTimes(1)
  })

  it("refresca el snapshot cuando el TTL expira", async () => {
    process.env.NEXT_PUBLIC_SUPABASE_URL = "https://x.supabase.co"
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = "anon-key"
    selectMock.mockResolvedValue({ data: [{ key: "A", value: "1" }], error: null })

    await getConfig("A", { ttlMs: 0 })
    await getConfig("A", { ttlMs: 0 })

    expect(selectMock).toHaveBeenCalledTimes(2)
  })
})
