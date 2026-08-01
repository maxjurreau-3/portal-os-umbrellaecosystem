// ---------------------------------------------------------------------------
// Event Bus Replay — Portal‑OS‑v3
// ---------------------------------------------------------------------------

import EventBus from "../event-bus";
import { EventLogger } from "./logger.js";

export const EventReplay = {
  replayAll() {
    EventLogger.list().forEach((entry) => {
      EventBus.emit(entry.event, entry.payload);
    });
  },

  replay(eventName) {
    EventLogger.list()
      .filter((e) => e.event === eventName)
      .forEach((entry) => {
        EventBus.emit(entry.event, entry.payload);
      });
  }
};
