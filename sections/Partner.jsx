'use client'

import React from 'react'
import styles from '../styles'
import { partners } from '../constants'
import { motion } from 'framer-motion'
import { fadeIn, slideIn, staggerContainer } from '../utils/motion';

const Partner = () => {
  return (
    <motion.section 
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.marginX} py-12 2xl:max-w-[1280px] 2xl:mx-auto`}>
      <motion.div 
        variants={fadeIn('right', 'tween', 0.5, 1)}
        className='flex flex-col md:flex-row justify-between md:items-center pb-6 md:pb-10 border-b-2 border-Silver'>
        <h2 className='font-unbounded text-Pomegranate text-[20px] md:text-[32px] xl:text-[48px] font-normal'>Partners <span className='font-light text-[16px] md:text-[24px] xl:text-[32px] pl-2 md:pl-5'>/</span> 
        <span className='font-montserrat text-[10px] md:text-[16px] xl:text-[20px] text-Pomegranate pl-2 md:pl-5'>Companies we partner with</span>
        </h2>

        <motion.button 
        initial= {{ background: 'transparent', color:'#EF4824' }} 
        whileHover= {{ background: '#EF4824', color: '#F0EFE9'}}
        transition={{ duration: 0.8}}
        className='w-[120px] md:w-auto bg-transparent border-2 border-Pomegranate px-4 md:px-5 py-2 mt-5 md:mt-0 rounded-full cursor-pointer'>
          <p className='font-montserrat font-medium text-[8px] md:text-[12px] md:text-[16px] xl:text-[20px] cursor-pointer'>View all Partners</p>
        </motion.button>
      </motion.div>

      <div className="flex flex-wrap w-full gap-20 items-center justify-center py-16 border-b-2 border-Silver">
        {partners.map((partner, index) => (
          <motion.img
            variants={fadeIn('up', 'tween', index * 0.5, 1)}  
            key={partner.id} 
            src={partner.imgUrl} 
            alt={partner.id} 
            className="w-[100px] md:w-[120px] xl:w-[160px] object-contain"/>
        ))}
      </div>

    </motion.section>
  )
}

export default Partner