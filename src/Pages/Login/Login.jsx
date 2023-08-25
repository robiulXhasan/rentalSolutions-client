import React, { useState } from "react";
import loginBanner from "../../assets/images/login-banner.png";
import { Link, useNavigate } from "react-router-dom";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import SocialSignIn from "../../Shared/SocialSignIn/SocialSignIn";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const { userLogin,logOut } = useAuth();
  const [visible, setVisible] = useState(false);
  const [error, setError] = useState("");
  const navigate=useNavigate()

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const handleLogin = (data) => {
    console.log(data);
    userLogin(data.email, data.password)
      .then((res) => {
        console.log("successfully");
        // if(!res.user.emailVerified){
        //   logOut()
        //   console.log("please verified your email address");
        // }
        // else{
        //   navigate("/")
          
        // }
        navigate("/")

      })
      .catch((err) => console.log(err.message));
  };
  const handleShowPassword = () => {
    setVisible(!visible);
  };

  return (
    <div className="hero md:min-h-screen w-11/12 md:w-10/12 mx-auto">
      <div className="hero-content flex-col md:flex-row gap-5 md:gap-20 ">
        <div className="text-center">
          <img className="" src={loginBanner} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl border border-violet-500">
          <form onSubmit={handleSubmit(handleLogin)} className="card-body">
            <h2 className="text-center font-semibold text-3xl">Login</h2>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered"
                {...register("email", { required: true })}
              />

              {errors.email?.type === "required" && (
                <p className="text-red-600" role="alert">
                  Email is required
                </p>
              )}
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={visible ? "text" : "password"}
                placeholder="password"
                className="input input-bordered "
                {...register("password", { required: true })}
              />
              <button
                className={`absolute  right-5 ${
                  errors.password ? "bottom-16" : "bottom-12"
                }  text-gray-500`}
                onClick={handleShowPassword}
              >
                {visible ? <BsFillEyeFill /> : <BsFillEyeSlashFill />}
              </button>
              {errors.password?.type === "required" && (
                <p className="text-red-600" role="alert">
                  Password is required
                </p>
              )}
              <label className="label ">
                <a href="#" className="label-text-alt link link-hover ">
                  Forgot password?
                </a>
              </label>
            </div>
            <p className="text-red-600">{error}</p>
            <div className="form-control">
              <input
                type="submit"
                value=" Login"
                className="btn bg-[#0F7BF2] text-white hover:text-black border border-[#0F7BF2] hover:border-[#0F7BF2]"
              />
            </div>
            <p>
              Don't have an account?{" "}
              <Link to="/register" className="font-semibold text-violet-500">
                Register
              </Link>
            </p>
            <SocialSignIn setError={setError}></SocialSignIn>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
