import React from "react";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const SocialSignIn = () => {
  const { googleLogin } = useAuth();
  const navigate=useNavigate()
  const handleGoogleSignIn = () => {
    googleLogin()
      .then((res) => {
        if(res.user.emailVerified){
          navigate("/")
        }
        else{
          console.log("please verified your email address");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div className="divider">Or</div>
      <button onClick={handleGoogleSignIn} className="w-full btn btn-outline">
        <FcGoogle />
        Login with Google
      </button>
    </div>
  );
};

export default SocialSignIn;
