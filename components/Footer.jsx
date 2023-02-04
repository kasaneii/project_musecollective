'use client'

import React from 'react'
import styles from '../styles'
import { footerLinks } from '../constants'
import { motion } from 'framer-motion'
import { slideIn, staggerContainer, footerVariants, fadeIn } from '../utils/motion'

const Footer = () => {
  return (
    <motion.section 
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.marginX} py-8 2xl:max-w-[1280px] 2xl:mx-auto`}
    >
      <motion.div 
        variants={slideIn('up', 'tween', 0.5, 1)} 
        className='bg-Dune rounded-[60px] p-16'>
        <div className='flex flex-col lg:flex-row lg:items-center py-10 md:py-20 border-y-[1px] border-white'>
          <div className='w-full lg:w-[60%] lg:border-r-[1px] border-Cararra mr-20 overflow-hidden'>
            <motion.h1 
            variants={slideIn('down', 'tween', 1, 1)}
            className={`font-unbounded font-normal text-Cararra text-[20px] md:text-[40px] xl:text-[64px] text-Cararra`}>Ready to <span className='text-Pomegranate'>work</span> with us?</motion.h1>
          </div>
          <motion.div
            variants={fadeIn('left', 'tween', 1.5, 1)} 
          >
            <motion.div
              initial= {{ background: '#EF4824', color: 'white' }} 
              whileHover={{ background: '#F0EFE9', color: '#EF4824'}}
              transition={{ duration: 0.8 }} 
              className='cursor-pointer flex items-center justify-center bg-Pomegranate rounded-[40px] md:rounded-[70px] w-[200px] h-[100px] md:w-[280px] xl:w-[400px] md:h-[170px] p-2 mt-10 lg:mt-0'
            >
              <div className='flex items-end bg-transparent border-4 rounded-[35px] md:rounded-[70px] w-full h-full hover:border-Pomegranate'>
                <h2 className='font-unbounded text-[16px] md:text-[24px] xl:text-[32px] pl-5 pb-2 md:pl-10 md:pb-4'>Get <br /> Started!</h2>
              </div>
            </motion.div>
          </motion.div>
        </div>
        <div className='flex flex-col lg:flex-row pt-10'>
          <div className="lg:w-[200px] xl:w-[300px] lg:h-[180px] xl:h-[200px] overflow-hidden">
            <motion.ul 
              variants={slideIn('down', 'tween', 2, 1)} 
              className='list-none flex justify-center md:justify-start lg:flex-col flex-wrap gap-5 lg:w-[200px] xl:w-[300px] lg:h-[180px] xl:h-[200px]'>
              {footerLinks.map((link) => (
                <motion.li
                  whileHover={{ scale: 1.1 }} 
                  key={link.id}
                  className='text-Cararra font-montserrat font-light text-[10px] md:text-[14px] lg:text-[16px] xl:text-[20px] cursor-pointer'
                >
                  <a href="#">{link.title}</a>
                </motion.li>
              ))}
            </motion.ul>
          </div>
          <div className="flex flex-col flex-wrap pt-10 lg:pt-0 lg:pl-32 md:h-[300px] gap-5 md:gap-10">
            <div className="overflow-hidden">
              <motion.div 
                variants={slideIn('down', 'tween', 2.5, 1)}
                className=""
              >
                <h3 className='font-unbounded text-Pomegranate font-normal text-[16px] md:text-[24px] xl:text-[32px]'>Let's Build!</h3>
                <p className="font-montserrat text-Zorba text-[10px] md:text-[14px] xl:text-[20px] font-medium">info@musecollective.com</p>
              </motion.div>
            </div>
            <div className="overflow-hidden">
              <motion.div
              variants={slideIn('down', 'tween', 3, 1)}
              >
                <h3 className='font-unbounded text-Pomegranate font-normal text-[16px] md:text-[24px] xl:text-[32px]'>Join the Team!</h3>
                <p className="font-montserrat text-Zorba text-[10px] md:text-[14px] xl:text-[20px] font-medium">careers@musecollective.com</p>
              </motion.div>
            </div>
            <div className="overflow-hidden">
              <motion.div 
                variants={slideIn('down', 'tween', 3.5, 1)}
                className=""
              >
                <h3 className='font-unbounded text-Pomegranate font-normal text-[16px] md:text-[24px] xl:text-[32px]'>Headquarter</h3>
                <p className="font-montserrat text-Zorba text-[10px] md:text-[14px] xl:text-[20px] font-medium leading-[30px] md:leading-[50px]">The Muse Collective 123 <br /> Creativity Lane, <br /> Dreamland 12345</p>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div 
        variants={footerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }} 
        className='flex justify-between font-montserrat font-normal text-ShuttleGray text-[8px] sm:text-[12px] md:text-[14px] xl:text-[20px] pt-5 sm:pt-10'
      >
        <div className='flex gap-2 sm:gap-5'>
           <p>Privacy Policy</p>   
           <p>Legal Information</p>   
        </div>
        <p>© The Muse Collective. All rights reserved 2022</p>
      </motion.div>
    </motion.section>
  )
}

export default Footer