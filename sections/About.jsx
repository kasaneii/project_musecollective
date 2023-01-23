'use client'

import React from 'react'
import styles from '../styles'
import { motion } from 'framer-motion'
import { fadeIn, slideIn, staggerContainer } from '../utils/motion'

const About = () => {
  return (
    <motion.section 
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.marginX} py-12 2xl:max-w-[1280px] 2xl:mx-auto`}>
      <motion.div
        variants={slideIn('up', 'tween', 0.5, 1)} 
        className='bg-Dune rounded-[60px] p-14'>
        <motion.div
          variants={fadeIn('right', 'tween', 1, 1)} 
          className='flex flex-col md:flex-row border-y-[1px] border-Cararra'>
          <motion.p 
          variants={slideIn('left', 'tween', 1.5, 1)}
          className={`${styles.paragraph} md:w-[60%] md:border-r-[1px] border-b-[1px] md:border-b-0 border-Cararra md:pr-8 lg:pr-16 mt-10 sm:mt-16 pb-10 sm:pb-16 md:pb-0 md:my-20`}>
            Looking for a creative agency that offers a wide range of services and truly believes in the power of creativity? Look no further than The Muse Collective. From branding and graphic design to web development and digital marketing, <span className='text-Pomegranate'>we have the expertise to help your business thrive.</span>
          </motion.p>

          <motion.div 
          variants={slideIn('right', 'tween', 2, 1)}
          className="flex flex-col justify-between my-10 sm:my-16 md:my-20 md:pl-8 lg:pl-16">
            <img src="/the-muse-collective-logo.png" alt="logo" className='w-[40px] h-[40px] md:w-[60px] md:h-[60px] lg:w-[80px] lg:h-[80px] object-contain'/>
            <h2 className={`${styles.heading2}`}>the <br/> muse <br/> collective</h2>
            <p className='font-montserrat font-semibold text-Pomegranate text-[10px] leading-[40px] lg:text-[14px] lg:leading-[50px] uppercase'>A creative advertising <br/> agency</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}

export default About