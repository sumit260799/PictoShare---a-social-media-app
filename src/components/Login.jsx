import React from "react";
import social2 from "../assets/social2.jpg";
import logo2 from "../assets/logo2.jpg";
import { FcGoogle } from "react-icons/fc";
import PictoShareAnimation from "./PictoShare";
import { useAuth0 } from "@auth0/auth0-react";
const Login = () => {
  const { user, logout, isAuthenticated, loginWithRedirect } = useAuth0();
  return (
    <div className="flex justify-start items-center flex-col h-screen">
      <div className="loginimg  relative w-full h-full">
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>
        {/* Content */}
        <div className="absolute flex flex-col justify-center items-center top-0 right-0 bottom-0 left-0 mt-12 z-10">
          <PictoShareAnimation />
          <div className="mt-2 px-6 py-3 rounded-lg bg-white">
            <button
              type="button"
              className="bg-mainColor text-black flex justify-center items-center p-0 text-[1.rem] rounded-lg cursor-pointer outline-none"
              onClick={() => loginWithRedirect()}
            >
              <FcGoogle className="mr-4" /> Sign in with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
