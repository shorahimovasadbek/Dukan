import React, { useEffect } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";
import kosmetika from "../../assets/newImages/kosmetika.png";
import mebel from "../../assets/newImages/mebel.png";
import oziqovqat from "../../assets/newImages/oziqovqat.png";
import kiyimkechak from "../../assets/newImages/kiyimkechak.png";
import electronika from "../../assets/newImages/electronika.png";
import shifoxona from "../../assets/newImages/shifoxona.png";
import HomeOneHeader from "../HomeOne/HomeOneHeader";
import Drawer from "../Mobile/Drawer";
import useToggle from "../../Hooks/useToggle";
import FooterHomeOne from "../HomeOne/FooterHomeOne";
import BackToTop from "../BackToTop";
import './style.css'
import Steeper from "../Steeper";

function ChooseRoute() {
  const [drawer, drawerAction] = useToggle(false);
  const [darkMode, setDarkMode] = useToggle(true);

  useEffect(() => {
    document.body.classList.add("appie-init");
    if (darkMode) {
      document.body.classList.add("appie-dark");
    } else {
      document.body.classList.remove("appie-dark");
    }
    return () => {
      document.body.classList.remove("appie-dark");
    };
  });
  return (
    <>
      <Drawer drawer={drawer} action={drawerAction.toggle} />
      <HomeOneHeader
        className={darkMode ? "appie-header-area-dark" : ""}
        dark={darkMode}
        darkEnable
        changeMode={setDarkMode.toggle}
        action={drawerAction.toggle}
      />
      <div className="container choosesection">
        <Steeper number={1}/>
        <h5 className="text-light mb-5">O’zingizga mos yo’nalishni tanlang</h5>
        <div className="row">
          <div className="col-12 col-md-4 justify-content-center d-flex">
            <Link to="/chooseone">
              <img className="imgNow" src={kosmetika} />
              <h5 className="text-light mt-4">Kosmetika</h5>
              <p className="text-light">443 templates</p>
            </Link>
          </div>
          <div className="col-12 col-md-4 justify-content-center d-flex mt-5 mt-md-0">
            <Link to="/chooseone">
              <img className="imgNow" src={mebel} />
              <h5 className="text-light mt-4">Mebel</h5>
              <p className="text-light">443 templates</p>
            </Link>
          </div>
          <div className="col-12 col-md-4 justify-content-center d-flex mt-5 mt-md-0">
            <Link to="/chooseone">
              <img className="imgNow" src={oziqovqat} />
              <h5 className="text-light mt-4">Oziq-ovqat</h5>
              <p className="text-light">443 templates</p>
            </Link>
          </div>
          <div className="col-12 col-md-4 justify-content-center d-flex mt-5">
            <Link to="/chooseone">
              <img className="imgNow" src={kiyimkechak} />
              <h5 className="text-light mt-4">Kiyim-kechak</h5>
              <p className="text-light">443 templates</p>
            </Link>
          </div>
          <div className="col-12 col-md-4 justify-content-center d-flex mt-5">
            <Link to="/chooseone">
              <img className="imgNow" src={electronika} />
              <h5 className="text-light mt-4">Elektronika</h5>
              <p className="text-light">443 templates</p>
            </Link>
          </div>
          <div className="col-12 col-md-4 justify-content-center d-flex mt-5">
            <Link to="/chooseone">
              <img className="imgNow" src={shifoxona} />
              <h5 className="text-light mt-4">Shifoxona</h5>
              <p className="text-light">443 templates</p>
            </Link>
          </div>
          <div className="col-12 col-md-4 justify-content-center d-flex mt-5">
            <Link to="/chooseone">
              <img className="imgNow" src={kiyimkechak} />
              <h5 className="text-light mt-4">Kiyim-kechak</h5>
              <p className="text-light">443 templates</p>
            </Link>
          </div>
          <div className="col-12 col-md-4 justify-content-center d-flex mt-5">
            <Link to="/chooseone">
              <img className="imgNow" src={electronika} />
              <h5 className="text-light mt-4">Elektronika</h5>
              <p className="text-light">443 templates</p>
            </Link>
          </div>
          <div className="col-12 col-md-4 justify-content-center d-flex mt-5">
            <Link to="/chooseone">
              <img className="imgNow" src={shifoxona} />
              <h5 className="text-light mt-4">Shifoxona</h5>
              <p className="text-light">443 templates</p>
            </Link>
          </div>
        </div>
      </div>

      <FooterHomeOne className={darkMode ? "appie-footer-area-dark" : ""} />
      <BackToTop />
    </>
  );
}

export default ChooseRoute;
