import React from 'react'
import { Outlet } from 'react-router'

type Props = {}

const DashboardLayout = (props: Props) => {
  return (
    <div>
        <Outlet/>
    </div>
  )
}

export default DashboardLayout