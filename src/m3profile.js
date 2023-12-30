import { Link } from "react-router-dom";
function Profile3() {
    return ( 
        <>
       <div className="profile">   

  <header className="heading1">
    {" "}
   
      {" "}
      <h1 className="refer" style={{color:"beige"}}>Click below to check the profile</h1>{" "}
    {" "}
  </header>
 <div className="info"> 
  {/* <div className="infocard-Container> */}
    <div id="main">
      <img src="img/mentor2.jpeg" />
    </div>
    
    <div id="textbois">
      <h2>flying officer<br/>Ravi saharan</h2>
      <h4>EX Air force officer</h4>
      <a className="refer" href="mailto:abc@gmail.com">abc@gmail.com</a>
      <div id="hotlinks">
        <Link to="/mentors">
          <img
            id="codepenio"
            src="https://blog.codepen.io/wp-content/uploads/2012/06/Button-Fill-Black-Small.png"
            target="_blank"
          />
        </Link>
        <Link to="/mentors">
          <img
            id="codepenio"
            src="https://blog.codepen.io/wp-content/uploads/2012/06/Button-Fill-Black-Small.png"
            target="_blank"
          />
        </Link>
        <Link to="/mentors">
          <img
            id="codepenio"
            src="https://blog.codepen.io/wp-content/uploads/2012/06/Button-Fill-Black-Small.png"
            target="_blank"
          />
        </Link>
      </div>
    </div>
  
</div>
</div>

</>
 

    );
}

export default Profile3;