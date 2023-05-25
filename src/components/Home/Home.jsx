import React, { useState } from 'react'
import HeroImage from "../../assets/digiflora 1.png"
import NavBar from '../NavBar/NavBar';
import ProfileImg from "../../assets/profile.jpeg";
import ProfileImgNoBg from "../../assets/profile-nobg.png";
import redLine from "../../assets/Vector 1.png"
const Home = () => {
    const [png, setpng] = useState(false)
    return (
        <div id="home" className=' w-full h-auto md:pl-[80px] pl-[40px] pt-[40px] '>
            <img src={HeroImage} alt="hero" className='absolute h-[90%] right-0 top-0 drop-shadow-hero' />
            <NavBar />
            <div className='flex justify-start items-start relative mb-[30px] ml-[-40px]'>
                <p onMouseOver={() => setpng(true)} onMouseOut={() => setpng(false)} className={`${png && "scale-y-[1.03] scale-x-[1.03]  cursor-pointer outlinecss"} text-[500px] font-[600] p-0 ${png ? "mix-blend-normal" : "mix-blend-overlay"}
                 text-white leading-[550px]  duration-700 cursor-default `}>
                    HI
                </p>
                <div onMouseOver={() => setpng(true)} onMouseOut={() => setpng(false)} className={`h-[144px] w-[144px] ${png ? "customRadius duration-700" : "rounded-[50%]"} border-4
                 border-orange cursor-pointer bg-white absolute bottom-[-10px] left-[31.5px] flex justify-center items-center `}>
                    {
                        png ?
                            <img onMouseOver={() => setpng(true)} onMouseOut={() => setpng(false)} src={ProfileImgNoBg} alt="profile" className='h-full cursor-pointer w-full rounded-[50%]' />
                            :
                            <img onMouseOver={() => setpng(true)} onMouseOut={() => setpng(false)} src={ProfileImg} alt="profile" className='h-full w-full cursor-pointer rounded-[50%]' />
                    }
                </div>
                {false && <div className='w-[60px] h-[10px] bg-white absolute left-[36.5px] bottom-[125px] delay-[1000]'></div>}
            </div>
            <div className='relative h-auto'>
                <img src={redLine} alt="vector" className='absolute left-[350px] bottom-[-10px]' />
                <span className='font-dm text-[50px] font-[400] text-white mix-blend-normal'>My name is Varun, <br /> I am a Software Developer</span>
            </div>

        </div>
    )
}

export default Home;