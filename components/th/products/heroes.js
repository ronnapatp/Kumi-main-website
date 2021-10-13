import Link from "next/link";
import Image from 'next/image';


export default function Nav() {
  return (
<div className="container col-xxl-8 px-4 py-5">
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
<div className="row flex-lg-row-reverse align-items-center g-5 py-5">
  <div className="col-10 col-sm-8 col-lg-6">
      <span className="d-block mx-lg-auto img-fluid" >
    <Image src="/kumiprofile.jpg" alt="Bootstrap Themes" width={700} height={500} />
  </span>
  </div>
  <div className="col-lg-6">
    <h1 className="display-5 fw-bold lh-1 mb-3">OUR PRODUCT</h1>
    <p className="lead">Take a look online! </p>
    <div className="d-grid gap-2 d-md-flex justify-content-md-start">
      <Link href="#"><a><button type="button" className="btn pink btn-lg px-4 me-sm-3 btn-light">Buy now</button></a></Link>
      <Link href="#"><a><button type="button" className="btn btn-outline-secondary btn-lg px-4">Learn more</button></a></Link>
    </div>
  </div>
</div>
</div>
  );
}
