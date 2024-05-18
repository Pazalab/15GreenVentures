"use client"
import Link from "next/link"
import styles from "../user.module.css"
import { usePathname } from "next/navigation";
const MobileNavBar = () => {
    const path = usePathname();
    const realPath = path.slice(6);
  return (
    <div className={styles.mobile_navbar}>
               <ul>
                       <li><Link href={'/'} className={realPath === 'dashboard' ? styles.active : ''}>Home</Link></li>
                       <li><Link href={'/'} className={realPath === 'settings' ? styles.active : ''}>Settings</Link></li>
                       <li><Link href={'/'} className={realPath === 'help' ? styles.active : ''} >Help</Link></li>        
               </ul>
    </div>
  )
}

export default MobileNavBar