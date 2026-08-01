// ---------------------------------------------------------------------------
// Event Bus — Portal‑OS‑v3 Runtime
// Lightweight pub/sub for Umbrella Ecosystem
// ---------------------------------------------------------------------------

class EventBus {
  constructor() {
    this.listeners = new Map();
  }

  on(event, callback) {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, []);
    }
    this.listeners.get(event).push(callback);

    // Return unsubscribe function
    return () => {
      const callbacks = this.listeners.get(event) || [];
      this.listeners.set(
        event,
        callbacks.filter((cb) => cb !== callback)
      );
    };
  }

  emit(event, payload) {
    const callbacks = this.listeners.get(event);
    if (!callbacks || callbacks.length === 0) return;

    callbacks.forEach((cb) => {
      try {
        cb(payload);
      } catch (err) {
        console.error(`[EventBus] Error in listener for "${event}":`, err);
      }
    });
  }

  clear(event) {
    if (event) {
      this.listeners.delete(event);
    } else {
      this.listeners.clear();
    }
  }
}

const bus = new EventBus();

export default bus;
