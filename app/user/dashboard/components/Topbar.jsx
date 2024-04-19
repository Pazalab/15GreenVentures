"use client"
import styles from "../page.module.css"
import Link from "next/link"
import Image from "next/image"
import { dm_sans, khumb_sans } from "@/app/layout"
import { CiSearch } from "react-icons/ci";
import { usePathname } from "next/navigation";
const Topbar = () => {
    const path = usePathname();
    const realPath = path.slice(6);

  return (
    <div className={styles.topbar}>
                <Link href={'/'} className="logo">
                             <div className="logo_image">
                                    <Image src={'/pot.png'}  sizes="100vw" fill style={{objectFit: 'contain'}} alt='' />
                              </div>
                               <h2 className={dm_sans.className}>Agulu<span>.</span></h2>
                </Link>
                 <div  className={styles.topbar_nav}>
                             <ul>
                                        <li><Link href={'/'} className={realPath === 'dashboard' ? styles.active : ''}>Home</Link></li>
                                        <li><Link href={'/'} className={realPath === 'settings' ? styles.active : ''}>Settings</Link></li>
                                        <li><Link href={'/'} className={realPath === 'help' ? styles.active : ''} >Help</Link></li>            
                             </ul>
                              <div className={styles.searchbar}>
                                      <input type="text"  className={khumb_sans.className} placeholder="Search reports"/>
                                      <span><CiSearch /></span>
                              </div>
                 </div>
       </div>         
  )
}

export default Topbar