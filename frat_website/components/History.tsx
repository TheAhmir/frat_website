import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

export default function History({}: Props) {
  return (
    <motion.div className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'
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
        History
        </h3>
        <div className='pt-20 space-y-5 px-0 md:px-10'>
                <p className='text-sm'>
                On May 21, 1986, Delta Phi National granted colony status to Omega Alpha's co-founders: Thomas Lee Toler and Marc Eric Maurer. If Omega Alpha was to be granted full chapter status, they had to complete a successful rush and pledging season and demonstrate interest for Delta Phi on the College's campus. Area alumni, mostly from the Rho Chapter (University of Virginia), attended a dinner during which the initial steps of starting a chapter were discussed. Shortly thereafter, Bud Walker expressed interest in joining. These three founders set up Omega Alpha’s first rush the following fall semester. Six more members joined. National and local alumni continued their support by arranging for the nine men to be initiated at the Xi Chapter (Johns Hopkins University) on March 6, 1987.
                </p>
                <p className='text-sm'>
                On September 26, 1987, Delta Phi’s Annual Convention officially extended Omega Alpha a charter. The Council for Fraternal Affairs (now the Interfraternity Council) at the College recognized Delta Phi on October 19, 1989.
                </p>
                <p className='text-sm'>
                Since the granting of its charter, Omega Alpha has resided in several residence halls and college apartments, including Ludwell and Cabell.  In January 1994, the College granted the fraternity a permanent residence located at 197 Armistead Avenue.  In the Fall of 2013, the fraternity relocated to the College’s newly constructed Fraternity Row along Ukrop Way. Due to an incident that took place in 2020, William and Mary stripped the Omega Alpha Chapter of Delta Phi of it's place on campus alongside it's formal recognition as a functioning fraternity of the College. Despite the hardships that would befall the fraternity, the chapter remains nationally recognized and supported by The Interfraternity Council (IFC) and continues to operate off campus.
                </p>  

                <a href="https://cash.app/$stelmo87" className='uppercase md:inline-flex text-sm text-gray-400'>
                Click here to see our statement on the matter
            </a>
            

                <div>
        </div> 
        
        
        </div>
    

    </motion.div>
  )
}