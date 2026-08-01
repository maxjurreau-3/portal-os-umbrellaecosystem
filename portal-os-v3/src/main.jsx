import React from "react";
import ReactDOM from "react-dom/client";
import Shell from "./runtime/shell.jsx";
import { initSIM } from "./modules/sim/index.js";

function bootstrap() {
  // Initialize core engines
  initSIM();

  // Mount OS shell
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <Shell />
    </React.StrictMode>
  );
}

bootstrap();
