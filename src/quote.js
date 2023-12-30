import { Link } from "react-router-dom";
import React from 'react';
import axios from "axios"
import { useState } from "react";
function Quote() {
  const [userQuery,setuserQuery]=useState({
    username:"",
  email:"",
  service:"",
  message:"",

  
  })

  const handleinput=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    setuserQuery({...userQuery,[name]:value});
  }
  const submitQuery =(e)=>{
    e.preventDefault()
    axios.post("http://localhost:5050/Queries",{userQuery}).then((response)=>{ //postmethod root
      console.log(response.status,response.data.token);
    });
  }
    return ( 
        <>
  {/* Quote Start */}
  <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
    <div className="container py-5">
      <div className="row g-5">
        <div className="col-lg-7">
          <div className="section-title position-relative pb-3 mb-5">
            <h5 className="fw-bold text-primary text-uppercase">
              Request A Message
            </h5>
            <h1 className="mb-0">
              Need A Free Guidance? Please Feel Free to Contact Us
            </h1>
          </div>
          <div className="row gx-3">
            <div className="col-sm-6 wow zoomIn" data-wow-delay="0.2s">
              <h5 className="mb-4">
                <i className="fa fa-reply text-primary me-3" />
                Reply within 24 hours
              </h5>
            </div>
            <div className="col-sm-6 wow zoomIn" data-wow-delay="0.4s">
              <h5 className="mb-4">
                <i className="fa fa-phone-alt text-primary me-3" />
                24 hrs telephone support
              </h5>
            </div>
          </div>
          <p className="mb-4">
          After deciding which Service branch and service type they're interested in pursuing, the best way for someone to get answers to any questions they have about the Military is to meet with a recruiter.
          </p>
          <div
            className="d-flex align-items-center mt-2 wow zoomIn"
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
              <h4 className="text-primary mb-0">+012 345 6789</h4>
            </div>
          </div>
        </div>
        <div className="col-lg-5">
          <div
            className="bg-primary rounded h-100 d-flex align-items-center p-5 wow zoomIn"
            data-wow-delay="0.9s"
          >
            <form action="/" method="post" onSubmit={submitQuery}>
              <div className="row g-3">
                <div className="col-xl-12">
                  <input
                    type="text"
                    className="form-control bg-light border-0"
                    name="username"
                    placeholder="Your Name"
                    style={{ height: 55 }}
                    value={userQuery.username}  onChange={handleinput}
                  />
                </div>
                <div className="col-12">
                  <input
                    type="email"
                    name="email"
                    className="form-control bg-light border-0"
                    placeholder="Your Email"
                    style={{ height: 55 }}
                    value={userQuery.email}  onChange={handleinput}
                  />
                </div>
                <div className="col-12">
                  <select
                    className="form-select bg-light border-0"
                    style={{ height: 55 }}
                    name="service"
                    value={userQuery.service}  onChange={handleinput}
                  >
                    <option selected="">Select A Service</option>
                    <option value={1}>Written examination</option>
                    <option value={2}>SSB</option>
                    <option value={3}>Any other</option>
                  </select>
                </div>
                <div className="col-12">
                  <textarea
                    className="form-control bg-light border-0"
                    rows={3}
                    placeholder="Message"
                    name="message"
                    defaultValue={""}
                    value={userQuery.message}  onChange={handleinput}
              
                  />
                </div>
                <div className="col-12">
                  <button className="btn btn-dark w-100 py-3" type="submit" name="submit">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Quote End */}
</>

     );
}

export default Quote;