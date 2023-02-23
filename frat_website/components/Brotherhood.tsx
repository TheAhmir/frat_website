import React from 'react'
import { motion } from "framer-motion"
import brotherhood from '@/assets/Brotherhood.png'

type Props = {}

export default function Brotherhood({}: Props) {
    const pillars = [
        "Our constant aim is to be a brotherhood grounded in trust and true friendship. As an organization, we hold a standard of excellence for brotherhood. We recognize the value of a diverse membership, the importance of mutual respect, and the virtue of life-long bonds of brotherhood. We believe very strongly in accepting only those men who seek to build lasting friendships based in principle, maintained with integrity, and celebrated over generations.",
        "Since its founding over 180 years ago, members of Delta Phi have placed a strong emphasis on intellectual vigor and personal leadership. As a brotherhood we seek men of talent who will benefit from joining our organization. Our brotherhood is dedicated to encouraging and enabling the diverse talents of every member, both during college and throughout their lives and careers.",
        "Character is fundamental in establishing and sustaining the bonds of brotherhood. As brothers, we share in each other's successes, and support each other in struggles. Character and morality are fundamental to leadership in our personal lives, in our brotherhood, and in our community. We strive to create chapters and members marked by their integrity, ability, and trustworthiness."]
    const title = [
        "Friendship",
        "Literature",
        "Morality"
    ]
    const arrow = [
        "-->",
        "<-->",
        "<--"
    ]
  return (
    <motion.div className='flex flex-col relative h-screen text-center md:text-left max-w-7xl px-10 justify-evenly mx-auto items-center'
    initial={{
        opacity: 0
    }}
    whileInView={{
        opacity: 1
    }}
    transition={{
        duration: 1.5
    }}>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Brotherhood
        </h3>
        <div>
        <motion.img 
            initial={{
                x:-200,
                opacity: 0
            }}
            transition={{
                duration: 1.2
            }}
            whileInView={{
                x: 0,
                opacity: 1
            }}
            viewport={{
                once: true
            }}
            src={brotherhood.src}
            className='-mb-20 p-10 flex flex-shrink-0 w-56 h-56 rounded-full object-cover md:w-95 md:h-95 xl:w-[300px] xl:h-[300px]'/>

        </div>
        <div className='px-0 md:px-10'>
                <h4 className='text-4xl font-semibold text-center'><span className='underline decoration-[#68BBE3]/50'>The Three Pillars</span></h4>
                <div className='relative pt-5 w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory text-center'>
                    {pillars.map((pillar,i) =>(
                        <p className='text-base w-full flex-shrink-0 snap-center items-center justify-center'>
                        <span className='italic'>{ title[ i ] }</span><br></br><br></br>{pillar}<br></br><br></br>{ arrow[ i ] }
                        </p>
                    ))}
                    
                </div>
        </div>
    

    </motion.div>
  )
}