/**
 * @copyright 2025 codewithsadee
 * @license Apache-2.0
 * @description Login page for the app
 */

// node_modules
import { SignIn } from "@clerk/clerk-react";

// components
import Head from "@/components/feedback/Head";

const Login = () => {
  return (
    <>
      {/*CEO*/}
      <Head title='Log In to Tasky AI - Manage Your To-Do Lists and Projects' />

      <section>
        <div className='container flex justify-center '>
          <SignIn signInUrl='/register' />
        </div>
      </section>
    </>
  );
};

export default Login;
