import { useState ,useEffect} from "react";

import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

// import Navbar from "./navbar";
import Sidebar from "./sidebar";
// import Edituser from "./edituser";
function MyAccount() {
  let uinfo = JSON.parse(localStorage.getItem("uinfo"))
  console.log(uinfo)

  const navigate = useNavigate();
    return ( 
        <>

    

<div className="sidebarcss" > 
      <div className="about wow fadeInUp" data-wow-delay="0.1s">
       <div className="instructors"> 
  
  <div className="row py-5 px-4">
  
    <div className="col-xl-12 col-md-6 col-sm-10 mx-auto">
      {/* Profile widget */}
      <div className="bg-white shadow rounded overflow-hidden"id="inst">
        <div className="px-4 pt-0 pb-4 bg-dark">
          <div className="media align-items-end profile-header">
            <div className="profile mr-3"style={{marginTop:20}}>
              <img
                src={uinfo[0].Pic}
                alt=""
                width={200}
                className="rounded mb-2 img-thumbnail"
              />
              {/* <a href="#" className="btn btn-dark btn-sm btn-block">
                Edit profile
              </a> */}
            </div>
            <div className="media-body mb-5 ">
              <h4 className="mt-0 mb-0 mr-0 text-white">{uinfo[0].email}</h4>
              <p className="small mb-4">
                {" "}
                <i className="fa fa-map-marker mr-2" />
                {uinfo[0].city} {uinfo[0].State}
              </p>
            </div>
          </div>
        </div>
       
        <div className="py-4 px-4">
          <div className="d-flex align-items-center justify-content-between mb-3">
            <h5 className="mb-0">
              <Sidebar/>
            </h5>
            {/* <Link to="/Portfolio1" className="btn btn-link text-muted">
              Show all
            </Link> */}
          </div>
         
          <div className="py-4">
            <h5 className="mb-3">My Account</h5>
            <div className="p-4 bg-light rounded shadow-sm"id ="myaccount">
            {/* <p className="font-italic mb-0">
               Uid : {uinfo[0]._id}
               </p> */}
              <p className="font-italic mb-0">
               Email : {uinfo[0].email}
               </p>
               <p className="font-italic mb-0">
               Phone : {uinfo[0].phone}
              </p>
              <p className="font-italic mb-0">
               City : {uinfo[0].city}
              </p>
              <p className="font-italic mb-0">
               State : {uinfo[0].State}
              </p>
              
              <button className="btn btn-primary py-2 px-4 ms-3" onClick={()=>navigate("/edituser")} style={{marginLeft:550,marginTop:30}}>Edit Profile</button>
              
              {/* <ul className="list-inline small text-muted mt-3 mb-0">
                <li className="list-inline-item"style={{color:"white"}}>
                  <i className="fa fa-comment-o mr-2" />
                  12 Comments
                </li>
                <li className="list-inline-item"style={{color:"white"}}>
                  <i className="fa fa-heart-o mr-2" />
                  200 Likes
                </li>
              </ul> */}
            </div>


          </div>
       
        </div>
      </div>
      {/* End profile widget */}
    
    </div>
  </div>
  </div>
</div>
</div>
  
    
</>
 


     );
}

export default MyAccount;