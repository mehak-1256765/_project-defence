import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Spinner from './spinner';
import Toolbar from './toolbar';
import Navbar from './navbar';
import Fullscreen from './fullscreen';

import About from './about';

import Features from './features';
import Service from './service';
import Quote from './quote';

import Team from './team';
import Blog from './blog';
import Layout from './pages/layout';
import Contact from './pages/contact';
import Home from './pages/home';
import Donation from './donation';
import Learnmore from './learnmore';
import Hero from './heros';
import Hero2 from './hero2';
import Login from './pages/login';
import Header from './header';
import Register from './register';
import Forgotpwd from './forgotpwd';
import Events from './events';
import Hero3 from './hero3';
import Chats from './chat';
import Guidance from './guidance';
import Mentors from './mentors';
import Call from './call';
import Profile1 from './m1profile';
import Bookingform from './booking';
import Profile2 from './m2profile';
import Profile3 from './m3profile';
import Addmentors from './applyasmentor';
import Payment from './payment';
import Paymentsuccess from './paymentsuccess';
import MyAccount from './myaccount';
import Paymentfailed from './paymentfailed';
import Modal from './modal';
import Callingform from './callingform';
import Indianarmy from './indianarmy';
import Southern from './southern';
import Eastern from './eastern';
import Knowyourarmy from './knowyourarmy';
import Header2 from './header2';
import Career from './armycareer';
import Sidebar from './sidebar';
import Reviews1 from './reviewss';
import Honour from './honor';
import Logout from './logout';
import Allbooking from './allbookings';
import Edituser from './edituser';
import Mail from './mail';
import Submitted from './submitted';
import Testimonal from './testimonal';
import Newsbutton from './newsbtn';
import Chat from './chatting';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
{/* <Spinner/> */}
{/* <Toolbar/>
<Navbar/>
<Fullscreen/>
<About/>
<Features/>
<Service/>
<Quote/>
<Team/>
<Blog/> */}
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route  path ="/home"element={<Home />} />
           <Route path="blog" element={<Blog />} />  
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="service" element={<Service />} />
          <Route path="team" element={<Team />} />
          <Route path="donation" element={<Donation />} />
          <Route path="learnmore" element={<Learnmore />} />
          <Route path="heros" element={<Hero />} />
          <Route path="hero2" element={<Hero2 />} />
          <Route path="hero3" element={<Hero3 />} />
          <Route path="login" element={<Login />} />
          <Route path="header" element={<Header />} />
          <Route path="header2" element={<Header2 />} />
          <Route path="register" element={<Register />} />
          <Route path="forgotpwd" element={<Forgotpwd />} />
          <Route path="events" element={<Events />} />
          <Route path="chat" element={<Chats />} />
          <Route path="guidance" element={<Guidance />} />
          <Route path="mentors" element={<Mentors />} />
          <Route path="call" element={<Call />} />
          <Route path="m1profile" element={<Profile1 />} />
          <Route path="m2profile/:mid" element={<Profile2 />} />
          <Route path="m3profile" element={<Profile3 />} />
          <Route path="booking" element={<Bookingform />} />
          <Route path="applyasmentor" element={<Addmentors />} />
          <Route path="payment" element={<Payment />} />
          <Route path="paymentsuccess" element={<Paymentsuccess />} />
          <Route path="myaccount" element={<MyAccount />} />
          <Route path="paymentfailed" element={<Paymentfailed />} />
          <Route path="modal" element={<Modal />} />
          <Route path="callingform" element={<Callingform />} />
          <Route path="indianarmy" element={<Indianarmy />} />
          <Route path="southern" element={<Southern />} />
          <Route path="eastern" element={<Eastern />} />
          <Route path="knowyourarmy" element={<Knowyourarmy />} />
          <Route path="armycareer" element={<Career />} />
          <Route path="honor" element={<Honour />} />
          <Route path="sidebar" element={<Sidebar />} />
          <Route path="reviewss" element={<Reviews1 />} />
          <Route path="logout" element={<Logout />} />
          <Route path="allbooking" element={<Allbooking />} />
          <Route path="edituser" element={<Edituser />} />
          <Route path="mail" element={<Mail />} />
          <Route path="submitted" element={<Submitted />} />
          <Route path="testimonal" element={<Testimonal />} />
          <Route path="newsbtn" element={<Newsbutton />} />
          <Route path="chatting" element={<Chat/>} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
