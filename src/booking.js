import { Link ,useParams} from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import {useFormik} from 'formik';

// import * as yup from 'yup';
import { Form, Button } from 'semantic-ui-react';
import { useForm } from "react-hook-form";
import axios from "axios";
import { useState,useEffect } from "react";
import Footer from "./footer";


function Bookingform() {
  
  let uinfo = JSON.parse(localStorage.getItem("uinfo"))
  console.log(uinfo)
    const [userbook, setuserbook] = useState({
      username: "",
      email: "",
      phone: "",
      city: "",
      state: "",
      contact:"",
      info:"",
      user_id:"",
      
    })
    const handleinput = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      setuserbook({ ...userbook, [name]: value,user_id:uinfo[0]._id });
    } 
    const submitbook = (e) => {
      e.preventDefault()
      axios.post("http://localhost:5050/booking", { userbook }).then((response) => {
        console.log(response.status, response.data.token);
      });
    }

    // const { register, handleSubmit, formState: { errors } } = useForm();
    // const onSubmit = (value) => {
    //     console.log(value);
    // }

    // let navigate = useNavigate();

    // async function handleSubmit(event) {
    //   event.preventDefault();
    //   await submitForm(event.target);
    //   navigate("/payment", { replace: true });
    // }
  
    // const navigate = useNavigate();

    // function handleClick() {
    //   navigate("/payment");
    // }

    // const [mentor, setmentor] = useState([]);
    // let {mid}=useParams()
    // useEffect(() => {
    //   axios.get(`http://localhost:5050/singleBooking/${mid}`).then((response) => {
    //     //console.log(response.status, response.data);
    //     setmentor(response.data)
    //   });
    // }, []);

     
    return ( 
        <>
        
    
  <title>Volunteer Sign up form</title>
  <link
    href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700"
    rel="stylesheet"
  />
  <link
    rel="stylesheet"
    href="https://use.fontawesome.com/releases/v5.5.0/css/all.css"
    integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU"
    crossOrigin="anonymous"
  />
  <style
    dangerouslySetInnerHTML={{
      __html:
        '\n      html, body {\n      min-height: 100%;\n      }\n      body, div, form, input, select, textarea, label, p { \n      padding: 0;\n      margin: 0;\n      outline: none;\n      font-family: Roboto, Arial, sans-serif;\n      font-size: 14px;\n      color: #666;\n      line-height: 22px;\n      }\n      h1 {\n            margin: 0;\n      font-size: 40px;\n      color: white;\n      z-index: 2;\n      line-height: 83px;\n      }\n      textarea {\n      width: calc(100% - 12px);\n      padding: 5px;\n      }\n      .testbox {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      height: inherit;\n      padding: 20px;\n      }\n      form {\n      width: 100%;\n      padding: 20px;\n      border-radius: 6px;\n      background: #fff;\n      box-shadow: 0 0 8px  #669999; \n      }\n      .banner {\n      position: relative;\n      height: 300px;\n      background-image: url("/uploads/media/default/0001/02/8070c999efd1a155ad843379a5508d16f544aeaf.jpeg");  \n      background-size: cover;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      text-align: center;\n      }\n      .banner::after {\n      content: "";\n      background-color: rgba(0, 0, 0, 0.3); \n      position: absolute;\n      width: 100%;\n      height: 100%;\n      }\n      input, select, textarea {\n      margin-bottom: 10px;\n      border: 1px solid #ccc;\n      border-radius: 3px;\n      }\n      input {\n      width: calc(100% - 10px);\n      padding: 5px;\n      }\n      input[type="date"] {\n      padding: 4px 5px;\n      }\n      textarea {\n      width: calc(100% - 12px);\n      padding: 5px;\n      }\n      .item:hover p, .item:hover i, .question:hover p, .question label:hover, input:hover::placeholder {\n      color:  #669999;\n      }\n      .item input:hover, .item select:hover, .item textarea:hover {\n      border: 1px solid transparent;\n      box-shadow: 0 0 3px 0  #669999;\n      color: #669999;\n      }\n      .item {\n      position: relative;\n      margin: 10px 0;\n      }\n      .item span {\n      color: red;\n      }\n      .week {\n      display:flex;\n      justfiy-content:space-between;\n      }\n      .colums {\n      display:flex;\n      justify-content:space-between;\n      flex-direction:row;\n      flex-wrap:wrap;\n      }\n      .colums div {\n      width:48%;\n      }\n      input[type="date"]::-webkit-inner-spin-button {\n      display: none;\n      }\n      .item i, input[type="date"]::-webkit-calendar-picker-indicator {\n      position: absolute;\n      font-size: 20px;\n      color:  #a3c2c2;\n      }\n      .item i {\n      right: 1%;\n      top: 30px;\n      z-index: 1;\n      }\n      input[type=radio], input[type=checkbox]  {\n      display: none;\n      }\n      label.radio {\n      position: relative;\n      display: inline-block;\n      margin: 5px 20px 15px 0;\n      cursor: pointer;\n      }\n      .question span {\n      margin-left: 30px;\n      }\n      .question-answer label {\n      display: block;\n      }\n      label.radio:before {\n      content: "";\n      position: absolute;\n      left: 0;\n      width: 17px;\n      height: 17px;\n      border-radius: 50%;\n      border: 2px solid #ccc;\n      }\n      input[type=radio]:checked + label:before, label.radio:hover:before {\n      border: 2px solid  #669999;\n      }\n      label.radio:after {\n      content: "";\n      position: absolute;\n      top: 6px;\n      left: 5px;\n      width: 8px;\n      height: 4px;\n      border: 3px solid  #669999;\n      border-top: none;\n      border-right: none;\n      transform: rotate(-45deg);\n      opacity: 0;\n      }\n      input[type=radio]:checked + label:after {\n      opacity: 1;\n      }\n      .flax {\n      display:flex;\n      justify-content:space-around;\n      }\n      .btn-block {\n      margin-top: 10px;\n      text-align: center;\n      }\n      button {\n      width: 150px;\n      padding: 10px;\n      border: none;\n      border-radius: 5px; \n      background:  #669999;\n      font-size: 16px;\n      color: #fff;\n      cursor: pointer;\n      }\n      button:hover {\n      background:  #a3c2c2;\n      }\n      @media (min-width: 568px) {\n      .name-item, .city-item {\n      display: flex;\n      flex-wrap: wrap;\n      justify-content: space-between;\n      }\n      .name-item input, .name-item div {\n      width: calc(50% - 20px);\n      }\n      .name-item div input {\n      width:97%;}\n      .name-item div label {\n      display:block;\n      padding-bottom:5px;\n      }\n      }\n    '
    }}
  />
  <div className="booking ">
    
   <div className="about wow fadeInUp" data-wow-delay="0.1s">
 
  <div className="container">

  <div className="testbox">
  <form action="http://localhost:5050/create-checkout-session" method="POST" >
   
      <div className="banner" >
      <img />
        <h1 style={{position:"absolute"}} >BOOK ONLINE COURSES </h1>
      </div>
      <br />
      <p>
       Fill in the
        information below to enroll the courses
      </p>
      <br /> 
      <div className="colums">
  

        <div className="item">
      
          <label htmlFor="name">
            Name<span>*</span>
          </label>

          <input id="name" type="text" name="username"   value={userbook.username} onChange={handleinput} required/>
    
        </div>
   
      
        <div className="item">
          <label htmlFor="eaddress">
            Email Address<span>*</span>
          </label>
          <input id="eaddress" type="text"  name="email" value={userbook.email} onChange={handleinput} required/>
        </div>
        <div className="item">
          <label htmlFor="phone">
            Phone<span>*</span>
          </label>
          <input id="phone" type="text" name="phone"  value={userbook.phone} onChange={handleinput} />
        </div>
      
        <div className="item">
          <label htmlFor="city">
            City<span>*</span>
          </label>
          <input id="city" type="text" name="city" required value={userbook.city} onChange={handleinput} />
        </div>
        <div className="item">
          <label htmlFor="state">
            State<span>*</span>
          </label>
          <input id="state" type="text" name="state"  value={userbook.state} onChange={handleinput} />
        </div>
      
      </div>
      <div className="question">
        <label>
           Selected Courses
        </label>
        <div className="question-answer">
          <div>
            <input type="radio" defaultValue="none"  value ="CDS online coaching 2023" id="radio_1" name="info"  checked={userbook.info==="CDS online coaching 2023"}     onClick={handleinput}/>
            <label htmlFor="radio_1" className="radio">
              <span>CDS online coaching 2023</span>
            </label>
          </div>
          <div>
            <input type="radio" defaultValue="none" id="radio_2"value ="NDA online coaching 2023"  name="info" checked={userbook.info==="NDA online coaching 2023"}    onClick={handleinput}/>
            <label htmlFor="radio_2" className="radio">
              <span>NDA online coaching 2023</span>
            </label>
          </div>
          <div>
            <input type="radio" defaultValue="none" id="radio_4" value ="AFCAT online coaching"  name="info" checked={userbook.info==="AFCAT online coaching 2023"}    onClick={handleinput}/>
            <label htmlFor="radio_4" className="radio">
              <span>AFCAT online coaching 2023</span>
            </label>
          </div>
          <div>
            <input type="radio" defaultValue="none" id="radio_5" value ="Territorial army online coaching"  name="info" checked={userbook.info==="Territorial army online coaching"}    onClick={handleinput}/>
            <label htmlFor="radio_5" className="radio">
              <span>Territorial army online coaching</span>
            </label>
          </div>
          <div>
            <input type="radio" defaultValue="none" id="radio_6" value ="ACC online coaching 2023"  name="info" checked={userbook.info==="ACC online coaching 2023"}    onClick={handleinput}/>
            <label htmlFor="radio_6" className="radio">
              <span>ACC online coaching 2023</span>
            </label>
          </div>
          <div>
            <input type="radio" defaultValue="none" id="radio_7" value ="MNS online coaching 2023"  name="info" checked={userbook.info==="MNS online coaching 2023"}    onClick={handleinput}/>
            <label htmlFor="radio_7" className="radio">
              <span>MNS online coaching 2023</span>
            </label>
          </div>
          <div>
            <input type="radio" defaultValue="none" id="radio_8"value ="SSB online coaching"  name="info" checked={userbook.info==="SSB online coaching 2023"}    onClick={handleinput}/>
            <label htmlFor="radio_8" className="radio">
              <span>SSB online coaching 2023</span>
            </label>
          </div>

          <div>
            <input type="radio" defaultValue="none" id="radio_9" value ="Personality development" name="info" checked={userbook.info==="Personality development"}    onClick={handleinput}/>
            <label htmlFor="radio_9" className="radio" >
              <span>Personality development</span>
            </label>
          </div>
        </div>
      </div>

      
      <div className="week">
       </div>
      <div className="question">
        <label>Have you Appeared for any exam before?</label>
        <div className="question-answer">
          <div>
            <input
              type="radio"
              defaultValue="none"
              value="Yes"
              id="radio_15"
              name="contact"
              onClick={handleinput}
              checked={userbook.contact==="Yes"}
            />
            <label htmlFor="radio_15" className="radio">
              <span>Yes</span>
            </label>
          </div>
          <div>
            <input
              type="radio"
              defaultValue="none"
              id="radio_16"
              name="contact"
              value="No"
              onClick={handleinput}
              checked={userbook.contact==="No"}
            />
            <label htmlFor="radio_16" className="radio">
              <span>No</span>
            </label>
          </div>
        </div>
        </div>
        <label>   <i className="fa fa-credit-card" />Payment of course(in RS.)</label>
    
   
    <input
      type="text"
      // className="switch-input"
      name="Amount"
      className="item"
      id="amount_3"
      value="5000.00"
      onClick={handleinput}
      style={{border:"none"}}
     
      checked={userbook.Amount==="5000"}
      // defaultChecked=""
    readOnly />

 
     
          
      {/* <Link to="/call"> */}
      {/* <input type="submit"  className="btn btn-info btn-lg"
  value="Confirm"  style={{width:200,marginLeft:410}}/> */}
         <div className="confirm"></div>
        <div className="donate-button">
            <input
          
                  name="Submit"
                  id="Donate"
                  className="btn btn-info btn-lg"
                  type="submit"
                  value="Confirm and Proceed to pay"
                  style={{width:300,marginLeft:350}}
                  data-toggle="modal"
                  data-target="#myModal"
                />
        </div>
        <input type="hidden" value={uinfo[0]._id} name="user_id"/>
      {/* </Link> */}
      <div className="modal fade" id="myModal" role="dialog">
    <div className="modal-dialog">
      {/* Modal content*/}
      <div className="modal-content">
        <div className="modal-header">
         
          <h4 className="modal-title w-100">Awesome!</h4>
          <button type="button" className="close" data-dismiss="modal">
            ×
          </button>
        </div>
        <div className="modal-body">
          <p>your data has been submitted successfully .</p>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-default"
            data-dismiss="modal"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
   
  
     
          
    
        
       
      
    </form>
   
  </div>

</div> </div>
   </div>
  


</>

     );
}

export default Bookingform;