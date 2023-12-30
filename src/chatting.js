import { useState } from "react";
function Chat() {
  const [message, setMessage] = useState("");
  const [chats, setChats] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const chat = async (e, message) => {


  e.preventDefault();
    
  if (!message) return;
  setIsTyping(true);    let msgs = chats;
  msgs.push({ role: "user", content: message });
  setChats(msgs);

  setMessage("");
  fetch("http://localhost:5050/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chats,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        msgs.push(data.output);
        setChats(msgs);
        setIsTyping(false);
      })
      .catch((error) => {
        console.log(error);
      });
}

  return (
    <>
<main>
      <h1 className="messages">Chat AI Tutorial</h1>
      <section>
        {chats && chats.length
          ? chats.map((chat, index) => (
       
              <p key={index} className={chat.role === "user" ? "user_msg" : ""}>
                     <div className="para">
                <span>
                  <b>{chat.role.toUpperCase()}</b>
                </span>
                <span>:</span>
                <span>{chat.content}</span>
                </div>
              </p>
           
            ))
          : ""}
      </section>
      <div className={isTyping ? "" : "hide"}>
      <p className="para">
        <i>{isTyping ? "Typing" : ""}</i>
      </p>
    </div>
    <form className="texting" action="" onSubmit={(e) => chat(e, message)}>
        <input
          type="text"
          name="message"
          className="typing"
          value={message}
          placeholder="Type a message here and hit Enter..."
          onChange={(e) => setMessage(e.target.value)}
        />
      </form>
      </main>
    </>
  );
}
export default Chat;
