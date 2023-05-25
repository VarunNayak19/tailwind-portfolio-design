import React from 'react'

const NavBar = () => {
    return (
        <div className='w-auto h-auto py-2 px-2 flex gap-[68px] mb-[60px] relative'>
            <a href="#home" className=' font-Dm  text-base font-extralight mix-blend-overlay text-white hover:mix-blend-normal'>
                Home
            </a>
            <a href="#about" className=' font-Dm  text-base font-extralight mix-blend-overlay text-white hover:mix-blend-normal'>
                About me
            </a>
            <a href="" className=' font-Dm  text-base font-extralight mix-blend-overlay text-white hover:mix-blend-normal'>
                Projects
            </a>
            <a href="#contact" className=' font-Dm  text-base font-extralight mix-blend-overlay text-white hover:mix-blend-normal'>
                Contact
            </a>
        </div>
    )
}

export default NavBar;