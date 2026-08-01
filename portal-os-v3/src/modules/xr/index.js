// ---------------------------------------------------------------------------
// XR ENGINE — Portal‑OS‑v3 (Foundation Layer)
// Umbrella Ecosystem: Extended Reality Engine
// ---------------------------------------------------------------------------

import EventBus from "../../runtime/event-bus";

export const XR_MODULE = {
  id: "xr",
  name: "XR Engine",
  version: "0.1.0",
  description: "Foundational XR engine for Portal‑OS‑v3."
};

let state = {
  initialized: false,
  active: false
};

export function initXR() {
  if (state.initialized) return;

  state.initialized = true;

  EventBus.emit("xr:initialized", {
    module: XR_MODULE.id,
    timestamp: performance.now()
  });
}

export function activateXR() {
  state.active = true;

  EventBus.emit("xr:activated", {
    module: XR_MODULE.id,
    timestamp: performance.now()
  });
}

export function deactivateXR() {
  state.active = false;

  EventBus.emit("xr:deactivated", {
    module: XR_MODULE.id,
    timestamp: performance.now()
  });
}

export function getXRState() {
  return { ...state };
}

EventBus.emit("module:register", {
  id: XR_MODULE.id,
  name: XR_MODULE.name,
  version: XR_MODULE.version
});
