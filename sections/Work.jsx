'use client';

import React from 'react'
import styles from '../styles'
import { Swiper, SwiperSlide } from "swiper/react"
import { featuredWorks } from '../constants'
import { motion } from 'framer-motion'
import { fadeIn, slideIn, staggerContainer } from '../utils/motion';

import "swiper/css"
import '../styles/globals.css';

const Work = () => {
  return (
    <motion.section 
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.marginX} py-12 2xl:max-w-[1280px] 2xl:mx-auto`}
    >
      <motion.div 
      variants={fadeIn('right', 'tween', 0.5, 1)}
      className='flex justify-between items-center pb-6 md:pb-10 border-b-2 border-Silver'
      >
        <h2 className='font-unbounded text-Pomegranate text-[20px] md:text-[32px] xl:text-[48px] font-normal'>Works <span className='font-light text-[16px] md:text-[24px] xl:text-[32px] pl-2 md:pl-5'>/</span> 
        <span className='font-montserrat text-[10px] md:text-[16px] xl:text-[20px] text-Pomegranate pl-2 md:pl-5'>Featured Project</span>
        </h2>
        <motion.button 
          initial= {{ background: 'transparent', color:'#EF4824' }} 
          whileHover= {{ background: '#EF4824', color: '#F0EFE9'}}
          transition={{ duration: 0.8}}  
          className='bg-transparent border-2 border-Pomegranate px-4 md:px-5 py-2 rounded-full cursor-pointer'
        >
          <p className='font-montserrat font-medium text-[12px] md:text-[16px] xl:text-[20px] cursor-pointer'>View all</p>
        </motion.button>
      </motion.div>
      <div>
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          loop={true}
          className="mySwiper mt-8 md:mt-16 border-b-2 border-Silver"
        >
          {featuredWorks.map((work, index) => (
            <SwiperSlide key={work.id} className='relative'>
              <div className="overflow-hidden">
                <motion.img
                  variants={slideIn('up', 'tween', index * 1, 1)} 
                  src={work.bwImg} 
                  alt={work.title} 
                  className="rounded-[30px] md:rounded-[50px] xl:rounded-[60px] absolute object-cover object-center" />
                <motion.img 
                  src={work.clrImg} 
                  alt={work.title}
                  whileHover= {{ opacity: 1}}
                  transition={{ duration: 0.8}} 
                  className="rounded-[30px] w-full h-full object-cover object-center md:rounded-[50px] xl:rounded-[60px] absolute opacity-0" />
              </div>

              <motion.div 
                initial={{ color: "#211F1D" }} 
                whileHover={{ scale: 1.1, color: "#EF4824" }}
                transition={{ duration: 0.5, type: "tween" }} 
                className="flex flex-col absolute bottom-0 left-0 gap-2 xl:gap-2 pl-5 xl:pl-10 pb-10 md:pb-16 overflow-hidden"
              >
                <motion.div
                  variants={fadeIn('up', 'tween', index * 1, 1)} 
                >
                  <h3
                  className="font-unbounded font-normal text-[16px] md:text-[20px] xl:text-[24px]">{work.title}</h3>
                  <p
                  className="font-montserrat text-[10px] md:text-[12px] xl:text-[16px] font-light">{work.subtitle}</p>
                  <p
                  className="font-montserrat text-[10px] md:text-[12px] xl:text-[16px] font-light">{work.year}</p>
                </motion.div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    </motion.section>
  )
}

export default Work