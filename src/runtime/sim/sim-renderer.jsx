// ---------------------------------------------------------------------------
// SIM Renderer — Portal‑OS‑v3
// ---------------------------------------------------------------------------

import React, { useEffect, useState } from "react";
import EventBus from "../event-bus";

export default function SIMRenderer() {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const unsub = EventBus.on("sim:tick", (payload) => {
      setTick(payload.tick);
    });
    return () => unsub();
  }, []);

  return (
    <div className="sim-renderer">
      <span>SIM Tick: {tick}</span>
    </div>
  );
}
