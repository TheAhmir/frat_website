import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
        <title>Delta Phi Website</title>
      </Head>

      <h1 className="p-10 text-red-500">Lets build an AWESOME website!</h1>
    </div>
  )
}
