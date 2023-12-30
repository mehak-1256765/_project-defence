import { useState } from "react";
import Footer from "./footer";
import Navbar from "./navbar";
import axios from "axios";
function Donation() {
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

    axios.post("http://localhost:5050/donation",{userDon}).then((response)=>{
      console.log(response.status,response.data.token);
    });

    // axios.post("http://localhost:5050/create-checkout-session",{userDon}).then((response)=>{
    //   console.log(response.status,response.data.token);
    // });
  }





    return ( 
        <>
          <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
    <div className="container py-5">
          <div
        className="section-title text-center position-relative pb-3 mb-5 mx-auto"
        style={{ maxWidth: 600 }}
      >
    <h1 className="mb-0">WELFARE FUND FOR DONATION / CONTRIBUTIONS</h1>
  
        </div>
        <p style={{color:"whitesmoke"}}>   Welfare Fund, which accepts donation for families of battle casualties from Army, Navy and Air Force. The donations received in the fund are utilized to pay financial assistance to Battle Casualties of Army, Navy and Air Force, their next of kins and dependents.</p>
        </div>
        </div>
        <div className="donation-container">
    
  <div className="donation-box">
    
    <div className="title">Donation Information</div> 
    <form action="http://localhost:5050/mahak" method="post" >
    <div className="fields">
    {/* <input
              type="email"
              name="email"
              onChange={handleinput}
              value={userReg.email}
              id="email"
              className="form-control"
              placeholder="Email"
            /> */}
      <input type="text" name="firstName" id="firstName" placeholder="First Name"   onChange={handleinput}
              value={userDon.firstName}/>
      <input type="text"  name="lastName" id="lastName" placeholder="Last Name"   onChange={handleinput}
              value={userDon.lastName}/>
      <input type="text"  name="email" id="email"placeholder="Email" onChange={handleinput}
              value={userDon.email}/>
    </div>
    <div className="amount"   >
      <div className="button">  
       <input
        type="radio"
        // className="switch-input"
        name="amount"
        defaultValue="none"
        id="amount_1"
        value="50"
        onClick={handleinput}
        checked={userDon.amount==="50"}
        // defaultChecked=""
      />
        50</div>
      <div className="button">
      <input
        type="radio"
        // className="switch-input"
        name="amount"
        defaultValue="none"
        id="amount_2"
        value="100"
        onChange={handleinput}
        checked={userDon.amount==="100"}
        // defaultChecked=""
      />
        100</div>
      <div className="button">
      <input
        type="radio"
        // className="switch-input"
        name="amount"
        defaultValue="none"
        id="amount_3"
        value="500"
        onClick={handleinput}
        checked={userDon.amount==="500"}
        // defaultChecked=""
      />
        500</div>
      <div className="button">
      <input type="text"    id="amount_5" name="amount"  defaultValue="" className="set-amount"onChange={handleinput}  value={userDon.amount} placeholder="" />
      {/* <input
        type="radio"
        // className="switch-input"
        name="amount"
        defaultValue="none"
        id="amount_4"
        value=""
        onClick={handleinput}
        checked={userDon.amount===""}
        // defaultChecked=""
      /> */}
        {/* {" "} */}
      </div>
    </div>
    <div className="switch">
      <input
        type="radio"
        // className="switch-input"
        name="view"
        defaultValue="none"
        id="one-time"
        value="One Time"
        onClick={handleinput}
        checked={userDon.view==="One Time"}
        // defaultChecked=""
      />
    {/* <label id="one-time" >
        One-Time
      </label>  */}
          <a class="btn btn-primary py-2 px-4 ms-3">One time</a>
      <input
        type="radio"
        // className="switch-input"
        name="view"
        defaultValue="none"
        value="Monthly"
        onClick={handleinput}
        checked={userDon.view==="Monthly"}
        // defaultChecked=""
        id="monthly"
      />
      {/* <label id="monthly" >
        Monthly
      </label> */}
        <a class="btn btn-primary py-2 px-4 ms-3">Monthly</a> 
        {/* <span className="switch-selection" /> */}
    </div> 
    <div className="checkboxes">
      <input type="radio" id="receipt" className="checkbox" style={{height:10,width:10,margin:5}} name="checkbox" value="Email Me A Receipt" onClick={handleinput}   checked={userDon.checkbox==="Email Me A Receipt"}/>
      <label htmlFor="receipt">Email Me A Receipt</label>
      <br />
      <input type="radio" id="anon" className="checkbox" name="checkbox" value="Give Anonymously" onClick={handleinput} checked={userDon.checkbox==="Give Anonymously"}style={{height:10,width:10,margin:5}}/>
      <label htmlFor="anon">Give Anonymously</label>
      <br />
      <input type="radio" id="list" className="checkbox" name="checkbox" value="Add Me To Email List" onClick={handleinput} checked={userDon.checkbox==="Add Me To Email List"}style={{height:10,width:10,margin:5}}/>
      <label htmlFor="list">Add Me To Email List</label>
    </div>
    <div className="confirm"></div>
    <div className="donate-button">
      <i className="fa fa-credit-card" />   <input
              name="Donate"
              id="Donate"
              className="btn login-btn"
              type="submit"
              value="Donate Now"
            />
    </div>
    </form>
  </div>

</div>

        </>
     );
}

export default Donation;