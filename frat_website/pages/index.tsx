import Header from '@/components/Header';
import type { NextPage } from 'next';
import Head from 'next/head';
import Hero from '@/components/Hero';
import Brotherhood from '@/components/Brotherhood';
import Rush from '@/components/Rush';
import History from '@/components/History';


export default function Home() {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0'>
      <Head>
        <title>Frat Website</title>
      </Head>
      
        {/* Header */}
        <Header />

        {/* Hero */}
        <section id="hero" className='snap-start'>
          <Hero />
        </section>

        {/* Brotherhood */}
        <section id='Brotherhood' className='snap-center'>
          <Brotherhood />
        </section>

        {/* Rush */}
        <section id='Rush' className='snap-center'>
          <Rush />
        </section>

        {/* History */}
        <section id='History' className='snap-center'>
          <History />
        </section>

        {/* Philantropy */}

        {/* Alumni */}

        {/* Contact Us */}
    
    </div>
  )
}
