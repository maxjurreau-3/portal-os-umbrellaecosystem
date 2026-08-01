// ---------------------------------------------------------------------------
// Identity‑Physics Notifications — Portal‑OS‑v3
// ---------------------------------------------------------------------------

import EventBus from "../event-bus";

EventBus.on("idp:initialized", () => {
  EventBus.emit("notify", { text: "Identity‑Physics Engine initialized." });
});

EventBus.on("idp:entityCreated", ({ entity }) => {
  EventBus.emit("notify", { text: `Entity created: ${entity.name}` });
});
