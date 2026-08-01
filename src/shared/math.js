// ---------------------------------------------------------------------------
// Shared Math Utilities — Portal‑OS‑v3
// ---------------------------------------------------------------------------

export const MathUtils = {
  clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
  },

  lerp(a, b, t) {
    return a + (b - a) * t;
  },

  rand(min = 0, max = 1) {
    return Math.random() * (max - min) + min;
  }
};
