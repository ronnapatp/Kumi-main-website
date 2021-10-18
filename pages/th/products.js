import Head from 'next/head'


import Nav from '../../components/th/products/nav'
import Heroes from '../../components/th/products/heroes'
import Feature from '../../components/th/products/feature'
import List from '../../components/th/products/list'
import Footer from '../../components/th/footer'


export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>สินค้า | คุมิ</title>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:url" content="https://kumithebear.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Kumi the chubby bear" />
        <meta name="twitter:title" content="Kumi the chubby bear" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <Nav />

      <Heroes />

      <Feature />


      <List />

      <Footer />



    </div>
  )
}
