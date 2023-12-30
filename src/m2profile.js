import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
// import http from "./http";

function Profile2() {
  const [mentor, setmentor] = useState([]);
  let {mid}=useParams()
  useEffect(() => {
    axios.get(`http://localhost:5050/singleMentor/${mid}`).then((response) => {
      //console.log(response.status, response.data);
      setmentor(response.data)
    });
  }, []);

// const getmentors = () => {
//     return http
//       .get("/mentors/getMentors")
//       .then(result=>{
//       result.data.content.filter(item=> item.id=="your ID")
//       })
//       .then((result) =>
//       result.data.content.map((item, index) => ({ ...item, key: index }))
//     );
// };
    return ( 
        <>
       <div className="profile">   

  <header className="heading1">
    {" "}
   
      {" "}
      <h1 className="refer" style={{color:"beige"}}>Click below to check the profile</h1>{" "}
    {" "}
  </header>
  {mentor.map((ty)=>
 <div className="info"> 
  {/* <div className="infocard-Container> */}
    <div id="main">
      <img src={ty.pic} />
    </div>
    
    <div id="textbois">
      <h2>{ty.firstname}<br/>{ty.lastname} <br/> </h2>
      {/* <h4>{ty.activity}</h4> */}
      <h4>{ty.phone}<br/></h4>
      <a className="refer" href="mailto:abc@gmail.com">{ty.email}</a>
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
  )}
</div>

</>
 

    );
}

export default Profile2;