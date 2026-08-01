// ---------------------------------------------------------------------------
// Window Registry — Portal‑OS‑v3
// ---------------------------------------------------------------------------

export const WindowRegistry = {
  windows: {},

  register(id, component) {
    this.windows[id] = component;
  },

  get(id) {
    return this.windows[id];
  },

  list() {
    return Object.keys(this.windows);
  }
};
