// ---------------------------------------------------------------------------
// Renderers — Portal‑OS‑v3
// Engine → Surface visual adapters
// ---------------------------------------------------------------------------

import React, { useEffect, useState } from "react";
import EventBus from "./event-bus";

export function SIMRenderer() {
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

export function XRRenderer() {
  return <div className="xr-renderer">XR Engine Active</div>;
}

export function IdentityPhysicsRenderer() {
  return <div className="ip-renderer">Identity‑Physics Engine Active</div>;
}

export function OperatorsRenderer() {
  return <div className="operators-renderer">Operators Engine Active</div>;
}

export function GamesRenderer() {
  return <div className="games-renderer">Games Engine Active</div>;
}
