/**
 * @copyright 2025 codewithsadee
 * @license Apache-2.0
 * @description Root layout for the app
 */

// node_modules
import { Outlet } from "react-router";

// components
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

const RootLayout = () => {
  return (
    <>
      <div className=' min-h-[100vh] flex flex-col overflow-hidden'>
        <Header /> {/* Header component */}
        <main className=' grow grid grid-cols-1 items-center pt-36 pb-16'>
          <Outlet /> {/* This is where the child routes will be rendered */}
        </main>
        <Footer /> {/* Footer component */}
      </div>
    </>
  );
};

export default RootLayout;
