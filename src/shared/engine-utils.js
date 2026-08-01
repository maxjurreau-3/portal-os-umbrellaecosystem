// ---------------------------------------------------------------------------
// Shared Engine Utilities — Portal‑OS‑v3
// ---------------------------------------------------------------------------

import { generateId } from "./id.js";

export const EngineUtils = {
  createEntity(name = "Entity") {
    return {
      id: generateId("entity"),
      name,
      createdAt: performance.now()
    };
  }
};
