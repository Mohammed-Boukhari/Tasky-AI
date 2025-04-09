/**
 * @copyright 2025 codewithsadee
 * @license Apache-2.0
 * @description Router configuration for the app
 */

// node_modules
import { createBrowserRouter } from "react-router";

// TODO: Pages
import Home from "@/pages/Home";

// Error boundary page
import RootErrorBoundary from "@/pages/error/RootErrorBoundary"; 

// TODO: Layouts
import RootLayout from "@/layouts/RootLayout";

// types
import type { RouteObject } from "react-router";

const rootRouteChildren: RouteObject[] = [
  {
    index: true,
    element: <Home />,
  },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <RootErrorBoundary />,
    children: rootRouteChildren,
  },
]);

export default router;
