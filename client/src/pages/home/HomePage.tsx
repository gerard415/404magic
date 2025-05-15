import React from 'react'
import Hero from '../../components/landing/Hero'
import HowItWorks from '../../components/landing/HowItWorks'
import ValueProposition from '../../components/landing/ValueProposition'
import Testimonials from '../../components/landing/Testimonials'
import Featured from '../../components/landing/Featured'
import FinalCTA from '../../components/landing/FinalCTA'
import Newsletter from '../../components/landing/Newsletter'
import Pricing from '../../components/landing/Pricing'

type Props = {}

const HomePage = (props: Props) => {
  return (
    <div>
      <Hero/>
      <HowItWorks/>
      <ValueProposition/>
      <Featured/>
      <Testimonials/>
      <Pricing/>
      <FinalCTA/>
      <Newsletter/>
    </div>
  )
}

export default HomePage