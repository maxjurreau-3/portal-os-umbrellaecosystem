// ---------------------------------------------------------------------------
// Portal‑OS‑v3 Shell
// Umbrella Ecosystem — Primary OS Container
// ---------------------------------------------------------------------------

import React from "react";
import UnifiedSurface from "./unified-surface.jsx";
import WindowManager from "./window-manager.jsx";
import Dock from "./dock.jsx";
import Notifications from "./notifications.jsx";
import CommandPalette from "./command-palette.jsx";
import "./styles.css";

export default function Shell() {
  return (
    <div className="os-shell">
      <UnifiedSurface />
      <WindowManager />
      <Dock />
      <Notifications />
      <CommandPalette />
    </div>
  );
}
