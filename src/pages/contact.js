import Header from "../header";
import { Link } from "react-router-dom";
import React from 'react';
import axios from "axios"
import { useState } from "react";
import Footer from "../footer";
 
function Contact() {
  const contact="Contacts Us";
  const [usercontact,setusercontact]=useState({
    username:"",
  email:"",
  number:"",
  message:"",

  
  })

  const handleinput=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    setusercontact({...usercontact,[name]:value});
  }
  const submitContact =(e)=>{
    e.preventDefault()
    axios.post("http://localhost:5050/contacts",{usercontact}).then((response)=>{ //postmethod root
      console.log(response.status,response.data.token);
    });
  }


    return ( 
        <>
        <Header title={contact}/>
  {/* Contact Start */}
  <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
    <div className="container py-5">
      <div
        className="section-title text-center position-relative pb-3 mb-5 mx-auto"
        style={{ maxWidth: 600 }}
      >
        <h5 className="fw-bold text-primary text-uppercase">Contact Us</h5>
        <h1 className="mb-0">If You Have Any Query, Feel Free To Contact Us</h1>
      </div>
      <div className="row g-5 mb-5">
        <div className="col-lg-4">
          <div
            className="d-flex align-items-center wow fadeIn"
            data-wow-delay="0.1s"
          >
            <div
              className="bg-primary d-flex align-items-center justify-content-center rounded"
              style={{ width: 60, height: 60 }}
            >
              <i className="fa fa-phone-alt text-white" />
            </div>
            <div className="ps-4">
              <h5 className="mb-2" >Call to ask any question</h5>
              <h4 className="text-primary mb-0">+012 345 6789</h4>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div
            className="d-flex align-items-center wow fadeIn"
            data-wow-delay="0.4s"
          >
            <div
              className="bg-primary d-flex align-items-center justify-content-center rounded"
              style={{ width: 60, height: 60 }}
            >
              <i className="fa fa-envelope-open text-white" />
            </div>
            <div className="ps-4">
              <h5 className="mb-2">Email us for any query</h5>
              <h4 className="text-primary mb-0">info@example.com</h4>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div
            className="d-flex align-items-center wow fadeIn"
            data-wow-delay="0.8s"
          >
            <div
              className="bg-primary d-flex align-items-center justify-content-center rounded"
              style={{ width: 60, height: 60 }}
            >
              <i className="fa fa-map-marker-alt text-white" />
            </div>
            <div className="ps-4">
              <h5 className="mb-2">Visit our office</h5>
              <h4 className="text-primary mb-0">New Delhi,India</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="row g-5">
        <div className="col-lg-6 wow slideInUp" data-wow-delay="0.3s">
          <form action="/" method="post" onSubmit={submitContact}>
            <div className="row g-3">
              <div className="col-md-6">
                <input
                  type="text"
                  name="username"
                  className="form-control border-0 bg-light px-4"
                  placeholder="Your Name"
                  style={{ height: 55 }}
                  value={usercontact.username}  onChange={handleinput}
                />
              </div>
              <div className="col-md-6">
                <input
                  type="email"
                  className="form-control border-0 bg-light px-4"
                  placeholder="Your Email"
                  name="email"
                  style={{ height: 55 }}
                  value={usercontact.email}  onChange={handleinput}
                />
              </div>
              <div className="col-12">
                <input
                  type="text"
                  className="form-control border-0 bg-light px-4"
                  placeholder="Phone number"
                  name="number"
                  style={{ height: 55 }}
                  value={usercontact.number}  onChange={handleinput}
                />
              </div>
              <div className="col-12">
                <textarea
                  className="form-control border-0 bg-light px-4 py-3"
                  rows={4}
                  placeholder="Message"
                  defaultValue={""}
                  name="message"
                  value={usercontact.message}  onChange={handleinput}
                />
              </div>
              <div className="col-12">
                <button className="btn btn-primary w-100 py-3" type="submit" name="submit">
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="col-lg-6 wow slideInUp" data-wow-delay="0.6s">
          <iframe
            className="position-relative rounded w-100 h-100"
            src="https://maps.google.com/maps?width=600&height=400&hl=en&q=new delhi&t=&z=14&ie=UTF8&iwloc=B&output=embed"
            frameBorder={0}
            style={{ minHeight: 350, border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex={0}
          />

{/* <div className="mapouter">
  <div className="gmap_canvas">
    <iframe
      className="gmap_iframe"
      frameBorder={0}
      scrolling="no"
      marginHeight={0}
      marginWidth={0}
      src="https://maps.google.com/maps?width=600&height=400&hl=en&q=new delhi&t=&z=14&ie=UTF8&iwloc=B&output=embed"
    />
    <a href="https://capcuttemplate.org/">Capcut Template</a>
  </div>
  <style
    dangerouslySetInnerHTML={{
      __html:
        ".mapouter{position:relative;text-align:right;width:600px;height:400px;}.gmap_canvas {overflow:hidden;background:none!important;width:600px;height:400px;}.gmap_iframe {width:600px!important;height:400px!important;}"
    }}
  /> */}
{/* </div> */}



        </div>
      </div>
    </div>
  </div>
  {/* Contact End */}

</>

     );
}

export default Contact;