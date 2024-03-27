"use client";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react"
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
const GoogleButton = () => {
  return (
    <button onClick={() => signIn("google", { callbackUrl: DEFAULT_LOGIN_REDIRECT})} className="extra-btn" >
             <span><FcGoogle /></span>
           <p>Continue with Google</p>
    </button>
  )
}

export default GoogleButton