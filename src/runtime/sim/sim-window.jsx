// ---------------------------------------------------------------------------
// SIM Window — Portal‑OS‑v3
// ---------------------------------------------------------------------------

import React, { useEffect, useState } from "react";
import EventBus from "../event-bus";

export default function SIMWindow() {
  const [tick, setTick] = useState(0);
  const [delta, setDelta] = useState(0);

  useEffect(() => {
    const unsub = EventBus.on("sim:tick", (payload) => {
      setTick(payload.tick);
      setDelta(payload.delta);
    });
    return () => unsub();
  }, []);

  return (
    <div className="sim-window">
      <div className="sim-header">SIM Engine</div>
      <div className="sim-body">
        <div>Tick: {tick}</div>
        <div>Delta: {delta.toFixed(2)}ms</div>
      </div>
    </div>
  );
}
