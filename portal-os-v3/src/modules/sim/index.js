// ---------------------------------------------------------------------------
// SIM ENGINE — Portal‑OS‑v3 (Foundation Layer)
// Umbrella Ecosystem: Simulation Engine Core
// ---------------------------------------------------------------------------

import EventBus from "../../runtime/event-bus";

// ---------------------------------------------------------------------------
// Module Metadata
// ---------------------------------------------------------------------------

export const SIM_MODULE = {
  id: "sim",
  name: "SIM Engine",
  version: "0.1.0",
  description: "Foundational simulation engine for Portal‑OS‑v3."
};

// ---------------------------------------------------------------------------
// Internal State (Minimal)
// ---------------------------------------------------------------------------

let state = {
  initialized: false,
  tickCount: 0,
  lastTick: performance.now()
};

// ---------------------------------------------------------------------------
// Initialization
// ---------------------------------------------------------------------------

export function initSIM() {
  if (state.initialized) return;

  state.initialized = true;
  state.lastTick = performance.now();

  EventBus.emit("sim:initialized", {
    module: SIM_MODULE.id,
    timestamp: state.lastTick
  });
}

// ---------------------------------------------------------------------------
// Tick Loop (Basic Heartbeat)
// ---------------------------------------------------------------------------

export function simTick() {
  const now = performance.now();
  const delta = now - state.lastTick;

  state.lastTick = now;
  state.tickCount++;

  EventBus.emit("sim:tick", {
    tick: state.tickCount,
    delta,
    timestamp: now
  });
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

export function getSIMState() {
  return { ...state };
}

export function resetSIM() {
  state = {
    initialized: false,
    tickCount: 0,
    lastTick: performance.now()
  };

  EventBus.emit("sim:reset", {
    module: SIM_MODULE.id,
    timestamp: performance.now()
  });
}

// ---------------------------------------------------------------------------
// Auto‑Register with Portal‑OS Runtime
// ---------------------------------------------------------------------------

EventBus.emit("module:register", {
  id: SIM_MODULE.id,
  name: SIM_MODULE.name,
  version: SIM_MODULE.version
});
