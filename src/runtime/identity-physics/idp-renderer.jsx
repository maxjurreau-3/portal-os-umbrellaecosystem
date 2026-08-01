// ---------------------------------------------------------------------------
// Identity‑Physics Renderer — Portal‑OS‑v3
// ---------------------------------------------------------------------------

import React, { useEffect, useState } from "react";
import EventBus from "../event-bus";

export default function IDPRenderer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const unsub = EventBus.on("idp:entityCreated", () => {
      setCount((prev) => prev + 1);
    });
    return () => unsub();
  }, []);

  return (
    <div className="idp-renderer">
      <span>Entities: {count}</span>
    </div>
  );
}
