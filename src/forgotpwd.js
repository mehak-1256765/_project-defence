import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import Axios from 'axios';
import Footer from "./footer";
function Forgotpwd() {
  const [emailStatus, setemailStatus] = useState("");
  const [frommail,setfrommail]=useState("")
const [password,setpassword]=useState(0)
const [tomail,settomail]=useState("")

useEffect(()=>{
  Axios.get("http://localhost:5050/read").then((response)=>{
    console.log(response.data)
  })
},[])


const sendmail=(e)=>{
  e.preventDefault()
  Axios.post("http://localhost:5050/mail",{tomail:tomail}).then((response)=>{
    console.log(response.data)
    setemailStatus(response.data.message)
  
 
  // console.log(response.data)
    // if (response.data.msg === 'success'){
    //     alert("Email sent, awesome!"); 
   
    // }else if(response.data.msg === 'fail'){
    //     alert("Oops, something went wrong. Try again")
    // }
})

}





    return ( 
     
<>
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
        <h2 className="login-title">Forgot password</h2>
        <p>{emailStatus}</p>
        <form  method="post" onSubmit={sendmail}>
          <div className="form-group">
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              name="email"
              id="email"
              className="form-control"
              type="email"
                        onChange={(e)=>{settomail(e.target.value)}}

              placeholder="Email"
            />
          </div>
         
          <div className="d-flex justify-content-between align-items-center mb-5">
            <input
              name="submit"
              id="Reset password"
              className="btn login-btn"
              type="submit"
              defaultValue="Reset password"
            />
          
          </div>
        </form>
       
      </div>
    </div>
  </div>
</div>
</div>

</>

     );
}

export default Forgotpwd;