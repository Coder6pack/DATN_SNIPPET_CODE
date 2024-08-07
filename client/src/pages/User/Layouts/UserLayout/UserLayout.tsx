// import { Outlet } from 'react-router-dom'
/* eslint-disable import/no-unresolved */

import { Outlet } from 'react-router-dom'
import UserSideNav from '../../components/UserSideNav'
import Header from '@/components/Header'
import { Toaster } from '@/components/ui/toaster'

export default function UserLayout() {
  return (
    <div className='flex min-h-screen w-full flex-col bg-muted/40'>
      <UserSideNav />
      <div className='flex flex-col sm:gap-4 sm:py-4 sm:pl-14'>
        <Header />
        <main className='grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8'>
          <Outlet />
        </main>
      </div>
      <Toaster />
    </div>
  )
}
