import React from 'react'
import ReactDOM from 'react-dom'
import { SocialIcon } from 'react-social-icons'
import { motion } from "framer-motion"

type Props = {}

export default function Header({}: Props) {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
        <motion.div 
        initial={{
            x: -500,
            opacity: 0,
            scale: 0.5
        }}
        animate={{
            x: 0,
            opacity: 1,
            scale: 1
        }}
        transition={{
            duration: 1.5,
        }}
        className='flex flex-row items-center'>
            {/* social icons */}
            <SocialIcon url="https://instagram.com/wmdeltaphi?igshid=YmMyMTA2M2Y=" 
            fgColor="gray"
            bgColor="transparent"/>

            <SocialIcon url="https://www.facebook.com/DeltaPhiWM?mibextid=LQQJ4d" 
            fgColor="gray"
            bgColor="transparent"/>

            <SocialIcon 
            url="mailto:stelmohalloa@gmail.com" 
            fgColor="gray"
            bgColor="transparent"/>
        </motion.div>

        <motion.div 
        initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
        }}
        animate={{
            x: 0,
            opacity: 1,
            scale: 1,
        }}
        transition={{
            duration: 1
        }}
                className='flex flex-row items-center text-gray-300 cursor-pointer'>
            <SocialIcon 
            url="https://cash.app/$stelmo87" 
            fgColor="gray"
            bgColor="transparent"
            />
            
            <a href="https://cash.app/$stelmo87" className='uppercase hidden md:inline-flex text-sm text-gray-400'>
                Donate
            </a>
        </motion.div>
    </header>
  )
}