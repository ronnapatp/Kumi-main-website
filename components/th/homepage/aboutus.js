import Link from "next/link";
import Image from 'next/image';


export default function Faq() {
  return (
  <div className="bg-light">
    <div className="p-4 p-md-5 mb-4 container">
    <span className="float-end"><Image src="/kumiprofile.jpg" alt="unknow" width={100} height={100} /></span>

        <div className="col-md-6 px-0">
            <h1 className="display-4 fst-italic">About us</h1>
            <p className="lead my-3">The Kumi brand was founded and launched the first product in August 2019 through collaboration. between pediatric allergists and chemists who want to develop natural, gentle mosquito repellent products...</p>
            <Link href="/en/about"><a className="text-decoration-none text-dark">Read more &rarr;</a></Link>
        </div>
    </div>
  </div>
  );
}
