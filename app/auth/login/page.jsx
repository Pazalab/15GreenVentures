import styles from "./page.module.css"
import Link from "next/link"
import Image from "next/image"
import { dm_sans } from "@/app/layout"
import LoginForm from "../../../components/auth/LoginForm";
import { signIn } from "next-auth/react";
import GoogleButton from "@/components/auth/GoogleButton";
const Login = () => {
  return (
    <div className={styles.login_wrapper}>
              <div className={styles.login_content}>
                      <div className={styles.form_section}>
                                <Link href={'/'} className='logo'>
                                        <Image src={'/logo.png'}  sizes="100vw" fill style={{objectFit: 'contain'}} alt='' />
                                  </Link>

                                  <div className={styles.form_content}>
                                             <h2 className={dm_sans.className}>Sign into Account</h2>
                                             <p>View progress and analytics of investments</p>

                                              <LoginForm />
                                  </div>
                                   <div className="extra-form-content">
                                              <span className="line"></span>
                                              <GoogleButton />

                                              <p className="redirect">Don&apos;t  have an account? <Link href={'/auth/signup'}>Sign Up</Link></p>
                                   </div>
                        </div>
                        <div className={styles.login_image}>
                                     <Image src={'/boys2.jpg'}  sizes="100vw" fill style={{objectFit: 'cover'}} alt='' />
                        </div>
              </div>
    </div>
  )
}

export default Login