import { async } from "@firebase/util";
import React, { useRef } from "react";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";


const Login = () => {
    const emailRf = useRef("");
    const passwordRf = useRef('');
    const navigate = useNavigate();
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    const navigateResetPassword =async() =>{
      const email = emailRf.target.email.value;
      await sendPasswordResetEmail(email);
      alert('Sent email');
    }

    const [
      signInWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useSignInWithEmailAndPassword(auth);

    if(user){
      navigate('/')
    }

    const handleSubmit= event =>{
        event.preventDefault();
        const email = event.target.email.value;
      const password = event.target.email.value;
        signInWithEmailAndPassword(email,password)
    }

    const navigateRegister= event =>{
        navigate('/register')
    }

  return (
    <div className="">
      <h1 className="text-5xl text-bold text-sky-600 mt-5 text-center">Please Login!!</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-sm mx-auto mt-12 ">
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="inline-full-name"
            >
              Email
            </label>
          </div>
          <div className="md:w-2/3">
            <input ref={emailRf}
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-full-name"
              type="email"
              name="email"
              placeholder="Enter your name" required
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="inline-password"
            >
              Password
            </label>
          </div>
          <div className="md:w-2/3">
            <input ref={passwordRf}
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-password"
              name="password"
              type="password"
              placeholder="******************" required
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3"></div>
          {/* <label className="md:w-2/3 block text-gray-500 font-bold">
            <input className="mr-2 leading-tight" type="checkbox" />
            <span className="text-sm">Send me your newsletter!</span>
          </label> */}
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3">
            <input
              className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="submit" value="Log in"
            />  
          </div>
        </div>
        
      </form>
      <p className="text-xl font-bold pb-5 pt-5 ">If You Not Registered !! <span className="text-orange-400 cursor-pointer" onClick={navigateRegister}>Please Register</span></p>
      <p className="text-xl font-bold pb-5  ">Forgot Password ? <span className="text-orange-400 cursor-pointer" onClick={navigateResetPassword}>Reset Password</span></p>

      <SocialLogin></SocialLogin>

    </div>

    
  );
};

export default Login;