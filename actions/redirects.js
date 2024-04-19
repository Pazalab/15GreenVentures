"use server"

import { redirect } from "next/navigation"

export async function navigateToLogin() {
       redirect('/auth/login')
}

export async function navigateToUserDashboard(){
        redirect("/user/dashboard")
}

export async function navigateToAdminDashboard() {
       redirect('/admin/dashboard')
}