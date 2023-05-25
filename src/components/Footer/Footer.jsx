import React from 'react'
import footerLinkImage from "../../assets/Mask group.png"
const Footer = () => {
    return (
        <div id="contact" className='bg-footer w-full h-[250px] z-10  md:px-[80px] px-[40px] relative'>
            <img src={footerLinkImage} alt="link" className='h-[130%] w-auto absolute bottom-0 left-0' />
            <div className='flex flex-col justify-center items-end'>
                <span className='font-dm text-[50px] font-[400] text-white mix-blend-normal'>
                    Contact Me
                </span>
                <span className='mt-2 font-dm text-[18px] font-[400] text-white mix-blend-normal'>
                    +91 8073319391
                </span>
                <span className='mt-2 font-dm text-[18px] font-[400] text-white mix-blend-normal'>
                    varunrunrunrun@gmail.com
                </span>
            </div>
        </div>
    )
}

export default Footer