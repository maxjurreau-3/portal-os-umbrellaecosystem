// ---------------------------------------------------------------------------
// OPERATORS ENGINE — Portal‑OS‑v3 (Foundation Layer)
// Umbrella Ecosystem: Action + Automation Engine
// ---------------------------------------------------------------------------

import EventBus from "../../runtime/event-bus";

// ---------------------------------------------------------------------------
// Module Metadata
// ---------------------------------------------------------------------------

export const OPERATORS_MODULE = {
  id: "operators",
  name: "Operators Engine",
  version: "0.1.0",
  description: "Foundational operators engine for Portal‑OS‑v3."
};

// ---------------------------------------------------------------------------
// Internal State (Minimal)
// ---------------------------------------------------------------------------

let state = {
  initialized: false,
  actions: []
};

// ---------------------------------------------------------------------------
// Initialization
// ---------------------------------------------------------------------------

export function initOperators() {
  if (state.initialized) return;

  state.initialized = true;

  EventBus.emit("operators:initialized", {
    module: OPERATORS_MODULE.id,
    timestamp: performance.now()
  });
}

// ---------------------------------------------------------------------------
// Action Registration
// ---------------------------------------------------------------------------

export function registerAction(name, handler) {
  const action = { name, handler };
  state.actions.push(action);

  EventBus.emit("operators:actionRegistered", { action });

  return action;
}

// ---------------------------------------------------------------------------
// Execute Action
// ---------------------------------------------------------------------------

export function runAction(name, payload) {
  const action = state.actions.find((a) => a.name === name);
  if (!action) {
    EventBus.emit("operators:actionMissing", { name });
    return;
  }

  try {
    const result = action.handler(payload);
    EventBus.emit("operators:actionRun", { name, payload, result });
    return result;
  } catch (err) {
    EventBus.emit("operators:actionError", { name, error: err });
  }
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

export function getOperatorsState() {
  return { ...state };
}

// ---------------------------------------------------------------------------
// Auto‑Register with Portal‑OS Runtime
// ---------------------------------------------------------------------------

EventBus.emit("module:register", {
  id: OPERATORS_MODULE.id,
  name: OPERATORS_MODULE.name,
  version: OPERATORS_MODULE.version
});
