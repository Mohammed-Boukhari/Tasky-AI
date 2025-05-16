/**
 * @copyright 2025 Neurobit
 * @license Apache-2.0
 * @description Router configuration for the app
 *
 */

// node_modules
import { createBrowserRouter } from "react-router";
// TODO: Pages
import Home from "@/pages/home/Home";
import Register from "@/pages/auth/Register";
import Login from "@/pages/auth/Login";
import AuthSync from "@/pages/auth/AuthSync";
import Inbox from "@/pages/app/Inbox";

// Error boundary page
import RootErrorBoundary from "@/pages/error/RootErrorBoundary";

// TODO: Layouts
import RootLayout from "@/layouts/RootLayout";
import AppLayout from "@/layouts/AppLayout";

// Actions
import appAction from "@/routes/actions/appAction";

// types
import type { RouteObject } from "react-router";

const rootRouteChildren: RouteObject[] = [
  {
    index: true,
    element: <Home />,
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "auth-sync",
    element: <AuthSync />,
  },
];

const AppRouteChildren: RouteObject[] = [
  {
    path: "inbox",
    element: <Inbox />,
  },
];
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <RootErrorBoundary />,
    children: rootRouteChildren,
  },
  {
    path: "/app",
    element: <AppLayout />,
    children: AppRouteChildren,
    action: appAction,
  },
]);

export default router;
