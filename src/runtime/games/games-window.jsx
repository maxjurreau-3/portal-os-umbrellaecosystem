// ---------------------------------------------------------------------------
// Games Window — Portal‑OS‑v3
// ---------------------------------------------------------------------------

import React, { useEffect, useState } from "react";
import EventBus from "../event-bus";

export default function GamesWindow() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const unsub = EventBus.on("games:registered", ({ game }) => {
      setGames((prev) => [...prev, game]);
    });
    return () => unsub();
  }, []);

  return (
    <div className="games-window">
      <div className="games-header">Games Engine</div>
      <div className="games-body">
        <h3>Registered Games</h3>
        {games.map((g) => (
          <div key={g.id} className="game-entry">
            {g.name} — {g.id}
          </div>
        ))}
      </div>
    </div>
  );
}
