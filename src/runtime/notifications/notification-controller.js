// ---------------------------------------------------------------------------
// Notification Controller — Portal‑OS‑v3
// ---------------------------------------------------------------------------

import EventBus from "../event-bus";
import { NotificationQueue } from "./notification-queue.js";
import { NotificationRegistry } from "./notification-registry.js";

export const NotificationController = {
  init() {
    EventBus.on("notify", ({ text }) => {
      const notification = {
        id: `notif_${Date.now()}`,
        text,
        timestamp: performance.now()
      };

      NotificationQueue.push(notification);
      NotificationRegistry.dispatch(notification);
    });
  }
};
