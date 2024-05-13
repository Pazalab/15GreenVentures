import styles from "../page.module.css";
import { RiVerifiedBadgeFill } from "react-icons/ri";
const NameCard = () => {
  return (
    <div className={styles.name_card}>
                 <div className={styles.name_card_texts}>
                            <h3>Virgil Van <br /> Djik</h3>
                            <p>Popular Investor <span><RiVerifiedBadgeFill /></span></p>
                 </div>

                 <div className={styles.name_cols}>
                             <div className={styles.name_col_moja}>
                                       <h5>Months</h5>
                                        <p>4</p>
                             </div>
                             <div className={styles.name_col_moja}>
                                         <h5>Target</h5>
                                         <p><span>ksh.</span>12,000</p>
                             </div>
                             <div className={styles.name_col_moja}>
                                          <h5>Credit</h5>
                                          <p><span>ksh.</span>6,000</p>
                             </div>
                 </div>
    </div>
  )
}

export default NameCard