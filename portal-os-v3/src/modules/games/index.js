// ---------------------------------------------------------------------------
// GAMES ENGINE — Portal‑OS‑v3 (Foundation Layer)
// Umbrella Ecosystem: Games + Interactive Engine
// ---------------------------------------------------------------------------

import EventBus from "../../runtime/event-bus";

export const GAMES_MODULE = {
  id: "games",
  name: "Games Engine",
  version: "0.1.0",
  description: "Foundational games engine for Portal‑OS‑v3."
};

let state = {
  initialized: false,
  games: []
};

export function initGames() {
  if (state.initialized) return;

  state.initialized = true;

  EventBus.emit("games:initialized", {
    module: GAMES_MODULE.id,
    timestamp: performance.now()
  });
}

export function registerGame(name) {
  const game = {
    id: `game_${Date.now()}`,
    name,
    createdAt: performance.now()
  };

  state.games.push(game);

  EventBus.emit("games:registered", { game });

  return game;
}

export function listGames() {
  return [...state.games];
}

EventBus.emit("module:register", {
  id: GAMES_MODULE.id,
  name: GAMES_MODULE.name,
  version: GAMES_MODULE.version
});
