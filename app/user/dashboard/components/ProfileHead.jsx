import { IoNotifications } from "react-icons/io5";
import styles from "../page.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useProfileFetch } from "@/hooks/profileFetch";
import { signOut } from "next-auth/react";
import { useProfileStore } from "@/lib/store";

const ProfileHead = () => {
     const [profile, setProfile] = useState();
     const { setUserProfile, userProfile } = useProfileStore();
  
    const { data } = useProfileFetch();

      useEffect(() => {
            if(data){
                  setProfile(data)
                  //localStorage.setItem("Profile", JSON.stringify(data))
                  setUserProfile(data)
            }
      }, [data, setUserProfile])
  return (
    <div className={styles.user_profile_head}>
              <div className={styles.user_col}>
                         <span><IoNotifications /></span>
                         <h3 onClick={signOut}>Sign Out</h3>
              </div> 
             <div className={styles.user_col}>
                             <div className={styles.user_profile_texts}>
                                          <h3>{userProfile && userProfile.name}</h3>
                                          <p>{userProfile && userProfile.role}</p>
                              </div>
                              <div className={styles.user_profile_image}>
                                     { userProfile && userProfile.image ? <Image src={userProfile.image} sizes="100vw" fill alt="" /> : ""}
                                      {/* <Image src={profile && `${profile.image}`}  sizes="100vw" fill  alt='' /> */}
                           </div>
              </div>
</div>
  )
}

export default ProfileHead