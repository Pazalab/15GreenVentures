import styles from "../members.module.css"
import Link from "next/link"
import { FiPlus } from "react-icons/fi"
import { dm_sans } from "@/app/layout"
import Image from "next/image"

const MembersBody = () => {
  return (
    <div className={styles.dashboard_wrap}>
        <div className={styles.dashboard_strip}>
              <div className="inner-row-2">
                       <div className={styles.strip_content}>
                                <div className={styles.dashboard_col}>
                                        <h2 className={dm_sans.className}>Agulu Members</h2>
                                  </div>
                                   <div className={styles.dashboard_col}>
                                         <Link href={"/"}><span><FiPlus /></span>Add Member</Link>
                                  </div>
                      </div>
              </div>
       </div>
       <div className={styles.members_wrapper_table}>
            <div className="inner-row-2">
                 <table>
                       <thead>
                               <tr>
                                       <th>Member Name</th>
                                       <th>Months participated</th>
                                       <th>Total Contribution</th>
                                       <th>Monthly Amount</th>
                                       <th>Credit Amount</th>
                                       <th>Status</th>
                                       <th>Date Joined</th>
                                       <th>Actions</th>
                               </tr>
                        </thead>
                        <tbody>
                                  <tr>
                                          <td>
                                                  <div className={styles.user_details}>
                                                             <div className={styles.image_box}>
                                                                         <Image  src={"/dum2.jpg"} alt="" sizes="100vw" fill />
                                                             </div>
                                                             <div className={styles.details_box}>
                                                                     <h3>Job Simiyu</h3>
                                                                     <p>jobsimiyu@gmail.com</p>
                                                             </div>
                                                  </div>
                                          </td>
                                          <td>6</td>
                                          <td><span className={styles.money}>kshs.</span>6000</td>
                                          <td><span className={styles.money}>kshs.</span>1000</td>
                                          <td><span className={styles.money}>kshs.</span>0</td>
                                          <td><span className={styles.active}>Active</span></td>
                                          <td>12/1/2024</td>
                                          <td><span className={styles.icon}></span>Manage</td>
                                  </tr>
                                  <tr>
                                          <td>
                                                  <div className={styles.user_details}>
                                                             <div className={styles.image_box}>
                                                                         <Image  src={"/dum2.jpg"} alt="" sizes="100vw" fill />
                                                             </div>
                                                             <div className={styles.details_box}>
                                                                     <h3>Job Simiyu</h3>
                                                                     <p>jobsimiyu@gmail.com</p>
                                                             </div>
                                                  </div>
                                          </td>
                                          <td>6</td>
                                          <td><span className={styles.money}>kshs.</span>6000</td>
                                          <td><span className={styles.money}>kshs.</span>1000</td>
                                          <td><span className={styles.money}>kshs.</span>0</td>
                                          <td><span className={styles.active}>Active</span></td>
                                          <td><span className={styles.icon}></span>Manage</td>
                                  </tr>
                        </tbody>
                </table>
              </div>
        </div>
    </div>
  )
}

export default MembersBody