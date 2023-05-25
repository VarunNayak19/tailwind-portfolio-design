import React from 'react'
import crystalImage from "../../assets/Crystal two.png"
const About = () => {
    return (
        <div id="about" className=' w-full h-auto md:px-[80px] px-[40px]  relative'>
            <div className='font-dm text-[50px] font-[400] text-white mix-blend-normal'>About</div>
            <img src={crystalImage} alt="crystal" className='absolute w-[300px] h-auto top-[30%] right-0' />
            <div className='w-3/4  mt-16 font-dm text-[18px] font-[400] text-white mix-blend-normal'>
                Hi there! My name is Varun, and I am a highly
                creative and driven software developer with a passion
                for developing innovative and user-friendly products.
                With over 2 years of experience in the industry,
                I have developed a unique skill set that allows me
                to turn complex designs into intuitive and
                beautiful web pages and apps that people love to use.
            </div>
            <div className='w-3/4  mt-16 font-dm text-[18px] font-[400] text-white mix-blend-normal'>
                I have a strong background in Graphics design and we development, and I always stay
                up to date with the latest trends and technology.
                My technical philosophy is centered around empathy and
                understanding the needs of the end-user,
                and I take a user-centered approach to all my
                projects to ensure that every design
                solves real-world problems and meets
                the needs of the target audience.
            </div>
            <div className='w-3/4  mt-16 font-dm text-[18px] font-[400] text-white mix-blend-normal'>
                Throughout my career, I have worked with a diverse
                range of domains, from startups to Tech companies,
                and I have consistently delivered high-quality work
                that have exceeded their expectations. I have a knack
                for communicating complex ideas to stakeholders, and I
                am skilled at managing the  projects from start to
                finish, including conducting user research, prototyping, and testing.

            </div>
            <div className='w-3/4  my-16 font-dm text-[18px] font-[400] text-white mix-blend-normal'>
                When I'm not designing, you can find me exploring the
                latest technological tools and techniques, or working on new things in web development. I am always eager to learn and grow
                as a developer, and I am committed to staying at the forefront
                of the industry.
                If you're looking for a talented and driven software developer to bring your ideas to life, I would love the
                opportunity to work with you. Let's create something great together!
            </div>

        </div>
    )
}

export default About