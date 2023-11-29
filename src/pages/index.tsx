import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import NotAuthHeader from '@/Components/Layout/NotAuth'
import { Box } from '@chakra-ui/react'
import { HomePage } from '@/Components/Home/Home'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>blue sky</title>
        <meta name="description" content="sustanable ecosystem project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/images/logo4.png" />
      </Head>
      
      {/* <NotAuthHeader>
        <HomePage/>
      </NotAuthHeader> */}
      <NotAuthHeader>
        <HomePage/>
      </NotAuthHeader>
          
    </>
  )
}
