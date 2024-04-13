"use client"

import { Toaster } from "react-hot-toast"
import { signOut } from "next-auth/react"
const Dashboard = () => {
  return (
    <div>
            <Toaster />
            <button onClick={() => signOut()}>Sign Out</button>
    </div>
  )
}

export default Dashboard