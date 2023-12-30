import { useState ,useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Sidebar from "./sidebar";
import Navbar from "./navbar";
import Footer from "./footer";


function Allbooking() {
  let uinfo = JSON.parse(localStorage.getItem("uinfo"))
  console.log(uinfo)

  const [mybooking,setmybookings]=useState([]);
  useEffect(()=>{
  axios.get(`http://localhost:5050/getMyBookings/${uinfo[0]._id}`).then((response)=>{
    setmybookings(response.data)
  });
})



  
    return ( 
        <>
   
       
        <div className="sidebarcss"> 
      <div className="about wow fadeInUp" data-wow-delay="0.1s">
       <div className="instructors"> 
  
  <div className="row py-5 px-4">
  
    <div className="col-xl-12 col-md-6 col-sm-10 mx-auto">
      {/* Profile widget */}
      <div className="bg-white shadow rounded overflow-hidden">
        <div className="px-4 pt-0 pb-4 bg-dark">
          <div className="media align-items-end profile-header">
            <div className="profile mr-3"style={{marginTop:20}}>
              <img
                src={uinfo[0].Pic}
                alt="..."
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
          
          </div>
         
          <style
  dangerouslySetInnerHTML={{
    __html:
      "\n#customers {\n  font-family: Arial, Helvetica, sans-serif;\n  border-collapse: collapse;\n  width: 100%;\n}\n\n#customers td, #customers th {\n  border: 1px solid #ddd;\n  padding: 8px;\n}\n\n#customers tr:nth-child(even){background-color: #f2f2f2;}\n\n#customers tr:hover {background-color: #ddd;}\n\n#customers th {\n  padding-top: 12px;\n  padding-bottom: 12px;\n  text-align: left;\n  background-color: #343148;\n  color: white;\n}\n"
  }}
/>


          <div className="py-4">
            <h5 className="mb-3">My Bookings</h5>
            <div className="p-4 bg-light rounded shadow-sm">
             {/* table */}
          
             <table id="customers">
  <tbody>
    <tr>
      <th> Name</th>
      <th> Phone Number</th>
      <th>Course</th>  
      <th>Booking status</th>   
      {/* <th>Date</th>
      <th>time</th> */}
    </tr>
    {mybooking.map((ty)=>
    <tr>
     
      <td>{ty.username}</td>
      <td>{ty.phone}</td>
      <td>{ty.info}</td>
      <td>Success</td>
 
    </tr>
)}
   
   
    
  </tbody>
</table>


{/* 
              <ul className="list-inline small text-muted mt-3 mb-0">
                <li className="list-inline-item">
                  <i className="fa fa-comment-o mr-2" />
                  12 Comments
                </li>
                <li className="list-inline-item">
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

export default Allbooking;