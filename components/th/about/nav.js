import Link from "next/link";
import Image from 'next/image';


export default function Nav() {
  return (
    <nav>
  <div className="container">
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <a className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
        <Image src="/kumiprofile.jpg" alt="Kumi logo" width={100} height={100}/>
      </a>

      <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><Link href="/"><a className="nav-link px-2 link-dark">หน้าหลัก</a></Link></li>
        <li><Link href="/th/products"><a className="nav-link px-2 link-dark">สินค้า</a></Link></li>
        <li><Link href="/th/about"><a className="nav-link px-2 link-secondary">เกี่ยวกับเรา</a></Link></li>
        <li><Link href="/th/blog"><a className="nav-link px-2 link-dark">บทความ</a></Link></li>
        <li><Link href="/th/contact"><a className="nav-link px-2 link-dark">ติดต่อเรา</a></Link></li>
        <li><Link href="/th/shop"><a className="nav-link px-2 link-dark">ร้านค้า</a></Link></li>
      </ul>

      <div className="col-md-3 text-end">
      <Link href="/th/about">
                <a className="text-decoration-none link-secondary">
                    ภาษาไทย
                </a>
            </Link>
            {' / '}
            <Link href="/en/about">
                <a className="text-decoration-none link-dark">
                    English
                </a>
            </Link>
      </div>
    </header>
  </div>
    </nav>
  );
}
