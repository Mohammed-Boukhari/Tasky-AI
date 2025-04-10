/**
 * @copyright 2025 codewithsadee
 * @license Apache-2.0
 * @description Register page for the app
 */

// node_modules
import { SignUp } from "@clerk/clerk-react";

// components
import Head from "@/components/feedback/Head";

const Register = () => {
  return (
    <>
      {/*CEO*/}
      <Head title='Create an Account - Tasky AI To-Do List & project Management App' />

      <section>
        <div className='container flex justify-center '>
          <SignUp signInUrl='/login' />
        </div>
      </section>
    </>
  );
};

export default Register;
