"use client"

import { Toaster } from "react-hot-toast"
const { signOut } = require("next-auth/react")

const AdminPage = () => {
  return (
    <>
          <Toaster />
          <div onClick={() => signOut()}>AdminPage Dashboard</div>
    </>
    
  )
}

export default AdminPage