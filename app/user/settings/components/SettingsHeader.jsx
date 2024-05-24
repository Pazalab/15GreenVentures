import styles from "../page.module.css"

const SettingsHeader = () => {
  return (
    <div className={styles.settings_header}>
              <h2>Settings</h2>
              <div className={styles.settings_switch_bars}>
                         <ul>
                                <li className={styles.active}>Profile</li>
                                <li>Security</li>
                                <li>Notifications</li>
                         </ul>
              </div>
    </div>
  )
}

export default SettingsHeader