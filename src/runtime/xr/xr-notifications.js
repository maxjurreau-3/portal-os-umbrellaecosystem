// ---------------------------------------------------------------------------
// XR Notifications — Portal‑OS‑v3
// ---------------------------------------------------------------------------

import EventBus from "../event-bus";

EventBus.on("xr:initialized", () => {
  EventBus.emit("notify", { text: "XR Engine initialized." });
});

EventBus.on("xr:activated", () => {
  EventBus.emit("notify", { text: "XR Engine activated." });
});

EventBus.on("xr:deactivated", () => {
  EventBus.emit("notify", { text: "XR Engine deactivated." });
});
