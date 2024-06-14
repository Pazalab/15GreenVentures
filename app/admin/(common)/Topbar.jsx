"use client"
import { CgMenuGridO } from "react-icons/cg";
import styles from "../admin.module.css"
import Link from "next/link"
import Image from "next/image"
import { dm_sans } from "@/app/layout"
import { RxDashboard } from "react-icons/rx";
import { HiOutlineUsers } from "react-icons/hi2";
import { GiMoneyStack } from "react-icons/gi";
import { GiSettingsKnobs } from "react-icons/gi";
import { IoSearchOutline } from "react-icons/io5";
import { IoMdNotificationsOutline,  IoIosArrowDown } from "react-icons/io";
import { GoChevronDown } from "react-icons/go";
import { usePathname } from "next/navigation"
import { useCallback, useRef, useEffect, useState } from "react"

const Topbar = () => {
      const path = usePathname();
      const realPath = path.slice(7);
      const profileBoxRef = useRef();
      const [ profileBoxStatus, setProfileBoxStatus ] = useState(false);

      const handleProfileBox = useCallback((e) => {
                if(profileBoxRef.current && !profileBoxRef.current.contains(e.target)){
                         setProfileBoxStatus(false)
                }else{
                        setProfileBoxStatus(true)
                }
      }, [profileBoxRef])

      useEffect(() => {
              document.addEventListener("click", handleProfileBox, true)
      }, [handleProfileBox])


      return (
              <div className={styles.topbar}>
                       <div className={styles.topbar_inner}>
                                 <div className={styles.topbar_content}>
                                           <Link href={'/'} className="logo green">
                                                   <div className="logo_image">
                                                          <Image src={'/pot.png'}  sizes="100vw" fill style={{objectFit: 'contain'}} alt='' />
                                                    </div>
                                                    <h2 className={dm_sans.className}>Agulu<span>.</span></h2>
                                           </Link>

                                           <div className={styles.topbar_nav}>
                                                       <ul>
                                                               <li><Link href={"/admin/dashboard"} className={realPath === "dashboard" ? styles.active : ""}><span><RxDashboard /></span>Dashboard</Link></li>
                                                               <li><Link href={"/admin/members"}  className={realPath === "members" ? styles.active : ""}><span><HiOutlineUsers /></span>Members</Link></li>
                                                               <li><Link href={"/admin/finance"}  className={realPath === "finance" ? styles.active : ""}><span><GiMoneyStack /></span>Finance</Link></li>
                                                               <li><Link href={'/admin/settings'}  className={realPath === "settings" ? styles.active : ""}><span><GiSettingsKnobs /></span>Settings</Link></li>
                                                       </ul>
                                           </div>

                                          <div className={styles.right_nav}>
                                                     <div className={styles.box}>
                                                               <span><IoSearchOutline /></span>
                                                     </div>
                                                     <div className={styles.box}>
                                                               <span><IoMdNotificationsOutline /></span>
                                                     </div>

                                                     <div  className={styles.profile}>
                                                               <div className={styles.profile_box} onClick={() => setProfileBoxStatus(!profileBoxStatus)}>
                                                                         <div className={styles.profile_image}>
                                                                                 <Image src={'/dum1.jpg'}  sizes="100vw" fill style={{objectFit: 'cover'}} alt='' />
                                                                         </div>
                                                                         <h2>Albert Smith <span><GoChevronDown /></span></h2>   
                                                                </div>     

                                                               <div ref={profileBoxRef} className={profileBoxStatus ? `${styles.profile_option_box} ${styles.active}` : styles.profile_option_box}>
                                                                            <h3>My Profile</h3>

                                                                            <h4>Albert Smith</h4>
                                                                            <p>hound@astridicom.bom</p>

                                                                            <Link href={"/admin/settings"}>View Profile</Link>
                                                                </div>                                         
                                                     </div>

                                                     <span className={styles.menu_box_btn}>
                                                              <CgMenuGridO />
                                                     </span>
                                          </div>
                                 </div>
                       </div>
              </div>
      )
}

export default Topbar