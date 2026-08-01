// ---------------------------------------------------------------------------
// SIM Engine — Space System
// ---------------------------------------------------------------------------

import { SIMState, addSpace, setActiveSpace } from "./state.js";
import { emitSpaceCreated, emitSpaceActivated } from "./events.js";

export function createSpace(name = "New Space") {
  const space = {
    id: `space_${Date.now()}`,
    name,
    createdAt: performance.now(),
    data: {}
  };

  addSpace(space);
  emitSpaceCreated(space);

  return space;
}

export function activateSpace(spaceId) {
  const space = SIMState.spaces.find((s) => s.id === spaceId);
  if (!space) return;

  setActiveSpace(space);
  emitSpaceActivated(space);
}

export function listSpaces() {
  return [...SIMState.spaces];
}
