import React from 'react'
import Navbar from '../components/layout/Navbar'
import { Outlet } from 'react-router'
import Footer from '../components/layout/Footer'

type Props = {}

const LandingPageLayout = (props: Props) => {
  return (
    <div className='root-layout'>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default LandingPageLayout