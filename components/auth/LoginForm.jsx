"use client"
import { useState, useTransition } from "react"
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import Loader from "../Loader";
import { signIn } from "next-auth/react";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { useRouter } from "next/navigation";

const LoginForm = () => {
    const [eyeSwitch, setEyeSwitch] = useState(false);
    const { register, handleSubmit, formState: { errors}, reset} = useForm();
    const [ isLoading, setIsLoading ] = useState(false);
    const router = useRouter();

    const login= async(data) => {
           setIsLoading(true);
           signIn("credentials",{
                ...data,
                callbackUrl: DEFAULT_LOGIN_REDIRECT,
                redirect: false
           }).then(res => {
                setIsLoading(false);
                reset();
                 if(res.error){
                        toast.error(res.error, { id: 'login-error'});
                 }
                 if(res.ok && !res.error){
                         toast.success("Logged in Successfully!", { id: 'login-success'})
                         router.push(DEFAULT_LOGIN_REDIRECT)
                 }
           })
    }

  return (
    <>
          <Toaster />
            <form onSubmit={handleSubmit(login)}>
                    <div className="form-row">
                               <label htmlFor="email">Email</label>
                              <input type="email" {...register("email", { required: "Please input your email"})} className="form-control" placeholder="Email address" />
                              <span className="error">{errors.email && errors.email.message}</span>
                    </div>
                    <div className="form-row">
                           <label htmlFor="email">Password</label>
                           <div className="password-input">
                                        <input type={eyeSwitch ? "text" : "password"} {...register('password', { required: 'Please enter password'})} className="form-control-password" placeholder="Password" />
                                        <div className="eye-switch" onClick={() => setEyeSwitch(!eyeSwitch)}>
                                                  { eyeSwitch ? <span><VscEye /></span> : <span><VscEyeClosed /></span>}
                                        </div>                                                                 
                            </div>            
                            <span className="error">{errors.password && errors.password.message}</span>                                      
                    </div>
                    <div className="form-btn">
                              <button type="submit">Login{isLoading ? <Loader /> : "" }</button>
                    </div>
            </form>
    </>
  )
}

export default LoginForm