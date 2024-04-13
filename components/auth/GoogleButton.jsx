"use client";

import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react"
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
const GoogleButton = () => {

  const signInWithGoogle = async () => {
        await  signIn("google", { callbackUrl: DEFAULT_LOGIN_REDIRECT})
  }
  return (
    <button onClick={signInWithGoogle} className="extra-btn" >
             <span><FcGoogle /></span>
           <p>Continue with Google</p>
    </button>
  )
}

export default GoogleButton