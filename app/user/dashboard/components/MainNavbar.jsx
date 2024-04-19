"use client"
import Link from "next/link"
import styles from "../page.module.css"
import { usePathname } from "next/navigation"
const MainNavbar = () => {
    const path = usePathname();
    const realPath = path.slice(6);
  return (
    <div className={styles.main_navigation}>
              <div className={styles.main_nav}>
                         <ul>
                                   <li><Link href={'/'} className={ realPath === 'dashboard' ? styles.active  : ''}>Overview</Link></li>
                                   <li><Link href={'/'} className={ realPath === 'reports' ? styles.active : ''}>Reports</Link></li>
                                   <li><Link href={'/'} className={ realPath === 'members' ? styles.active : ''}>Members</Link></li>
                                   <li><Link href={'/'} className={ realPath === 'transactions' ? styles.active : ''}>Transactions</Link></li>
                         </ul>
              </div>
              <h4>Manage</h4>
    </div>
  )
}

export default MainNavbar