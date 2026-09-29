import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"

import {
  ENV_CONTRACT,
  ENV_PATTERNS,
  getGatewayApiKey,
  getProviderKey,
  loadEnv,
  normalizeTenant,
  readEnv,
  renderEnvExample,
  requireEnv,
  resetEnvWarnings,
} from "../src/index"
import * as envSubpath from "../src/env"

// Valores centinela: ningún mensaje (warn o Error) puede contenerlos.
const SECRET = "sk-VALOR-SECRETO-123"
const SECRET2 = "sk-OTRO-VALOR-456"

let warn: ReturnType<typeof vi.spyOn>

function allMessages(): string {
  return warn.mock.calls.map((c: unknown[]) => c.join(" ")).join("\n")
}

beforeEach(() => {
  resetEnvWarnings()
  warn = vi.spyOn(console, "warn").mockImplementation(() => {})
})

afterEach(() => {
  warn.mockRestore()
})

describe("ENV_CONTRACT", () => {
  it("cada entrada tiene name = key, clase válida y descripción", () => {
    for (const [key, spec] of Object.entries(ENV_CONTRACT)) {
      expect(spec.name).toBe(key)
      expect(["platform", "service"]).toContain(spec.class)
      expect(spec.description.length).toBeGreaterThan(0)
    }
  })

  it("ningún alias se repite entre variables ni choca con un canónico", () => {
    const seen = new Set<string>(Object.keys(ENV_CONTRACT))
    for (const spec of Object.values(ENV_CONTRACT)) {
      for (const alias of spec.aliases) {
        expect(seen.has(alias), alias).toBe(false)
        seen.add(alias)
      }
    }
  })

  it("marca secretos según el contrato", () => {
    expect(ENV_CONTRACT.INGEST_SECRET.secret).toBe(true)
    expect(ENV_CONTRACT.SUPABASE_SERVICE_ROLE_KEY.secret).toBe(true)
    expect(ENV_CONTRACT.NEXT_PUBLIC_SUPABASE_ANON_KEY.secret).toBe(false)
    expect(ENV_CONTRACT.SAP_BACKEND_URL.secret).toBe(false)
  })

  it("el subpath ./env expone la misma API", () => {
    expect(envSubpath.readEnv).toBe(readEnv)
    expect(envSubpath.ENV_CONTRACT).toBe(ENV_CONTRACT)
  })
})

describe("readEnv", () => {
  it("prefiere el canónico sobre el alias, sin avisar", () => {
    const env = { SAP_BACKEND_URL: "https://canonico", BACKEND_URL: "https://alias" }
    expect(readEnv("SAP_BACKEND_URL", env)).toBe("https://canonico")
    expect(warn).not.toHaveBeenCalled()
  })

  it("cae al alias en orden y avisa una sola vez por alias", () => {
    const env = { SAP_B1_BACKEND_URL: "https://b1", KPIS_APP_URL: "https://kpis" }
    expect(readEnv("SAP_BACKEND_URL", env)).toBe("https://b1")
    expect(readEnv("SAP_BACKEND_URL", env)).toBe("https://b1")
    expect(warn).toHaveBeenCalledTimes(1)
    expect(allMessages()).toContain('"SAP_B1_BACKEND_URL"')
    expect(allMessages()).toContain('"SAP_BACKEND_URL"')
  })

  it("el set de avisos es global (sobrevive a varias instancias del módulo)", () => {
    const env = { MC_INTERNAL_SECRET: SECRET }
    readEnv("MISSION_CONTROL_SECRET", env)
    const set = (globalThis as unknown as Record<symbol, Set<string>>)[Symbol.for("@ai4u/config.env.warned")]
    expect(set.has("alias:MC_INTERNAL_SECRET")).toBe(true)
  })

  it("trata el string vacío como faltante", () => {
    expect(readEnv("SAP_BACKEND_URL", { SAP_BACKEND_URL: "  ", BACKEND_URL: "https://x" })).toBe("https://x")
    expect(readEnv("CRON_SECRET", { CRON_SECRET: "" })).toBeUndefined()
  })

  it("lee variables fuera del contrato tal cual", () => {
    expect(readEnv("WHATSAPP_TOKEN", { WHATSAPP_TOKEN: "t" })).toBe("t")
    expect(readEnv("WHATSAPP_TOKEN", {})).toBeUndefined()
  })

  it("usa process.env por defecto", () => {
    process.env.SERVICE_ID = "mi-servicio"
    try {
      expect(readEnv("SERVICE_ID")).toBe("mi-servicio")
    } finally {
      delete process.env.SERVICE_ID
    }
  })

  it("el aviso de alias no contiene el valor", () => {
    readEnv("MISSION_CONTROL_SECRET", { SAP_BACKEND_SECRET: SECRET })
    expect(warn).toHaveBeenCalledTimes(1)
    expect(allMessages()).not.toContain(SECRET)
  })
})

