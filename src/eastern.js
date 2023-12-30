import Header from "./header";
import { Link } from "react-router-dom";
import Header2 from "./header2";
import Footer from "./footer";
function Eastern() {
    const contact="Eastern Command";
    return ( 
      <>
      <Header2 title={contact}/>
      {/* Contact Start */}
    
        <div className="col-sm-9 ankc">
  <div className="history-info">

    {/* <h2 className="subtitle" /> */}
    <div className="row" style={{ display:"flexbox",flexWrap: "wrap", marginRight: 50, marginLeft: 50,
  width: "125%"}}
  >
{/* <h3 align="center"style={{paddingTop:50,marginLeft:30}} >
      <span id="ContentPlaceHolder1_lblSubHead">
        EASTERN COMMAND
      </span> */}
    {/* //   <span id="ContentPlaceHolder1_lblName" />
    //   </h3> */}
      <div className="col-sm-12" >
        <p style={{ textAlign: "justify" }}>&nbsp;</p>
        <p style={{ textAlign: "center" }}>
          <img
            alt=""
            src="img/eastern1.jpg"
            style={{ width: 700, height: 450 }}
          />
        </p>
        <p style={{ textAlign: "justify" }}>
          <span style={{ fontSize: 14 }}>
            1.&nbsp; &nbsp; &nbsp;The Eastern Theatre encompassing the snow-capped peaks of Sikkim and Arunachal Pradesh towards the North, the jungle clad hill tracts of Nagaland Manipur, Mizoram and Tripura and Meghalaya in the North-East and the alluvial fertile plains of Assam and Bengal, is a veritable conglomeration of flora and fauna in all its imaginable diversities. This is not only the most enticing and enchanting part of our country displaying nature's bounty at its best but also boasts of a wide diversity of cultures woven together by the underlying thread of nationalism. The abundance of natural resources coupled with the gracious and warm nature of the inhabitants makes the region uniquely different.
          </span>
        </p>
        <p style={{ textAlign: "justify" }}>&nbsp;</p>
        <p style={{ textAlign: "justify" }}>
          <span style={{ fontSize: 14 }}>
            2.&nbsp; &nbsp; &nbsp;Headquarters of Eastern Command, occupying Fort William, the former seat and symbol of authority of the British Empire has an unparalleled aura not experienced by any other formation. The historic structures and edifices in and around the Fort, narrate the tales of trials and triumphs of the British Army and the post Independence Indian Army. The history of the region is replete with stories of uncanny heroic deeds of valour and sacrifice since the days of yore. The close proximity to a number of neighboring countries add significance to its strategic geopolitical position and standing.
          </span>
        </p>
        <p style={{ textAlign: "justify" }}>&nbsp;</p>
        <p style={{ textAlign: "center" }}>
          <img
            alt=""
            src="img/ECHOME280119.jpg"
            style={{ width: 306, height: 311 }}
          />
        </p>
        <p style={{ textAlign: "justify" }}>&nbsp;</p>
        <p style={{ textAlign: "justify" }}>
          <span style={{ fontSize: 14 }}>
            3.&nbsp; &nbsp; &nbsp;In sharp contrast to the seemingly placid atmosphere, Eastern Command has remained heavily committed in active operations since its inception. Formations and units of the Command bore the brunt during the Chinese aggression in 1962 and were again in the forefront in 1971 Indo-Pak War, which changed the course of history of the subcontinent and installed India as an unchallenged regional power.
          </span>
        </p>
        <p style={{ textAlign: "justify"}}>&nbsp;</p>
        <p style={{ textAlign: "justify" }}>
          <span style={{ fontSize: 14 }}>
            4.&nbsp; &nbsp; With such a glorious past and major ongoing commitments both along the border and in containing insurgency, the Eastern Army has much to be proud of
          </span>
        </p>
  
        <p style={{ textAlign: "justify" }}>&nbsp;</p>
        <p style={{ textAlign: "justify" }}>&nbsp;</p>
        <p style={{ textAlign: "justify" }}>&nbsp;</p>
        <p style={{ textAlign: "justify" }}>&nbsp;</p>
      </div>
    </div>
    {/* //row */}
  </div>
  {/* //advertisment-info */}
</div>

</>
     );
}

export default Eastern;