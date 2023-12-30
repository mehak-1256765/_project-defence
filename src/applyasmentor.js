
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./footer";

function Addmentors() {
   
     
    
  
    const [teacher, setteacher] = useState({
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      exp:"",
      rank:"",
      batch:"",
      category:"",
      pic:"",
      service:"",
      achievements:"",
  

      
    })
    useEffect(()=>{
        
    })
    const handleinput = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      setteacher({ ...teacher, [name]: value });
    } 
    const submitTeach = (e) => {
      e.preventDefault()
      axios.post("http://localhost:5050/addMentor", { teacher }).then((response) => {
        console.log(response.status, response.data.token);
      });
    }


    return ( 
        <>
        {/* <Navbar/> */}
        
  <title>Register form</title>
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
        '\n      html, body {\n      min-height: 100%;\n      }\n      body, div, form, input, select, textarea, label, p { \n      padding: 0;\n      margin: 0;\n      outline: none;\n      font-family: Roboto, Arial, sans-serif;\n      font-size: 14px;\n      color: #666;\n      line-height: 22px;\n      }\n      h1 {\n          margin: 0;\n      font-size: 40px;\n      color: #fff;\n      z-index: 2;\n      line-height: 83px;\n      }\n      textarea {\n      width: calc(100% - 12px);\n      padding: 5px;\n      }\n      .testbox {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      height: inherit;\n      padding: 20px;\n      }\n      form {\n      width: 100%;\n      padding: 20px;\n      border-radius: 6px;\n      background: #fff;\n      box-shadow: 0 0 8px  #669999; \n      }\n      .banner {\n      position: relative;\n      height: 300px;\n      background-image: url("/uploads/media/default/0001/02/8070c999efd1a155ad843379a5508d16f544aeaf.jpeg");  \n      background-size: cover;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      text-align: center;\n      }\n      .banner::after {\n      content: "";\n      background-color: rgba(0, 0, 0, 0.3); \n      position: absolute;\n      width: 100%;\n      height: 100%;\n      }\n      input, select, textarea {\n      margin-bottom: 10px;\n      border: 1px solid #ccc;\n      border-radius: 3px;\n      }\n      input {\n      width: calc(100% - 10px);\n      padding: 5px;\n      }\n      input[type="date"] {\n      padding: 4px 5px;\n      }\n      textarea {\n      width: calc(100% - 12px);\n      padding: 5px;\n      }\n      .item:hover p, .item:hover i, .question:hover p, .question label:hover, input:hover::placeholder {\n      color:  #669999;\n      }\n      .item input:hover, .item select:hover, .item textarea:hover {\n      border: 1px solid transparent;\n      box-shadow: 0 0 3px 0  #669999;\n      color: #669999;\n      }\n      .item {\n      position: relative;\n      margin: 10px 0;\n      }\n      .item span {\n      color: red;\n      }\n      .week {\n      display:flex;\n      justfiy-content:space-between;\n      }\n      .colums {\n      display:flex;\n      justify-content:space-between;\n      flex-direction:row;\n      flex-wrap:wrap;\n      }\n      .colums div {\n      width:48%;\n      }\n      input[type="date"]::-webkit-inner-spin-button {\n      display: none;\n      }\n      .item i, input[type="date"]::-webkit-calendar-picker-indicator {\n      position: absolute;\n      font-size: 20px;\n      color:  #a3c2c2;\n      }\n      .item i {\n      right: 1%;\n      top: 30px;\n      z-index: 1;\n      }\n      input[type=radio], input[type=checkbox]  {\n      display: none;\n      }\n      label.radio {\n      position: relative;\n      display: inline-block;\n      margin: 5px 20px 15px 0;\n      cursor: pointer;\n      }\n      .question span {\n      margin-left: 30px;\n      }\n      .question-answer label {\n      display: block;\n      }\n      label.radio:before {\n      content: "";\n      position: absolute;\n      left: 0;\n      width: 17px;\n      height: 17px;\n      border-radius: 50%;\n      border: 2px solid #ccc;\n      }\n      input[type=radio]:checked + label:before, label.radio:hover:before {\n      border: 2px solid  #669999;\n      }\n      label.radio:after {\n      content: "";\n      position: absolute;\n      top: 6px;\n      left: 5px;\n      width: 8px;\n      height: 4px;\n      border: 3px solid  #669999;\n      border-top: none;\n      border-right: none;\n      transform: rotate(-45deg);\n      opacity: 0;\n      }\n      input[type=radio]:checked + label:after {\n      opacity: 1;\n      }\n      .flax {\n      display:flex;\n      justify-content:space-around;\n      }\n      .btn-block {\n      margin-top: 10px;\n      text-align: center;\n      }\n      button {\n      width: 150px;\n      padding: 10px;\n      border: none;\n      border-radius: 5px; \n      background:  #669999;\n      font-size: 16px;\n      color: #fff;\n      cursor: pointer;\n      }\n      button:hover {\n      background:  #a3c2c2;\n      }\n      @media (min-width: 568px) {\n      .name-item, .city-item {\n      display: flex;\n      flex-wrap: wrap;\n      justify-content: space-between;\n      }\n      .name-item input, .name-item div {\n      width: calc(50% - 20px);\n      }\n      .name-item div input {\n      width:97%;}\n      .name-item div label {\n      display:block;\n      padding-bottom:5px;\n      }\n      }\n    '
    }}
  />
  <div className="booking ">
   <div className="about wow fadeInUp" data-wow-delay="0.1s">
  <div className="container">
  <div className="testbox">
    <form action="/" method="post" onSubmit={submitTeach}>
      <div className="banner" >
      <img />
        <h1 style={{position:"absolute"}}>Apply As Mentor</h1>
      </div>
      <br />
      <p>
       Are you interested in Teaching  Online. Fill in the
        information below to indicate how you would like to become involved.
      </p>
      <br />
      <div className="colums">
        <div className="item">
          <label htmlFor="name">
            First Name<span>*</span>
          </label>
          <input id="name" type="text" name="firstname"   value={teacher.firstname} onChange={handleinput}/>
        </div>
        <div className="item">
          <label htmlFor="name">
            Last Name<span>*</span>
          </label>
          <input id="name" type="text" name="lastname"   value={teacher.lastname} onChange={handleinput}/>
        </div>
        <div className="item">
          <label htmlFor="eaddress">
            Email Address<span>*</span>
          </label>
          <input id="eaddress" type="text" name="email" value={teacher.email} onChange={handleinput}/>
        </div>
        <div className="item">
          <label htmlFor="phone">
            Phone<span>*</span>
          </label>
          <input id="phone" type="text" name="phone"  value={teacher.phone} onChange={handleinput}/>
        </div>
      
        <div className="item">
          <label htmlFor="state">
            Service in years<span>*</span>
          </label>
          <input id="service" type="text" name="service"  value={teacher.service} onChange={handleinput}/>
        </div>
        <div className="item">
          <label htmlFor="city">
            Experience in years<span>*</span>
          </label>
          <input id="exp" type="text" name="exp"  value={teacher.exp} onChange={handleinput}/>
        </div>
        <div className="item">
          <label htmlFor="state">
            Rank<span>*</span>
          </label>
          <input id="rank" type="text" name="rank"  value={teacher.rank} onChange={handleinput}/>
        </div>
        
        <div className="item">
          <label htmlFor="name">
            Paste your image link here<span>*</span>
          </label>
          <input id="pic" type="text" name="pic"   value={teacher.pic} onChange={handleinput}/>
        </div>
      </div>
      <div className="question">
        <label>
          Preferred Batches
        </label>
        <div className="question-answer">
          <div>
            <input type="radio" defaultValue="none" id="radio_1" name="batch"  value="Morning" onClick={handleinput} checked={teacher.batch === 'Morning'}/>
            <label htmlFor="radio_1" className="radio">
              <span>Morning </span>
            </label>
          </div>
          <div>
            <input type="radio" defaultValue="none" id="radio_2" name="batch" value="Afternoon" onClick={handleinput} checked={teacher.batch === 'Afternoon'}/>
            <label htmlFor="radio_2" className="radio">
              <span>Afternoon</span>
            </label>
          </div>
          <div>
            <input type="radio" defaultValue="none" id="radio_3" name="batch" value="Evening" onClick={handleinput} checked={teacher.batch === 'Evening'}/>
            <label htmlFor="radio_3" className="radio">
              <span>Evening</span>
            </label>
          </div>
        </div>
      </div>
      <div className="week">
       
        <div className="question">
          <label> Category </label>
          <div className="question-answer">
            <div>
              <input
                type="radio"
                defaultValue="none"
                id="radio_10"
                name="activity"
                value="cds"
                onClick={handleinput} checked={teacher.activity === 'cds'}
              />
              <label htmlFor="radio_10" className="radio">
                <span>CDS/NDA</span>
              </label>
            </div>
            <div>
              <input
                type="radio"
                defaultValue="none"
                id="radio_11"
                name="activity"
                value="afcat"
                onClick={handleinput} checked={teacher.activity=== 'afcat'}
              />
              <label htmlFor="radio_11" className="radio">
                <span>AFCAT</span>
              </label>
            </div>
            <div>
              <input
                type="radio"
                defaultValue="none"
                id="radio_12"
                name="activity"
                value="ssb"
                onClick={handleinput} checked={teacher.activity=== 'ssb'}
              />
              <label htmlFor="radio_12" className="radio">
                <span>SSB</span>
              </label>
            </div>

            <div>
              <input
                type="radio"
                defaultValue="none"
                id="radio_14"
                name="activity"
                value="mns"
                onClick={handleinput} checked={teacher.activity=== 'mns'}

              />
              <label htmlFor="radio_14" className="radio">
                <span>MNS</span>
              </label>
            </div>
            <div>
              <input
                type="radio"
                defaultValue="none"
                id="radio_13"
                name="activity"
                value="peronality development"
                onClick={handleinput} checked={teacher.activity === 'peronality development'}
              />
              <label htmlFor="radio_13" className="radio">
                <span>PERSONALITY DEVELOPMENT</span>
              </label>
            </div>
            <div className="item">
          <label htmlFor="state">
            Achievements<span>*</span>
          </label>
          <input id="achievements" type="text" name="achievements"  value={teacher.achievements} onChange={handleinput}/>
        </div>
          </div>
        </div>
      </div>
    
    <Link to="/submitted">
      <input type="submit" value="Apply " className="btn login-btn w-100"/></Link>
    </form>
  </div></div></div></div>

</>

     );
}


export default Addmentors;