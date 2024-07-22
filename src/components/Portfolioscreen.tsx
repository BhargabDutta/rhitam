import React from 'react'
import { SpotlightPreview } from './Portfolio_hero';
import { WobbleCardDemo } from './Portfolio_contentwriting';
import { CanvasRevealEffectDemo2 } from "./Portfolio_videography";
import { BentoGridSecondDemo } from './Portfolio_videoedit';

function Portfolioscreen() {
  return (
    <div>
        <SpotlightPreview/>
        <CanvasRevealEffectDemo2/>
        <hr className='absolute left-0 right-0 m-auto w-1/2 border border-gray-500'/>
        <div className='mt-28'>
        <BentoGridSecondDemo/>
        </div>
        <hr className='absolute left-0 right-0 m-auto w-1/2 border border-gray-500'/>
        <div className='mt-28'>
        <WobbleCardDemo/>
        </div>
        <hr className='absolute left-0 right-0 m-auto w-1/2 border border-gray-500'/>
        
    </div>
  )
}

export default Portfolioscreen