// ---------------------------------------------------------------------------
// Notification Registry — Portal‑OS‑v3
// ---------------------------------------------------------------------------

export const NotificationRegistry = {
  handlers: [],

  register(handler) {
    this.handlers.push(handler);
  },

  dispatch(payload) {
    this.handlers.forEach((h) => h(payload));
  }
};
