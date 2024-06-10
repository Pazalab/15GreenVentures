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

const Topbar = () => {

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
                                                               <li><Link href={"/"}><span><RxDashboard /></span>Dashboard</Link></li>
                                                               <li><Link href={"/"}><span><HiOutlineUsers /></span>Members</Link></li>
                                                               <li><Link href={"/"}><span><GiMoneyStack /></span>Finance</Link></li>
                                                               <li><Link href={'/'}><span><GiSettingsKnobs /></span>Settings</Link></li>
                                                       </ul>
                                           </div>

                                          <div className={styles.right_nav}>
                                                     <div className={styles.box}>
                                                               <span><IoSearchOutline /></span>
                                                     </div>
                                                     <div className={styles.box}>
                                                               <span><IoMdNotificationsOutline /></span>
                                                     </div>

                                                     <div className={styles.profile}>
                                                               <div className={styles.profile_image}>
                                                                       <Image src={'/dum1.jpg'}  sizes="100vw" fill style={{objectFit: 'cover'}} alt='' />
                                                               </div>
                                                               <h2>Albert Smith <span><GoChevronDown /></span></h2>                                                 
                                                     </div>
                                          </div>
                                 </div>
                       </div>
              </div>
      )
}

export default Topbar