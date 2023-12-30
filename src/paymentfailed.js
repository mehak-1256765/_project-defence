function Paymentfailed() {
    return (
        <div className="container" id="failed">
  <div className="ui middle aligned center aligned grid">
    <div className="ui eight wide column">
      <form className="ui large form">
        <div className="ui icon negative message">
          <i className="warning icon" />
          <div className="content">
            <div className="header">Oops! Something went wrong.</div>
            <p>While trying to reserve money from your account</p>
          </div>
        </div>
        <span className="ui large teal submit fluid button">Try again</span>
      </form>
    </div>
  </div>
</div>

      );
}

export default Paymentfailed;
