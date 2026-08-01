// ---------------------------------------------------------------------------
// Identity‑Physics Window — Portal‑OS‑v3
// ---------------------------------------------------------------------------

import React, { useEffect, useState } from "react";
import EventBus from "../event-bus";

export default function IDPWindow() {
  const [entities, setEntities] = useState([]);

  useEffect(() => {
    const unsub = EventBus.on("idp:entityCreated", ({ entity }) => {
      setEntities((prev) => [...prev, entity]);
    });
    return () => unsub();
  }, []);

  return (
    <div className="idp-window">
      <div className="idp-header">Identity‑Physics Engine</div>
      <div className="idp-body">
        <h3>Entities</h3>
        {entities.map((e) => (
          <div key={e.id} className="idp-entity">
            {e.name} — {e.id}
          </div>
        ))}
      </div>
    </div>
  );
}
