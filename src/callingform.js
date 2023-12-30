import { Link } from "react-router-dom";
import React from 'react';
import axios from "axios"
import { useState } from "react";
import Footer from "./footer";


function Callingform() {
    const [userReq,setuserReq]=useState({
        username:"",
      phone:""
   
      
      })

      const handleinput=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setuserReq({...userReq,[name]:value});
      }
      const submitReq =(e)=>{
        e.preventDefault()
        axios.post("http://localhost:5050/CallRequests",{userReq}).then((response)=>{ //postmethod root
          console.log(response.status,response.data.token);
        });
      }
    return ( 
        <>
 <div className="box">
           
        <div className="login-box" id="calling">
  <h2>Call Request</h2>
  <form action="/" method="post" onSubmit={submitReq}>
    <div className="user-box">
      <input type="text" name="username" required    value={userReq.username}  onChange={handleinput}/>
      <label>Username</label>
    </div>
    <div className="user-box">
      <input type="text" name="phone" required    value={userReq.phone} onChange={handleinput}/>
      <label>Phone No.</label>
    </div>
    

    {/* <a href="#">
      <span />
      <span />
      <span />
      <span /> */}
          <Link to="/call">
      <input
              name="submit"
              id="submit"
              className="btn login-btn"
              type="submit"
              value="Send Request"
          style={{color:"cyan"}}
          
            />
   
    {/* </a> */}
    </Link>
  </form>
</div>

</div>

</>
     );
}

export default Callingform;