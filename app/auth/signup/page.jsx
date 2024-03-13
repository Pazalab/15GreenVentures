import styles from "./page.module.css"
import Link from "next/link"
import Image from "next/image"
import { dm_sans } from "@/app/layout"
import Form from "./Form"
import { FcGoogle } from "react-icons/fc";
const Signup = () => {
  return (
    <div className={styles.signup_wrapper} >
              <div className={styles.signup_content}>
                        <div className={styles.form_section}>
                                <Link href={'/'} className='logo'>
                                        <Image src={'/logo.png'}  sizes="100vw" fill style={{objectFit: 'contain'}} alt='' />
                                  </Link>

                                  <div className={styles.form_content}>
                                             <h2 className={dm_sans.className}>Create an Account</h2>
                                             <p>Join hands with others to insure your future.</p>

                                              <Form />
                                  </div>
                                   <div className="extra-form-content">
                                              <span className="line"></span>
                                              <div className="extra-btn">
                                                         <span><FcGoogle /></span>
                                                         <p>Continue with Google</p>
                                              </div>

                                              <p className="redirect">Already have an account? <Link href={'/auth/login'}>Login</Link></p>
                                   </div>
                        </div>
                        <div className={styles.signup_image}>
                                     <Image src={'/boys1.jpg'}  sizes="100vw" fill style={{objectFit: 'cover'}} alt='' />
                        </div>
              </div>
    </div>
  )
}

export default Signup