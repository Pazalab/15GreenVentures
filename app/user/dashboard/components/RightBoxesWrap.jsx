import styles from "../page.module.css"
import { IoStopCircle } from "react-icons/io5";
import { BsPiggyBank } from "react-icons/bs";
import { GiTakeMyMoney } from "react-icons/gi";
const RightBoxesWrap = () => {
  return (
    <div className={styles.standing_wrap}>
             <div className={styles.row_moja}>
                       <div className={styles.row_texts}>
                                 <p>Received This Month</p>
                                 <h3><span>Ksh.</span>14,500</h3>
                       </div>
                       <span className={styles.icon}><IoStopCircle /></span>
             </div>
             <div className={styles.row_moja}>
                       <div className={styles.row_texts}>
                                 <p>Cash at Nabo MMF</p>
                                 <h3><span>Ksh.</span>14,500</h3>
                       </div>
                       <span className={styles.icon}><BsPiggyBank /></span>
             </div>
             <div className={styles.row_moja}>
                       <div className={styles.row_texts}>
                                 <p>Cash at Bank</p>
                                 <h3><span>Ksh.</span>1,843</h3>
                       </div>
                       <span className={styles.icon}><GiTakeMyMoney /></span>
             </div>
    </div>
  )
}

export default RightBoxesWrap