import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Footer from "./footer";
function Carousel() {
  const [news, setnews] = useState([]);
useEffect(() => {
  axios.get("http://localhost:5050/singleNews").then((response) => {
    //console.log(response.status, response.data); {getMentor (frontend),teachermodel}
    setnews(response.data)
  });
}, []);
console.log()
    return ( 
   <>
    <div
    id="header-carousel"
    className="carousel slide carousel-fade"
    data-bs-ride="carousel"
  >
  
    <div className="carousel-inner">
   
      <div className="carousel-item active"   data-ride="carousel">
      

        <img className="w-100" src="img/army.webp" alt="Image" />


        <div className="caption1 d-flex flex-column align-items-center justify-content-center">
  
          <div className="p-3" style={{ maxWidth: 900 }}>
          {/* <Link to
                 ="/newsbtn"
                 className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
               style={{marginTop:-350,marginLeft:1000}}>
                  News
               </Link> */}


<div className="news">
<span>News Feed</span>

  <ul>
  {news.map((ty)=>
    <li>
    <a href="#"> {ty.news}
    
    </a>
    </li>
     )}
    
    </ul>

</div>


            <h5 className="text-white text-uppercase mb-3 animated slideInDown">
            WELCOME TO
          
            </h5>
            <h1 className="display-1 text-white mb-md-4 animated zoomIn">
            AIM DEFENCE PLATFORM
            </h1>
          
            <Link to
                 ="/learnmore"
                 className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
              >
                 Learn More
               </Link>
            {/* <a
              href=""
              className="btn btn-outline-light py-md-3 px-md-5 animated slideInRight"
            >
              Contact Us
            </a> */}
               <Link to="/contact"
                 className="btn btn-outline-light py-md-3 px-md-5 animated slideInRight"
               >
                Contact Us
               </Link>
          </div>
      
  
        </div>
      </div>
      <div className="carousel-item"  data-ride="carousel">
        <img  className="w-100" src="img/airforce.jpg"      alt="Image" />
        <div className="caption1 d-flex flex-column align-items-center justify-content-center">
          <div className="p-3" style={{ maxWidth: 900 }}>
          <div className="news">
  <span>News Feed</span>

  <ul>
  {news.map((ty)=>
    <li>
    <a href="#"> {ty.news}
    
    </a>
    </li>
     )}
     </ul>
     </div>
            <h5 className="text-white text-uppercase mb-3 animated slideInDown">
            DISCOVER A WIDE VARIETY OF OPPORTUNITIES
            </h5>
            <h1 className="display-1 text-white mb-md-4 animated zoomIn">
            FIND YOUR CAREER
            </h1>
            <Link to
                 ="/learnmore"
                 className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
              >
                 Learn More
               </Link>
            {/* <a
              href="quote.html"
              className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
            >
              Free Quote
            </a> */}
              <Link to="/contact"
                 className="btn btn-outline-light py-md-3 px-md-5 animated slideInRight"
               >
                Contact Us
               </Link>
 
            {/* <a
              href=""
              className="btn btn-outline-light py-md-3 px-md-5 animated slideInRight"
            >
              Contact Us
            </a> */}
          </div>
        </div>
      </div>
    </div>
    <button
      className="carousel-control-prev"
      type="button"
      data-bs-target="#header-carousel"
      data-bs-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="visually-hidden">Previous</span>
    </button>
    <button
      className="carousel-control-next"
      type="button"
      data-bs-target="#header-carousel"
      data-bs-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  <div
  className="font-serif video-controls-box"
  id="news"
  style={{
    background:
      "linear-gradient(109.6deg, rgb(36, 45, 57) 11.2%, rgb(16, 37, 60) 51.2%, rgb(0, 0, 0) 98.6%)",
    display: "flex",
    height: 90,
    alignItems: "flex-end",

  }}
>


<marquee
  onmouseover="this.stop();"
  onmouseout="this.start();"
  scrolldelay={0}
  scrollamount={7}
  display="flex"
  behavior="scroll" direction="left"
>
  <h3
    style={{
      color: "white",
      display: "contents",
      lineHeight: "0.4",
      fontSize: 25,

    }}
  >
    Registration for AFCAT 02/2023 ( for flying, ground technical, ground duty
    non technical branches) and NCC special entry (for flying branch) commenced
    from 01 Jun 23 from 1100 hrs and ends on 30 Jun 23 at 1700 hrs. Candidates
    are requested to fill online application well in time and avoid last minute
    rush
    <a
      href="https://afcat.cdac.in/afcatreg/"
      target="_blank"
    >
      <h3 style={{ color: "cyan" ,marginLeft:3600,}}>[Click here]</h3>
    </a>
     {/* <a href="https://afcat.cdac.in/afcatreg/" target="_blank">
      <h3 style={{ color: "cyan" ,marginLeft:560,marginTop:6,}}>[Click here]</h3>
    </a> 
    <span ></span>ADVERTISEMENT for
    AFCAT 02/2023 (in English).
    <a
      href="assets/images/news/Jun23/Advertisement_AFCAT02-2023.pdf"
      target="_blank"
    >
      <h3 style={{ color: "cyan" ,marginTop:-100,marginLeft:2900}}>[Click here]</h3>
    </a>
    <span ></span>To download
    Notification / Instructions for AFCAT 02/2023.
    <a
      href="assets/images/news/Jun23/English_Notification_AFCAT_02-2023.pdf"
      target="_blank"
    >
      <h3 style={{ color: "cyan",marginLeft:560}}>[Click here]</h3>
    </a>
    <span style={{ marginLeft: 20, marginRight: 20 }}></span>  */}
  </h3>{" "}
  

</marquee>
</div>

{/*image slider*/ }
<div className="marquee">
  <div className="marquee-content">
    <div className="marquee-item">
      <img
        src="img/military1.jpeg"
        alt=""
        height="250px"
      />
    </div>
    <div className="marquee-item">
      <img
        src="img/military2.jpeg"
        alt=""
        height="250px"
      />
    </div>
    <div className="marquee-item">
      <img
        src="img/military3.jpeg"
        alt=""
        height="250px"
      />
    </div>
    <div className="marquee-item">
      <img
        src="img/military4.jpeg"
        alt=""
        height="250px"
      />
    </div>
    <div className="marquee-item">
      <img
        src="img/military5.jpeg"
        alt=""
        height="250px"
        
      />
    </div>
    <div className="marquee-item">
      <img
        src="img/military6.jpeg"
        alt=""
        height="250px"
      />
    </div>
    <div className="marquee-item">
      <img
        src="img/military7.jpeg"
        alt=""
        height="250px"
      />
    </div>
    <div className="marquee-item">
      <img
        src="img/military8.jpg"
        alt=""
        height="250px"
      />
    </div>
    <div className="marquee-item">
      <img
        src="img/military1.jpeg"
        alt=""
        height="250px"
      />
    </div>
    <div className="marquee-item">
      <img
        src="img/military2.jpeg"
        alt=""
        height="250px"
      />
    </div>
    <div className="marquee-item">
      <img
        src="img/military3.jpeg"
        alt=""
        height="250px"
      />
    </div>
    <div className="marquee-item">
      <img
        src="img/military4.jpeg"
        alt=""
        height="250px"
      />
    </div>
    <div className="marquee-item">
      <img
        src="img/military5.jpeg"
        alt=""
        height="250px"
      />
    </div>
    <div className="marquee-item">
      <img
        src="img/military6.jpeg"
        alt=""
        height="250px"
      />
    </div>
    <div className="marquee-item">
      <img
        src="img/military7.jpeg"
        alt=""
        height="250px"
      />
    </div>
    <div className="marquee-item">
      <img
        src="img/military8.jpg"
        alt=""
        height="250px"
      />
    </div>
  </div>
</div>


</>

     );
}

export default Carousel;