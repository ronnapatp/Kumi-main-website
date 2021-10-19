import Link from 'next/link'
export default function Faq(){
    return(
        <div>
              <div className="px-4 py-5 my-5 text-center">
                <h1 className="display-5 fw-bold">FAQ</h1>
                <div className="col-lg-6 mx-auto">
                    <p className="lead mb-4">Kumi the chubby bear FAQ page. You can find your question by click catrgiry down below!</p>
                </div>
              </div>

              <div className="container px-4 py-5" id="icon-grid">
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
        <Link href="/">
        <a className="text-dark text-decoration-none">
      <div className="col d-flex align-items-start">
        <div>
          <h4 className="fw-bold mb-0">Product <i className="bi bi-cart"></i>   </h4>
          <p>Paragraph of text beneath the heading to explain the heading.</p>
        </div>
      </div>
      </a>
      </Link>
      <div className="col d-flex align-items-start">
        <div>
          <h4 className="fw-bold mb-0">Featured title</h4>
          <p>Paragraph of text beneath the heading to explain the heading.</p>
        </div>
      </div>
      <div className="col d-flex align-items-start">
        <div>
          <h4 className="fw-bold mb-0">Featured title</h4>
          <p>Paragraph of text beneath the heading to explain the heading.</p>
        </div>
      </div>
      <div className="col d-flex align-items-start">
        <div>
          <h4 className="fw-bold mb-0">Featured title</h4>
          <p>Paragraph of text beneath the heading to explain the heading.</p>
        </div>
      </div>
      <div className="col d-flex align-items-start">
        <div>
          <h4 className="fw-bold mb-0">Featured title</h4>
          <p>Paragraph of text beneath the heading to explain the heading.</p>
        </div>
      </div>
      <div className="col d-flex align-items-start">
        <div>
          <h4 className="fw-bold mb-0">Featured title</h4>
          <p>Paragraph of text beneath the heading to explain the heading.</p>
        </div>
      </div>
      <div className="col d-flex align-items-start">
        <div>
          <h4 className="fw-bold mb-0">Featured title</h4>
          <p>Paragraph of text beneath the heading to explain the heading.</p>
        </div>
      </div>
      <div className="col d-flex align-items-start">
        <div>
          <h4 className="fw-bold mb-0">Featured title</h4>
          <p>Paragraph of text beneath the heading to explain the heading.</p>
        </div>
      </div>
    </div>
  </div>
        </div>
    )
}