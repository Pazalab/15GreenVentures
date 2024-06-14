import Link from "next/link"
import styles from "../dashboard.module.css"
import Image from "next/image"

const MoneyTransactions = () => {
  return (
    <div className={styles.recent_transaction_section}>
              <div className={styles.recent_transaction_header}>
                          <h3>Recent Transactions</h3>
                          <Link href={'/'}>View All</Link>
              </div>
              <div className={styles.recent_transaction_table}>
                         <table>
                                  <thead>
                                           <tr>
                                                 <th>Name</th>
                                                 <th>Type</th>
                                                 <th>Date</th>
                                                 <th>Amount</th>
                                                 <th>Status</th>
                                           </tr>
                                  </thead>
                                  <tbody>
                                             <tr>
                                                     <td>
                                                               <div className={styles.transact_profile}>
                                                                           <div className={styles.profile_image}>
                                                                                     <Image src={'/boys2.jpg'} alt="" sizes="100vw" fill style={{objectFit: 'cover'}} /> 
                                                                           </div>
                                                                           <h3>Don Richards</h3>
                                                               </div>
                                                     </td>
                                                     <td>
                                                               <h3>Receipt</h3>
                                                     </td>
                                                     <td>
                                                                 <div className={styles.date}>
                                                                         <h5>Oct 30, 2024</h5>
                                                                         <p>10:32 PM</p>
                                                                 </div>
                                                       </td>
                                                       <td>
                                                               <h5><span>Ksh.</span>2,000</h5>
                                                       </td>
                                                       <td>
                                                                  <div className={styles.transact_status}>
                                                                          <h6>Completed</h6>
                                                                  </div>
                                                        </td>
                                             </tr>
                                             <tr>
                                                     <td>
                                                               <div className={styles.transact_profile}>
                                                                           <div className={styles.profile_image}>
                                                                                     <Image src={'/dum1.jpg'} alt="" sizes="100vw" fill style={{objectFit: 'cover'}} /> 
                                                                           </div>
                                                                           <h3>Willys Kodiyo</h3>
                                                               </div>
                                                     </td>
                                                     <td>
                                                               <h3>Receipt</h3>
                                                     </td>
                                                     <td>
                                                                 <div className={styles.date}>
                                                                         <h5>Aug 30, 2024</h5>
                                                                         <p>10:32 PM</p>
                                                                 </div>
                                                       </td>
                                                       <td>
                                                               <h5><span>Ksh.</span>12,500</h5>
                                                       </td>
                                                       <td>
                                                                  <div className={styles.transact_status}>
                                                                          <h6>Completed</h6>
                                                                  </div>
                                                        </td>
                                             </tr>
                                             <tr>
                                                     <td>
                                                               <div className={styles.transact_profile}>
                                                                           <div className={styles.profile_image}>
                                                                                     <Image src={'/dum2.jpg'} alt="" sizes="100vw" fill style={{objectFit: 'cover'}} /> 
                                                                           </div>
                                                                           <h3>Taylor Swift</h3>
                                                               </div>
                                                     </td>
                                                     <td>
                                                               <h3>Receipt</h3>
                                                     </td>
                                                     <td>
                                                                 <div className={styles.date}>
                                                                         <h5>Oct 30, 2024</h5>
                                                                         <p>10:32 PM</p>
                                                                 </div>
                                                       </td>
                                                       <td>
                                                               <h5><span>Ksh.</span>2,500</h5>
                                                       </td>
                                                       <td>
                                                                  <div className={styles.transact_status}>
                                                                          <h6>Completed</h6>
                                                                  </div>
                                                        </td>
                                             </tr>
                                  </tbody>
                         </table>
              </div>
    </div>
  )
}

export default MoneyTransactions