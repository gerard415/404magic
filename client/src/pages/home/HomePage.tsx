import React, {useEffect} from 'react'
import { useLocation } from 'react-router-dom';
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
  const location = useLocation();
  
  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.replace('#', ''));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

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