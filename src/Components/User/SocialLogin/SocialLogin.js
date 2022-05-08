
import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    let errorElement;
    if (error || error1) {
       
        errorElement= <div>
            <p>Error: {error?.message} {error1?.message}</p>
          </div>
       
      }

      if(user || user1){
        navigate('/');
      }
    return (
        <div className='w-3/4 mx-auto mb-5'>
            <div className='flex justify-items-center'>
                <div className='bg-gray-300 w-1/2 h-1'></div>
                <p className='mb-4 p-2'>Or</p>
                <div className='bg-gray-300 w-1/2 h-1'></div>
            </div>
            {errorElement}

            <div className='mt-3 w-fit mx-auto'>
                <button onClick={()=>signInWithGoogle()} className='w-72 bg-white shadow-lg rounded-md flex text-2xl font-bold gap-2 justify-center'>
                    <img className='w-20' src="google logo.jpg" alt="" />
                  Google SignIn
                </button>
               
            </div>
            <div className='mt-3 w-fit mx-auto'>
                <button onClick={()=>signInWithGithub()} className='w-72 bg-white shadow-lg rounded-md flex text-2xl font-bold gap-2 justify-center content-center'>
                    <img className='w-20' src="github.png" alt="" />
                  Github SignIn
                </button>
               
            </div>
        </div>
    );
};

export default SocialLogin;