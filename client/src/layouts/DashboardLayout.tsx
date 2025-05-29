import React from 'react'
import { Outlet } from 'react-router'
import Sidebar from '../components/layout/Sidebar'
import DashboardNavbar from '../components/layout/DashboardNavbar'


type Props = {}

const DashboardLayout = (props: Props) => {
  return (
    <main className='dashboard-layout flex overflow-hidden'>
          <Sidebar/>
          <div className='flex-1 overflow-y-auto'>
            <DashboardNavbar/>
            <Outlet/>
          </div>
    </main>
  )
}

export default DashboardLayout