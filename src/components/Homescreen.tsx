import React from 'react'
import { HeroParallaxDemo } from './Hero';
import { HeroScrollDemo } from './Home_hero_next';
import {ParallaxScrollSecondDemo} from './Hero_portfolio';
import { LampDemo } from './Hero_lamp';
import { StickyScrollRevealDemo } from './Hero_services';
import { TypewriterEffectSmoothDemo } from './Hero_last';

const Homescreen = () => {
  return (
    <div>
        <HeroParallaxDemo/>
        <div>
          <HeroScrollDemo/>
        </div>
        <div className='mt-40 h-screen'>
        <h1 className="text-2xl md:text-7xl text-center font-bold dark:text-white">
        Our Portfolio
      </h1>
        <ParallaxScrollSecondDemo/>
        </div>
        <LampDemo/>
        <div className='mt-40 h-screen'>
        <h1 className="text-2xl md:text-7xl text-center font-bold dark:text-white">
        Our Services
      </h1>
        <StickyScrollRevealDemo/>
        </div>

        <div>
          <TypewriterEffectSmoothDemo/>
        </div>
    </div>
  )
}

export default Homescreen