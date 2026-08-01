// ---------------------------------------------------------------------------
// Event Bus Inspector — Portal‑OS‑v3
// ---------------------------------------------------------------------------

import React, { useEffect, useState } from "react";
import { EventLogger } from "./logger.js";
import EventBus from "../event-bus";

export default function EventInspector() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const unsub = EventBus.on("*", ({ event, payload }) => {
      EventLogger.log(event, payload);
      setEvents(EventLogger.list());
    });

    return () => unsub();
  }, []);

  return (
    <div className="event-inspector">
      <h3>Event Bus Inspector</h3>
      {events.map((e, i) => (
        <div key={i} className="event-entry">
          <strong>{e.event}</strong>
          <div>{JSON.stringify(e.payload)}</div>
        </div>
      ))}
    </div>
  );
}
