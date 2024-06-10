import styles from "../dashboard.module.css"
const DashboardGraphStrip = () => {
  return (
    <div className={styles.dashboard_graph_strip}>
            <div className="inner-row-2">
                       <div className={styles.graph_strip_content}>
                                  <div className={styles.graph_strip_col}>
                                              <h2>Financial Overview</h2>
                                  </div>
                                  <div className={styles.upcoming_col}>
                                              <h3>News & Events</h3>
                                  </div>
                       </div>
            </div>
    </div>
  )
}

export default DashboardGraphStrip