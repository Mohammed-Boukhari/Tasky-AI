/**
 * @copyright 2024 codewithsadee
 * @license Apache-2.0
 * @description Main entry point for the app
 */

// node_modules
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";

// Routes
import router from "@/routes";

// CSS link
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
