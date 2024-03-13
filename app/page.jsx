import styles from "./page.module.css";
import Link from "next/link"
import Image from "next/image"
import { dm_sans } from "./layout";

export default function Home() {
  return (
    <main className={styles.main}>
              <header>
                          <div className='inner-row'>
                                    <div className={styles.header_content}>
                                              <Link href={'/'} className={styles.logo}>
                                                       <Image src={'/logo.png'}  sizes="100vw" fill style={{objectFit: 'contain'}} alt='' />
                                              </Link>

                                            <div className={styles.header_btns}>
                                                               <Link href={'/auth/login'}>Login</Link>
                                                     <Link href={'/auth/signup'}>Sign Up</Link>
                                            </div>
                                    </div>
                          </div>    
              </header>
              <div className={styles.hero_section}>
                         <div className='inner-row'>
                                     <div className='hero-content'>
                                                  <div className={styles.hero_texts}>
                                                           <h1 className={dm_sans.className}>Fostering <span>Growth</span> Through Unity & <span>Partnerships</span>.</h1>
                                                           <p>Welcome to 15Green Ventures, where we combine expertise of like-minded individuals to venture into ideas aimed at growing and diversing members&apos; financial portfolio.</p>
                                                           <Link href="/auth/signup">Get Started</Link>
                                                  </div>
                                     </div>
                         </div>
              </div>

              <div className={styles.copyright_section}>
                       <p>Copyright &copy; { new Date().getFullYear()} All rights reserved. Powered by <Link target="_blank"  href={'https://pazalab.com'}>Pazalab</Link></p>
              </div>
    </main>
  );
}
