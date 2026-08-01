// ---------------------------------------------------------------------------
// Shared Utils — Portal‑OS‑v3
// Umbrella Ecosystem: Shared Utility Functions
// ---------------------------------------------------------------------------

export function uid(prefix = "id") {
  return `${prefix}_${Math.random().toString(36).slice(2)}_${Date.now()}`;
}

export function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}
