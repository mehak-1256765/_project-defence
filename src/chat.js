import Footer from "./footer";

function Chats() {
    return ( 
        <>
        <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5"><br/><br/>
              <div
            className="section-title text-center position-relative pb-3 mb-5 mx-auto"
            style={{ maxWidth: 600 }}
          >
            
            <h1 style={{marginTop:-90}}>TALK TO YOUR MENTORS</h1>
            </div>
            
          
        <div className="flexbox">
  <div className="chat-box">
    <div className="chat-box-header">
      <h3>
        CHAT ROOM
        <br />
        <small>Last active: 0 min ago</small>
      </h3>
    </div>
    <div id="chat_box_body" className="chat-box-body">
      <div id="chat_messages">
        <div className="profile1 other-profile">
          <img
            src="https://images.unsplash.com/photo-1537396123722-b93d0acd8848?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=efc6e85c24d3cfdd15cd36cb8a2471ed"
            width={30}
            height={30}
          />
          <span>Other profile</span>
        </div>
        <div className="message other-message">Hello!</div>
        <div className="profile1 my-profile">
          <span>My profile</span>
          <img
            src="https://images.unsplash.com/photo-1534135954997-e58fbd6dbbfc?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=02d536c38d9cfeb4f35f17fdfaa36619"
            width={30}
            height={30}
          />
        </div>
        <div className="message my-message">Hi!</div>
        <div className="message my-message">How are you!</div>
      </div>
    </div>
    <div id="typing">
      <div>
        <span /> <span /> <span /> <span className="n">Someone</span> is
        typing...
      </div>
    </div>
    <div className="chat-box-footer">
      <textarea
        id="chat_input"
        placeholder="Enter your message here..."
        defaultValue={""}
      />
      <button id="send">
        <svg style={{ width: 24, height: 24 }} viewBox="0 0 24 24">
          <path fill="#006ae3" d="M2,21L23,12L2,3V10L17,12L2,14V21Z" />
        </svg>
      </button>
    </div>
  </div>
</div>
</div>
</div>

</>
     );
}

export default Chats;