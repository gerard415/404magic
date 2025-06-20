import React from 'react'
import { Route, Routes } from 'react-router'
import LandingPageLayout from './layouts/LandingPageLayout'
import HomePage from './pages/home/HomePage'
import TemplatesPage from './pages/templates/TemplatesPage'
import DashboardLayout from './layouts/DashboardLayout'
import DashboardOverview from './pages/dashboard/DashboardOverview'
import Dashboard404pages from './pages/dashboard/Dashboard404pages'
import DashboardAnalytics from './pages/dashboard/DashboardAnalytics'
import DashboardSettings from './pages/dashboard/DashboardSettings'
import Create404page from './pages/dashboard/Create404page'
import DashboardIntegrations from './pages/dashboard/DashboardIntegrations'

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
            <Route path='/dashboard/404pages' element={<Dashboard404pages/>} />
            <Route path='/dashboard/404pages/create' element={<Create404page/>} />
            <Route path='/dashboard/analytics' element={<DashboardAnalytics/>} />
            <Route path='/dashboard/integrations' element={<DashboardIntegrations/>} />
            <Route path='/dashboard/settings' element={<DashboardSettings/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App