// ---------------------------------------------------------------------------
// XR Window — Portal‑OS‑v3
// ---------------------------------------------------------------------------

import React, { useEffect, useState } from "react";
import EventBus from "../event-bus";

export default function XRWindow() {
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
    <div className="xr-window">
      <div className="xr-header">XR Engine</div>
      <div className="xr-body">
        XR Status: {active ? "Active" : "Inactive"}
      </div>
    </div>
  );
}
