// ---------------------------------------------------------------------------
// Games Notifications — Portal‑OS‑v3
// ---------------------------------------------------------------------------

import EventBus from "../event-bus";

EventBus.on("games:initialized", () => {
  EventBus.emit("notify", { text: "Games Engine initialized." });
});

EventBus.on("games:registered", ({ game }) => {
  EventBus.emit("notify", { text: `Game registered: ${game.name}` });
});
