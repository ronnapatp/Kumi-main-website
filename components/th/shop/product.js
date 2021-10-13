import Image from 'next/image';

export default function Product(){
    return(
<section>
  <div className="container py-5">
    <div className="row justify-content-center">
      <div className="col-md-8 col-lg-6 col-xl-4">
        <div className="card text-black">
            <span className="card-img-top text-center">
          <Image
            src="/kumiprofile.jpg"
            alt="..."
            width={100}
            height={100}
          />
          </span>
          <div className="card-body">
            <div className="text-center">
              <h5 className="card-title">Believing is seeing</h5>
              <p className="text-muted mb-4">Apple pro display XDR</p>
            </div>
            
            <div className="d-flex justify-content-between total font-weight-bold mt-4">
              <span>Total</span><span>$7,197.00</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-8 col-lg-6 col-xl-4">
        <div className="card text-black">
        <span className="card-img-top text-center">
          <Image
            src="/kumiprofile.jpg"
            alt="..."
            width={100}
            height={100}
          />
          </span>
          <div className="card-body">
          <div className="text-center">
              <h5 className="card-title">Believing is seeing</h5>
              <p className="text-muted mb-4">Apple pro display XDR</p>
            </div>
            
            <div className="d-flex justify-content-between total font-weight-bold mt-4">
              <span>Total</span><span>$7,197.00</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-8 col-lg-6 col-xl-4">
        <div className="card text-black">
        <span className="card-img-top text-center">
          <Image
            src="/kumiprofile.jpg"
            alt="..."
            width={100}
            height={100}
          />
          </span>
          <div className="card-body">
            <div className="text-center">
              <h5 className="card-title">Believing is seeing</h5>
              <p className="text-muted mb-4">Apple pro display XDR</p>
            </div>

            <div className="d-flex justify-content-between total font-weight-bold mt-4">
              <span>Total</span><span>$7,197.00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</section>
    )
}