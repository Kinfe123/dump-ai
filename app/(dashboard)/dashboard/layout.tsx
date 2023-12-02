/* eslint-disable tailwindcss/classnames-order */
import { notFound } from "next/navigation"

import { dashboardConfig } from "@/config/dashboard"
import { getCurrentUser } from "@/lib/session"
import { MainNav } from "../../components/main-nav"
import { DashboardNav } from '../../components/nav-dashboard'


import { UserAccountNav } from "../../components/user-account-nav"
interface DashboardLayoutProps {
  children?: React.ReactNode
}
type adminPageType = {
  title: string,
  href:string,
  icon: string,
}

export default async function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  const user = await getCurrentUser()

  if (!user) {
    return notFound()
  }
  let adminPage = {}
  if(user.email === process.env.ADMIN_EMAIL || user.email === process.env.ADMIN_EMAIL_1){

    adminPage = {
     title: "Job Application",
     href: "/dashboard/application",
     icon: "post"
   }
  }

  let currentData = [...dashboardConfig.sidebarNav , adminPage]







  return (
    <div className="text-white/90 flex font-display2 min-h-screen flex-col space-y-6  overflow-x-hidden bg-gradient-to-tl from-black via-zinc-500/30 to-black">

 
      <header className="sticky top-0 z-40 border-b bg-transparent text-white/50">
        <div className="container bg-transparent flex h-16 items-center justify-between py-4">
          <MainNav items={dashboardConfig.mainNav} />
          {/* <Navbar /> */}
          <div className="overflow-x-hidden sticky bg-transparent  ">

          <UserAccountNav currentUser={user} />
          </div>

        </div>
      </header>
      <div className="mt-96 max-w-8xl overflow-hidden flex mx-auto self-center items-center justify-center">
    

      </div>
      <div className="container grid flex-1 gap-12 md:grid-cols-[200px_1fr]">

        <aside className="hidden w-[200px] flex-col md:flex">
          <DashboardNav items={currentData} user= {user} />
        </aside>
        <main className="flex w-full flex-1 flex-col overflow-hidden">
          {children}
        </main>
      </div>
    
    </div>
  )
}