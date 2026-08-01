// ---------------------------------------------------------------------------
// Shared ID Generator — Portal‑OS‑v3
// ---------------------------------------------------------------------------

export function generateId(prefix = "id") {
  return `${prefix}_${Date.now()}_${Math.floor(Math.random() * 99999)}`;
}
