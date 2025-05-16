import React from 'react'
import { Route, Routes } from 'react-router'
import LandingPageLayout from './layouts/LandingPageLayout'
import HomePage from './pages/home/HomePage'
import TemplatesPage from './pages/templates/TemplatesPage'
import DashboardLayout from './layouts/DashboardLayout'
import DashboardOverview from './pages/dashboard/DashboardOverview'

type Props = {}

const App = (props: Props) => {
  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPageLayout/>}>
            <Route index element={<HomePage/>} />
            <Route path='/templates' element={<TemplatesPage/>} />
        </Route>
        <Route path='/dashboard' element={<DashboardLayout/>}>
            <Route index  element={<DashboardOverview/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App