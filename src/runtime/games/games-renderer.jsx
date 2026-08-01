// ---------------------------------------------------------------------------
// Games Renderer — Portal‑OS‑v3
// ---------------------------------------------------------------------------

import React, { useEffect, useState } from "react";
import EventBus from "../event-bus";

export default function GamesRenderer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const unsub = EventBus.on("games:registered", () => {
      setCount((prev) => prev + 1);
    });
    return () => unsub();
  }, []);

  return (
    <div className="games-renderer">
      <span>Games Registered: {count}</span>
    </div>
  );
}
