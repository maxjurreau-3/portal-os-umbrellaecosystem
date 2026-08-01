// ---------------------------------------------------------------------------
// Command Controller — Portal‑OS‑v3
// ---------------------------------------------------------------------------

import EventBus from "../event-bus";
import { CommandRegistry } from "./command-registry.js";
import { parseCommand } from "./command-parser.js";

export const CommandController = {
  init() {
    EventBus.on("command:run", ({ command }) => {
      const parsed = parseCommand(command);
      const handler = CommandRegistry.get(parsed);

      if (handler) {
        handler();
      }
    });
  }
};
