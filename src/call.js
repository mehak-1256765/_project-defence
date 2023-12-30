import { Link } from "react-router-dom";
import Footer from "./footer";
function Call() {
    return ( 
        <>
  {/* <div className="text-center"> */}

    {/* <a href="#myModal" className="trigger-btn" data-toggle="modal">
      Click to Open Confirm request
    </a> */}
  {/* </div> */}
  {/* Modal HTML*/}
  {/* <div id="myModal" className="modal fade"> */}
    <div className="modal-dialog modal-confirm">
      <div className="modal-content">
        <div className="modal-header">
          <div className="icon-box">
            <i className="material-icons"></i>
          </div>
          <h4 className="modal-title w-100">Awesome!</h4>
        </div>
        <div className="modal-body">
          <p className="text-center">
            Your request has been confirmed.
          </p>
        </div>
        <div className="modal-footer">
    
          <button className="btn btn-success btn-block" data-dismiss="modal">
          <Link to="/mentors">
            OK
            </Link>
          </button>
         
        </div>
      </div>
    </div>
  {/* </div> */}

</>

     );
}

export default Call;