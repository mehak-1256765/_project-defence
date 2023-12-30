import { Link } from "react-router-dom";


function Learnmore() {
    return ( 
        <>
      
        <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
    <div className="container py-5">
          <div
        className="section-title text-center position-relative pb-3 mb-5 mx-auto"
        style={{ maxWidth: 600 }}
      >
    <h1 className="mb-0" style={{ fontSize: 50,marginTop:-60 }}>Know your heros</h1>

        </div>
        </div>
      
  <div className="paramVirChakra firstSection commonPad">
    <div className="container">
      <h2 style={{ fontSize: 20,marginTop:-60 }}>Param Vir Chakra</h2>
      <p className="largeFont mb-4" style={{color:"wheat" ,marginTop:30 }}>
        <b>The Param Vir Chakra (PVC) is India's highest military decoration,
        awarded for displaying distinguished acts of valour during wartime.</b>
      </p>
      <div className="row">
        <div className="col-md-4">
          <div className="imgHolder">
            <img
              src="img/param-vir-chakra-img.jpg"
              width={359}
              height={238}
              alt="Param Vir Chakra"
              title="Param Vir Chakra"
            />
          </div>
        </div>
        <div className="col-md-8">
          <p className="text-justify" style={{color:"beige"}}>
            On 26 January 1950, celebrated as Republic Day of India, the PVC was
            instituted as a Gallantry Medal with retrospective effect from 15
            August 1947 by Dr. Rajendra Prasad, the then President of India.The
            Medal translates as the "Wheel of the Ultimate Brave", and the award
            is granted for "most conspicuous bravery in the presence of the
            enemy". The medal was designed by Mrs. Savitri Khanolkar. The
            designer drew inspiration from sage Dadhichi, a vedic rishi who made
            the ultimate sacrifice by giving up his body so that the Gods could
            make a deadly weapon called Vajra or Thunderbolt from his spine. The
            medal is cast in bronze. In the centre, on a raised circle, is the
            state emblem, surrounded by four replicas of Indra's Vajra, flanked
            by the sword of Shivaji. The decoration is suspended from a straight
            swiveling suspension bar, and is held by a 32 mm purple ribbon.
          </p>
       
              <audio crossOrigin="">
                <source
                  src="pvc-English.mp3"
                  type="audio/mpeg"
                />
              </audio>
            </div>
         </div>
          </div>
        </div>
      </div>
    
 
  <div className="paramYoddhasList lastSection commonPad" id="paramList">
    <div className="container">
      <div className="titleHeader d-flex align-items-center justify-content-between">
        <h2 style={{ fontSize: 20 }}>Param Yodha</h2>
        <form action="/param-yoddhas" method="post" autoComplete="off">
          <input
            type="hidden"
            id="_csrfToken_year"
            name="_csrfToken"
            defaultValue=""
            autoComplete="off"
          />
          s
        </form>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-6">
          <Link to="/heros"
            className="paramYoddhaItem"
           href=""
            title="Somnath Sharma"
          >
           
            <span className="imgHolder">
              <img
                src="img/major-somnath-sharma-photo.jpg"
                width={310}
                height={332}
                alt="Somnath Sharma"
                title="Somnath Sharma"
              />
            </span>
            <span className="paramYoddhaName">
              <span className="small"><b>Major</b></span><b>Somnath Sharma</b>
            </span>
            <span className="yoddhaTag">
              Param Vir Chakra (Posthumous)
              <span className="small">
                <span className="fa fa-calendar" aria-hidden="true" />
                03 Nov.1947
              </span>
            </span>
        </Link>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6">
          <Link to="/hero2"
            className="paramYoddhaItem"
           
            title="Jadunath Singh"
          >
            <span className="imgHolder">
              <img
                src="img/jadunath-singh-photo.jpg"
                width={310}
                height={332}
                alt="Jadunath Singh"
                title="Jadunath Singh"
              />
            </span>
            <span className="paramYoddhaName">
              <span className="small"><b>Naik</b></span><b>Jadunath Singh</b>
            </span>
            <span className="yoddhaTag">
              Param Vir Chakra (Posthumous)
              <span className="small">
                <span className="fa fa-calendar" aria-hidden="true" />
                06 Feb.1948
              </span>
            </span>
          </Link>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6">
          <Link to="/hero3"
        
            className="paramYoddhaItem"
            href="/param-yoddhas/details/6"
            title="Rama Raghoba Rane "
          >
            <span className="imgHolder">
              <img
                src="img/rama-raghoba-rane-photo.jpg"
                width={310}
                height={332}
                alt="Rama Raghoba Rane "
                title="Rama Raghoba Rane "
              />
            </span>
            <span className="paramYoddhaName">
              <span className="small"><b>Second Lieutenant</b></span><b>Rama Raghoba Rane</b>{" "}
            </span>
            <span className="yoddhaTag">
              Param Vir Chakra
              <span className="small">
                <span className="fa fa-calendar" aria-hidden="true" />
                08 Apr.1948
              </span>
            </span>
          </Link>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6">
          <a
            className="paramYoddhaItem"
            href="/param-yoddhas/details/7"
            title="Piru Singh"
          >
            <span className="imgHolder">
              <img
                src="img/piru-singh-photo.jpg"
                width={310}
                height={332}
                alt="Piru Singh"
                title="Piru Singh"
              />
            </span>
            <span className="paramYoddhaName">
              <span className="small"><b>Company Havildar Major</b></span><b>Piru Singh</b>
            </span>
            <span className="yoddhaTag">
              Param Vir Chakra (Posthumous)
              <span className="small">
                <span className="fa fa-calendar" aria-hidden="true" />
                18 Jul.1948
              </span>
            </span>
          </a>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6">
          <a
            className="paramYoddhaItem"
            href="https://www.honourpoint.in/profile/hon-capt-karam-singh-pvc/"
            title="Karam Singh"
          >
            <span className="imgHolder">
              <img
                src="img/karam-singh-photo.jpg"
                width={310}
                height={332}
                alt="Karam Singh"
                title="Karam Singh"
              />
            </span>
            <span className="paramYoddhaName">
              <span className="small"><b>Naik</b></span><b>Karam Singh</b>
            </span>
            <span className="yoddhaTag">
              Param Vir Chakra
              <span className="small">
                <span className="fa fa-calendar" aria-hidden="true" />
                13 Oct.1948
              </span>
            </span>
          </a>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6">
          <a
            className="paramYoddhaItem"
            href="https://www.honourpoint.in/profile/captain-gurbachan-singh-salaria-pvc/"
            title="Gurbachan Singh Salaria"
          >
            <span className="imgHolder">
              <img
                src="img/gurbachan-singh-salaria-photo.jpg"
                width={310}
                height={332}
                alt="Gurbachan Singh Salaria"
                title="Gurbachan Singh Salaria"
              />
            </span>
            <span className="paramYoddhaName">
              <span className="small"><b>Captain</b></span><b>Gurbachan Singh Salaria</b>
            </span>
            <span className="yoddhaTag">
              Param Vir Chakra (Posthumous)
              <span className="small">
                <span className="fa fa-calendar" aria-hidden="true" />
                05 Dec.1961
              </span>
            </span>
          </a>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6">
          <a
            className="paramYoddhaItem"
            href="https://www.honourpoint.in/profile/lt-col-dhan-singh-thapa-pvc/"
            title="Dhan Singh Thapa"
          >
            <span className="imgHolder">
              <img
                src="img/dhan-singh-thapa-photo.jpg"
                width={310}
                height={332}
                alt="Dhan Singh Thapa"
                title="Dhan Singh Thapa"
              />
            </span>
            <span className="paramYoddhaName">
              <span className="small"><b>Major</b></span><b>Dhan Singh Thapa</b>
            </span>
            <span className="yoddhaTag">
              Param Vir Chakra
              <span className="small">
                <span className="fa fa-calendar" aria-hidden="true" />
                20 Oct.1962
              </span>
            </span>
          </a>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6">
          <a
            className="paramYoddhaItem"
            href="https://www.honourpoint.in/profile/subedar-joginder-singh-pvc/"
            title="Joginder Singh"
          >
            <span className="imgHolder">
              <img
                src="img/joginder-singh-photo.jpg"
                width={310}
                height={332}
                alt="Joginder Singh"
                title="Joginder Singh"
              />
            </span>
            <span className="paramYoddhaName">
              <span className="small"><b>Subedar</b></span><b>Joginder Singh</b>
            </span>
            <span className="yoddhaTag">
              Param Vir Chakra (Posthumous)
              <span className="small">
                <span className="fa fa-calendar" aria-hidden="true" />
                23 Oct.1962
              </span>
            </span>
          </a>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6">
          <a
            className="paramYoddhaItem"
            href="https://www.honourpoint.in/profile/major-shaitan-singh-pvc/"
            title="Shaitan Singh"
          >
            <span className="imgHolder">
              <img
                src="img/shaitan-singh-photo.jpg"
                width={310}
                height={332}
                alt="Shaitan Singh"
                title="Shaitan Singh"
              />
            </span>
            <span className="paramYoddhaName">
              <span className="small"><b>Major</b></span><b>Shaitan Singh</b>
            </span>
            <span className="yoddhaTag">
              Param Vir Chakra (Posthumous)
              <span className="small">
                <span className="fa fa-calendar" aria-hidden="true" />
                18 Nov.1962
              </span>
            </span>
          </a>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6">
          <a
            className="paramYoddhaItem"
            href="/param-yoddhas/details/13"
            title="Ardeshir Burzorji Tarapore"
          >
            <span className="imgHolder">
              <img
                src="img/ardeshir-burzorji-tarapore-photo.jpg"
                width={310}
                height={332}
                alt="Ardeshir Burzorji Tarapore"
                title="Ardeshir Burzorji Tarapore"
              />
            </span>
            <span className="paramYoddhaName">
              <span className="small"><b>Lieutenant Colonel</b></span><b>Ardeshir Burzorji</b>
              Tarapore
            </span>
            <span className="yoddhaTag">
              Param Vir Chakra (Posthumous)
              <span className="small">
                <span className="fa fa-calendar" aria-hidden="true" />
                11 Sep.1965
              </span>
            </span>
          </a>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6">
          <a
            className="paramYoddhaItem"
            href="https://www.honourpoint.in/profile/cqmh-abdul-hamid-pvc/"
            title="Abdul Hamid"
          >
            <span className="imgHolder">
              <img
                src="img/abdul-hamid-photo.jpg"
                width={310}
                height={332}
                alt="Abdul Hamid"
                title="Abdul Hamid"
              />
            </span>
            <span className="paramYoddhaName">
              <span className="small"><b>CQMH</b></span><b>Abdul Hamid</b>
            </span>
            <span className="yoddhaTag">
              Param Vir Chakra (Posthumous)
              <span className="small">
                <span className="fa fa-calendar" aria-hidden="true" />
                10 Sep.1967
              </span>
            </span>
          </a>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6">
          <a
            className="paramYoddhaItem"
            href="https://www.honourpoint.in/profile/lance-naik-albert-ekka-pvc/"
            title="Albert Ekka"
          >
            <span className="imgHolder">
              <img
                src="img/albert-ekka-photo.jpg"
                width={310}
                height={332}
                alt="Albert Ekka"
                title="Albert Ekka"
              />
            </span>
            <span className="paramYoddhaName">
              <span className="small"><b>Lance Naik</b></span><b>Albert Ekka</b>
            </span>
            <span className="yoddhaTag">
              Param Vir Chakra (Posthumous)
              <span className="small">
                <span className="fa fa-calendar" aria-hidden="true" />
                04 Dec.1971
              </span>
            </span>
          </a>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6">
          <a
            className="paramYoddhaItem"
            href=""
            title="Nirmal Jit Singh Sekhon"
          >
            <span className="imgHolder">
              <img
                src="img/nirmal-jit-singh-sekhon-photo.jpg"
                width={310}
                height={332}
                alt="Nirmal Jit Singh Sekhon"
                title="Nirmal Jit Singh Sekhon"
              />
            </span>
            <span className="paramYoddhaName">
              <span className="small"><b>Flying Officer</b></span><b>Nirmal Jit Singh</b>
              Sekhon
            </span>
            <span className="yoddhaTag">
              Param Vir Chakra (Posthumous)
              <span className="small">
                <span className="fa fa-calendar" aria-hidden="true" />
                14 Dec.1971
              </span>
            </span>
          </a>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6">
          <a
            className="paramYoddhaItem"
            href="/param-yoddhas/details/17"
            title="Hoshiar Singh"
          >
            <span className="imgHolder">
              <img
                src="img/hoshiar-singh-photo.jpg"
                width={310}
                height={332}
                alt="Hoshiar Singh"
                title="Hoshiar Singh"
              />
            </span>
            <span className="paramYoddhaName">
              <span className="small"><b>Major</b></span><b>Hoshiar Singh</b>
            </span>
            <span className="yoddhaTag">
              Param Vir Chakra
              <span className="small">
                <span className="fa fa-calendar" aria-hidden="true" />
                15 Dec.1971
              </span>
            </span>
          </a>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6">
          <a
            className="paramYoddhaItem"
            href="/param-yoddhas/details/18"
            title="Arun Khetarpal"
          >
            <span className="imgHolder">
              <img
                src="img/arun-khetarpal-photo.jpg"
                width={310}
                height={332}
                alt="Arun Khetarpal"
                title="Arun Khetarpal"
              />
            </span>
            <span className="paramYoddhaName">
              <span className="small"><b>Second Lieutenant</b></span><b>Arun Khetarpal</b>
            </span>
            <span className="yoddhaTag">
              Param Vir Chakra (Posthumous)
              <span className="small">
                <span className="fa fa-calendar" aria-hidden="true" />
                16 Dec.1971
              </span>
            </span>
          </a>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6">
          <a
            className="paramYoddhaItem"
            href="/param-yoddhas/details/19"
            title="Bana Singh"
          >
            <span className="imgHolder">
              <img
                src="img/bana-singh-photo.jpg"
                width={310}
                height={332}
                alt="Bana Singh"
                title="Bana Singh"
              />
            </span>
            <span className="paramYoddhaName">
              <span className="small"><b>Naib Subedar</b></span><b>Bana Singh</b>
            </span>
            <span className="yoddhaTag">
              Param Vir Chakra
              <span className="small">
                <span className="fa fa-calendar" aria-hidden="true" />
                26 Jun.1987
              </span>
            </span>
          </a>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6">
          <a
            className="paramYoddhaItem"
            href="/param-yoddhas/details/20"
            title="Ramaswamy Parameswaran"
          >
            <span className="imgHolder">
              <img
                src="img/ramaswamy-parameswaran-photo.jpg"
                width={310}
                height={332}
                alt="Ramaswamy Parameswaran"
                title="Ramaswamy Parameswaran"
              />
            </span>
            <span className="paramYoddhaName">
              <span className="small"><b>Major</b></span><b>Ramaswamy Parameswaran</b>
            </span>
            <span className="yoddhaTag">
              Param Vir Chakra (Posthumous)
              <span className="small">
                <span className="fa fa-calendar" aria-hidden="true" />
                25 Nov.1987
              </span>
            </span>
          </a>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6">
          <a
            className="paramYoddhaItem"
            href="/param-yoddhas/details/21"
            title="Manoj Kumar Pandey"
          >
            <span className="imgHolder">
              <img
                src="img/manoj-kumar-pandey-photo.jpg"
                width={310}
                height={332}
                alt="Manoj Kumar Pandey"
                title="Manoj Kumar Pandey"
              />
            </span>
            <span className="paramYoddhaName">
              <span className="small"><b>Lieutenant</b></span><b>Manoj Kumar Pandey</b>
            </span>
            <span className="yoddhaTag">
              Param Vir Chakra (Posthumous)
              <span className="small">
                <span className="fa fa-calendar" aria-hidden="true" />
                09 Jul.1999
              </span>
            </span>
          </a>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6">
          <a
            className="paramYoddhaItem"
            href="/param-yoddhas/details/22"
            title="Yogender Singh Yadav"
          >
            <span className="imgHolder">
              <img
                src="img/yogender-singh-yadav-photo.jpg"
                width={310}
                height={332}
                alt="Yogender Singh Yadav"
                title="Yogender Singh Yadav"
              />
            </span>
            <span className="paramYoddhaName">
              <span className="small"><b>Grenadier</b></span><b>Yogender Singh Yadav</b>
            </span>
            <span className="yoddhaTag">
              Param Vir Chakra
              <span className="small">
                <span className="fa fa-calendar" aria-hidden="true" />
                03 Jul.1999
              </span>
            </span>
          </a>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6">
          <a
            className="paramYoddhaItem"
            href="/param-yoddhas/details/23"
            title="Sanjay Kumar"
          >
            <span className="imgHolder">
              <img
                src="img/sanjay-kumar-photo.jpg"
                width={310}
                height={332}
                alt="Sanjay Kumar"
                title="Sanjay Kumar"
              />
            </span>
            <span className="paramYoddhaName">
              <span className="small"><b>Rifleman</b></span><b>Sanjay Kumar</b>
            </span>
            <span className="yoddhaTag">
              Param Vir Chakra
              <span className="small">
                <span className="fa fa-calendar" aria-hidden="true" />
                12 Dec.1999
              </span>
            </span>
          </a>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6">
          <a
            className="paramYoddhaItem"
            href="/param-yoddhas/details/24"
            title="Vikram Batra"
          >
            <span className="imgHolder">
              <img
                src="img/vikram-batra-photo.jpg"
                width={310}
                height={332}
                alt="Vikram Batra"
                title="Vikram Batra"
              />
            </span>
            <span className="paramYoddhaName">
              <span className="small"><b>Captain</b></span><b>Vikram Batra</b>
            </span>
            <span className="yoddhaTag">
              Param Vir Chakra (Posthumous)
              <span className="small">
                <span className="fa fa-calendar" aria-hidden="true" />
                07 Jul.1999
              </span>
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
  






        


   
        </>
     );
}

export default Learnmore;