import { useProfileFetch } from "@/hooks/profileFetch";
import styles from "../page.module.css";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { useEffect, useState } from "react";
const NameCard = () => {
  const { data } = useProfileFetch();
  const [profile, setProfile] = useState();
  useEffect(() => {
         if(data){
              setProfile(data)
              localStorage.setItem("Profile", JSON.stringify(data))
         }
  }, [data])
  const name = profile && profile.name.split(" ")

  return (
    <div className={styles.name_card}>
                 <div className={styles.name_card_texts}>
                              { profile &&  name.length > 2 ?
                                          <h3>{profile && name[0]}<br /> { profile && name[1]}</h3>
                                          :
                                          <h3>{profile && name[0]}  { profile && name[1]}</h3>
                               }
                            <p>Popular {profile && profile.role}<span><RiVerifiedBadgeFill /></span></p>
                 </div>

                 <div className={styles.name_cols}>
                             <div className={styles.name_col_moja}>
                                       <h5>Months</h5>
                                        <p>0</p>
                             </div>
                             <div className={styles.name_col_moja}>
                                         <h5>Target</h5>
                                         <p><span>ksh.</span>12,000</p>
                             </div>
                             <div className={styles.name_col_moja}>
                                          <h5>Credit</h5>
                                          <p><span>ksh.</span>0</p>
                             </div>
                 </div>
    </div>
  )
}

export default NameCard