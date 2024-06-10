
import { Toaster } from "react-hot-toast"
import DashboardBody from "./components/DashboardBody"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
export default async function Dashboard(){
  return (
    <>
            <Toaster />
            <DashboardBody />
    </>
  )
}
