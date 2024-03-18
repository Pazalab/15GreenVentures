import { auth } from "@/auth";
import { Toaster } from "react-hot-toast"
const Dashboard = async() => {

    const session  = await auth();
  return (
    <div>{JSON.stringify(session)}
            <Toaster />
    </div>
  )
}

export default Dashboard