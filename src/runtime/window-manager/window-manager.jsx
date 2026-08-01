// ---------------------------------------------------------------------------
// Window Manager — Portal‑OS‑v3
// ---------------------------------------------------------------------------

import React, { useEffect, useState } from "react";
import EventBus from "../event-bus";
import WindowInstance from "./window-instance.jsx";
import { WindowRegistry } from "./window-registry.js";
import { WindowLayout } from "./window-layout.js";

export default function WindowManager() {
  const [openWindows, setOpenWindows] = useState([]);

  useEffect(() => {
    const openUnsub = EventBus.on("window:open", ({ id }) => {
      const component = WindowRegistry.get(id);
      if (!component) return;

      const pos = WindowLayout.defaultPosition(id);

      setOpenWindows((prev) => [
        ...prev,
        { id, component, x: pos.x, y: pos.y }
      ]);
    });

    const closeUnsub = EventBus.on("window:close", ({ id }) => {
      setOpenWindows((prev) => prev.filter((w) => w.id !== id));
    });

    return () => {
      openUnsub();
      closeUnsub();
    };
  }, []);

  return (
    <div className="window-manager">
      {openWindows.map((win) => (
        <WindowInstance
          key={win.id}
          id={win.id}
          component={win.component}
          x={win.x}
          y={win.y}
        />
      ))}
    </div>
  );
}
