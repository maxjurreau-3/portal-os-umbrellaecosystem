// ---------------------------------------------------------------------------
// Games Commands — Portal‑OS‑v3
// ---------------------------------------------------------------------------

import EventBus from "../event-bus";
import { registerGame } from "../../modules/games/index.js";

EventBus.on("command:run", ({ command }) => {
  if (command.startsWith("games.register")) {
    const name = command.split(" ").slice(1).join(" ") || "New Game";
    registerGame(name);
  }
});
