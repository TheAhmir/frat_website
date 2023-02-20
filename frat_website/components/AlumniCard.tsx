import React from 'react'
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

export default function AlumniCard({}: Props) {
  return (
    <div className='flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory'>
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
  )
}