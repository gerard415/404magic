import React from 'react'
import { Route, Routes } from 'react-router'
import LandingPageLayout from './layouts/LandingPageLayout'
import HomePage from './pages/home/HomePage'

type Props = {}

const App = (props: Props) => {
  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPageLayout/>}>
            <Route index element={<HomePage/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App