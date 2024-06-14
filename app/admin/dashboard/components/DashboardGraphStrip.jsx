import styles from "../dashboard.module.css"
import TransactionGraph from "./TransactionGraph"
const DashboardGraphStrip = () => {
  return (
    <div className={styles.dashboard_graph_strip}>
            <div className="inner-row-2">
                       <div className={styles.graph_strip_content}>
                                  <div className={styles.graph_strip_col}>
                                              <h2>Financial Overview</h2>
                                                <div className={styles.graph_box}>
                                                         <TransactionGraph />
                                                </div>
                                  </div>
                                  <div className={styles.upcoming_col}>
                                              <h2>News & Events</h2>
                                              <div className={styles.events_col_row}>
                                                         <div className={styles.event_col_moja}>
                                                                    <div className={styles.date}>
                                                                               <h3>18</h3>
                                                                               <span>Jan</span>
                                                                    </div>
                                                                     <div className={styles.event_details}>
                                                                                <h4>Annual General Meeting</h4>
                                                                                <p>Discussing constitutional drafts to be implemented soon.</p>
                                                                     </div>
                                                         </div>

                                                         <div className={styles.event_col_moja}>
                                                                    <div className={styles.date}>
                                                                               <h3>18</h3>
                                                                               <span>Feb</span>
                                                                    </div>
                                                                     <div className={styles.event_details}>
                                                                                <h4>Annual General Meeting</h4>
                                                                                <p>Discussing constitutional drafts to be implemented soon.</p>
                                                                     </div>
                                                         </div>
                                                         <div className={styles.event_col_moja}>
                                                                    <div className={styles.date}>
                                                                               <h3>8</h3>
                                                                               <span>Mar</span>
                                                                    </div>
                                                                     <div className={styles.event_details}>
                                                                                <h4>Annual General Meeting</h4>
                                                                                <p>Discussing constitutional drafts to be implemented soon.</p>
                                                                     </div>
                                                         </div>
                                                         <div className={styles.event_col_moja}>
                                                                    <div className={styles.date}>
                                                                               <h3>18</h3>
                                                                               <span>Apr</span>
                                                                    </div>
                                                                     <div className={styles.event_details}>
                                                                                <h4>Annual General Meeting</h4>
                                                                                <p>Discussing constitutional drafts to be implemented soon.</p>
                                                                     </div>
                                                         </div>
                                              </div>
                                  </div>
                       </div>
            </div>
    </div>
  )
}

export default DashboardGraphStrip