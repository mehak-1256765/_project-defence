import { Outlet,Link } from "react-router-dom";
import Navbar from "../navbar";
import Toolbar from "../toolbar";
import Footer from "../footer";
function Layout() {
    return ( 
<>

<Navbar/>

<Outlet/>
<Footer/>
</>
     );
}

export default Layout;