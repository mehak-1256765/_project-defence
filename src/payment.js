import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
function Payment() {
  const [userPay,setuserPay]=useState({
    username:"",
  email:"",

  
  })

  const handleinput=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    setuserPay({...userPay,[name]:value});
  }
  const submitPay =(e)=>{
    e.preventDefault()
    console.log(userPay)

    // axios.post("http://localhost:5050/donation",{userDon}).then((response)=>{
    //   console.log(response.status,response.data.token);
    // });

    axios.post("http://localhost:5050/create-checkout-session",{userPay}).then((response)=>{
      console.log(response.status,response.data.token);
    });
  }
    return (  
        
<div className="container p-0" id="maincont">
<form action="http://localhost:5050/create-checkout-session" method="POST" >
  <div className="card px-4" id="maincard">
    <p className="h8 py-3">Payment Details</p>
    <div className="row gx-3">
      <div className="col-12">
        <div className="d-flex flex-column">
          <p className="text mb-1">Person Name</p>
          <input
            className="form-control mb-3"
            name="username"
            value={userPay.username}
            id="form1"
            type="text"
            placeholder="Name"
            defaultValue="Barry Allen"
            onChange={handleinput}
          />
        </div>
      </div>
 <div className="col-12">
        <div className="d-flex flex-column">
          <p className="text mb-1">Email</p>
          <input
            className="form-control mb-3"
            name="email"
            value={userPay.email}
            id="form2"
            type="text"
            placeholder="email"
            defaultValue="abc@gmail.com"

          />
        </div>
      </div>
 

   
   
      <div className="col-12">
     
        <div className="btn btn-primary mb-3" id="btnpm">
          <span className="ps-3">Pay Now</span>
          <span className="fas fa-arrow-right" />
        </div>
        </div>
      </div>
    </div>
    </form>
  </div>


    );
}

export default Payment;
