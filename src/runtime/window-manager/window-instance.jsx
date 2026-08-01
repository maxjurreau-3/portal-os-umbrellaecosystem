// ---------------------------------------------------------------------------
// Window Instance — Portal‑OS‑v3
// ---------------------------------------------------------------------------

import React from "react";

export default function WindowInstance({ id, component: Component, x, y }) {
  return (
    <div className="os-window" style={{ left: x, top: y }}>
      <div className="os-window-header">{id}</div>
      <div className="os-window-body">
        <Component />
      </div>
    </div>
  );
}