describe("requireEnv", () => {
  it("devuelve el valor si existe (canónico o alias)", () => {
    expect(requireEnv("SUPABASE_SERVICE_ROLE_KEY", { SUPABASE_SERVICE_KEY: SECRET })).toBe(SECRET)
  })

  it("lanza con el nombre y los alias aceptados, sin valores", () => {
    expect(() => requireEnv("SUPABASE_SERVICE_ROLE_KEY", { OTRA: SECRET })).toThrowError(
      /SUPABASE_SERVICE_ROLE_KEY.*SUPABASE_SERVICE_KEY/,
    )
    try {
      requireEnv("SUPABASE_SERVICE_ROLE_KEY", { OTRA: SECRET })
    } catch (e) {
      expect((e as Error).message).not.toContain(SECRET)
    }
  })
})

describe("loadEnv", () => {
  it("devuelve requeridas y opcionales resueltas", () => {
    const out = loadEnv({
      require: ["SAP_BACKEND_URL", "CRON_SECRET"],
      optional: ["SERVICE_ID"],
      env: { BACKEND_URL: "https://x", CRON_SECRET: SECRET, NODE_ENV: "production" },
    })
    expect(out.SAP_BACKEND_URL).toBe("https://x")
    expect(out.CRON_SECRET).toBe(SECRET)
    expect(out.SERVICE_ID).toBeUndefined()
  })

  it("en producción lanza UN error con la lista completa de faltantes, sin valores", () => {
    const env = { NODE_ENV: "production", CRON_SECRET: SECRET }
    let err: Error | undefined
    try {
      loadEnv({ require: ["SAP_BACKEND_URL", "INGEST_SECRET", "CRON_SECRET"], env })
    } catch (e) {
      err = e as Error
    }
    expect(err).toBeInstanceOf(Error)
    expect(err!.message).toContain("SAP_BACKEND_URL")
    expect(err!.message).toContain("INGEST_SECRET")
    expect(err!.message).not.toContain('"CRON_SECRET"')
    expect(err!.message).toContain("2 variable")
    expect(err!.message).not.toContain(SECRET)
  })

  it("fuera de producción solo avisa y no lanza", () => {
    const out = loadEnv({ require: ["INGEST_SECRET"], env: { NODE_ENV: "development", X: SECRET } })
    expect(out.INGEST_SECRET).toBeUndefined()
    expect(warn).toHaveBeenCalledTimes(1)
    expect(allMessages()).toContain("INGEST_SECRET")
    expect(allMessages()).not.toContain(SECRET)
  })

  it("respeta el override explícito production", () => {
    expect(() => loadEnv({ require: ["INGEST_SECRET"], env: {}, production: true })).toThrow()
    expect(() => loadEnv({ require: ["INGEST_SECRET"], env: { NODE_ENV: "production" }, production: false })).not.toThrow()
  })

  it("una opcional faltante no avisa ni lanza", () => {
    loadEnv({ optional: ["SERVICE_ID"], env: { NODE_ENV: "production" } })
    expect(warn).not.toHaveBeenCalled()
  })
})

