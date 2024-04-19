import styles from '../page.module.css'
const SummaryPart = () => {
  return (
    <div className={styles.summary_part}>
              <div className={styles.weekly_wrap}>
                         <div className={styles.weekly_header}>
                                     <div className="left-col">
                                                <p>My Collection</p>
                                                <h2><span>Ksh.</span>19, 249</h2>
                                     </div>
                                     <div className={styles.right_col}>
                                               <span></span>
                                               <span></span>
                                     </div>
                         </div>
              </div>
              <div className={styles.boxes_wrap}></div>
              <div className={styles.standing_wrap}></div>
    </div>
  )
}

export default SummaryPart