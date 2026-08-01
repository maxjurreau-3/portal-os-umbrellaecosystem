// ---------------------------------------------------------------------------
// Event Bus Logger — Portal‑OS‑v3
// ---------------------------------------------------------------------------

export const EventLogger = {
  logs: [],

  log(event, payload) {
    const entry = {
      event,
      payload,
      timestamp: performance.now()
    };
    this.logs.push(entry);
  },

  list() {
    return [...this.logs];
  }
};
