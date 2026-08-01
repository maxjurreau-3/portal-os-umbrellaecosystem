// ---------------------------------------------------------------------------
// Notification Queue — Portal‑OS‑v3
// ---------------------------------------------------------------------------

export const NotificationQueue = {
  queue: [],

  push(notification) {
    this.queue.push(notification);
  },

  shift() {
    return this.queue.shift();
  },

  list() {
    return [...this.queue];
  }
};
