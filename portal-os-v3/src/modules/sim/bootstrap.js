// ---------------------------------------------------------------------------
// SIM Engine — Bootstrap
// ---------------------------------------------------------------------------

import { SIMState, setInitialized } from "./state.js";
import { emitInitialized, emitReset } from "./events.js";

export function initSIM() {
  if (SIMState.initialized) return;

  setInitialized();
  emitInitialized();
}

export function resetSIM() {
  SIMState.initialized = false;
  SIMState.tickCount = 0;
  SIMState.lastTick = performance.now();
  SIMState.spaces = [];
  SIMState.activeSpace = null;

  emitReset();
}
