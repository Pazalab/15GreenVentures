
import { CgClose } from "react-icons/cg"
import styles from "../user.module.css"
import CreditSummary from "../dashboard/components/CreditSummary"
import NameCard from "../dashboard/components/NameCard"
import ProfileHead from "../dashboard/components/ProfileHead"
import { useContext } from "react"
import { greenBarContext } from "../dashboard/components/greenbar"

const MobileGreenBar = () => {
    const [greenbar, setGreenBar] = useContext(greenBarContext)
  return (
    <div className={greenbar ? styles.mobile_greenbar_active : styles.mobile_greenbar}>
             <div className={styles.green_wrap_context}>
                       <span onClick={() => setGreenBar(false)} className={styles.close_btn}><CgClose /></span>
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