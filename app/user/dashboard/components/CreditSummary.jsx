"use client"
import { useState } from "react";
import styles from "../page.module.css"
import { GiStumpRegrowth } from "react-icons/gi";
import { IoChevronDownOutline } from "react-icons/io5";
import { GiMoneyStack } from "react-icons/gi";
import { BsCreditCard2FrontFill } from "react-icons/bs";
const CreditSummary = () => {
  const [active , setActive] = useState(false)

  const toggleActive = () => setActive(!active)
  return (
    <div className={styles.credit_summary}>
               <h3>Credit Summary</h3>

               <div className={styles.credit_number}>
                         <div className={styles.credit_icon}>
                                   <span><GiStumpRegrowth /></span>
                         </div>
                         <div className={styles.credit_texts}>
                                     <div className={styles.credit_col}>
                                             <p>Credit Instance</p>
                                             <h2>4</h2>
                                     </div>
                                     <div className={styles.status_col}>
                                                 <h3>Status:</h3>
                                                 <span>Inactive</span>
                                     </div>
                         </div>
               </div>
               <div className={styles.credit_docs}>
                          <div className={active ? styles.credit_docs_header + " " + styles.active : styles.credit_docs_header }>
                                    <div className={styles.docs_col}>
                                             <div className={styles.credit_icon}>
                                                      <span><GiMoneyStack/></span>
                                             </div>    
                                              <div className={styles.credit_col}>
                                                         <p>Successfully Credited</p>
                                                         <h2><span>ksh.</span>34,000</h2>
                                               </div>  
                                      </div>
                                      <div className={active ? styles.toggle_btn + " " + styles.active : styles.toggle_btn} onClick={toggleActive}>
                                                 <span><IoChevronDownOutline /></span>
                                      </div>    
                          </div>
                          <div className={active ? styles.credit_initials + " " + styles.active : styles.credit_initials}>
                                     <div className={styles.credit_box}>
                                                <p>Interest Generated</p>
                                                <h4><span>ksh.</span>1,800</h4>
                                     </div>
                                     <div className={styles.credit_box}>
                                               <p>Amount Paid</p>
                                               <h4><span>ksh.</span>32,000</h4>
                                     </div>
                          </div>
               </div>
               <div className={styles.credit_number}>
                         <div className={styles.credit_icon}>
                                   <span><BsCreditCard2FrontFill /></span>
                         </div>
                         <div className={styles.credit_texts}>
                                     <div className={styles.credit_col}>
                                             <p>Pending Balance</p>
                                             <h2>445</h2>
                                     </div>
                         </div>
               </div>
    </div>
  )
}

export default CreditSummary