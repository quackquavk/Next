import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { CustomButton } from '.'

const Navbar = () => {
    const hoverHandler =()=>{

    }
  return (
    <header className='w-full  z-10 absolute'>
        <nav className='mx-auto max-w-[1440px] flex justify-between items-center sm:px-16 px-6 py-6'>
            <Link href='/' className='flex justify-center items-center'><Image src='/logo.svg' alt='IMgae' width={118} height={18}/></Link>
            <CustomButton 
            title="Sign In"
            containerStyles='text-primary-blue rounded-full bg-white min-w-[130px]'
            btntype='button'
            />
        </nav>

    </header>
  )
}

export default Navbar

