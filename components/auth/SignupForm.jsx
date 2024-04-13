"use client"
import { useState } from "react"
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { CgDanger } from "react-icons/cg";
import { useForm } from "react-hook-form";
import { registerUser } from "@/actions/register";
import toast, { Toaster } from "react-hot-toast"
import { useTransition } from "react";
import Loader from "../Loader";
import { navigateToLogin } from "@/actions/redirects";
const SignupForm = () => {
    const [eyeSwitch, setEyeSwitch] = useState(false);
    const [eyeSwitch2, setEyeSwitch2] = useState(false);
    const { register, handleSubmit, formState: { errors}, reset, watch} = useForm();
    const [isPending, startTransition ] = useTransition();

    const createUser = async (data) => {
          startTransition(() => {
              registerUser(data).then(res => {
                     if(res.error){
                            toast.error(res.error);
                     }
                     if(res.success){
                           toast.success(res.success);
                           reset();
                           setTimeout(()=> {
                               navigateToLogin();
                           }, 2000)
                     }
             })
          })
    }
  return (
    <>
         <Toaster />
          <form onSubmit={handleSubmit(createUser)}>
                    <div className="form-row">
                              <label htmlFor="name">Full Name</label>
                              <input type="name" className="form-control" {...register('name', {required: 'Your name is required'})} placeholder="Name" />
                              <span className="error">{errors.name && errors.name.message}</span>
                    </div>
                    <div className="form-row">
                               <label htmlFor="email">Email</label>
                              <input type="email" className="form-control" {...register('email', {required: 'Your email is required'})} placeholder="Email address" />
                               <span className="error">{errors.email && errors.email.message}</span>
                    </div>
                 <div className="form-row">
                           <label htmlFor="email">Password</label>
                           <div className="password-input">
                                        <input type={eyeSwitch ? "text" : "password"} {...register('password', { required: 'This input is required', minLength: 8})} className="form-control-password" placeholder="Password" />
                                        <div className="eye-switch" onClick={() => setEyeSwitch(!eyeSwitch)}>
                                                  { eyeSwitch ? <span><VscEye /></span> : <span><VscEyeClosed /></span>}
                                        </div>   
                            </div>     
                            <span className="error">{errors.password && errors.password.message}</span>                                             
                    </div>
                    <div className="form-row">
                           <label htmlFor="email">Confirm Password</label>
                           <div className="password-input">
                                        <input type={eyeSwitch2 ? "text" : "password"} className="form-control-password" placeholder="Confirm Password" {...register('confirmPassword', {
                                                  required: true,
                                                  validate: val => {
                                                         if(watch("password") !== val){
                                                               return "Passwords do not match"
                                                         }
                                                  }
                                        })} />
                                        <div className="eye-switch" onClick={() => setEyeSwitch2(!eyeSwitch2)}>
                                                  { eyeSwitch2 ? <span><VscEye /></span> : <span><VscEyeClosed /></span>}
                                        </div>                                                                 
                            </div>        
                            <span className="error">{errors.confirmPassword && errors.confirmPassword.message}</span>                                          
                    </div>

                    <div className="form-btn">
                              <button type="submit">Create Account{isPending ? <Loader /> : "" }</button>
                    </div>
                  
             </form>
    </>
  )
}

export default SignupForm