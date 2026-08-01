// ---------------------------------------------------------------------------
// Shell Controller — Portal‑OS‑v3
// ---------------------------------------------------------------------------

import EventBus from "../event-bus";

export const ShellController = {
  init() {
    EventBus.emit("shell:initialized", {
      timestamp: performance.now()
    });
  }
};
