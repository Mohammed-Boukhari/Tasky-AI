/**
 * @copyright 2025 codewithsadee
 * @license Apache-2.0
 * @description Root layout for the app
 */

// node_modules
import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <>
    
    <h3>Root Layout</h3>
      <Outlet />
    </>
  );
};

export default RootLayout;
