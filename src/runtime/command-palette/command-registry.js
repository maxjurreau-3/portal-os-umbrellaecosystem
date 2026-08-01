// ---------------------------------------------------------------------------
// Command Registry — Portal‑OS‑v3
// ---------------------------------------------------------------------------

export const CommandRegistry = {
  commands: {},

  register(name, handler) {
    this.commands[name] = handler;
  },

  get(name) {
    return this.commands[name];
  },

  list() {
    return Object.keys(this.commands);
  }
};
