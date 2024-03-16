"use client"
import { useState } from "react"
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { useForm } from "react-hook-form";
import { loginUser } from "@/actions/login";
import { CgDanger } from "react-icons/cg";
const LoginForm = () => {
    const [eyeSwitch, setEyeSwitch] = useState(false);
    const [error,  setError] = useState('error message here')
    const { register, handleSubmit, formState: { errors}, reset} = useForm();

    const login= async(data) => {
           loginUser(data)
               .then(res => {
                          setError(res.error);
               });
    }
  return (
    <>
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
                              <button type="submit">Login</button>
                    </div>
            </form>
            { error !== '' ? 
                   <div className="error-msg">
                               <span><CgDanger /></span>{error}
                   </div>
                     : ''
                   }
    </>
  )
}

export default LoginForm