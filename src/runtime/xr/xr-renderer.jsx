// ---------------------------------------------------------------------------
// XR Renderer — Portal‑OS‑v3
// ---------------------------------------------------------------------------

import React, { useEffect, useState } from "react";
import EventBus from "../event-bus";

export default function XRRenderer() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const unsubA = EventBus.on("xr:activated", () => setActive(true));
    const unsubD = EventBus.on("xr:deactivated", () => setActive(false));

    return () => {
      unsubA();
      unsubD();
    };
  }, []);

  return (
    <div className="xr-renderer">
      <span>XR: {active ? "Active" : "Inactive"}</span>
    </div>
  );
}
