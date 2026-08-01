// ---------------------------------------------------------------------------
// Operators Notifications — Portal‑OS‑v3
// ---------------------------------------------------------------------------

import EventBus from "../event-bus";

EventBus.on("operators:initialized", () => {
  EventBus.emit("notify", { text: "Operators Engine initialized." });
});

EventBus.on("operators:actionRegistered", ({ action }) => {
  EventBus.emit("notify", { text: `Action registered: ${action.name}` });
});

EventBus.on("operators:actionRun", ({ name }) => {
  EventBus.emit("notify", { text: `Action executed: ${name}` });
});
