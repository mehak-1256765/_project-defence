import { Link } from "react-router-dom";
function Footer() {
    return ( 
        <>
  {/* Footer Start */}
  <div
    className="container-fluid bg-dark text-light mt-5 wow fadeInUp"
    data-wow-delay="0.1s"
  >
    <div className="container">
      <div className="row gx-5">
        <div className="col-lg-4 col-md-6 footer-about">
          <div className="d-flex flex-column align-items-center justify-content-center text-center h-100 bg-primary p-4">
            <a href="index.html" className="navbar-brand">
              <h1 className="m-0 text-white">
             
                DEFENCE
              </h1>
            </a>
            <p className="mt-3 mb-4">
            When it comes to learning about the Military, knowing where to start your research may seem daunting. Don’t worry — we’re here to help.
            </p>
            <form action="">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control border-white p-3"
                  placeholder="Your Email"
                />
                <Link to="/register">
                <button className="btn btn-dark">Sign Up</button></Link>
              </div>
            </form>
          </div>
        </div>
        <div className="col-lg-8 col-md-6">
          <div className="row gx-5">
            <div className="col-lg-4 col-md-12 pt-5 mb-5">
              <div className="section-title section-title-sm position-relative pb-3 mb-4">
                <h3 className="text-light mb-0">Get In Touch</h3>
              </div>
              <div className="d-flex mb-2">
                <i className="bi bi-geo-alt text-primary me-2" />
                <p className="mb-0" style={{color:"white"}}>New Delhi,India</p>
              </div>
              <div className="d-flex mb-2">
                <i className="bi bi-envelope-open text-primary me-2" />
                <p className="mb-0"  style={{color:"white"}}>info@example.com</p>
              </div>
              <div className="d-flex mb-2">
                <i className="bi bi-telephone text-primary me-2" />
                <p className="mb-0"  style={{color:"white"}}>+012 345 67890</p>
              </div>
              <div className="d-flex mt-4">
                <a className="btn btn-primary btn-square me-2" href="#">
                  <i className="fab fa-twitter fw-normal" />
                </a>
                <a className="btn btn-primary btn-square me-2" href="#">
                  <i className="fab fa-facebook-f fw-normal" />
                </a>
                <a className="btn btn-primary btn-square me-2" href="#">
                  <i className="fab fa-linkedin-in fw-normal" />
                </a>
                <a className="btn btn-primary btn-square" href="#">
                  <i className="fab fa-instagram fw-normal" />
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
              <div className="section-title section-title-sm position-relative pb-3 mb-4">
                <h3 className="text-light mb-0">Quick Links</h3>
              </div>
              <div className="link-animated d-flex flex-column justify-content-start">
                <Link to="/home" className="text-light mb-2" >
                  <i className="bi bi-arrow-right text-primary me-2" />
                  Home
                </Link>
                <Link to="/about" className="text-light mb-2" >
                  <i className="bi bi-arrow-right text-primary me-2" />
                  About Us
                </Link>
                {/* < className="text-light mb-2" href="#">
                  <i className="bi bi-arrow-right text-primary me-2" />
                  Our Services
                </a> */}
                <Link to="/mentors" className="text-light mb-2" >
                  <i className="bi bi-arrow-right text-primary me-2" />
                  Meet The Team
                </Link>
                <Link to="blog" className="text-light mb-2" >
                  <i className="bi bi-arrow-right text-primary me-2" />
                  Latest Blog
                </Link>
                <Link to="/contact" className="text-light" >
                  <i className="bi bi-arrow-right text-primary me-2" />
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
              <div className="section-title section-title-sm position-relative pb-3 mb-4">
                <h3 className="text-light mb-0">Popular Links</h3>
              </div>
              <div className="link-animated d-flex flex-column justify-content-start">
                <Link to="/home" className="text-light mb-2">
                  <i className="bi bi-arrow-right text-primary me-2" />
                  Home
                </Link>
                <Link to="/about" className="text-light mb-2" >
                  <i className="bi bi-arrow-right text-primary me-2" />
                  About Us
                </Link>
                 <Link to="/guidance" className="text-light mb-2">
                  <i className="bi bi-arrow-right text-primary me-2" />
                  Our Services
                </Link> 
                <Link to="/mentors" className="text-light mb-2" >
                  <i className="bi bi-arrow-right text-primary me-2" />
                  Meet The Team
                </Link>
                <Link to="/blog" className="text-light mb-2">
                  <i className="bi bi-arrow-right text-primary me-2" />
                  Latest Blog
                </Link>
                <Link to="/contact" className="text-light" >
                  <i className="bi bi-arrow-right text-primary me-2" />
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* <div className="container-fluid text-white" style={{ background: "" }}> */}
    <div className="container text-center">
      <div className="row justify-content-end">
        <div className="col-lg-8 col-md-6">
          <div
            className="d-flex align-items-center justify-content-center"
            style={{ height: 75 }}
          >
          
          
          </div>
        </div>
      </div>
    </div>

  {/* Footer End */}
  
  {/* Back to Top */}
 
</>



     );
}

export default Footer;