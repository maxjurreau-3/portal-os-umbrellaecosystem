// ---------------------------------------------------------------------------
// Operators Renderer — Portal‑OS‑v3
// ---------------------------------------------------------------------------

import React, { useEffect, useState } from "react";
import EventBus from "../event-bus";

export default function OperatorsRenderer() {
  const [lastAction, setLastAction] = useState(null);

  useEffect(() => {
    const unsub = EventBus.on("operators:actionRun", ({ name }) => {
      setLastAction(name);
    });
    return () => unsub();
  }, []);

  return (
    <div className="operators-renderer">
      <span>Last Action: {lastAction || "None"}</span>
    </div>
  );
}
