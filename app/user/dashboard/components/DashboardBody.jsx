"use client"
import { useState } from "react";
import styles from "../page.module.css"
import CreditSummary from "./CreditSummary";
import MainNavbar from "./MainNavbar";
import NameCard from "./NameCard";
import ProfileHead from "./ProfileHead";
import RecentTransactions from "./RecentTransactions";
import SummaryPart from "./SummaryPart";
import Topbar from "./Topbar";
import { greenBarContext } from "./greenbar";
import MobileGreenBar from "./MobileGreenBar";

const DashboardBody = () => {
   const [greenbar, setGreenBar ] = useState(false)
  return (
    <div className={styles.dashboard_section}>
               <div className={styles.left_column}>
                         <div className={styles.column_inner}>
                                   <greenBarContext.Provider value={[greenbar, setGreenBar]}>
                                            <Topbar />
                                            <MobileGreenBar />
                                   </greenBarContext.Provider>
                                    <MainNavbar />
                                    <SummaryPart /> 
                                    <RecentTransactions />
                         </div>
               </div>
               <div className={styles.right_column}>
                             <ProfileHead /> 
                             <NameCard /> 
                             <CreditSummary />
               </div>
    </div>
  )
}

export default DashboardBody