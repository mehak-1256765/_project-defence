import { Link } from "react-router-dom";
import Quote from "../quote";
import Team from "../team";
import Blog from "../blog";
import Fullscreen from "../fullscreen";
import Service from "../service";
import Features from "../features";
import Navbar from "../navbar";
import Carousel from "../carosel";
import Team2 from "../team2";
import Blog2 from "../blog2";
import Footer from "../footer";
function Home() {
    return ( 
        <>
        <Carousel/>
     
        <Service/>
        <Quote/>
        <Team2/>
        <Blog2/>
        <Fullscreen/>
        <Features/>

        </>
     );
}

export default Home;