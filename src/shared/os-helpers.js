// ---------------------------------------------------------------------------
// Shared OS Helpers — Portal‑OS‑v3
// ---------------------------------------------------------------------------

import EventBus from "../runtime/event-bus";

export const OSHelpers = {
  notify(text) {
    EventBus.emit("notify", { text });
  },

  openWindow(id) {
    EventBus.emit("window:open", { id });
  },

  runCommand(cmd) {
    EventBus.emit("command:run", { command: cmd });
  }
};
