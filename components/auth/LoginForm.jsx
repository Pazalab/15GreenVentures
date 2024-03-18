"use client"
import { useState, useTransition } from "react"
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { useForm } from "react-hook-form";
import { loginUser } from "@/actions/login";
import toast, { Toaster } from "react-hot-toast";
import Loader from "../Loader";
const LoginForm = () => {
    const [eyeSwitch, setEyeSwitch] = useState(false);
    const { register, handleSubmit, formState: { errors}, reset} = useForm();
    const [ isPending, startTransition ] = useTransition();

    const login= async(data) => {
           startTransition(() => {
                  loginUser(data).then(res => {
                          if(res.error){
                                  toast.error(res.error, { id: 'login-error'});
                          }
                          if(res.success){
                                 toast.error(res.success, { id: 'login-message'});
                          }
                  })
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
                              <button type="submit">Login{isPending ? <Loader /> : "" }</button>
                    </div>
            </form>
    </>
  )
}

export default LoginForm