describe("normalizeTenant", () => {
  it.each([
    ["tamaprint", "TAMAPRINT"],
    ["flexo", "FLEXOIMPRESOS"],
    ["FLEXO", "FLEXOIMPRESOS"],
    ["flexoimpresos", "FLEXOIMPRESOS"],
    ["la-magdalena", "MAGDALENA"],
    ["lamagdalena", "MAGDALENA"],
    ["magdalena", "MAGDALENA"],
    ["multyhealth", "MULTIHEALTH"],
    ["multihealth", "MULTIHEALTH"],
    ["estudio-indigo", "ESTUDIOINDIGO"],
    [" eldorado ", "ELDORADO"],
    ["tenant-nuevo", "TENANTNUEVO"],
  ])("%s → %s", (input, expected) => {
    expect(normalizeTenant(input)).toBe(expected)
  })

  it("lanza con id vacío", () => {
    expect(() => normalizeTenant("")).toThrow()
    expect(() => normalizeTenant("--")).toThrow()
  })
})

describe("getGatewayApiKey", () => {
  it("usa {TENANT}_SAP_API_KEY con el id normalizado", () => {
    expect(getGatewayApiKey("flexo", { FLEXOIMPRESOS_SAP_API_KEY: SECRET, SAP_BACKEND_API_KEY: SECRET2 })).toEqual({
      key: SECRET,
      source: "tenant",
      envName: "FLEXOIMPRESOS_SAP_API_KEY",
    })
    expect(warn).not.toHaveBeenCalled()
  })

  it("acepta alias de tenant en orden, con aviso", () => {
    const env = { SAP_API_KEY_TAMAPRINT: SECRET, TAMAPRINT_API_KEY: SECRET2 }
    expect(getGatewayApiKey("tamaprint", env)).toEqual({ key: SECRET, source: "tenant", envName: "SAP_API_KEY_TAMAPRINT" })
    expect(allMessages()).toContain("TAMAPRINT_SAP_API_KEY")
    expect(allMessages()).not.toContain(SECRET)
  })

  it("cae a SAP_BACKEND_API_KEY (y su alias) si el tenant no tiene llave", () => {
    expect(getGatewayApiKey("tamaprint", { SAP_BACKEND_API_KEY: SECRET })).toEqual({
      key: SECRET,
      source: "service",
      envName: "SAP_BACKEND_API_KEY",
    })
    expect(getGatewayApiKey(undefined, { SAP_B1_BACKEND_API_KEY: SECRET2 })).toEqual({
      key: SECRET2,
      source: "service",
      envName: "SAP_B1_BACKEND_API_KEY",
    })
  })

  it("no mezcla tenants", () => {
    expect(getGatewayApiKey("tamaprint", { FLEXOIMPRESOS_SAP_API_KEY: SECRET })).toBeNull()
  })

  it("null si no hay ninguna", () => {
    expect(getGatewayApiKey("tamaprint", {})).toBeNull()
  })
})

