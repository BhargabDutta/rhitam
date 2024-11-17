import React from 'react'
// import { HeroParallaxDemo } from '@/app/home/Hero';
// import { HeroScrollDemo } from './Home_hero_next';
// import { LayoutGridDemo } from './Hero_portfolio';
import Home_hero from './Home_hero';

// import { StickyScrollRevealDemo } from '@/app/home/Hero_services';
import { TypewriterEffectSmoothDemo } from '@/app/home/Hero_last';

const Homescreen = () => {
  return (
    <>
      <div>
        <Home_hero/>
      </div>

      <div >
        <TypewriterEffectSmoothDemo />
      </div>
    </>
  )
}

export default Homescreen