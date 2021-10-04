import Image from 'next/image';


export default function Heroes() {
    return(
    <div>
        <style jsx>{`
        .max-height-30{
            max-height: 30vh;
        }
        `}</style>
  <div className="px-4 pt-5 my-5 text-center border-bottom">
    <h1 className="display-4 fw-bold">Kumi The Chubby Bear</h1>
    <div className="col-lg-6 mx-auto">
      <p className="lead mb-4">Kumi balm reduces itching from insect bites. Reduces swelling, redness and black marks Stop itching immediately after applying.</p>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
        <button type="button" className="btn btn-primary btn-lg px-4 me-sm-3">Shop now!</button>
        <button type="button" className="btn btn-outline-secondary btn-lg px-4">Learn more</button>
      </div>
    </div>
    <div className="overflow-hidden max-height-30">
      <div className="container px-5">
        <span className="img-fluid border rounded-3 shadow-lg mb-4"><Image src="/kumi profile logo.png" alt="Example image" width={700} height={500} /></span>
      </div>
    </div>
  </div>

    </div>
    )
}