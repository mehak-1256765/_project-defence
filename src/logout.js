import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


function Logout() {
    let navigate=useNavigate()
    useEffect(()=>{
    localStorage.clear();
    navigate("/login")
    })
    return ( 
        <>
     <div>
        
     </div>

        </>
     );
}

export default Logout;