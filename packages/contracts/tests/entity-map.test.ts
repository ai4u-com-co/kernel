import { describe, it, expect } from "vitest"
import { ENTITY_MAP } from "../src/entity-map"

describe("ENTITY_MAP", () => {
  it("mapea cada ruta de negocio a una entidad SAP no vacía", () => {
    for (const [path, cfg] of Object.entries(ENTITY_MAP)) {
      expect(cfg.sapEntity, `${path} sin sapEntity`).toBeTruthy()
    }
  })

  it("las rutas de documentos (con allowedActions) traen selectDefault", () => {
    for (const [path, cfg] of Object.entries(ENTITY_MAP)) {
      if (cfg.allowedActions?.length) {
        expect(cfg.selectDefault, `${path} con acciones pero sin selectDefault`).toBeTruthy()
      }
    }
  })

  it("mantiene las entradas conocidas de compras y ventas", () => {
    expect(ENTITY_MAP["compras/ordenes"].sapEntity).toBe("PurchaseOrders")
    expect(ENTITY_MAP["ventas/pedidos"].sapEntity).toBe("Orders")
    expect(ENTITY_MAP["socios/clientes"].defaultFilter).toBe("CardType eq 'cCustomer'")
  })
})
