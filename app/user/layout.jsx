"use client"
import styles from "./dashboard/page.module.css"
import ProfileHead from "./dashboard/components/ProfileHead";
import NameCard from "./dashboard/components/NameCard";
import CreditSummary from "./dashboard/components/CreditSummary";
import { greenBarContext } from "./dashboard/components/greenbar";
import Topbar from "./(common)/Topbar";
import MobileGreenBar from "./(common)/MobileGreenBar";
import { useState } from "react";

export default function DashboardLayout({ children }) {
  const [greenbar, setGreenBar ] = useState(false)
    return (
      <html lang="en">
               <body>
                        <div className={styles.dashboard_section}>
                               <div className={styles.left_column}>
                                     <div className={styles.column_inner}>
                                             <greenBarContext.Provider value={[greenbar, setGreenBar]}>
                                                    <Topbar />
                                                     <MobileGreenBar />
                                            </greenBarContext.Provider>
                                              { children}
                                     </div>
                               </div>

                               <div className={styles.right_column}>
                                             <ProfileHead /> 
                                             <NameCard /> 
                                             <CreditSummary />
                               </div>
                        </div>
               </body>
      </html>
    );
  }