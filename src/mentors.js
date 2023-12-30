import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
function Mentors() {
//   let userLoginStatus = true
//   let userLogStatus = false
//   console.log(localStorage.getItem("uinfo"))
//   let udaya = JSON.parse(localStorage.getItem("uinfo"))
//   if (localStorage.getItem("uinfo") === null) {
//     userLoginStatus = false
//     userLogStatus = true
//     
//   }
const [mentor, setmentor] = useState([]);
useEffect(() => {
  axios.get("http://localhost:5050/getTeachers").then((response) => {
    //console.log(response.status, response.data); {getMentor (frontend),teachermodel}
    setmentor(response.data)
  });
}, []);
console.log(mentor)



    return ( 
        <>
             <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
              <div
            className="section-title text-center position-relative pb-3 mb-5 mx-auto"
            style={{ maxWidth: 600 }}
          >
        <h1 className="mb-0">Interact with your mentors </h1>
  </div>
            
         
        <div className="mentor">
          {mentor.map((ty)=>
  <div className="card2">
    <div className="card2-img">
      <img src={ty.pic} style={{width:105}} />
    </div>
    <div className="desc">
      {/* <h6 className="primary-text"  style={{border:" 5px solid   #569def",color:"blue"}}><b>CAPT. Dharmveer singh</b></h6> */}
      <h2 className="secondary-text">{ty.firstname} {ty.lastname}</h2>
    
    </div>
    {/* {userLoginStatus &&
                          <> */}
    <Link to={`/m2profile/${ty._id}`}>
 
<button className="primary-text">View profile</button>   </Link>

    <div className="details">
   
      <Link to="/callingform">
      <button className="btn3">
        <h6 className="secondary-text"align="center" > REQUEST CALL</h6></button></Link>
    
        <div className="activity"> 
      
                  
<Link to="/chat">
<button className="btn3">
        <h6 className="secondary-text"> CHAT NOW</h6></button></Link>

     </div>
      </div>
      {/* </>} */}
    </div>


 )}
 
  </div>
  
  </div>
  </div>
  
</>

     );
}

export default Mentors;