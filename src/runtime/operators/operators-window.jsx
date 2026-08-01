// ---------------------------------------------------------------------------
// Operators Window — Portal‑OS‑v3
// ---------------------------------------------------------------------------

import React, { useEffect, useState } from "react";
import EventBus from "../event-bus";

export default function OperatorsWindow() {
  const [actions, setActions] = useState([]);

  useEffect(() => {
    const unsub = EventBus.on("operators:actionRegistered", ({ action }) => {
      setActions((prev) => [...prev, action]);
    });
    return () => unsub();
  }, []);

  return (
    <div className="operators-window">
      <div className="operators-header">Operators Engine</div>
      <div className="operators-body">
        <h3>Registered Actions</h3>
        {actions.map((a, i) => (
          <div key={i} className="operator-action">
            {a.name}
          </div>
        ))}
      </div>
    </div>
  );
}
