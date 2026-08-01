// ---------------------------------------------------------------------------
// Dock Controller — Portal‑OS‑v3
// ---------------------------------------------------------------------------

import EventBus from "../event-bus";

export const DockController = {
  open(id) {
    EventBus.emit("dock:open", { id });
  }
};
