// ---------------------------------------------------------------------------
// Shell Notifications — Portal‑OS‑v3
// ---------------------------------------------------------------------------

import EventBus from "../event-bus";

EventBus.on("shell:initialized", () => {
  EventBus.emit("notify", { text: "Portal‑OS Shell initialized." });
});
