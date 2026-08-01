// ---------------------------------------------------------------------------
// Unified Surface — Portal‑OS‑v3 Runtime
// The central visual surface for all engines (SIM, XR, Identity‑Physics, etc.)
// ---------------------------------------------------------------------------

import React, { useEffect, useState } from "react";
import EventBus from "./event-bus";

export default function UnifiedSurface() {
  const [tick, setTick] = useState(0);
  const [delta, setDelta] = useState(0);

  useEffect(() => {
    // Listen for SIM heartbeat
    const unsub = EventBus.on("sim:tick", (payload) => {
      setTick(payload.tick);
      setDelta(payload.delta);
    });

    return () => unsub();
  }, []);

  return (
    <div className="unified-surface">
      <div className="surface-overlay">
        <div className="surface-debug">
          <div>SIM Tick: {tick}</div>
          <div>Delta: {delta.toFixed(2)}ms</div>
        </div>
      </div>
    </div>
  );
}
