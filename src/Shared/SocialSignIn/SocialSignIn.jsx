import React from 'react';
import { FcGoogle } from 'react-icons/fc';

const SocialSignIn = () => {
    return (
        <div>
        <div className="divider">Or</div>
        <div
         
          className="flex justify-center items-center gap-2 btn btn-outline"
        >
          <FcGoogle />
          Login with Google
        </div>
      </div>
    );
};

export default SocialSignIn;