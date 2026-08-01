// ---------------------------------------------------------------------------
// SIM Notifications — Portal‑OS‑v3
// ---------------------------------------------------------------------------

import EventBus from "../event-bus";

EventBus.on("sim:initialized", () => {
  EventBus.emit("notify", { text: "SIM Engine initialized." });
});

EventBus.on("sim:reset", () => {
  EventBus.emit("notify", { text: "SIM Engine reset." });
});

EventBus.on("sim:spaceCreated", ({ space }) => {
  EventBus.emit("notify", { text: `Space created: ${space.name}` });
});

EventBus.on("sim:spaceActivated", ({ space }) => {
  EventBus.emit("notify", { text: `Space activated: ${space.name}` });
});
