"use client"
import React from 'react'
import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/Motion'
import { SparklesIcon } from '@heroicons/react/24/solid'

const SkillText = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>
<motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#d45e0ec9] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#ffaa65] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px] text-orange-500">
            Skills Section
          </h1>
        </motion.div>
        <motion.div
        variants={slideInFromLeft(0.6)}
        className='text-[40px] text-white font-medium mt-[10px] text-center mb-[15px]'
        >
            I use the following softwares to make my websites 
            more interactive and user friendly
        </motion.div>
        <motion.div
        variants={slideInFromRight(0.6)}
        className='cursive text-[30px] text-gray-200 mb-10 mt-[10px] text-center'
        >
            The softwares are:
        </motion.div>
    </div>
  )
}

export default SkillText