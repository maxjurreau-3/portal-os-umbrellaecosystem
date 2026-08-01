// ---------------------------------------------------------------------------
// Command Palette — Portal‑OS‑v3
// ---------------------------------------------------------------------------

import React, { useState } from "react";
import EventBus from "./event-bus";

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [cmd, setCmd] = useState("");

  function execute() {
    EventBus.emit("command:run", { command: cmd });
    setCmd("");
    setOpen(false);
  }

  return (
    <div className={`command-palette ${open ? "open" : ""}`}>
      <input
        value={cmd}
        onChange={(e) => setCmd(e.target.value)}
        placeholder="Enter command…"
      />
      <button onClick={execute}>Run</button>
    </div>
  );
}
