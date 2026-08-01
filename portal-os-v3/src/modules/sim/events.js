// ---------------------------------------------------------------------------
// SIM Engine — Event Emitters
// ---------------------------------------------------------------------------

import EventBus from "../../runtime/event-bus";

export function emitInitialized() {
  EventBus.emit("sim:initialized", {
    timestamp: performance.now()
  });
}

export function emitTick(payload) {
  EventBus.emit("sim:tick", payload);
}

export function emitSpaceCreated(space) {
  EventBus.emit("sim:spaceCreated", { space });
}

export function emitSpaceActivated(space) {
  EventBus.emit("sim:spaceActivated", { space });
}

export function emitReset() {
  EventBus.emit("sim:reset", {
    timestamp: performance.now()
  });
}
