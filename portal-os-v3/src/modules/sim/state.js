// ---------------------------------------------------------------------------
// SIM Engine — State Manager
// ---------------------------------------------------------------------------

export const SIMState = {
  initialized: false,
  tickCount: 0,
  lastTick: performance.now(),
  spaces: [],
  activeSpace: null
};

export function setInitialized() {
  SIMState.initialized = true;
}

export function incrementTick(delta) {
  SIMState.tickCount++;
  SIMState.lastTick = performance.now();
  return {
    tick: SIMState.tickCount,
    delta,
    timestamp: SIMState.lastTick
  };
}

export function addSpace(space) {
  SIMState.spaces.push(space);
}

export function setActiveSpace(space) {
  SIMState.activeSpace = space;
}
