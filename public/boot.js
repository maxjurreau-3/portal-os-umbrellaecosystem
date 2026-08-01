// ---------------------------------------------------------------------------
// Portal‑OS‑v3 Boot Script
// ---------------------------------------------------------------------------

import React from "react";
import { createRoot } from "react-dom/client";
import ShellLayout from "../src/runtime/shell/shell-layout.jsx";

// Boot the OS Shell
const root = createRoot(document.getElementById("root"));
root.render(<ShellLayout />);
