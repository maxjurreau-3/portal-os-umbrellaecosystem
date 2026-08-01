// ---------------------------------------------------------------------------
// Dock Loader — Portal‑OS‑v3
// ---------------------------------------------------------------------------

import React from "react";
import { DockRegistry } from "./dock-registry.js";

export default function DockLoader() {
  const items = DockRegistry.list();

  return (
    <div className="os-dock">
      {items.map((id) => {
        const Component = DockRegistry.get(id);
        return <Component key={id} />;
      })}
    </div>
  );
}
