import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
    return (
      <div>
        <Head>
          <title>หน้าหลัก | คุมิ</title>
          <meta name="description" content="Kumi the chubby bear" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
      
      <div className="text-center">
      <h1 className="text-center">ยินดีต้อนรับสู่ภาษาไทย</h1>
      <p className="text-center">หน้านี้ยังไม่มี</p>
      <Link href="/"><a>กลับหน้าภาษาอังกฤษ</a></Link>
      </div>
      </div>
    )
  }
  