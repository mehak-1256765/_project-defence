
import React from 'react';
import axios from "axios"
import { useState } from "react";
import { Link } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
function Register() {
const [userReg,setuserReg]=useState({
  username:"",
email:"",
phone:"",

password:"",

})

const handleinput=(e)=>{
  const name=e.target.name;
  const value=e.target.value;
  setuserReg({...userReg,[name]:value});
}
const submitReg =(e)=>{
  e.preventDefault()
  axios.post("http://localhost:5050/register",{userReg}).then((response)=>{
    console.log(response.status,response.data.token);
  });
}





    return ( 
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container-fluid">
  <div className="row">
    <div className="col-sm-6 col-md-7 intro-section">
    
      <div className="intro-content-wrapper">
        <h1 className="intro-title">Welcome to website !</h1>
        <p className="intro-text">
        When it comes to learning about the Military, knowing where to start your research may seem daunting. Don’t worry — we’re here to help. 
        </p>
        <Link to="/about" className="btn btn-read-more">
          Read more
        </Link>
      </div>
      <div className="intro-section-footer">
        <na className="footer-nav">
          <a href="#!">Facebook</a>
          <a href="#!">Twitter</a>
          <a href="#!">Gmail</a>
        </na>
      </div>
    </div>
    <div className="col-sm-6 col-md-5 form-section">
      <div className="login-wrapper">
        <h2 className="login-title">Register Now!</h2>
        <form action="" method="post" onSubmit={submitReg}>
          <div className="form-group">
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              type="email"
              name="email"
            
              onChange={handleinput}
              value={userReg.email}
              id="email"
              className="form-control"
              placeholder="Email"
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="password" className="sr-only">
              Phone number
            </label>
            <input
              type="text"
              name="phone"
              id="number"
              onChange={handleinput}
              value={userReg.phone}
              className="form-control"
              placeholder="Phone number"
            required/>
          </div>
          <div className="form-group mb-3">
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={handleinput}
              value={userReg.password}
              className="form-control"
              placeholder="Password"
            required/>
            </div>
            <div className="form-group mb-3">
            <label htmlFor="password" className="sr-only">
               Confirm Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="form-control"
              placeholder="Confirm Password"
            />
         </div>
        
          <div className="d-flex justify-content-between align-items-center mb-5">
       {/*  */}
            <input
              name="Register"
              id="Register"
              className="btn login-btn"
              type="submit"
              defaultValue="Register"
              data-toggle="modal"
              data-target="#myModal"
          
            />
  
          </div> 
          {/*     */}

      {/* /.modal-content */}


  {/* /.modal */}

  <div className="modal fade" id="myModal" role="dialog">
    <div className="modal-dialog">
  
      <div className="modal-content">
        <div className="modal-header">
         
          <h4 className="modal-title w-100">Awesome!</h4>
          <button type="button" className="close" data-dismiss="modal">
            ×
          </button>
        </div>
        <div className="modal-body">
          <p>your data has been submitted successfully .Go to login page </p>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-default"
            data-dismiss="modal"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>

        </form>
       
      </div>
    </div>
  </div>
</div>
</div>
     );
}

export default Register;