// ---------------------------------------------------------------------------
// Shared Time Utilities — Portal‑OS‑v3
// ---------------------------------------------------------------------------

export const TimeUtils = {
  now() {
    return performance.now();
  },

  since(timestamp) {
    return performance.now() - timestamp;
  },

  format(ms) {
    return `${ms.toFixed(2)}ms`;
  }
};
