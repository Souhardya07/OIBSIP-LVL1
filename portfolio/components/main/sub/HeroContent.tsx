"use client";


import React from 'react'
import Image from 'next/image';
import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/Motion'
import { SparklesIcon } from '@heroicons/react/16/solid'
const HeroContent = () => {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            className='flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]'>
            <div className='h-full w-full flex flex-col gap-5 justify-center m-auto text-start'>
                <motion.div
                    variants={slideInFromTop}
                    className='Welcome-box py-[8px] px-[4px] border-[#fab431] opacity-[0.9]'
                >
                    <SparklesIcon className='text-[#ec9743] mr-[5px] h-5 w-5' />
                    <h1 className='text-[#ec9743] Welcome-text text-[10px]'>Web Developer portfolio</h1>
                </motion.div>

                <motion.div
                    variants={slideInFromLeft(0.5)}
                    className="flex flex-col gap-3 mt-6 text-8xl text-bold text-white max-w-[600px] w-auto h-auto"
                ><span>
                        Hello!!
                        <span className="text-orange-700 ">
                            {" "} I&apos;m Souhardya Chowdhury
                        </span>
                    </span>
                </motion.div>
                <motion.p
                    variants={slideInFromLeft(0.8)}
                    className="text-lg text-orange-700 my5 max-w-[600px]">
                    I&apos;m a Computer Science and Engineering student
                    at STCET with experience in Website, Mobile,
                    and Software development.
                    Check out my projects and skills
                </motion.p>
                <motion.a
                    variants={slideInFromLeft(1)}
                    className="py-1 button-primary text-center text-[20px] text-orange-300 hover:text-orange-700 hover:text-[18px] cursor-pointer rounded-lg max-w-[200px]">
                    Learn More!!
                </motion.a>

            </div>
            <motion.div
                variants={slideInFromRight(0.2)}
                className="w-full h-full flex justify-center items-center shadow-orange-950 shadow-opacity-(0.5) z-[10]"></motion.div>
            <Image
                src="/sou.jpg"
                alt="work icons"
                height={450}
                width={300}
            />
        </motion.div>
    
    )
}

export default HeroContent
