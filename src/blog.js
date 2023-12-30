import Footer from "./footer";
import Header from "./header";

function Blog() {
  const blog="Latest Blogs"
    return ( 
        <>
        <Header title={blog}/>
  {/* Blog Start */}
  <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
    <div className="container py-5">
      <div
        className="section-title text-center position-relative pb-3 mb-5 mx-auto"
        style={{ maxWidth: 600 }}
      >
        <h5 className="fw-bold text-primary text-uppercase">Latest Blog</h5>
        <h1 className="mb-0">Read The Latest Articles from Our Blog Post</h1>
      </div>
      <div className="row g-5">
        <div className="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
          <div className="blog-item bg-light rounded overflow-hidden">
            <div className="blog-img position-relative overflow-hidden">
              <img className="img-fluid" src="img/blog2.jpg"  alt="" style={{height:229}}/>
            
             
            </div>
            <div className="p-4" >
              <div className="d-flex mb-3">
                <small className="me-3">
                  <i className="far fa-user text-primary me-2" />
                  John Doe
                </small>
                <small>
                  <i className="far fa-calendar-alt text-primary me-2" />
                  01 Jan, 2045
                </small>
              </div>
              <h4 className="mb-3">
Indian Navy Greenflags Rafale In Deck Jet Contest</h4>
              <p>
              French firm Dassault Aviation is gathering big momentum towards an Indian Navy contract for 26 Rafale-M naval fighters intended for operations...
              </p>
              <a className="text-uppercase" href="https://www.livefistdefence.com/indian-navy-greenflags-rafale-in-deck-jet-contest/">
                Read More <i className="bi bi-arrow-right" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 wow slideInUp" data-wow-delay="0.6s">
          <div className="blog-item bg-light rounded overflow-hidden">
            <div className="blog-img position-relative overflow-hidden">
              <img className="img-fluid" src="img/blog3.jpg"  alt="" />
              
            </div>
            <div className="p-4">
              <div className="d-flex mb-3">
                <small className="me-3">
                  <i className="far fa-user text-primary me-2" />
                  John Doe
                </small>
                <small>
                  <i className="far fa-calendar-alt text-primary me-2" />
                  01 Jan, 2045
                </small>
              </div>
              <h4 className="mb-3">
HAL Unveils Cleansheet Supersonic Trainer</h4>
              <p>
              A brand new Indian supersonic jet trainer is all set to be unveiled by India’s state-owned Hindustan Aeronautics Ltd (HAL) at the upcoming Aero India 2023 show..
              </p>
              <a className="text-uppercase" href="https://www.livefistdefence.com/hal-unveils-cleansheet-supersonic-trainer/">
                Read More <i className="bi bi-arrow-right" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 wow slideInUp" data-wow-delay="0.9s">
          <div className="blog-item bg-light rounded overflow-hidden">
            <div className="blog-img position-relative overflow-hidden">
              <img className="img-fluid" src="img/blog4.jpg" alt="" />
            
            </div>
            <div className="p-4">
              <div className="d-flex mb-3">
                <small className="me-3">
                  <i className="far fa-user text-primary me-2" />
                  John Doe
                </small>
                <small>
                  <i className="far fa-calendar-alt text-primary me-2" />
                  01 Jan, 2045
                </small>
              </div>
              <h4 className="mb-3">HISTORY! Indian Fighter Lands On Indian Aircraft Carrier</h4>
              <p>
              In a landing/take-off cycle that goes straight into the aviation history books, an Indian-built fighter today landed..
              </p>
              <a className="text-uppercase" href="https://www.livefistdefence.com/history-indian-fighter-lands-on-indian-aircraft-carrier/">
                Read More <i className="bi bi-arrow-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Blog Start */}

</>

     );
}

export default Blog;