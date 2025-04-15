/**
 * @copyright 2025 Neurobit
 * @license Apache-2.0
 * @description app layout for the app
 */

// node_modules
import { Outlet } from "react-router";

// components
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/Tasky-AI/AppSidebar";
import { TooltipProvider } from "@/components/ui/tooltip";

const AppLayout = () => {
  return (
    <>
      <SidebarProvider>
        <TooltipProvider
          delayDuration={500}
          disableHoverableContent
        >
          <AppSidebar /> {/* Sidebar component */}
          <main>
            <SidebarTrigger />
            <Outlet /> {/* This is where the child routes will be rendered */}
          </main>
        </TooltipProvider>
      </SidebarProvider>
    </>
  );
};

export default AppLayout;
