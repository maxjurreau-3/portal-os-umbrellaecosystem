// ---------------------------------------------------------------------------
// XR Dock Item — Portal‑OS‑v3
// ---------------------------------------------------------------------------

import React from "react";
import EventBus from "../event-bus";

export default function XRDockItem() {
  function openXR() {
    EventBus.emit("notify", { text: "XR Engine opened." });
    EventBus.emit("window:open", { id: "xr" });
  }

  return (
    <button className="dock-item" onClick={openXR}>
      <img src="/assets/icon-xr.svg" alt="XR" />
    </button>
  );
}
