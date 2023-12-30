import React, { useState } from 'react';
import axios from "axios";
function Mail()  {
//   const [emailData, setEmailData] = useState({
//     recipient: '',
//     subject: '',
//     text: '',
 
//   });
  const [emailStatus, setemailStatus] = useState("");
  const [tomail,settomail]=useState("")

  const handleInputChange = (e) => {
    setemailStatus({
      ...emailStatus,
      [e.target.name]: e.target.value
    });
  };
  const sendmail=(e)=>{
    e.preventDefault()
    axios.post("http://localhost:5050/mail").then((response)=>{
      console.log(response.data)
      setemailStatus(response.data.message)
    
   
    // console.log(response.data)
      // if (response.data.msg === 'success'){
      //     alert("Email sent, awesome!"); 
     
      // }else if(response.data.msg === 'fail'){
      //     alert("Oops, something went wrong. Try again")
      // }
  })
  
  }

  return (
    <div align="center">
        <br/><br/>
      <input
        type="email"
        name="recipient"
        value={emailStatus.recipient}
        onChange={(e)=>{settomail(e.target.value)}}
        placeholder="Recipient email"
      /><br/><br/>
      <input
        type="text"
        name="subject"
        value={emailStatus.subject}
        onChange={handleInputChange}
        placeholder="Subject"
      /><br/><br/>
      <input
        type="text"
        name="text"
        value={emailStatus.text}
        onChange={handleInputChange}
        placeholder="Text content"
      />
      <br/><br/>
      {/* <input
        type="text"
        name="html"
        value={emailData.html}
        onChange={handleInputChange}
        placeholder="HTML content"
      /><br/><br/> */}
      <button type="submit" onClick={sendmail}>Send Email</button>
    </div>
  );
}


export default Mail;