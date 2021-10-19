import Link from 'next/link'

import General from './category/general'
import Product from './category/product'

export default function Faq(){
    return(
        <div>
              <div className="text-center">
                <h1 className="display-5 fw-bold">FAQ</h1>
                <div className="col-lg-6 mx-auto">
                    <p className="lead mb-4">Kumi the chubby bear FAQ page. You can find your question by click catrgiry down below!</p>
                </div>
              </div>

              <div className="container">
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
    <Link href="#general">
        <a className="text-dark text-decoration-none">
      <div className="col d-flex align-items-start">
        <div>
          <h4 className="fw-bold mb-0">General <i className="bi bi-chat-left-dots"></i></h4>
        </div>
      </div>
      </a>
      </Link>
        <Link href="#product">
        <a className="text-dark text-decoration-none">
      <div className="col d-flex align-items-start">
        <div>
          <h4 className="fw-bold mb-0">Product <i className="bi bi-cart"></i>   </h4>
        </div>
      </div>
      </a>
      </Link>
      <Link href="/">
        <a className="text-dark text-decoration-none">
      <div className="col d-flex align-items-start">
        <div>
          <h4 className="fw-bold mb-0">Payment <i className="bi bi-coin"></i>  </h4>
        </div>
      </div>
      </a>
      </Link>
      <Link href="/">
        <a className="text-dark text-decoration-none">
      <div className="col d-flex align-items-start">
        <div>
          <h4 className="fw-bold mb-0">Shipping <i className="bi bi-truck"></i>   </h4>
        </div>
      </div>
      </a>
      </Link>        
      <Link href="/">
        <a className="text-dark text-decoration-none">
      <div className="col d-flex align-items-start">
        <div>
          <h4 className="fw-bold mb-0">Privacy <i className="bi bi-lock"></i></h4>
        </div>
      </div>
      </a>
      </Link>
      <Link href="/">
        <a className="text-dark text-decoration-none">
      <div className="col d-flex align-items-start">
        <div>
          <h4 className="fw-bold mb-0">Terms <i className="bi bi-people-fill"></i></h4>
        </div>
      </div>
      </a>
      </Link>
      <Link href="/">
        <a className="text-dark text-decoration-none">
      <div className="col d-flex align-items-start">
        <div>
          <h4 className="fw-bold mb-0">Buy our product <i className="bi bi-bag"></i></h4>
        </div>
      </div>
      </a>
      </Link>
      <Link href="/">
        <a className="text-dark text-decoration-none">
      <div className="col d-flex align-items-start">
        <div>
          <h4 className="fw-bold mb-0">Languages <i className="bi bi-translate"></i></h4>
        </div>
      </div>
      </a>
      </Link>
    </div>
    <hr />

  </div>

<General />

<Product />

        </div>
    )
}