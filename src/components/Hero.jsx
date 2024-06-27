import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { ComputersCanvas } from './canvas'
import { StarsCanvas } from './canvas'

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto bg-repeat-x custom-background`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Welcome, I'm <span className='text-[#915EFF]'>Dhruv</span>
          </h1>


          <p className='mt-4 text-secondary text-[20px] max-w-5xl leading-[35px]'>
            Welcome to my portfolio! Here, you'll discover an array of projects that reflect my journey
            and expertise in the tech industry.
          </p>

          <p className='mt-4 text-secondary text-[20px] max-w-5xl leading-[35px]'>
            This portfolio is built using modern web technologies such as React for the frontend, Tailwind CSS for styling,
            and Three.js for captivating 3D animations.
          </p>

          <p className='mt-4 text-secondary text-[20px] max-w-5xl leading-[35px]'>
            Each section showcases my skills, work experience, interests, and educational background. Whether you're here to explore my projects or to learn more about my professional journey,
            I invite you to delve into my work and reach out via the contact page.
          </p>

        </div>
      </div>



    </section>
  );
};

export default Hero;
