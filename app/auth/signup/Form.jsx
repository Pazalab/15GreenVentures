"use client"
import { useState } from "react"
import { VscEye, VscEyeClosed } from "react-icons/vsc";
const Form = () => {
    const [eyeSwitch, setEyeSwitch] = useState(false);
    const [eyeSwitch2, setEyeSwitch2] = useState(false);
  return (
    <>
          <form>
                    <div className="form-row">
                              <label htmlFor="name">Full Name</label>
                              <input type="name" className="form-control" placeholder="Name" />
                    </div>
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
                    <div className="form-row">
                           <label htmlFor="email">Confirm Password</label>
                           <div className="password-input">
                                        <input type={eyeSwitch2 ? "text" : "password"} className="form-control-password" placeholder="Confirm Password" />
                                        <div className="eye-switch" onClick={() => setEyeSwitch2(!eyeSwitch2)}>
                                                  { eyeSwitch2 ? <span><VscEye /></span> : <span><VscEyeClosed /></span>}
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

export default Form