// ---------------------------------------------------------------------------
// Unified Surface Hooks — Portal‑OS‑v3
// ---------------------------------------------------------------------------

import EventBus from "../event-bus";

export function pushToSurface(text) {
  EventBus.emit("surface:update", { text });
}
