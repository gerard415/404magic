import React from 'react'
import Navbar from '../components/layout/Navbar'
import { Outlet } from 'react-router'
import Footer from '../components/layout/Footer'

type Props = {}

const LandingPageLayout = (props: Props) => {
  return (
    <div className=' max-w-screen min-h-screen font-manrope overflow-x-hidden px-10'>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default LandingPageLayout