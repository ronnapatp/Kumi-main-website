import Head from 'next/head'

import Nav from '../components/404/nav'
import Error from '../components/404/error'
import Footer from '../components/404/footer'

export default function Custom404() {
    return (
        <div>
          <Head>
        <title>404 - Page not found</title>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:url" content="https://kumithebear.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Sorry we can't find this page for you" />
        <meta name="twitter:title" content="Kumi the chubby bear" />
        <meta name="twitter:card" content="summary_large_image" />
            </Head>

            <Nav />

            <Error />   

            <Footer />
        </div>
    )
}