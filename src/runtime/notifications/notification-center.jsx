// ---------------------------------------------------------------------------
// Notification Center — Portal‑OS‑v3
// ---------------------------------------------------------------------------

import React, { useEffect, useState } from "react";
import { NotificationRegistry } from "./notification-registry.js";

export default function NotificationCenter() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    NotificationRegistry.register((notif) => {
      setMessages((prev) => [...prev, notif]);
    });
  }, []);

  return (
    <div className="notification-center">
      {messages.map((m) => (
        <div key={m.id} className="notification-item">
          {m.text}
        </div>
      ))}
    </div>
  );
}
