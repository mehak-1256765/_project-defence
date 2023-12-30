import Footer from "./footer";
import Header from "./header";

function Events() {
  const events="Upcoming events"
    return ( 
      <>
      <Header title={events}/>
        <div className="events_area">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-lg-5">
        <div className="main_title">
          <h2 className="mb-3 text-white">UPCOMING EVENTS</h2>
        
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-6 col-md-6">
        <div className="single_event position-relative">
          <div className="event_thumb">
            <img
              src="img/kargil-divas.jpg"
              alt=""
            />
          </div>
          <div className="event_details">
            <div className="d-flex mb-4">
              <div className="date">
                <span>26</span> July
              </div>
              <div className="time-location">
                <p>
                  <span className="ti-time mr-2" /> 12:00 AM - 12:30 AM
                </p>
                <p>
                  <span className="ti-location-pin mr-2" /> New Delhi
                </p>
              </div>
            </div>
            <p>
            kargil Diwas
            </p>
            <a href="https://nationalwarmemorial.gov.in/events/details/8" className="btn btn-primary rounded-0 mt-3">
              View Details
            </a>
          </div>
        </div>
      </div>
      <div className="col-lg-6 col-md-6">
        <div className="single_event position-relative">
          <div className="event_thumb">
            <img
              src="img/independence-day.jpg"
              alt=""
            />
          </div>
          <div className="event_details">
            <div className="d-flex mb-4">
              <div className="date">
                <span>15</span> August
              </div>
              <div className="time-location">
                <p>
                  <span className="ti-time mr-2" /> 12:00 AM - 12:30 AM
                </p>
                <p>
                  <span className="ti-location-pin mr-2" /> New Delhi
                </p>
              </div>
            </div>
            <p>
             Independence day 
            </p>
            <a href="https://nationalwarmemorial.gov.in/events/details/6" className="btn btn-primary rounded-0 mt-3">
              View Details
            </a>
          </div>
        </div>
      </div>
      <div className="col-lg-12">
        <div className="text-center pt-lg-5 pt-3">
          <a href="https://nationalwarmemorial.gov.in/events" className="event-link">
            {" "}
            View All Event <img src="img/next.png" alt="" />{" "}
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

</>
     );
}

export default Events;