import Footer from "./footer";
import Header from "./header"
import { Link } from "react-router-dom";
function About() {
  const about="About Us"
    return ( 
        <>
        <Header title={about}/>
  {/* About Start */}
  <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
    <div className="container py-5">
      <div className="row g-5">
        <div className="col-lg-7">
            <h5 className="fw-bold text-primary text-uppercase">TAKE A PATH WITH PURPOSE</h5>
          <div className="section-title position-relative pb-3 mb-5">
            <h1 className="mb-0">
            BE PART OF SOMETHING BIGGER
THAN YOURSELF.
            </h1>
          </div>
          <p className="mb-4" >
            
When it comes to learning about the Military, knowing where to start your research may seem daunting. Don’t worry — we’re here to help. The first steps to considering service include understanding the Military’s basic entrance requirements, exploring the different Service branches and deciding between enlisted and officer career paths.

      
          </p>
          <div className="row g-0 mb-3">
            <div className="col-sm-6 wow zoomIn" data-wow-delay="0.2s">
              <h5 className="mb-3">
                <i className="fa fa-check text-primary me-3" />
                Professional Staff
              </h5>
             </div>
            <div className="col-sm-6 wow zoomIn" data-wow-delay="0.4s">
              <h5 className="mb-3">
                <i className="fa fa-check text-primary me-3" />
                24/7 Support
              </h5>
            
            </div>
          </div>
          <div
            className="d-flex align-items-center mb-4 wow fadeIn"
            data-wow-delay="0.6s"
          >
            <div
              className="bg-primary d-flex align-items-center justify-content-center rounded"
              style={{ width: 60, height: 60 }}
            >
              <i className="fa fa-phone-alt text-white" />
            </div>
            <div className="ps-4">
              <h5 className="mb-2">Call to ask any question</h5>
              <h4 className="text-primary mb-0">+91 6345678900</h4>
            </div>
          </div>
          <Link to
            ="/applyasmentor"
            className="btn btn-primary py-3 px-5 mt-3 wow zoomIn"
            data-wow-delay="0.9s"
          >
            JOIN OUR TEAM
          </Link>
        </div>
        <div className="col-lg-5" style={{ minHeight: 500 }}>
          <div className="position-relative h-100">
            <img
              className="position-absolute w-100 h-100 rounded wow zoomIn"
              data-wow-delay="0.9s"
              src="img/triservice.jpg"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* About End */}
 {/* Service Start */}
 <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
    <div className="container py-5">
      <div
        className="section-title text-center position-relative pb-3 mb-5 mx-auto"
        style={{ maxWidth: 600 }}
      >
        <h5 className="fw-bold text-primary text-uppercase">Military Services</h5>
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
            <Link to="/indianarmy" className="btn btn-lg btn-primary rounded" >
              <i className="bi bi-arrow-right" />
            </Link>
              {/* <i className="bi bi-arrow-right" />
            </a> */}
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
            <p className="m-0" >
              <p style={{color:"black"}}>
            The Indian Navy is the maritime branch of the Indian Armed Forces. The President of India is the Supreme Commander of the Indian Navy. The Chief of Naval Staff, a four-star admiral.
            </p>
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

export default About;