import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { footerLinks } from '@/constants'

const Footer = () => {
  return (
    <footer className='flex flex-col text-black-100 mt-5 border-t border-gray-100'>
            <div className='flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10'>
                <div className='flex flex-col justifys-start items-start gap-6'>
                    <Image className='object-contain' src='/logo.svg' alt='image' width={100} height={100}/>
                    <p className='text-base text-gray-800'>
                        Carhub 2023 <br />
                        All rights reserved &copy;
                    </p>
                </div>
                <div className='footer__links'>
                        {footerLinks.map((link)=>(
                            <div key={link.title} className='footer__link'><h3 className='font-bold'>{link.title}</h3>
                                {link.links.map((item)=>(
                                    <Link key={item.title} href={item.url} className='text-gray-500'>{item.title}</Link>
                                ))}
                            </div>
                        ))}
                </div>
                </div>
                <div className="flex justify-center items-center mt-10 border-t border-gray-100 flex-wrap sm:px-16 px-6 py-10">
                    <p>@2023 <span className='bg-[#f79a24] rounded px-0.5'>Car</span>Hub All rights reserved. </p>
                    <div className="footer__copyrights-link">
                        <Link href='/' className='text-gray-500'>Privacy Policy</Link>
                        <Link href='/' className='text-gray-500'>Terms Of Use</Link>
                    </div>
                </div>
    </footer>
  )
}

export default Footer
