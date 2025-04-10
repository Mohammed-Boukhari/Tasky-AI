/**
 * @copyright 2025 codewithsadee
 * @license Apache-2.0
 * @description Root layout for the app
 */

// node_modules
import { Navigation, Outlet, useNavigation } from "react-router";
import { Loader2 } from "lucide-react";

// components
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

// assets
import { logo } from "@/assets";

const RootLayout = () => {
  const navigation: Navigation = useNavigation();
  const isLoading = navigation.state === "loading" && navigation.formData;

  return (
    <>
      <div className='relative isolate min-h-[100vh] flex flex-col overflow-hidden'>
        <Header /> {/* Header component */}
        <main className=' grow grid grid-cols-1 items-center pt-36 pb-16'>
          <Outlet /> {/* This is where the child routes will be rendered */}
        </main>
        <Footer /> {/* Footer component */}
        {/* Background shapes */}
        <div className='bg-primary/20 absolute top-20 left-0 w-80 h-10 rotate-45 origin-top-left blur-3xl'></div>
        <div className='bg-primary/20 absolute top-20 right-0 w-80 h-10 -rotate-45 origin-top-right blur-3xl'></div>
        {/* Loader */}
        {isLoading && (
          <div className=' fixed top-0 left-0 z-50 w-full h-[100dvh] bg-background flex flex-col justify-center items-center gap-5'>
            <img
              src={logo}
              alt='Tasky AI'
              width={64}
              height={64}
            />
            <Loader2 className='text-muted-foreground animate-spin' />
          </div>
        )}
      </div>
    </>
  );
};

export default RootLayout;
