import Img from 'next/image';

export default function Hero (){
  return(
    <div className="container my-5">
    <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
      <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
        <h1 className="display-4 fw-bold lh-1">Promotion for kumi the chubby bear</h1>
        <p className="lead">Kumi promotion bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla</p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
          <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">View all</button>  
          <button type="button" className="btn btn-outline-secondary btn-lg px-4">Shop now</button>
        </div>
      </div>
      <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
          <span className="rounded-lg-3">
            <Img src="/kumiprofile.jpg" alt="kumi" width={720} height={720} />
          </span>        
      </div>
    </div>
  </div>
  )
}