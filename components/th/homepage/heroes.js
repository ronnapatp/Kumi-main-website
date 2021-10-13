import Image from 'next/image';
import Link from "next/link";



export default function Heroes() {
    return(
    <div className="container">
        <style jsx>{`
        .max-height-30{
            max-height: 30vh;
        }
        .pink{
          background-color: #FB7497;
        }
        .border-pink{
          
          border-color:#F04178;
        }
        `}</style>
  <div className="px-4 pt-5 my-5 text-center border-bottom">
    <h1 className="display-4 fw-bold">Kumi The Chubby Bear</h1>
    <div className="col-lg-6 mx-auto">
      <p className="lead mb-4">Kumi balm reduces itching from insect bites. Reduces swelling, redness and black marks Stop itching immediately after applying.</p>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
        <Link href="/en/shop"><button type="button" className="btn pink btn-lg px-4 me-sm-3 btn-light">Shop now!</button></Link>
        <Link href="#product"><button type="button" className="btn border-pink btn-light btn-lg px-4">Learn more</button></Link>
      </div>
    </div>
    <div className="overflow-hidden max-height-30">
      <div className="container px-4">
        <span className="img-fluid border rounded-3 shadow-lg mb-4"><Image src="/kumi profile logo.png" alt="Example image" width={900} height={500} /></span>
      </div>
    </div>
  </div>

    </div>
    )
}