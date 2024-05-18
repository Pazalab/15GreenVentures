"use client"
import styles from "../user.module.css"
import Link from "next/link"
import Image from "next/image"
import { dm_sans, khumb_sans } from "@/app/layout"
import { CiSearch } from "react-icons/ci";
import { usePathname } from "next/navigation";
import { CgMenu } from "react-icons/cg";
import { BsUiRadiosGrid } from "react-icons/bs";
import MobileNavBar from "./MobileNavBar"
import { useContext, useState } from "react"
import { greenBarContext } from "../dashboard/components/greenbar"

const Topbar = () => {
    const [ mobileStatus, SetMobileStatus ] = useState(false)
    const path = usePathname();
    const realPath = path.slice(6);

    const [greenbar, setGreenBar] = useContext(greenBarContext)
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
                                        <li><Link href={'/user/dashboard'} className={realPath === 'dashboard' ? styles.active : ''}>Home</Link></li>
                                        <li><Link href={'/user/settings'} className={realPath === 'settings' ? styles.active : ''}>Settings</Link></li>
                                        <li><Link href={'/help'} className={realPath === 'help' ? styles.active : ''} >Help</Link></li>            
                             </ul>
                              <div className={styles.searchbar}>
                                      <input type="text"  className={khumb_sans.className} placeholder="Search reports"/>
                                      <span><CiSearch /></span>
                              </div>
                 </div>
                 <div className={styles.mobile_triggers}>
                              <span><CiSearch /></span>
                              <span className={styles.mobile_wrapper}>
                                        <span  onClick={() => SetMobileStatus(!mobileStatus)}><BsUiRadiosGrid /></span>
                                        { mobileStatus ? <MobileNavBar /> : ""}
                              </span>
                              <span onClick={() => setGreenBar(true)}><CgMenu /></span>
                 </div>

       </div>         
  )
}

export default Topbar