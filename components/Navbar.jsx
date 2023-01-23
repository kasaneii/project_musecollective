'use client';

import { useState } from 'react'
import styles from '../styles'
import { navLinks } from '../constants'
import { motion } from 'framer-motion'
import { navVariants } from '../utils/motion';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }} 
      className={`${styles.marginX} py-8 flex justify-between items-center 2xl:max-w-[1280px] 2xl:mx-auto`}>
      <div className="flex items-center h-[20px] lg:h-[24px] xl:h-[30px]">
        <img src="/the-muse-collective-logo.png" alt="logo" className='h-full object-contain'/>
        <div className="font-medium font-montserrat sm:text-[16px] lg:text-[18px] xl:text-[24px]">The Muse <span className="font-light opacity-50">Collective</span></div>
      </div>

        <ul className='list-none hidden md:flex md:gap-5 xl:gap-10 items-center'>
          {navLinks.map((link) => (
            <motion.li
              whileHover={{ scale: 1.1 }} 
              key={link.id} 
              className="font-montserrat font-light md:text-[14px] lg:text-[16px] xl:text-[20px] cursor-pointer">
              <a href="#">{link.title}</a>
            </motion.li>
          ))}
        </ul>

      <div className='hidden md:flex md:h-[14px] lg:h-[16px] xl:h-[20px] md:gap-5 xl:gap-10 items-center md:pl-24 lg:pl-36 xl:pl-40'>
        <motion.img whileHover={{ scale: 1.2 }} src="/twitter.png" alt="twitter-logo" className='h-full object-contain'/>
        <motion.img whileHover={{ scale: 1.2 }} src="/instagram.png" alt="instagram-logo" className='h-full object-contain'/>
      </div>

      <div className='md:hidden h-[20px] cursor-pointer'>
        <img 
          src="/menu.png" alt="menu" 
          className='h-full object-contain'
          onClick={() => setToggle(!toggle)}
        />
      </div>

      <div 
        className={`${!toggle ? 'hidden' : 'flex'}
        p-6 bg-white absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl
        `}>
          <ul className='list-none flex justify-end items-start flex-1 flex-col gap-5'>
          {navLinks.map((link) => (
            <li 
              key={link.id} 
              className="font-montserrat font-light text-[12px] md:text-[14px] lg:text-[16px] xl:text-[20px] cursor-pointer">
              <a href="#">{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  )
}

export default Navbar