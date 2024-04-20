import styles from "../page.module.css"
import { PiChartDonutFill, PiChartBarFill } from "react-icons/pi";
import { MdArrowUpward, MdArrowDownward } from "react-icons/md";
import { dm_sans } from '@/app/layout';
import Link from 'next/link';

const MiddleBoxesWrap = () => {
  return (
    <div className={styles.boxes_wrap}>
                           <div className={styles.wrap_inner}>
                                      <div className={styles.box_column}>
                                                 <div className={styles.box_column_header}>
                                                          <span className={styles.chart}><PiChartDonutFill /></span>
                                                          <div>
                                                                  <p>Profit</p>
                                                                  <h5>4.5% <span><MdArrowUpward /></span></h5>
                                                          </div>
                                                 </div>
                                                  <h2><span>Ksh.</span>1,088</h2>
                                                  <p>Monthly Turnover</p>
                                      </div>
                                      <div className={styles.box_column}>
                                                   <div className={styles.box_column_header}>
                                                          <span className={styles.chart}><PiChartBarFill /></span>
                                                          <div>
                                                                  <p>Loss</p>
                                                                  <h5>1.5% <span><MdArrowDownward /></span></h5>
                                                          </div>
                                                 </div>
                                                  <h2><span>Ksh.</span>4,385</h2>
                                                  <p>Down from Last Month</p>
                                      </div>
                           </div>
                           <div className={styles.members_box}>
                                     <div className={styles.members_header}>
                                              <div className={styles.members_texts}>
                                                        <p>Active</p>
                                                        <h3>Members Contributing</h3>
                                              </div>
                                              <Link href={'/'}>View All</Link>
                                     </div>
                                     <div className={styles.member_list_row}>
                                                 <span>VN</span>
                                                 <span>ST</span>
                                                 <span>BN</span>
                                                 <span>MR</span>
                                                 <span>PB</span>
                                                 <span className={styles.last_one}>+34</span>
                                     </div>
                           </div>
              </div>
  )
}

export default MiddleBoxesWrap