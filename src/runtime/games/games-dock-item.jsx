// ---------------------------------------------------------------------------
// Games Dock Item — Portal‑OS‑v3
// ---------------------------------------------------------------------------

import React from "react";
import EventBus from "../event-bus";

export default function GamesDockItem() {
  function openGames() {
    EventBus.emit("notify", { text: "Games Engine opened." });
    EventBus.emit("window:open", { id: "games" });
  }

  return (
    <button className="dock-item" onClick={openGames}>
      <img src="/assets/icon-games.svg" alt="Games" />
    </button>
  );
}
