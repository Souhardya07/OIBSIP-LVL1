import React from 'react'
import HeroContent from './sub/HeroContent'

export const Hero = () => {
  return (
    <div className='relative flex flex-col h-full w-full'>
        <video
        autoPlay
        muted
        loop
        className='  absolute top-[10px] left-0 z-[1] w-full h-full object-cover'>
    <source src='/blackhole.mp4' type='video/mp4'/>
    </video>
    <HeroContent/>
    </div>
  )
}

export default Hero