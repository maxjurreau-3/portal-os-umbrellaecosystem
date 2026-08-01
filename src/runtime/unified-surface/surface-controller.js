// ---------------------------------------------------------------------------
// Unified Surface Controller — Portal‑OS‑v3
// ---------------------------------------------------------------------------

import EventBus from "../event-bus";

export const SurfaceController = {
  listeners: [],

  register(listener) {
    this.listeners.push(listener);
  },

  dispatch(payload) {
    this.listeners.forEach((l) => l(payload));
  }
};

// Engines can emit surface updates:
EventBus.on("surface:update", (payload) => {
  SurfaceController.dispatch(payload);
});
