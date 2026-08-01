// ---------------------------------------------------------------------------
// Operators Commands — Portal‑OS‑v3
// ---------------------------------------------------------------------------

import EventBus from "../event-bus";
import { runAction, registerAction } from "../../modules/operators/index.js";

EventBus.on("command:run", ({ command }) => {
  if (command.startsWith("ops.register")) {
    const name = command.split(" ").slice(1).join(" ");
    registerAction(name, () => {
      return `Action ${name} executed.`;
    });
  }

  if (command.startsWith("ops.run")) {
    const name = command.split(" ").slice(1).join(" ");
    runAction(name);
  }
});
