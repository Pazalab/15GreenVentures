import { IoNotifications } from "react-icons/io5";
import styles from "../page.module.css";
import Image from "next/image";

const ProfileHead = () => {
  return (
    <div className={styles.user_profile_head}>
              <div className={styles.user_col}>
                         <span><IoNotifications /></span>
              </div> 
             <div className={styles.user_col}>
                             <div className={styles.user_profile_texts}>
                                          <h3>Virgil Djik</h3>
                                          <p>Investor</p>
                              </div>
                              <div className={styles.user_profile_image}>
                                      <Image src={'/dum1.jpg'}  sizes="100vw" fill  alt='' />
                           </div>
              </div>
</div>
  )
}

export default ProfileHead