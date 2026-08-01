// ---------------------------------------------------------------------------
// XR Commands — Portal‑OS‑v3
// ---------------------------------------------------------------------------

import EventBus from "../event-bus";
import { activateXR, deactivateXR } from "../../modules/xr/index.js";

EventBus.on("command:run", ({ command }) => {
  if (command === "xr.activate") {
    activateXR();
  }

  if (command === "xr.deactivate") {
    deactivateXR();
  }
});
