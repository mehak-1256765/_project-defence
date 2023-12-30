import { Link,useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";
import Footer from "../footer";
function Login() {
  // useEffect(()=>{
  //   fetch('https://dummyjson.com/auth/login',{
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({
        
  //       username: 'kminchelle',
  //       password: '0lelplR',
  //       // expiresInMins: 60, // optional
  //     })
  //   })
  //   .then(res => res.json())
  //   .then(console.log);

  //   })
const [email, setemail] = useState("");
const [pass, setpass] = useState("");
const [loginError, setLoginError] = useState("");




let navigate= useNavigate()

const loginUser=(e)=>{
  e.preventDefault()
  let userdata = {
    email: email,
    pass: pass    
  }
  axios.post("http://localhost:5050/loginuser",userdata).then((response)=>
  {
    if(response.data.length>0){
      localStorage.setItem("uinfo", JSON.stringify(response.data))
      console.log(response.data);
      navigate("/myaccount")
    }
    else
    {
      setLoginError("Login details are not correct!")
    }
  });
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
        <h2 className="login-title">Sign in</h2>
        <p>{loginError}</p>
        <form action="#!"  onSubmit={loginUser} method="post">
          <div className="form-group">
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="form-control"
              placeholder="Email"
              onChange={(e)=>setemail(e.target.value)}
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="form-control"
              placeholder="Password"
              onChange={(e)=>setpass(e.target.value)}
            />
          </div>
          <div className="d-flex justify-content-between align-items-center mb-5">
            <input
              name="login"
              id="login"
              className="btn login-btn"
              type="submit"
              defaultValue="Login"
            />
            <Link to="/Forgotpwd" className="forgot-password-link">
              Forgot Password?
            </Link>
          </div>
        </form>
        <p className="login-wrapper-footer-text">
          Need an account?{" "}
          <Link to="/register" className="text-reset">
            Register here
          </Link>
        </p>
      </div>
    </div>
  </div>
</div>
</div>

</>
     );
}

export default Login;