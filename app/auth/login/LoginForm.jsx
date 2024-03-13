"use client"
import { useState } from "react"
import { VscEye, VscEyeClosed } from "react-icons/vsc";
const LoginForm = () => {
    const [eyeSwitch, setEyeSwitch] = useState(false);
  return (
    <>
            <form>
                    <div className="form-row">
                               <label htmlFor="email">Email</label>
                              <input type="email" className="form-control" placeholder="Email address" />
                    </div>
                    <div className="form-row">
                           <label htmlFor="email">Password</label>
                           <div className="password-input">
                                        <input type={eyeSwitch ? "text" : "password"} className="form-control-password" placeholder="Password" />
                                        <div className="eye-switch" onClick={() => setEyeSwitch(!eyeSwitch)}>
                                                  { eyeSwitch ? <span><VscEye /></span> : <span><VscEyeClosed /></span>}
                                        </div>                                                                 
                            </div>                                                  
                    </div>
                    <div className="form-btn">
                              <button type="submit">Create Account</button>
                    </div>
            </form>
    </>
  )
}

export default LoginForm