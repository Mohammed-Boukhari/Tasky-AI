/**
 * @copyright 2025 Neurobit
 * @license Apache-2.0
 * @description Auth sync page for the app
 */

// node_modules
import { useEffect } from "react";
import { useAuth } from "@clerk/clerk-react";
import { useNavigate } from "react-router";

const AuthSync = () => {
  const navigate = useNavigate();
  const { isLoaded, isSignedIn, userId } = useAuth();

  useEffect(() => {
    if (!isLoaded) return;

    // FIXME: set the userId in local storage and redirect to the TodayPage when user is signed in
    if (isSignedIn) {
      window.localStorage.setItem("clerkUserId", userId);

      navigate("/app/today");
    }

    // FIXME: Redirect to home page when user in not signed in
    if (!isSignedIn) {
      // FIXME: Handled this case cause the user is signed out
      if (window.localStorage.getItem("clerkUserId")) {
        window.localStorage.removeItem("clerkUserId");
      }

      navigate("/");
      return;
    }

    return () => {
      //
    };
  }, [isLoaded, isSignedIn, userId]);

  return <></>;
};

export default AuthSync;
