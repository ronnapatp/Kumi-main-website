import Link from 'next/link'

export default function General() {
    return(
        <div id="general">
<section>
  <h1 className="text-center mb-4 pb-2 text-dark fw-bold">General questions</h1>


  <div className="row">
    <div className="col-md-6 col-lg-4 mb-4">
      <h6 className="mb-3 text-dark fw-bolder fs-5">What is kumi?</h6>
      <p>
        Kumi is a bla bla bla bla bla bla bla bla blab lba lab alb alba blalbal balbla bla blablabl
      </p>
    </div>

    <div className="col-md-6 col-lg-4 mb-4">
      <h6 className="mb-3 text-dark fw-bolder fs-5">Who is the founder of kumi?</h6>
      <p>
        You can see founder and history of Kumi the chubby bear at <Link href="/en/about"><a className="text-dark">About us</a></Link> page.
      </p>
    </div>

    <div className="col-md-6 col-lg-4 mb-4">
      <h6 className="mb-3 text-dark fw-bolder fs-5"><i className="fas fa-user text-dark fw-bolder fs-5 pe-2"></i> A simple
        question?
      </h6>
      <p>
        Currently, we only offer monthly subscription. You can upgrade or cancel your monthly
        account at any time with no further obligation.
      </p>
    </div>

    <div className="col-md-6 col-lg-4 mb-4">
      <h6 className="mb-3 text-dark fw-bolder fs-5"><i className="fas fa-rocket text-dark fw-bolder fs-5 pe-2"></i> A simple
        question?
      </h6>
      <p>
        Yes. Go to the billing section of your dashboard and update your payment information.
      </p>
    </div>

    <div className="col-md-6 col-lg-4 mb-4">
      <h6 className="mb-3 text-dark fw-bolder fs-5">A simple
        question?
      </h6>
      <p><strong><u>Unfortunately no</u>.</strong> We do not issue full or partial refunds for any
        reason.</p>
    </div>

    <div class="col-md-6 col-lg-4 mb-4">
      <h6 class="mb-3 text-dark fw-bolder fs-5">Another
        question that is longer than usual</h6>
      <p>
        Of course! We’re happy to offer a free plan to anyone who wants to try our service.
      </p>
    </div>
  </div>
</section>
        </div>
    )
}