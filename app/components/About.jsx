import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react'

const About = () => {
  return (
    <motion.div id='about' className='w-full px-[12%] py-10 scroll-mt-20'
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }}
    >
      <motion.h4 
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className='text-center mb-2 text-lg font-Ovo'>
        Introduction
        </motion.h4>

      <motion.h2 
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className='text-center text-5xl font-Ovo'>About Me</motion.h2>

      <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1}}
      transition={{ duration: 0.8}}
      className='flex w-full flex-col lg:flex-row items-center
      gap-20 my-20'>


        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1 , scale: 1 }}
          transition={{ duration: 0.6 }}
        className='w-64 sm:w-80 rounded-3xl max-w-none'>
            <Image src={assets.shivam_img} alt='user' className='w-full
            rounded-3xl'/>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        className='flex-1'>
            <p className='mb-10 max-w-2xl font-Ovo'>
            Writing code by day, fixing bugs by night — and sometimes the other way around. I'm a Software Developer who talks to computers more than humans.  
Currently working as an SD, chasing semicolons and dreams alike.
            </p>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                {infoList.map(({icon, iconDark, title, description}, index)=> (
                    <motion.li 
                    whileInView={{ scale: 1.05 }}
                    className='border-[0.5px] border-grey-400
                    rounded-xl p-6 cursor-pointer hover:[background-color:#fcf4ff]
                    hover:-translate-y-1 duration-500 hover:[box-shadow:0_4px_4px_rgba(0,0,0,0.8)]'
                     key={index}>
                        <Image src={icon} alt={title} className='w-7 mt-3' />
                        <h3 className='my-4 font-semibold text-grey-700'>{title}</h3>
                        <p className='text-grey-600 text-sm'>{description}</p>
                    </motion.li>
                ))}
            </motion.ul>

            <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.3 }}
            className='my-6 text-grey-700 font-Ovo'>Tools I use</motion.h4>
            
            <motion.ul 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            className='flex items-center gap-3 sm:gap-5'>
                {toolsData.map((tool, index)=> (
                    <motion.li 
                    whileHover={{ scale: 1.05 }}
                    className='flex items-center justify-center
                    w-12 sm:w-14 aspect-square border border-grey-400
                    rounded-lg cursor-pointer hover:-translate-y-1 
                    duration-500' 
                    key={index}>
                        <Image src={tool} alt='Tool' className='w-5
                        sm-w-7' />
                    </motion.li>
                ))}
            </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default About
