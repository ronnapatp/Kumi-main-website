import Head from 'next/head'

import Nav from '../../components/th/homepage/nav'
import Heroes from '../../components/th/homepage/heroes'
import Product from '../../components/th/homepage/product'
import Review from '../../components/th/homepage/review'
import Faq from '../../components/th/homepage/faq'
import Aboutus from '../../components/th/homepage/aboutus'
import Footer from '../../components/th/footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>HOME | Kumi</title>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:url" content="https://kumithebear.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Kumi the chubby bear" />
        <meta property="og:description" content="Kumi the chubby bear" />
        <meta name="twitter:title" content="Kumi the chubby bear" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <Nav />

      <Heroes />

      <br /><br />

      <Product />

      <Review />

      <Faq />

      <Aboutus />

      <Footer />


    </div>
  )
}
