// ---------------------------------------------------------------------------
// Shell Layout — Portal‑OS‑v3
// ---------------------------------------------------------------------------

import React from "react";
import SurfaceRenderer from "../unified-surface/surface-renderer.jsx";
import WindowManager from "../window-manager/window-manager.jsx";
import DockLoader from "../dock/dock-loader.jsx";
import NotificationCenter from "../notifications/notification-center.jsx";
import CommandPalette from "../command-palette/command-palette.jsx";

export default function ShellLayout() {
  return (
    <div className="os-shell">
      <SurfaceRenderer />
      <WindowManager />
      <DockLoader />
      <NotificationCenter />
      <CommandPalette />
    </div>
  );
}
