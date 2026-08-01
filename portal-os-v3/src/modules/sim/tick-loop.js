// ---------------------------------------------------------------------------
// SIM Engine — Tick Loop
// ---------------------------------------------------------------------------

import { SIMState, incrementTick } from "./state.js";
import { emitTick } from "./events.js";

export function simTick() {
  const now = performance.now();
  const delta = now - SIMState.lastTick;

  const payload = incrementTick(delta);
  emitTick(payload);
}
