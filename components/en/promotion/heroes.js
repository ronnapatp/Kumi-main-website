import Img from 'next/image';

export default function Hero (){
  return(
    <div class="container my-5">
    <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
      <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
        <h1 class="display-4 fw-bold lh-1">Promotion for kumi the chubby bear</h1>
        <p class="lead">Kumi promotion bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla</p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
          <button type="button" class="btn btn-primary btn-lg px-4 me-md-2 fw-bold">View all</button>  
          <button type="button" class="btn btn-outline-secondary btn-lg px-4">Shop now</button>
        </div>
      </div>
      <div class="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
          <span class="rounded-lg-3">
            <Img src="/kumiprofile.jpg" alt="kumi" width={720} height={720} />
          </span>        
      </div>
    </div>
  </div>
  )
}