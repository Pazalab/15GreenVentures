import styles from "../dashboard.module.css"
import MoneyTransactions from "./MoneyTransactions"

const TransactionStrip = () => {
  return (
    <div className={styles.transaction_strip_row}>
              <div className="inner-row-2">
                         <div className={styles.transaction_strip_content}>
                                   <MoneyTransactions />
                         </div>
              </div>
    </div>
  )
}

export default TransactionStrip