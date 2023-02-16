import React from 'react'
import { Cursor, Typewriter, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import DeltaPhi from '@/assets/DeltaPhi.png'
import Link from 'next/link'

type Props = {}

  
export default function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: [
            "Delta Phi Fraternity",
            "Omega Alpha Chapter",
            "Semper Ubique",
        ],
        loop: true,
        delaySpeed: 2000,
    })
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles />
        <img className='relative rounded-full h-32 w-32 mx-auto object-cover' src={ DeltaPhi.src } alt=''/>
        <div className='z-20'>
            <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>
                Established 1987
            </h2>
            <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
            <span className='mr-3'>{text}</span>
            <Cursor cursorColor= "#F7AB0A" />
            </h1>

            <div className='pt-5'>
                <Link href='#Brotherhood'>
                    <button className='heroButton'>Brotherhood</button>
                </Link>
                <Link href='#Rush'>
                    <button className='heroButton'>Rush</button>
                </Link>
                <Link href='#History'>
                    <button className='heroButton'>History</button>
                </Link>
                <Link href='#Philanthropy'>
                    <button className='heroButton'>Philanthropy</button>
                </Link>
                <Link href='#Alumni'>
                    <button className='heroButton'>Alumni</button>
                </Link>
            
            </div>
        </div>
    </div>
  )
}