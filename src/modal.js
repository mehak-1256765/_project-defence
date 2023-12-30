
import { useState } from "react";
import Footer from "./footer";
import Navbar from "./navbar";
import axios from "axios";
function Modal()
 
  
   {
      const [userDon,setuserDon]=useState({
        firstName:"",
        lastName:"",
      email:"",
     view:"",
      
      })
      
      const handleinput=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setuserDon({...userDon,[name]:value});
      }
      const submitDon =(e)=>{
        e.preventDefault()
        console.log(userDon)
    
        // axios.post("http://localhost:5050/donation",{userDon}).then((response)=>{
        //   console.log(response.status,response.data.token);
        // });
    
        axios.post("http://localhost:5050/create-checkout-session",{userDon}).then((response)=>{
          console.log(response.status,response.data.token);
        });
      }
    
    
    
    
    
        return ( 
            <>
              <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
              <div
            className="section-title text-center position-relative pb-3 mb-5 mx-auto"
            style={{ maxWidth: 600 }}
          >
        <h1 className="mb-0">Payment details</h1>
            </div>
            </div>
            </div>
            <div className="donation-container">
      <div className="donation-box">
        <div className="title">Information</div> 
        <form action="http://localhost:5050/create-checkout-session" method="POST" >
        <div className="fields"  style={{marginLeft:150}}>
       
          <input type="text" name="firstName" id="firstName" placeholder="First Name"   onChange={handleinput}
                  value={userDon.firstName}/>
          <input type="text"  name="lastName" id="lastName" placeholder="Last Name"   onChange={handleinput}
                  value={userDon.lastName}/>
          <input type="text"  name="email" id="email"placeholder="Email" onChange={handleinput}
                  value={userDon.email}/>

<h4 className="title" >Payment of course(in Rs.)</h4>
                   <div className="amount"  style={{marginTop:180,left:155}}>
    
           
          <div className="button">
          <input
            type="text"
            // className="switch-input"
            name="amount"
         
            id="amount_3"
            value="5999.00"
            onClick={handleinput}
            checked={userDon.amount==="5999"}
            // defaultChecked=""
          readOnly />
            </div>
       </div>
        </div>
  
    
           
 
  
       
    
        <div className="confirm"></div>
        <div className="donate-button">
          <i className="fa fa-credit-card" />   <input
                  name="Donate"
                  id="Donate"
                  className="btn login-btn"
                  type="submit"
                  value="confirm and proceed to pay"
                />
        </div>
        </form>
      </div>
    
    </div>
    
            </>
   
     )
};

export default Modal;
