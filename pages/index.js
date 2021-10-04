import Head from 'next/head'
import Image from 'next/image'

import Nav from '../components/nav'
import Heroes from '../components/heroes'

export default function Home() {
  return (
    <div>
      <Head>
        <title>HOME | Kumi</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <Heroes />


    </div>
  )
}
