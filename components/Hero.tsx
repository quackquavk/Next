"use client"
import React from 'react'
import { CustomButton } from '.'
import Image from 'next/image'

const Hero = () => {
    const handleScroll=()=>{

    }
  return (
    <div className='hero'>
      <div className="flex-1 pt-36 padding-x">
        <h1 className='hero__title'>
            Find, book or rent a car -- quickly and easily
        </h1>
        <p className='hero__subtitle'>
            Streamline your car booking process with our effortless booking process
        </p>
        <CustomButton 
        title="Book now"
        containerStyles = "rounded-full text-white mt-10 bg-primary-blue"
        handleClick={handleScroll}
        />
      </div>
      <div className='hero__image-container mt-100'>
        <div className="hero__image">
            <Image src="/hero.png" alt="image" className="object-contain" fill/></div>
            <div className="hero__image-overlay" />
        
      </div>
    </div>
  )
}

export default Hero
