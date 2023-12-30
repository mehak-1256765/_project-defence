import { Link } from "react-router-dom";
import Fullscreen from "./fullscreen";
function Navbar() {
  let userLoginStatus = true
  let userLogStatus = false
  console.log(localStorage.getItem("uinfo"))
  let udaya = JSON.parse(localStorage.getItem("uinfo"))
  if (localStorage.getItem("uinfo") === null) {
    userLoginStatus = false
    userLogStatus = true
    
  }
    return ( 
        <>
  {/* Navbar & Carousel Start */}
  <div className="container-fluid position-relative p-0">
    <nav className="navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0">
      <a href="index.html" className="navbar-brand p-0" >
        <h1 className="m-0"style={{marginLeft:-20}}>
        <img className="logo"src="img/logo3.avif" style={{fontSize:"20",marginLeft:-30}}/>
        AIM DEFENCE
        </h1>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span className="fa fa-bars" />
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse"style={{marginLeft:100}}>
        <div className="navbar-nav py-0"style={{marginLeft:40}}>
          <Link to ="/home" className="nav-item nav-link active" style={{color:"white"}} >
            Home
          </Link>
          <Link to ="/about" className="nav-item nav-link"style={{color:"white"}} >
            About
          </Link>
         
          <div className="nav-item dropdown">
            <Link to="/blog"style={{color:"white"}}
              
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              Blog
            </Link>
            <div className="dropdown-menu m-0">
              <Link to="/blog" className="dropdown-item"style={{color:"black"}}>
                Blog Grid
              </Link>
              {/* <Link to="/blog" className="dropdown-item"style={{color:"black"}}>
                Blog Detail
              </Link> */}
            </div>
          </div>
          <div className="nav-item dropdown">
            <a
              href="#"style={{color:"white"}}
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              Pages
            </a>
            <div className="dropdown-menu m-0">
             
              <Link to="/events" className="dropdown-item"style={{color:"black"}}>
                Online events
              </Link>
              <Link to="/team" className="dropdown-item"style={{color:"black"}}>
                Team Members
              </Link>
              <Link to ="/donation" className="dropdown-item"style={{color:"black"}}>
            Donation
          </Link>
          {/* <Link to ="/testimonal" className="dropdown-item"style={{color:"black"}}>
            Testimonal
          </Link> */}
            </div>
          </div>

               
          <Link to ="/guidance" className="nav-item nav-link"style={{color:"white"}}>
            Guidance
          </Link>
            
          <Link to ="/contact" className="nav-item nav-link"style={{color:"white"}}>
            Contact
          </Link>
        </div>

        {userLoginStatus &&
                          <>
                          <div className="hello"style={{right:70}}>
                            <Link to="/myaccount" className="nav-item nav-link active" style={{border:"2px solid #007bff",background:"#007bff",color:"white",borderRadius:"5px"}} >
                              My Account
                            </Link>  </div>
                            <div className="hello2"style={{right:50}}>
                              <Link to="/logout" className="btn btn-primary py-2 px-4 ms-3">
                              Logout
                           </Link></div>
                         
</>
                          
                        }

                        {userLogStatus && <>
                        
                           <Link to="/login" className="btn btn-primary py-2 px-4 ms-3">
                           Login
                         </Link>
                         <Link to="/register" className="btn btn-primary py-2 px-4 ms-3">
                         Register
                       </Link>


                       </>}
      
                {/* <Link to="/login" class="btn btn-primary py-2 px-4 ms-3">Login</Link>
            
                <Link to="/Register" class="btn btn-primary py-2 px-4 ms-3">Register</Link> */}
       
      </div>
    </nav>
 
    <>
  {/* Chatbot */}
  <Link to="/chatting">
  <div className="botIcon">
    <div className="botIconContainer">
      <div className="iconInner">
        <i className="fa fa-commenting" aria-hidden="true" />
      </div>
    </div>
    <div className="Layout Layout-open Layout-expand Layout-right">
      <div className="Messenger_messenger">
        <div className="Messenger_header">
          <h4 className="Messenger_prompt">How can we help you?</h4>{" "}
          <span className="chat_close_icon">
            <i className="fa fa-window-close" aria-hidden="true" />
          </span>
        </div>
        <div className="Messenger_content">
          <div className="Messages">
            <div className="Messages_list" />
          </div>
          <form id="messenger">
            <div className="Input Input-blank">
              {/* 							<textarea name="msg" class="Input_field" placeholder="Send a message..."></textarea> */}
              <input
                name="msg"
                className="Input_field"
                placeholder="Send a message..."
              />
              <button type="submit" className="Input_button Input_button-send">
                <div className="Icon">
                  <svg
                    viewBox="1496 193 57 54"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <g
                      id="Group-9-Copy-3"
                      stroke="none"
                      strokeWidth={1}
                      fill="none"
                      fillRule="evenodd"
                      transform="translate(1523.000000, 220.000000) rotate(-270.000000) translate(-1523.000000, -220.000000) translate(1499.000000, 193.000000)"
                    >
                      <path
                        d="M5.42994667,44.5306122 L16.5955554,44.5306122 L21.049938,20.423658 C21.6518463,17.1661523 26.3121212,17.1441362 26.9447801,20.3958097 L31.6405465,44.5306122 L42.5313185,44.5306122 L23.9806326,7.0871633 L5.42994667,44.5306122 Z M22.0420732,48.0757124 C21.779222,49.4982538 20.5386331,50.5306122 19.0920112,50.5306122 L1.59009899,50.5306122 C-1.20169244,50.5306122 -2.87079654,47.7697069 -1.64625638,45.2980459 L20.8461928,-0.101616237 C22.1967178,-2.8275701 25.7710778,-2.81438868 27.1150723,-0.101616237 L49.6075215,45.2980459 C5.08414042,47.7885641 49.1422456,50.5306122 46.3613062,50.5306122 L29.1679835,50.5306122 C27.7320366,50.5306122 26.4974445,49.5130766 26.2232033,48.1035608 L24.0760553,37.0678766 L22.0420732,48.0757124 Z"
                        id="sendicon"
                        fill="#96AAB4"
                        fillRule="nonzero"
                      />
                    </g>
                  </svg>
                </div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  </Link>
  {/* Chatbot */}
</>




    </div>
  {/* Navbar & Carousel End */}
</>

     );
}

export default Navbar;