import { Link } from "react-router-dom";
function Service() {
    return (
        <>
  {/* Service Start */}
  <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
    <div className="container py-5">
      <div
        className="section-title text-center position-relative pb-3 mb-5 mx-auto"
        style={{ maxWidth: 600 }}
      >
        <h5 className="fw-bold text-primary text-uppercase">About Military Services</h5>
        <h1 className="mb-0">
          
A STRONG MILITARY
IS CREATED ONE
WAY.
        </h1>
      </div>
      <div className="row g-5" style={{ backgroundImage: "url(img/transparentimg.jpeg)" }} >
        <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
          <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
            <div className="service-icon">
              <i className="fa-solid fa-gun text-white" />
            </div>
            <h4 className="mb-3">INDIAN ARMY</h4>
            <p className="m-0">
            The Indian Army is the land-based branch and the largest component of the Indian Armed Forces. The President of India is the Supreme Commander of the Indian Army.
            </p>
            {/* <a className="btn btn-lg btn-primary rounded" href="https://indianarmy.nic.in/"> */}
            <Link to="/indianarmy" className="btn btn-lg btn-primary rounded" >
              <i className="bi bi-arrow-right" />
            </Link>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
          <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
            <div className="service-icon">
              <i className="fa fa-fighter-jet text-white" />
            </div>
            <h4 className="mb-3">INDIAN AIR FORCE</h4>
            <p className="m-0">
            The Indian Air Force was officially established on 8 October 1932. Its first ac flight came into being on 01 Apr 1933 with six RAF-trained officers and 19 Havai Sepoys . 
            </p>
            <a className="btn btn-lg btn-primary rounded" href="https://indianairforce.nic.in/">
              <i className="bi bi-arrow-right" />
            </a>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.9s" >
          <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
            <div className="service-icon" >
              <i className="fa fa-ship text-white" />
            </div>
            <h4 className="mb-3">INDIAN NAVY</h4>
            <p className="m-0">
            The Indian Navy is the maritime branch of the Indian Armed Forces. The President of India is the Supreme Commander of the Indian Navy. The Chief of Naval Staff, a four-star admiral.
            </p>
            <a className="btn btn-lg btn-primary rounded" href="https://indiannavy.nic.in/">
              <i className="bi bi-arrow-right" />
            </a>
          </div>
        </div>
       
     
      </div>
    </div>
  </div>
  {/* Service End */}
</>

      );
}

export default Service;