// ---------------------------------------------------------------------------
// SIM Dock Item — Portal‑OS‑v3
// ---------------------------------------------------------------------------

import React from "react";
import EventBus from "../event-bus";

export default function SIMDockItem() {
  function openSIM() {
    EventBus.emit("notify", { text: "SIM Engine opened." });
    EventBus.emit("window:open", { id: "sim" });
  }

  return (
    <button className="dock-item" onClick={openSIM}>
      <img src="/assets/icon-sim.svg" alt="SIM" />
    </button>
  );
}
