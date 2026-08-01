// ---------------------------------------------------------------------------
// Event Bus Middleware — Portal‑OS‑v3
// ---------------------------------------------------------------------------

export const EventMiddleware = {
  handlers: [],

  use(fn) {
    this.handlers.push(fn);
  },

  run(event, payload) {
    this.handlers.forEach((fn) => fn(event, payload));
  }
};
