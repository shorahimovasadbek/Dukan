import React, { useEffect } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";
import kosmetika from "../../assets/newImages/iframe1.png";
import mebel from "../../assets/newImages/iframe2.png";
import oziqovqat from "../../assets/newImages/iframe3.png";
import kiyimkechak from "../../assets/newImages/image (3).png";
import electronika from "../../assets/newImages/image (4).png";
import shifoxona from "../../assets/newImages/image (5).png";
import shifoxona1 from "../../assets/newImages/image (6).png";
import shifoxona2 from "../../assets/newImages/image (7).png";
import shifoxona3 from "../../assets/newImages/image8.png";
import HomeOneHeader from "../HomeOne/HomeOneHeader";
import Drawer from "../Mobile/Drawer";
import useToggle from "../../Hooks/useToggle";
import FooterHomeOne from "../HomeOne/FooterHomeOne";
import BackToTop from "../BackToTop";
import Steeper from "../Steeper";
import "./style.css";

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
        className={darkMode ? "appie-header-area-dark back_header" : ""}
        dark={darkMode}
        darkEnable
        changeMode={setDarkMode.toggle}
        action={drawerAction.toggle}
      />
      <div className="choosesection">
        <div className="container ">
          <Steeper number={2} />
          <h5 className="text-light mb-5">
            O'zingiz Yoqtirgan Web-Sayt Shablonini Tanlang
          </h5>
          <div className="row">
            <div className="col-12 col-md-4 justify-content-center d-flex position-relative">
              <div className="parent_icons__choose">
                <Link to="/prices">
                  <div className="d-flex icons_choose">
                    <p>
                      <i class="bi bi-cart2"></i>
                    </p>
                    <p>
                      <i class="bi bi-list mx-4"></i>
                    </p>
                    <p>
                      <i class="bi bi-eye"></i>
                    </p>
                  </div>
                </Link>
                <Link to="/prices">
                  <img className="imgNow1" src={kosmetika} />
                  <h5 className="text-light mt-4">
                    Modern Skincare Website with Product Photography
                  </h5>
                  <p className="text-light">72$</p>
                </Link>
              </div>
            </div>
            <div className="col-12 col-md-4 justify-content-center d-flex mt-5 mt-md-0">
              <div className="parent_icons__choose">
                <Link to="/prices">
                  <div className="d-flex icons_choose">
                    <p>
                      <i class="bi bi-cart2"></i>
                    </p>
                    <p>
                      <i class="bi bi-list mx-4"></i>
                    </p>
                    <p>
                      <i class="bi bi-eye"></i>
                    </p>
                  </div>
                </Link>
                <Link to="/prices">
                  <img className="imgNow1" src={mebel} />
                  <h5 className="text-light mt-4">
                    Modern Skincare Website with Product Photography
                  </h5>
                  <p className="text-light">47$</p>
                </Link>
              </div>
            </div>
            <div className="col-12 col-md-4 justify-content-center d-flex mt-5 mt-md-0">
              <div className="parent_icons__choose">
                <Link to="/prices">
                  <div className="d-flex icons_choose">
                    <p>
                      <i class="bi bi-cart2"></i>
                    </p>
                    <p>
                      <i class="bi bi-list mx-4"></i>
                    </p>
                    <p>
                      <i class="bi bi-eye"></i>
                    </p>
                  </div>
                </Link>
                <Link to="/prices">
                  <img className="imgNow1" src={oziqovqat} />
                  <h5 className="text-light mt-4">
                    Modern Skincare Website with Product Photography
                  </h5>
                  <p className="text-light">23$</p>
                </Link>
              </div>
            </div>
            <div className="col-12 col-md-4 justify-content-center d-flex mt-5">
              <div className="parent_icons__choose">
                <Link to="/prices">
                  <div className="d-flex icons_choose">
                    <p>
                      <i class="bi bi-cart2"></i>
                    </p>
                    <p>
                      <i class="bi bi-list mx-4"></i>
                    </p>
                    <p>
                      <i class="bi bi-eye"></i>
                    </p>
                  </div>
                </Link>
                <Link to="/prices">
                  <img className="imgNow1" src={kiyimkechak} />
                  <h5 className="text-light mt-4">
                    Modern Skincare Website with Product Photography
                  </h5>
                  <p className="text-light">90$</p>
                </Link>
              </div>
            </div>
            <div className="col-12 col-md-4 justify-content-center d-flex mt-5">
              <div className="parent_icons__choose">
                <Link to="/prices">
                  <div className="d-flex icons_choose">
                    <p>
                      <i class="bi bi-cart2"></i>
                    </p>
                    <p>
                      <i class="bi bi-list mx-4"></i>
                    </p>
                    <p>
                      <i class="bi bi-eye"></i>
                    </p>
                  </div>
                </Link>
                <Link to="/prices">
                  <img className="imgNow1" src={electronika} />
                  <h5 className="text-light mt-4">
                    Modern Skincare Website with Product Photography
                  </h5>
                  <p className="text-light">56$</p>
                </Link>
              </div>
            </div>
            <div className="col-12 col-md-4 justify-content-center d-flex mt-5">
              <div className="parent_icons__choose">
                <Link to="/prices">
                  <div className="d-flex icons_choose">
                    <p>
                      <i class="bi bi-cart2"></i>
                    </p>
                    <p>
                      <i class="bi bi-list mx-4"></i>
                    </p>
                    <p>
                      <i class="bi bi-eye"></i>
                    </p>
                  </div>
                </Link>
                <Link to="/prices">
                  <img className="imgNow1" src={shifoxona} />
                  <h5 className="text-light mt-4">
                    Modern Skincare Website with Product Photography
                  </h5>
                  <p className="text-light">34$</p>
                </Link>
              </div>
            </div>
            <div className="col-12 col-md-4 justify-content-center d-flex mt-5">
              <div className="parent_icons__choose">
                <Link to="/prices">
                  <div className="d-flex icons_choose">
                    <p>
                      <i class="bi bi-cart2"></i>
                    </p>
                    <p>
                      <i class="bi bi-list mx-4"></i>
                    </p>
                    <p>
                      <i class="bi bi-eye"></i>
                    </p>
                  </div>
                </Link>
                <Link to="/prices">
                  <img className="imgNow1" src={shifoxona1} />
                  <h5 className="text-light mt-4">
                    Modern Skincare Website with Product Photography
                  </h5>
                  <p className="text-light">89$</p>
                </Link>
              </div>
            </div>
            <div className="col-12 col-md-4 justify-content-center d-flex mt-5">
              <div className="parent_icons__choose">
                <Link to="/prices">
                  <div className="d-flex icons_choose">
                    <p>
                      <i class="bi bi-cart2"></i>
                    </p>
                    <p>
                      <i class="bi bi-list mx-4"></i>
                    </p>
                    <p>
                      <i class="bi bi-eye"></i>
                    </p>
                  </div>
                </Link>
                <Link to="/prices">
                  <img className="imgNow1" src={shifoxona2} />
                  <h5 className="text-light mt-4">
                    Modern Skincare Website with Product Photography
                  </h5>
                  <p className="text-light">62$</p>
                </Link>
              </div>
            </div>
            <div className="col-12 col-md-4 justify-content-center d-flex mt-5">
              <div className="parent_icons__choose">
                <Link to="/prices">
                  <div className="d-flex icons_choose">
                    <p>
                      <i class="bi bi-cart2"></i>
                    </p>
                    <p>
                      <i class="bi bi-list mx-4"></i>
                    </p>
                    <p>
                      <i class="bi bi-eye"></i>
                    </p>
                  </div>
                </Link>
                <Link to="/prices">
                  <img className="imgNow1" src={shifoxona3} />
                  <h5 className="text-light mt-4">
                    Modern Skincare Website with Product Photography
                  </h5>
                  <p className="text-light">45$</p>
                </Link>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center mt-5">
            <Link to="/">
              <button className="btn btn-outline-light px-5">Ko'proq</button>
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
