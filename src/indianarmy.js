import { Link } from "react-router-dom";

function Indianarmy() {
    return ( 
        <>
        <div
        id="header-carousel"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="w-100" src="img/army1.jfif" alt="Image"  style={{height:600}}/>
            <div className="caption d-flex flex-column align-items-center justify-content-center">
              <div className="p-3" style={{ maxWidth: 900 }}>
               
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img className="w-100" src="img/army2.jfif" alt="Image" style={{height:600}} />
            <div className="caption d-flex flex-column align-items-center justify-content-center">
              <div className="p-3" style={{ maxWidth: 900 }}>
          
             
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <img className="w-100" src="img/arm3.jpg" alt="Image" style={{height:600}}/>
            <div className="caption d-flex flex-column align-items-center justify-content-center">
              <div className="p-3" style={{ maxWidth: 900 }}>
          
             
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#header-carousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#header-carousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <ul class="ch-grid">
      <li>
          <div class="ch-item sc">
              <div class="ch-info">
                <h3><span id="ContentPlaceHolder1_spSouth">SOUTHERN COMMAND</span></h3>                                                  
              </div>
          </div>
          <Link to="/southern"><li><b>Southern <br/>Command</b></li></Link>
      </li>
      <li>
          <div class="ch-item ec">
              <div class="ch-info">
               <h3><span id="ContentPlaceHolder1_spEast">EASTERN COMMAND</span></h3>      
              </div>
          </div>
          <Link to="/eastern"><li><b>Eastern <br/>Command</b></li></Link>
      </li>
      <li>
          <div class="ch-item wc">
              <div class="ch-info">
             <h3><span id="ContentPlaceHolder1_spWest">WESTERN COMMAND</span></h3>  
              </div>
          </div>
          <Link to="/eastern"><li><b>Western <br/>Command</b></li></Link>
      </li>
    
      <li>
          <div class="ch-item cc">
              <div class="ch-info">
               <h3><span id="ContentPlaceHolder1_spCentral">CENTRAL COMMAND</span></h3>  
              </div>
          </div>
          <Link to="/eastern"><li><b>Central <br/>Command</b></li></Link>
      </li>
      <li>
          <div class="ch-item nc">
              <div class="ch-info">
            
                  <h3><span id="ContentPlaceHolder1_spNorthern">NORTHERN COMMAND</span></h3>                                                 
              </div>
          </div>
          <Link to="/eastern"><li><b>Northern <br/>Command</b></li></Link>
      </li>
      <li>
          <div class="ch-item artrac">
              <div class="ch-info">
               <h3><span id="ContentPlaceHolder1_spArtrac">ARTRAC</span></h3>  
              </div>
          </div>
          <Link to="/eastern"><li><b>Artrac <br/>Command</b></li></Link>
      </li>
      <li>
          <div class="ch-item swc">
              <div class="ch-info">
            <h3><span id="ContentPlaceHolder1_spSouthWest">SOUTH WESTERN COMMAND</span></h3> 
              </div>
          </div>
          <Link to="/eastern"><li><b>SouthWestern Command</b></li></Link>
      </li>
  </ul>


  <section>
  <div className="row">
    <div className="col-md-4 col-sm-6 col-xs-12">
      <div className="card">
        <div className="cover item-a">
        
          <h1>
            Know your
            <br />
            Army
          </h1>
          {/* <span className="price">$79</span> */}
          <div className="card-back">
            {/* <a href="#">Add to cart</a> */}
            <Link to="/knowyourarmy">
          View detail</Link>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-4 col-sm-6 col-xs-12">
      <div className="card">
        <div className="cover item-b">
          <h1>
            Career
          
          </h1>
          {/* <span className="price">$35</span> */}
          <div className="card-back">
            <Link to="/armycareer">View Detail</Link>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-4 col-sm-6 col-xs-12">
      <div className="card">
        <div className="cover item-c">
          <h1>
          Honours and
            <br />
            Awards
          </h1>
          {/* <span className="price">$155</span> */}
          <div className="card-back">
            <Link to="/honor">View Detail</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


                                    
  </>
     );
}

export default Indianarmy;