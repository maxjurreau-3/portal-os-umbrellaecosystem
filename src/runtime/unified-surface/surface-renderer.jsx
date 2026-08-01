// ---------------------------------------------------------------------------
// Unified Surface Renderer — Portal‑OS‑v3
// ---------------------------------------------------------------------------

import React, { useEffect, useState } from "react";
import { SurfaceController } from "./surface-controller.js";

export default function SurfaceRenderer() {
  const [content, setContent] = useState("Portal‑OS Unified Surface");

  useEffect(() => {
    SurfaceController.register((payload) => {
      setContent(payload.text || "");
    });
  }, []);

  return (
    <div className="unified-surface">
      {content}
    </div>
  );
}
