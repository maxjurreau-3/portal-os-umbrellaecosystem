// ---------------------------------------------------------------------------
// Operators Dock Item — Portal‑OS‑v3
// ---------------------------------------------------------------------------

import React from "react";
import EventBus from "../event-bus";

export default function OperatorsDockItem() {
  function openOperators() {
    EventBus.emit("notify", { text: "Operators Engine opened." });
    EventBus.emit("window:open", { id: "operators" });
  }

  return (
    <button className="dock-item" onClick={openOperators}>
      <img src="/assets/icon-operators.svg" alt="Operators" />
    </button>
  );
}