describe("getProviderKey", () => {
  const full = {
    FLEXOIMPRESOS_ANTHROPIC_API_KEY: "k-tenant",
    AI4U_ANTHROPIC_API_KEY: "k-ai4u",
    ANTHROPIC_API_KEY: "k-legacy",
    CLAUDE_API_KEY: "k-claude",
  }

  it("orden tenant → ai4u → legacy", () => {
    expect(getProviderKey("ANTHROPIC", "flexo", full)).toEqual({
      key: "k-tenant",
      source: "tenant",
      envName: "FLEXOIMPRESOS_ANTHROPIC_API_KEY",
    })
    const { FLEXOIMPRESOS_ANTHROPIC_API_KEY: _t, ...sinTenant } = full
    expect(getProviderKey("ANTHROPIC", "flexo", sinTenant)).toEqual({
      key: "k-ai4u",
      source: "ai4u",
      envName: "AI4U_ANTHROPIC_API_KEY",
    })
    const { AI4U_ANTHROPIC_API_KEY: _a, ...soloLegacy } = sinTenant
    expect(getProviderKey("ANTHROPIC", "flexo", soloLegacy)).toEqual({
      key: "k-legacy",
      source: "legacy",
      envName: "ANTHROPIC_API_KEY",
    })
    const { ANTHROPIC_API_KEY: _l, ...soloAlias } = soloLegacy
    expect(getProviderKey("ANTHROPIC", "flexo", soloAlias)).toEqual({
      key: "k-claude",
      source: "legacy",
      envName: "CLAUDE_API_KEY",
    })
  })

  it("no usa la llave de otro tenant", () => {
    expect(getProviderKey("ANTHROPIC", "tamaprint", { FLEXOIMPRESOS_ANTHROPIC_API_KEY: "x" })).toBeNull()
  })

  it("sin tenant salta directo a ai4u", () => {
    expect(getProviderKey("OPENAI", undefined, { TAMAPRINT_OPENAI_API_KEY: "t", AI4U_OPENAI_API_KEY: "a" })?.source).toBe(
      "ai4u",
    )
  })

  it("alias legados de GEMINI y APIFY", () => {
    expect(getProviderKey("GEMINI", null, { GOOGLE_GENERATIVE_AI_API_KEY: "g" })?.envName).toBe(
      "GOOGLE_GENERATIVE_AI_API_KEY",
    )
    expect(getProviderKey("apify", null, { APIFY_API_TOKEN: "a" })?.envName).toBe("APIFY_API_TOKEN")
  })

  it("la llave legada avisa una vez y sin valor", () => {
    getProviderKey("OPENAI", "tamaprint", { OPENAI_API_KEY: SECRET })
    getProviderKey("OPENAI", "tamaprint", { OPENAI_API_KEY: SECRET })
    expect(warn).toHaveBeenCalledTimes(1)
    expect(allMessages()).toContain("TAMAPRINT_OPENAI_API_KEY")
    expect(allMessages()).not.toContain(SECRET)
  })

  it("tenant y ai4u no avisan", () => {
    getProviderKey("OPENAI", "tamaprint", { TAMAPRINT_OPENAI_API_KEY: SECRET })
    getProviderKey("OPENAI", null, { AI4U_OPENAI_API_KEY: SECRET })
    expect(warn).not.toHaveBeenCalled()
  })

  it("proveedor desconocido lanza", () => {
    expect(() => getProviderKey("MISTRAL" as never, null, {})).toThrow(/MISTRAL/)
  })

  it("null si no hay ninguna", () => {
    expect(getProviderKey("GEMINI", "tamaprint", {})).toBeNull()
  })
})

describe("renderEnvExample", () => {
  it("genera nombres vacíos con comentarios de descripción, clase, secreto y alias", () => {
    const out = renderEnvExample(["SAP_BACKEND_URL", "CRON_SECRET", "TAMAPRINT_SAP_API_KEY", "AI4U_OPENAI_API_KEY", "MI_VAR"])
    expect(out).toContain("SAP_BACKEND_URL=\n")
    expect(out).toContain("# Clase: platform · Secreto: no")
    expect(out).toContain("# Alias aceptados (obsoletos): BACKEND_URL, NEXT_PUBLIC_BACKEND_URL")
    expect(out).toContain("# Clase: service · Secreto: sí")
    expect(out).toContain(`Patrón: ${ENV_PATTERNS[0].pattern}`)
    expect(out).toContain(`Patrón: ${ENV_PATTERNS[2].pattern}`)
    expect(out).toContain("fuera del contrato")
    expect(out).toMatch(/^MI_VAR=$/m)
    // ninguna línea asigna un valor
    for (const line of out.split("\n")) {
      if (!line.startsWith("#") && line.includes("=")) expect(line.endsWith("=")).toBe(true)
    }
  })

  it("respeta el orden pedido", () => {
    const out = renderEnvExample(["SERVICE_ID", "CRON_SECRET"])
    expect(out.indexOf("SERVICE_ID=")).toBeLessThan(out.indexOf("CRON_SECRET="))
  })
})
