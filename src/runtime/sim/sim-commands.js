// ---------------------------------------------------------------------------
// SIM Commands — Portal‑OS‑v3
// ---------------------------------------------------------------------------

import EventBus from "../event-bus";
import { simTick, resetSIM } from "../../modules/sim/tick-loop.js";
import { createSpace, activateSpace } from "../../modules/sim/space.js";

EventBus.on("command:run", ({ command }) => {
  if (command === "sim.tick") {
    simTick();
  }

  if (command === "sim.reset") {
    resetSIM();
  }

  if (command.startsWith("sim.space.create")) {
    const name = command.split(" ").slice(1).join(" ") || "New Space";
    createSpace(name);
  }

  if (command.startsWith("sim.space.activate")) {
    const id = command.split(" ").slice(1).join(" ");
    activateSpace(id);
  }
});
