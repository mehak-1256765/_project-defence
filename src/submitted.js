import { Link } from "react-router-dom";
function Submitted() {
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
            Your Data has been submitted successfully.<br/>
            Thank you for visiting us!
          </p>
        </div>
        <div className="modal-footer">
    
          <button className="btn btn-success btn-block" data-dismiss="modal">
          <Link to="/home">
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

export default Submitted;