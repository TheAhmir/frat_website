import { motion } from 'framer-motion'
import React from 'react'
import AlumniCard from './AlumniCard'
import Alumni1 from '@/assets/AlumniPhotos/Alumni1.png'
import Alumni2 from '@/assets/AlumniPhotos/Alumni2.png'
import Alumni3 from '@/assets/AlumniPhotos/Alumni3.png'
import Alumni4 from '@/assets/AlumniPhotos/Alumni4.png'
import Alumni5 from '@/assets/AlumniPhotos/Alumni5.png'
import Alumni6 from '@/assets/AlumniPhotos/Alumni6.png'
import Alumni7 from '@/assets/AlumniPhotos/Alumni7.png'
import Alumni8 from '@/assets/AlumniPhotos/Alumni8.png'
import Alumni9 from '@/assets/AlumniPhotos/Alumni9.png'
import Alumni10 from '@/assets/AlumniPhotos/Alumni10.png'
import Alumni11 from '@/assets/AlumniPhotos/Alumni11.png'

type Props = {}

export default function Alumni({}: Props) {
  return (
    <motion.div className='flex flex-col relative h-screen text-center max-w-7xl px-10 justify-evenly mx-auto items-center'
    initial={{
        opacity: 0
    }}
    whileInView={{
        opacity: 1
    }}
    transition={{
        duration: 1.5
    }}>
        <h3 className='absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Alumni
        </h3>
        <div className='pt-20 space-y-10 px-0 md:px-10'>
                <p className='pt-20 text-base md:text-lg md:text-left'>
                We want to thank all of our alumnus for continued unwaivering support and leadership for our organization. With the help of our alumni we have been able to maintain a functioning brotherhood and form tight nit relationships that allow us to confidently refer to one another as brothers. 
                </p>
                <p className='text-base md:text-lg md:text-left'>
                We would also like to acknowledge our alumni for continuing to direct each and every brother towards success following our time in college with unique connections and networking opportunities.
                </p>
                

                <div>
                    
        </div> 
        </div>
        <div className='w-full h-full flex space-x-5 overflow-x-auto p-5 snap-x snap-mandatory overflow-y-clip'>
        <img src={Alumni1.src} className='bg-[#292929] -mb-20 p-10 flex flex-shrink-0 w-56 h-56 object-cover md:w-95 md:h-95 xl:w-[300px] xl:h-[350px]'></img>
        <img src={Alumni2.src} className='bg-[#292929] -mb-20 p-10 flex flex-shrink-0 w-56 h-56 object-cover md:w-95 md:h-95 xl:w-[300px] xl:h-[350px]'></img>
        <img src={Alumni3.src} className='bg-[#292929] -mb-20 p-10 flex flex-shrink-0 w-56 h-56 object-cover md:w-95 md:h-95 xl:w-[300px] xl:h-[350px]'></img>
        <img src={Alumni4.src} className='bg-[#292929] -mb-20 p-10 flex flex-shrink-0 w-56 h-56 object-cover md:w-95 md:h-95 xl:w-[300px] xl:h-[350px]'></img>
        <img src={Alumni5.src} className='bg-[#292929] -mb-20 p-10 flex flex-shrink-0 w-56 h-56 object-cover md:w-95 md:h-95 xl:w-[300px] xl:h-[350px]'></img>
        <img src={Alumni6.src} className='bg-[#292929] -mb-20 p-10 flex flex-shrink-0 w-56 h-56 object-cover md:w-95 md:h-95 xl:w-[300px] xl:h-[350px]'></img>
        <img src={Alumni7.src} className='bg-[#292929] -mb-20 p-10 flex flex-shrink-0 w-56 h-56 object-cover md:w-95 md:h-95 xl:w-[300px] xl:h-[350px]'></img>
        <img src={Alumni8.src} className='bg-[#292929] -mb-20 p-10 flex flex-shrink-0 w-56 h-56 object-cover md:w-95 md:h-95 xl:w-[300px] xl:h-[350px]'></img>
        <img src={Alumni9.src} className='bg-[#292929] -mb-20 p-10 flex flex-shrink-0 w-56 h-56 object-cover md:w-95 md:h-95 xl:w-[300px] xl:h-[350px]'></img>
        <img src={Alumni10.src} className='bg-[#292929] -mb-20 p-10 flex flex-shrink-0 w-56 h-56 object-cover md:w-95 md:h-95 xl:w-[300px] xl:h-[350px]'></img>
        <img src={Alumni11.src} className='bg-[#292929] -mb-20 p-10 flex flex-shrink-0 w-56 h-56 object-cover md:w-95 md:h-95 xl:w-[300px] xl:h-[350px]'></img>
    </div>
    

    </motion.div>
  )
}