// ---------------------------------------------------------------------------
// Dock — Portal‑OS‑v3
// ---------------------------------------------------------------------------

import React from "react";
import EventBus from "./event-bus";

export default function Dock() {
  function openSIM() {
    EventBus.emit("notify", { text: "SIM Engine opened." });
  }

  return (
    <div className="os-dock">
      <button onClick={openSIM}>SIM</button>
      <button>XR</button>
      <button>Identity‑Physics</button>
      <button>Operators</button>
      <button>Games</button>
    </div>
  );
}
