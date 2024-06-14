import Link from "next/link"
import styles from "../dashboard.module.css"
import { FiPlus } from "react-icons/fi";
import { dm_sans } from "@/app/layout";
import Image from "next/image";
import DashboardGraphStrip from "./DashboardGraphStrip";
import TransactionStrip from "./TransactionStrip";


const DashboardBody = () => {
  return (
    <div className={styles.dashboard_body}>
              <div className={styles.dashboard_strip}>
                        <div className="inner-row-2">
                                  <div className={styles.strip_content}>
                                            <div className={styles.dashboard_col}>
                                                    <h3>Hello Albert,</h3>
                                                    <h2 className={dm_sans.className}>Good Evening</h2>
                                              </div>
                                              <div className={styles.dashboard_col}>
                                                     <Link href={"/"}><span><FiPlus /></span>Add Record</Link>
                                              </div>
                                  </div>
                        </div>
              </div>

              <div className={styles.dashboard_highlight}>
                         <div className="inner-row-2">
                                     <div className={styles.highlight_content}>
                                               <div className={styles.highlight_box}>
                                                          <div className={styles.box_icon}>
                                                                    <div className={styles.ico}>
                                                                            <Image src={'/members.png'}  sizes="100vw" fill style={{objectFit: 'contain'}} alt='' />
                                                                    </div>
                                                          </div>
                                                          <h4>Registered Members</h4>
                                                          <h3 className={dm_sans.className}>25</h3>
                                               </div>
                                                <div className={styles.highlight_box}>
                                                          <div className={styles.box_icon}>
                                                                    <div className={styles.ico}>
                                                                            <Image src={'/monthly.png'}  sizes="100vw" fill style={{objectFit: 'contain'}} alt='' />
                                                                    </div>
                                                          </div>
                                                          <h4>Cash Inflow this Month</h4>
                                                          <h3 className={dm_sans.className}><span>Ksh.</span>15,500</h3>
                                                 </div>
                                                 <div className={styles.highlight_box}>
                                                          <div className={styles.box_icon}>
                                                                    <div className={styles.ico}>
                                                                            <Image src={'/resolve.png'}  sizes="100vw" fill style={{objectFit: 'contain'}} alt='' />
                                                                    </div>
                                                          </div>
                                                          <h4>Resolved Issues</h4>
                                                          <h3 className={dm_sans.className}>10</h3>
                                                 </div>
                                                 <div className={styles.highlight_box}>
                                                          <div className={styles.box_icon}>
                                                                    <div className={styles.ico}>
                                                                            <Image src={'/bank.png'}  sizes="100vw" fill style={{objectFit: 'contain'}} alt='' />
                                                                    </div>
                                                          </div>
                                                          <h4>Total Amount in MMF</h4>
                                                          <h3 className={dm_sans.className}><span>Ksh.</span>75,000</h3>
                                                 </div>
                                     </div>
                         </div>
              </div>

               <div className={styles.dashboard_body_wrapper}>
                        <DashboardGraphStrip />
                         <TransactionStrip />
               </div>
    </div>
  )
}

export default DashboardBody