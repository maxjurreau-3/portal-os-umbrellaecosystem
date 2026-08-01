// ---------------------------------------------------------------------------
// Identity‑Physics Commands — Portal‑OS‑v3
// ---------------------------------------------------------------------------

import EventBus from "../event-bus";
import { createEntity } from "../../modules/identity-physics/index.js";

EventBus.on("command:run", ({ command }) => {
  if (command.startsWith("idp.create")) {
    const name = command.split(" ").slice(1).join(" ") || "New Entity";
    createEntity(name);
  }
});
