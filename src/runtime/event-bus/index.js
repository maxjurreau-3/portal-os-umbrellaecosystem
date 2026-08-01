// ---------------------------------------------------------------------------
// Event Bus Extensions Runtime Integration — Portal‑OS‑v3
// ---------------------------------------------------------------------------

import "./event-bus-styles.css";
import { EventMiddleware } from "./middleware.js";
import { EventLogger } from "./logger.js";

// Attach middleware + logging to the core EventBus
import EventBus from "../event-bus";

EventBus.on("*", ({ event, payload }) => {
  EventMiddleware.run(event, payload);
  EventLogger.log(event, payload);
});
