import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react'

const Services = () => {
  return (
      <motion.div
          initial={{ opacity: 0}}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
      id='services' className='w-full px-[12%] py-10 scroll-mt-20'>
          
          <motion.h4 
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className='text-center mb-2 text-lg font-Ovo'>
              What I offer
          </motion.h4>

          <motion.h2 
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className='text-center text-5xl font-Ovo'>
              My Services
          </motion.h2>


          <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
              I am a software developer with a passion for creating innovative solutions.
              I specialize in web development, mobile app development, and software engineering.
              My goal is to build user-friendly applications that solve real-world problems.
          </motion.p>

          <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-10'>
                {serviceData.map(({icon, title, description, link}, index)=>(
                    
                    <motion.div 
                    whileHover={{ scale: 1.05 }}
                    key={index}
                    className='border border-gray-400 rounded-lg px-8 py-12 
                    hover:[box-shadow:0_4px_4px_rgba(0,0,0,0.8)] cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500 '>
                        <Image src={icon} alt='' className='w-10' />
                        <h3 className='text-lg my-4 text-gray-700'>{title}</h3>
                        <p className='text-sm text-gray-600 leading-5'>
                            {description}
                        </p>
                        <a href={link} className='flex items-center gap-2 text-sm mt-5'>
                            Read more <Image src={assets.right_arrow} alt='' className='w-4' />
                        </a>
                    </motion.div>
                ))}
          </motion.div>

      </motion.div>
  )
}

export default Services
