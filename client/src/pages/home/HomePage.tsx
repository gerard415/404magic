import React from 'react'
import Hero from '../../components/landing/Hero'
import HowItWorks from '../../components/landing/HowItWorks'

type Props = {}

const HomePage = (props: Props) => {
  return (
    <div>
      <Hero/>
      <HowItWorks/>
    </div>
  )
}

export default HomePage