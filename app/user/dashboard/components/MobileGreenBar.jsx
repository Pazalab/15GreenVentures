import { CgClose } from "react-icons/cg"
import styles from "../page.module.css"
import CreditSummary from "./CreditSummary"
import NameCard from "./NameCard"
import ProfileHead from "./ProfileHead"

const MobileGreenBar = () => {
  return (
    <div className={styles.mobile_greenbar}>
             <div className={styles.green_wrap_context}>
                       <span className={styles.close_btn}><CgClose /></span>
                      <div className={styles.green_wrap}>
                                <ProfileHead />
                                <NameCard />
                                <CreditSummary />
                      </div>
             </div>
    </div>
  )
}

export default MobileGreenBar