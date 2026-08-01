// ---------------------------------------------------------------------------
// Notifications — Portal‑OS‑v3
// ---------------------------------------------------------------------------

import React, { useEffect, useState } from "react";
import EventBus from "./event-bus";

export default function Notifications() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const unsub = EventBus.on("notify", (payload) => {
      setMessages((prev) => [...prev, payload]);
    });
    return () => unsub();
  }, []);

  return (
    <div className="os-notifications">
      {messages.map((msg, i) => (
        <div key={i} className="notification">
          {msg.text}
        </div>
      ))}
    </div>
  );
}
