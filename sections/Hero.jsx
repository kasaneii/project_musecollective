'use client';

import React from 'react'
import styles from '../styles/'
import { motion } from 'framer-motion'
import { slideIn, fadeIn, staggerContainer } from '../utils/motion';

const Hero = () => {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }} 
      className={`${styles.marginX} pb-12 2xl:max-w-[1280px] 2xl:mx-auto`}>
      <motion.div 
      variants={fadeIn('left', 'tween', 1, 1)}
      className='flex flex-col md:flex-row md:justify-between md:items-center border-y-2 border-Silver pt-8 pb-8'>
        <motion.h1
        variants={slideIn('left', 'tween', 1.5, 1)} 
        className={`${styles.heroHeading} text-Dune text-center md:text-left md:w-[480px] lg:w-[700px] xl:w-[900px] 2xl:w-[1000px]`}>Unleash the Power of Creativity</motion.h1>
        <motion.p
        variants={slideIn('right', 'tween', 2, 1)} 
        className='font-montserrat font-semibold uppercase text-ShuttleGray text-[8px] leading-[20px] md:text-[10px] md:leading-[30px] lg:text-[14px] lg:leading-[40px] xl:text-[16px] xl:leading-[60px] 2xl:text-[20px] 2xl:leading-[80px] text-center md:text-right'>The Muse Collective 123 <br className='md:block hidden'/> Creativity Lane, <br className='md:block hidden'/> Dreamland 12345</motion.p>
      </motion.div>

      <div className='flex flex-col md:flex-row'>
        <div className='pt-5 xl:pt-10'>
          <div className='flex md:flex-col gap-5 items-center md:items-start'>
            <div className="flex items-center gap-2">
              <motion.div
              variants={fadeIn('right', 'tween', 2.5, 1)} 
              className="w-[50px] h-[50px] xl:w-[80px] xl:h-[80px] 2xl:w-[100px] 2xl:h-[100px]">
                <img src="/agency.jpg" alt="agency" className='w-full h-full object-cover object-center rounded-full'/>
              </motion.div>

              <motion.div
                variants={fadeIn('right', 'tween', 3, 1)} 
                whileHover={{ scale: 1.1 }}
                className='flex justify-center items-center w-[50px] h-[50px] xl:w-[80px] xl:h-[80px] 2xl:w-[100px] 2xl:h-[100px] rounded-full border-2 border-Pomegranate'>
                  <img src="/left-arrow-org.png" alt="arrow" className='rotate-[230deg] w-[20px] h-[20px] xl:w-[40px] xl:h-[40px] object-contain'/>
              </motion.div>
            </div>

            <motion.p 
            variants={fadeIn('down', 'tween', 3.5, 1)}
            className='font-montserrat font-medium text-[8px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] text-Dune w-full md:w-[170px] xl:w-[250px] text-justify'>The Muse Collective is a full-service creative agency located in the heart of the city. 100+ successful projects, expert team. Let us help you stand out in a crowded market and connect with your audience.</motion.p>
          </div>

          <motion.div 
          variants={fadeIn('down', 'tween', 4, 1)}
          className="flex flex-row md:flex-col items-center justify-center md:justify-start md:items-start md:gap-0 gap-5">
            <div className='flex pt-2 xl:pt-5'>
              <h3 className='font-unbounded font-normal text-[40px] xl:text-[72px] text-Dune'>100</h3>
              <img src="/plus-symbol-button.png" alt="plus icon" className='w-[14px] h-[14px] xl:w-[20px] xl:h-[20px] object-contain mt-4 xl:mt-5'/>
            </div>

            <p className='font-montserrat font-medium text-[14px] xl:text-[18px] text-Pomegranate'>Project Completed</p>
          </motion.div>
        </div>

        <div className='relative'>
          <motion.img 
          variants={slideIn('right', 'tween', 4.5, 1)}
          src="hero-img.png" 
          alt="hero-img" 
          className='h-full object-contain'/>
          <motion.div
            variants={slideIn('right', 'tween', 5, 1)} 
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3, type: "tween" }} 
            className='absolute bottom-4 md:bottom-8 right-0 w-[115px] h-[60px] rounded-[25px] sm:w-[170px] sm:h-[90px] sm:rounded-[40px] md:w-[160px] md:h-[80px] md:rounded-[35px] lg:w-[240px] lg:h-[120px] lg:rounded-[50px] xl:w-[300px] 2xl:w-[340px] xl:h-[160px] 2xl:h-[190px] xl:rounded-[70px] 2xl:rounded-[80px] bg-Pomegranate flex justify-center items-center'>
              <div className='cursor-pointer bg-transparent border-2 xl:border-4 border-white w-[105px] h-[50px] rounded-[20px] sm:w-[160px] sm:h-[80px] sm:rounded-[35px] md:w-[150px] md:h-[70px] md:rounded-[30px] lg:w-[230px] lg:h-[110px] lg:rounded-[50px] xl:w-[280px] xl:h-[140px] 2xl:w-[320px] 2xl:h-[170px] xl:rounded-[60px] 2xl:rounded-[70px] flex justify-start items-end'>
                <h3 className='font-unbounded font-normal text-white text-[12px] leading-[16px] sm:text-[16px] sm:leading-[18px] lg:text-[20px] lg:leading-[28px] xl:text-[30px] 2xl:text-[36px] 2xl:leading-[40px] leading-[35px] pl-4 pb-2 lg:pl-6 xl:pl-8 lg:pb-4 2xl:pl-12 2xl:pb-8'>Get <br/> Started!</h3>
              </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default Hero