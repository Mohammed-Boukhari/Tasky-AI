/**
 * @copyright 2025 Neurobit
 * @license Apache-2.0
 * @description Root error boundary page for the app
 */

// node_modules
import { isRouteErrorResponse, useRouteError, Link } from "react-router";

// components
import { Button } from "@/components/ui/button";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

// assets
import { pageNotFound } from "@/assets";

const RootErrorBoundary = () => {
  const error = useRouteError();
  return (
    <div className='min-h-[100vh] flex flex-col'>
      <Header />

      <div className='grow container flex flex-col items-center justify-center pt-32 pb-12 '>
        <h1 className='text-2xl font-semibold text-center sm:text-4xl '>
          {isRouteErrorResponse(error)
            ? "Hmmm, that page doesn’t exist."
            : "Something went wrong."}
        </h1>
        <p className='text-muted-foreground max-w-[55ch] text-center mt-4 mb-6 sm:text-lg'>
          {isRouteErrorResponse(error)
            ? "You can get back on track and manage your tasks with ease."
            : "we’re working on fixing this issue. Please try again later."}
        </p>

        <div className='flex gap-2'>
          <Button asChild>
            <Link to='/'>Return to home</Link>
          </Button>

          <Button
            asChild
            variant='ghost'
          >
            <Link to='/app/inbox'>View Inbox</Link>
          </Button>
        </div>

        <figure className='mt-10'>
          <img
            src={pageNotFound}
            width={560}
            height={373}
            alt='404 Page Not Found'
          />
        </figure>
      </div>

      <Footer />
    </div>
  );
};

export default RootErrorBoundary;
