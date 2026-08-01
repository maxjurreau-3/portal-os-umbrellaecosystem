// ---------------------------------------------------------------------------
// Dock Registry — Portal‑OS‑v3
// ---------------------------------------------------------------------------

export const DockRegistry = {
  items: {},

  register(id, component) {
    this.items[id] = component;
  },

  get(id) {
    return this.items[id];
  },

  list() {
    return Object.keys(this.items);
  }
};
