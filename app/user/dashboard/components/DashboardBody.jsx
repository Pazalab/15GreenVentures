import MainNavbar from "./MainNavbar";
import RecentTransactions from "./RecentTransactions";
import SummaryPart from "./SummaryPart";

const DashboardBody = () => {
  return (
        <>
                <MainNavbar />
                <SummaryPart /> 
                <RecentTransactions />
        </>
  )
}

export default DashboardBody