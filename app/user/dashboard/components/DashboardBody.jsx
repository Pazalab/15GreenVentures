import styles from "../page.module.css"
import MainNavbar from "./MainNavbar";
import SummaryPart from "./SummaryPart";
import Topbar from "./Topbar";

const DashboardBody = () => {
   
  return (
    <div className={styles.dashboard_section}>
               <div className={styles.left_column}>
                         <div className={styles.column_inner}>
                                    <Topbar />
                                    <MainNavbar />
                                    <SummaryPart /> 
                         </div>
               </div>
               <div className={styles.right_column}></div>
    </div>
  )
}

export default DashboardBody