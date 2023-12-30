import Chats from "./chat";
import { Link } from "react-router-dom";
import Footer from "./footer";
function Guidance() {
  let userLoginStatus = true
  let userLogStatus = false
  console.log(localStorage.getItem("uinfo"))
  let udaya = JSON.parse(localStorage.getItem("uinfo"))
  if (localStorage.getItem("uinfo") === null) {
    userLoginStatus = false
    userLogStatus = true
    
  }

    return ( 
      <>
        <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
              <div
            className="section-title text-center position-relative pb-3 mb-5 mx-auto"
            style={{ maxWidth: 600 }}
          >
        <h1 className="mb-0" style={{color:"blue"}}>Success guide for defence exams </h1>
   
            </div>
            <p style={{color:"beige"}}>Many Defence Exams are round the corner like AFCAT, CDS, CAPF ACs, Territorial Army and CISF Constable etc. and everybody is gearing up its speed to clear any one of exam.  These are very popular exams and every year lakhs of aspirants appear for these exams. Cracking this exam requires the right approach and proper strategy. It has been developed under meticulous guidance covering all the important topics with sufficient explanation, one-liners. It also covers the questions having the most probability to appear in the exams. Every aspirant must go through the Success Guide before the examination.</p><br/><br/>

            <h3 style={{color:"blue"}}>One Stop Solution for AFCAT, CDS, CAPF ACs Exam</h3>
            <p  style={{color:"beige"}}>It just takes the right study material along with proper practice to crack any government job exam. Adda247 is known for its quality content & high-level mock tests. We have curated a one-stop solution for all defence exams. With the help of experts we have prepared a Success Guide for Defence Exams which you can revise until the D day. This includes all the important topics and practice questions which will give ace to your preparation levels. Download the PDFs from the link given below:</p><br/><br/>
            <h4 className="freestudymaterial"><a href="https://drive.google.com/drive/folders/1ZCqDUWkXmgq-EXGpD2suWsaJmmh9_zgU?usp=share_link"  >Download free study material</a></h4><br/><br/>
<h2 style={{color:"blue"}}>Popular Online courses.</h2>


<div className="container-xl">
  <div className="row">
    <div className="col-md-12">
     <div className="crousel1">
      <div
        id="myCarousel"
        className="carousel slide"
        data-ride="carousel"
        data-interval={0}
      >
        {/* Carousel indicators */}

    <div className="caroselmentor">
        <ol className="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to={0} className="active" />
          <li data-target="#myCarousel" data-slide-to={1} />
          <li data-target="#myCarousel" data-slide-to={2} />
        </ol>
    
        {/* Wrapper for carousel items */}
   <div className="inner">
        <div className="carousel-inner">
          <div className="item carousel-item active">
            <div className="row">
              <div className="col-sm-3">
                <div className="thumb-wrapper">
                  <span className="wish-icon">
                    <i className="fa fa-heart-o" />
                  </span>
                  <div className="img-box">
                    <img
                      src="img/ssb-interview-coaching-2022.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  
                  <div className="thumb-content">
                    <h4>SSB interview online coaching</h4>
                    <div className="star-rating">
                      <ul className="list-inline">
                        <li className="list-inline-item">
                          <i className="fa fa-star" />
                        </li>
                        <li className="list-inline-item">
                          <i className="fa fa-star" />
                        </li>
                        <li className="list-inline-item">
                          <i className="fa fa-star" />
                        </li>
                        <li className="list-inline-item">
                          <i className="fa fa-star" />
                        </li>
                        <li className="list-inline-item">
                          <i className="fa fa-star-o" />
                        </li>
                      </ul>
                    </div>
                    <p className="item-price">
                      <strike>Rs.6999.00</strike> <b>Rs.5000.00</b>
                    </p>
                    {userLoginStatus &&
                          <>
                    <Link to="/booking" className="btn btn-primary">
                      Book now
                    </Link>
                    </>}
                    {userLogStatus &&
                          <>
                    <Link to="/login" className="btn btn-primary">
                      Book now
                    </Link>
                    </>}
                  </div>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="thumb-wrapper">
                  <span className="wish-icon">
                    <i className="fa fa-heart-o" />
                  </span>
                  <div className="img-box">
                    <img
                      src="img/cds-exam-coaching-free.jpg"
                      className="img-fluid"
                      alt="Headphone"
                    />
                  </div>
                  <div className="thumb-content">
                    <h4>CDS exam online coaching 2023</h4>
                    <div className="star-rating">
                      <ul className="list-inline">
                        <li className="list-inline-item">
                          <i className="fa fa-star" />
                        </li>
                        <li className="list-inline-item">
                          <i className="fa fa-star" />
                        </li>
                        <li className="list-inline-item">
                          <i className="fa fa-star" />
                        </li>
                        <li className="list-inline-item">
                          <i className="fa fa-star" />
                        </li>
                        <li className="list-inline-item">
                          <i className="fa fa-star-o" />
                        </li>
                      </ul>
                    </div>
                    <p className="item-price">
                      <strike>Rs.5999.00</strike> <b>Rs.5000.00</b>
                    </p>
                    {/* {userLogStatus && <> */}
                    <Link to="/booking" className="btn btn-primary">
                      Book now
                    </Link>
                    {/* </>} */}
                  </div>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="thumb-wrapper">
                  <span className="wish-icon">
                    <i className="fa fa-heart-o" />
                  </span>
                  <div className="img-box">
                    <img
                      src="img/afcat-coaching-free-768x432.jpg"
                      className="img-fluid"
                      alt="Macbook"
                    />
                  </div>
                  <div className="thumb-content">
                    <h4>AFCAT exam online coaching</h4>
                    <div className="star-rating">
                      <ul className="list-inline">
                        <li className="list-inline-item">
                          <i className="fa fa-star" />
                        </li>
                        <li className="list-inline-item">
                          <i className="fa fa-star" />
                        </li>
                        <li className="list-inline-item">
                          <i className="fa fa-star" />
                        </li>
                        <li className="list-inline-item">
                          <i className="fa fa-star" />
                        </li>
                        <li className="list-inline-item">
                          <i className="fa fa-star-half-o" />
                        </li>
                      </ul>
                    </div>
                    <p className="item-price">
                      <strike>Rs.5999.00</strike> <b>Rs.5000.00</b>
                    </p>
                    <Link to="/booking" className="btn btn-primary">
                      Book now
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="thumb-wrapper">
                  <span className="wish-icon">
                    <i className="fa fa-heart-o" />
                  </span>
                  <div className="img-box">
                    <img
                      src="img/ota-exam-coaching.jpg"
                      className="img-fluid"
                      alt="Nikon"
                    />
                  </div>
                  <div className="thumb-content">
                    <h4>CDS OTA exam online coaching</h4>
                    <div className="star-rating">
                      <ul className="list-inline">
                        <li className="list-inline-item">
                          <i className="fa fa-star" />
                        </li>
                        <li className="list-inline-item">
                          <i className="fa fa-star" />
                        </li>
                        <li className="list-inline-item">
                          <i className="fa fa-star" />
                        </li>
                        <li className="list-inline-item">
                          <i className="fa fa-star-o" />
                        </li>
                        <li className="list-inline-item">
                          <i className="fa fa-star-o" />
                        </li>
                      </ul>
                    </div>
                    <p className="item-price">
                      <strike>Rs.5499.00</strike> <b>Rs.5000.00</b>
                    </p>
                    <Link to="/booking" className="btn btn-primary">
                      Book now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item carousel-item">
            <div className="row">
              <div className="col-sm-3">
                <div className="thumb-wrapper">
                  <span className="wish-icon">
                    <i className="fa fa-heart-o" />
                  </span>
                  <div className="img-box">
                    <img
                      src="img/nda-online-coaching-free.jpg"
                      className="img-fluid"
                      alt="Play Station"
                    />
                  </div>
                  <div className="thumb-content">
                    <h4>NDA exam online coaching</h4>
                    <p className="item-price">
                      <strike>RS6999.00</strike> <span>Rs.5000.00</span>
                    </p>
                    <div className="star-rating">
                      <ul className="list-inline">
                        <li className="list-inline-item">
                          <i className="fa fa-star" />
                        </li>
                        <li className="list-inline-item">
                          <i className="fa fa-star" />
                        </li>
                        <li className="list-inline-item">
                          <i className="fa fa-star" />
                        </li>
                        <li className="list-inline-item">
                          <i className="fa fa-star" />
                        </li>
                        <li className="list-inline-item">
                          <i className="fa fa-star-o" />
                        </li>
                      </ul>
                    </div>
                    <Link to="/booking" className="btn btn-primary">
                      Book now
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="thumb-wrapper">
                  <span className="wish-icon">
                    <i className="fa fa-heart-o" />
                  </span>
                  <div className="img-box">
                    <img
                      src="img/territorial-army-online-coaching.jpg"
                      className="img-fluid"
                      alt="Macbook"
                    />
                  </div>
                  <div className="thumb-content">
                    <h4>Territorial army online coaching</h4>
                    <p className="item-price">
                      <strike>Rs.6999.00</strike> <span>Rs.5000.00</span>
                    </p>
                    <div className="star-rating">
                      <ul className="list-inline">
                        <li className="list-inline-item">
                          <i className="fa fa-star" />
                        </li>
                        <li className="list-inline-item">
                          <i className="fa fa-star" />
                        </li>
                        <li className="list-inline-item">
                          <i className="fa fa-star" />
                        </li>
                        <li className="list-inline-item">
                          <i className="fa fa-star" />
                        </li>
                        <li className="list-inline-item">
                          <i className="fa fa-star-half-o" />
                        </li>
                      </ul>
                    </div>
                    <Link to="/booking" className="btn btn-primary">
                      Book now                   </Link>
                  </div>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="thumb-wrapper">
                  <span className="wish-icon">
                    <i className="fa fa-heart-o" />
                  </span>
                  <div className="img-box">
                    <img
                      src="img/ACC-Exam-Online-Coaching.jpg"
                      className="img-fluid"
                      alt="Speaker"
                    />
                  </div>
                  <div className="thumb-content">
                    <h4>ACC online coaching 2023</h4>
                    <p className="item-price">
                      <strike>6999.00</strike> <span>5000.00</span>
                    </p>
                    <div className="star-rating">
                      <ul className="list-inline">
                        <li className="list-inline-item">
                          <i className="fa fa-star" />
                        </li>
                        <li className="list-inline-item">
                          <i className="fa fa-star" />
                        </li>
                        <li className="list-inline-item">
                          <i className="fa fa-star" />
                        </li>
                        <li className="list-inline-item">
                          <i className="fa fa-star" />
                        </li>
                        <li className="list-inline-item">
                          <i className="fa fa-star-o" />
                        </li>
                      </ul>
                    </div>
                    <Link to="/booking" className="btn btn-primary">
                      Book now
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="thumb-wrapper">
                  <span className="wish-icon">
                    <i className="fa fa-heart-o" />
                  </span>
                  <div className="img-box">
                    <img
                      src="img/MNS-Exam-Coaching.jpg"
                      className="img-fluid"
                      alt="Galaxy"
                    />
                  </div>
                  <div className="thumb-content">
                    <h4>MNS online coaching 2023</h4>
                    <p className="item-price">
                      <strike>Rs.6999.00</strike> <span>Rs.5000.00</span>
                    </p>
                    <div className="star-rating">
                      <ul className="list-inline">
                        <li className="list-inline-item">
                          <i className="fa fa-star" />
                        </li>
                        <li className="list-inline-item">
                          <i className="fa fa-star" />
                        </li>
                        <li className="list-inline-item">
                          <i className="fa fa-star" />
                        </li>
                        <li className="list-inline-item">
                          <i className="fa fa-star" />
                        </li>
                        <li className="list-inline-item">
                          <i className="fa fa-star-o" />
                        </li>
                      </ul>
                    </div>
                    <Link to="/booking" className="btn btn-primary">
                      Book now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
         
        </div>
        {/* Carousel controls */}
        <div className="previous">
        <a
          className="carousel-control-prev"
          href="#myCarousel"
          data-slide="prev"
        >
          <i className="fa fa-angle-left" />
        </a>
        </div>
        <div className="next">
        <a
          className="carousel-control-next"
          href="#myCarousel"
          data-slide="next"
        >
          <i className="fa fa-angle-right" />
        </a>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</div>

            </div>
            <h1 style={{color:"blue"}}>Talk to your mentors</h1>
            <p  style={{color:"beige"}}>Get all your questions answered by one of our solutions experts.</p>
            <Link to="/mentors" class="btn btn-primary py-2 px-4 ms-3">CLICK TO OPEN</Link>
            </div>
            </div>
      
            </>
     );
}

export default Guidance;