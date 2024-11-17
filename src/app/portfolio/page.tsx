
import React from 'react'
import { SpotlightPreview } from '@/components/Portfolio_hero';
// import { WobbleCardDemo } from '@/components/Portfolio_contentwriting';
// import { CanvasRevealEffectDemo2 } from "@/components/Portfolio_videography";
// import { BentoGridDemo } from '@/components/Portfolio_videoedit';
import { LayoutGridDemo } from '../home/Hero_portfolio';

function Portfolioscreen() {
  return (
    <div>
        <SpotlightPreview/>
        <LayoutGridDemo/>
        <hr className='absolute left-0 right-0 m-auto w-1/2 border border-gray-500'/>
        {/* <div className='mt-28'>
        <BentoGridDemo/>
        </div> */}
        <hr className='absolute left-0 right-0 m-auto w-1/2 border border-gray-500'/>
        {/* <div className='mt-28'>
        <WobbleCardDemo/>
        </div> */}
        <hr className='absolute left-0 right-0 m-auto w-1/2 border border-gray-500'/>
        
    </div>
  )
}

export default Portfolioscreen;