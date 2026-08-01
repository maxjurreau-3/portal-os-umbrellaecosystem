// ---------------------------------------------------------------------------
// Command Palette — Portal‑OS‑v3
// ---------------------------------------------------------------------------

import React, { useState } from "react";
import EventBus from "../event-bus";

export default function CommandPalette() {
  const [value, setValue] = useState("");

  function runCommand() {
    EventBus.emit("command:run", { command: value });
    setValue("");
  }

  return (
    <div className="command-palette">
      <input
        className="command-input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Run command..."
      />
      <button className="command-button" onClick={runCommand}>
        Run
      </button>
    </div>
  );
}
