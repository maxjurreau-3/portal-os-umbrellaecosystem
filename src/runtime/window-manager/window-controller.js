// ---------------------------------------------------------------------------
// Window Controller — Portal‑OS‑v3
// ---------------------------------------------------------------------------

import EventBus from "../event-bus";

export const WindowController = {
  open(id) {
    EventBus.emit("window:open", { id });
  },

  close(id) {
    EventBus.emit("window:close", { id });
  }
};
