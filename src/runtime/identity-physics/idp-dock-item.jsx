// ---------------------------------------------------------------------------
// Identity‑Physics Dock Item — Portal‑OS‑v3
// ---------------------------------------------------------------------------

import React from "react";
import EventBus from "../event-bus";

export default function IDPDockItem() {
  function openIDP() {
    EventBus.emit("notify", { text: "Identity‑Physics Engine opened." });
    EventBus.emit("window:open", { id: "identity-physics" });
  }

  return (
    <button className="dock-item" onClick={openIDP}>
      <img src="/assets/icon-identity-physics.svg" alt="IDP" />
    </button>
  );
}
