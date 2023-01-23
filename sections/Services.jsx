'use client'

import React, {useState} from 'react'
import styles from '../styles'
import { motion } from 'framer-motion'
import { fadeIn, slideIn, staggerContainer, zoomIn } from '../utils/motion';

const Services = () => {
  const [active, setActive] = useState(1)

  return (
    <motion.section 
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.marginX} py-12 2xl:max-w-[1280px] 2xl:mx-auto`}>
      <motion.div 
        variants={fadeIn('right', 'tween', 0.5, 1)}
        className='flex flex-col sm:flex-row justify-between sm:items-center pb-6 md:pb-10'>
        <h2 className='font-unbounded text-Pomegranate text-[20px] md:text-[32px] xl:text-[48px] font-normal'>Services <span className='font-light text-[16px] md:text-[24px] xl:text-[32px] pl-2 md:pl-5'>/</span> 
        <span className='font-montserrat text-[10px] md:text-[16px] xl:text-[20px] text-Pomegranate pl-2 md:pl-5'>Our Areas of Expertise</span>
        </h2>

        <h3 className='font-montserrat font-medium uppercase text-Dune text-[8px] lg:text-[12px] xl:text-[14px] pt-4 xl:pt-5'>the muse collective <span className='lg:pl-5'>/</span> <span className='lg:pl-5'>Dreamland 12345</span></h3>
      </motion.div>

      <div className='py-5 md:py-20 border-y-2 border-Silver flex flex-col md:flex-row md:justify-between relative'>
        <motion.div 
          variants={zoomIn(3.5, 1)}
          className='w-[40%] h-[40%] mx-auto md:mx-0'>
          <img src="/service-3.png" alt="web-development" className={`w-full h-full object-contain ${active === 1 ? "photo-active" : "photo-inactive"}`}/>
          <img src="/service-4.png" alt="digital-marketing" className={`w-full h-full object-contain ${active === 2 ? "photo-active" : "photo-inactive"}`}/>
          <img src="/service-2.png" alt="graphic-design" className={`w-full h-full object-contain ${active === 3 ? "photo-active" : "photo-inactive"}`}/>
          <img src="/service-1.png" alt="branding" className={`w-full h-full object-contain ${active === 4 ? "photo-active" : "photo-inactive"}`}/>
          
        </motion.div>

        <div className='flex flex-col gap-5 md:gap-10 md:w-[60%] pt-5 md:pt-0'>
          <motion.button
          variants={slideIn('right', 'tween', 1, 1)} 
          onClick={() => setActive(1)}
          className={`flex justify-center md:justify-end ${active === 1 ? "button-active" : "button-inactive"} font-unbounded text-[16px] md:text-[28px] lg:text-[40px] xl:text-[56px] 2xl:text-[64px] font-normal md:text-right`}
          >
            <span className='font-montserrat text-[10px] md:text-[20px] xl:text-[28px] font-medium md:text-right pr-2 md:pr-5'>01</span> Web Development
            </motion.button>

          <motion.button
          variants={slideIn('right', 'tween', 1.5, 1)} 
          onClick={() => setActive(2)}
          className={`flex justify-center md:justify-end ${active === 2 ? "button-active" : "button-inactive"} font-unbounded text-[16px] md:text-[28px] lg:text-[40px] xl:text-[56px] 2xl:text-[64px] font-normal md:text-right`}
          >
            <span className='font-montserrat text-[10px] md:text-[20px] xl:text-[28px] font-medium md:text-right pr-2 md:pr-5'>02</span>Digital Marketing
            </motion.button>

          <motion.button
          variants={slideIn('right', 'tween', 2, 1)} 
          onClick={() => setActive(3)}
          className={`flex justify-center md:justify-end ${active === 3 ? "button-active" : "button-inactive"} font-unbounded text-[16px] md:text-[28px] lg:text-[40px] xl:text-[56px] 2xl:text-[64px] font-normal md:text-right`}
          >
            <span className='font-montserrat text-[10px] md:text-[20px] xl:text-[28px] font-medium md:text-right pr-2 md:pr-5'>03</span>Graphic Design
            </motion.button>

          <motion.button
          variants={slideIn('right', 'tween', 2.5, 1)} 
          onClick={() => setActive(4)}
          className={`flex justify-center md:justify-end ${active === 4 ? "button-active" : "button-inactive"} font-unbounded text-[16px] md:text-[28px] lg:text-[40px] xl:text-[56px] 2xl:text-[64px] font-normal md:text-right`}
          >
            <span className='font-montserrat text-[10px] md:text-[20px] xl:text-[28px] font-medium md:text-right pr-2 md:pr-5'>04</span>Branding
            </motion.button>
        </div>
      </div>

    </motion.section>
  )
}

export default Services