import { motion } from 'framer-motion'
import React from 'react'
import PhilanthropyCard from '@/components/PhilanthropyCard';

type Props = {}

export default function Philanthropy({}: Props) {
  return (
    <motion.div className='flex flex-col relative h-screen text-center md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'
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
        Philanthropy
        </h3>
        <div className='space-y-5 px-0 md:px-10'>
                <p className='text-base md:text-lg lg:text-xl md:text-left'>
                Every spring the gentlemen of Delta Phi host various events to raise money for the community. In recent years, over $3000 was raised! We encourage all to come out and support this worthy charity.
                </p>
                <p className='text-base md:text-lg lg:text-xl md:text-left'>
                All of the proceeds benefit Avalon: A Center For Women and Children. Avalon serves women in the Greater Williamsburg area who have experienced domestic violence and sexual assault. Avalon aims to break the cycle of abuse and help create a positive future for those they serve. To learn more, visit their website here: <a href='http://www.avaloncenter.org' className='underline text-blue-400'>http://www.avaloncenter.org</a>.
                </p>
                <p className='text-base md:text-lg lg:text-xl md:text-left'>
                For information about upcoming events, please contact Delta Phi through email at <a href='mailto:stelmohalloa@gmail.com' className='underline text-blue-400'>stelmohalloa@gmail.com</a> or direct message Delta Phi on instagram at <a href='https://instagram.com/st.elmohall?igshid=YmMyMTA2M2Y=' className='underline text-blue-400'>st.elmohall</a>.
                </p>
                <div className='hidden'>
                <PhilanthropyCard />
                <PhilanthropyCard />
                </div>

                <div>
                    
        </div> 
        </div>
    

    </motion.div>
  )
}