import styles from '../page.module.css'
import MiddleBoxesWrap from './MiddleBoxesWrap'
import RightBoxesWrap from './RightBoxesWrap'
import WeeklyGraph from './WeeklyGraph'


const SummaryPart = () => {
  return (
    <div className={styles.summary_part}>
              <div className={styles.weekly_wrap}>
                         <div className={styles.weekly_header}>
                                     <div className="left-col">
                                                <p>My Collection</p>
                                                <h2><span>Ksh.</span>11,249</h2>
                                     </div>
                                     <div className={styles.right_col}>
                                               <span></span>
                                               <span></span>
                                     </div>
                         </div>
                         <div className={styles.graph_part}>
                                  <WeeklyGraph />
                        </div>
              </div>
              <div className={styles.summary_extra}>
                         <MiddleBoxesWrap />
                         <RightBoxesWrap />
              </div>
              
    </div>
  )
}

export default SummaryPart