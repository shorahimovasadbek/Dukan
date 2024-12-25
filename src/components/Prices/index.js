import React, { useEffect } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";
import HomeOneHeader from "../HomeOne/HomeOneHeader";
import Drawer from "../Mobile/Drawer";
import useToggle from "../../Hooks/useToggle";
import FooterHomeOne from "../HomeOne/FooterHomeOne";
import BackToTop from "../BackToTop";
import "./style.css";

function Prices() {
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
    <div className="bg-price">
      <Drawer drawer={drawer} action={drawerAction.toggle} />
      <HomeOneHeader
        className={darkMode ? "appie-header-area-dark" : ""}
        dark={darkMode}
        darkEnable
        changeMode={setDarkMode.toggle}
        action={drawerAction.toggle}
      />
      <div className="container choosesection">
        <h5 className="text-light mb-2">Narxlar rejalari</h5>
        <h6 className="text-light_h6 mb-4">
          Ehtiyojlaringizga mos keladigan eng yaxshi rejani tanlang.
        </h6>
        <div className="row">
          <div className="col-12 col-md-4">
            <div className="card card_price p-4">
              <h4 className="text-center text-light mt-4">Asosiy</h4>
              <p className="text-center text-light">
                Hamma uchun oddiy boshlanish
              </p>
              <h1 className="text-warning_h1 text-center">
                1.3
                <sub>
                  <span className="span_text">mln</span>
                </sub>
                <span className="span_text span_text__bottom">/oy</span>
              </h1>
              <ul className="ul_list__price">
                <li className="d-flex justify-content-start align-items-center">
                  <i class="bi bi-check icon_done"></i>
                  <span className="text-light">Vaqt jadvali</span>
                </li>
                <li className="d-flex justify-content-start align-items-center">
                  <i class="bi bi-check icon_done"></i>
                  <span className="text-light">Asosiy qidiruv</span>
                </li>
                <li className="d-flex justify-content-start align-items-center">
                  <i class="bi bi-check icon_done"></i>
                  <span className="text-light">Jonli suhbat vidjeti</span>
                </li>
                <li className="d-flex justify-content-start align-items-center">
                  <i class="bi bi-check icon_done"></i>
                  <span className="text-light">Elektron pochta marketingi</span>
                </li>
                <li className="d-flex justify-content-start align-items-center">
                  <i class="bi bi-check icon_done"></i>
                  <span className="text-light">Maxsus shakllar</span>
                </li>
                <li className="d-flex justify-content-start align-items-center">
                  <i class="bi bi-check icon_done"></i>
                  <span className="text-light">Trafik tahlili</span>
                </li>
                <li className="d-flex justify-content-start align-items-center">
                  <i class="bi bi-check icon_done"></i>
                  <span className="text-light">Asosiy qo'llab-quvvatlash</span>
                </li>
              </ul>

              <Link to="/pricepage"><button className="btn btn-outline-warning w-100 button_price my-3">Sotib olish</button></Link>
            </div>
          </div>

          <div className="col-12 col-md-4 my-5 my-md-0">
            <div className="card card_price p-4">
              <h4 className="text-center text-light mt-4">Asosiy</h4>
              <p className="text-center text-light">
                Hamma uchun oddiy boshlanish
              </p>
              <h1 className="text-warning_h1 text-center">
                1.3
                <sub>
                  <span className="span_text">mln</span>
                </sub>
                <span className="span_text span_text__bottom">/oy</span>
              </h1>
              <ul className="ul_list__price">
                <li className="d-flex justify-content-start align-items-center">
                  <i class="bi bi-check icon_done"></i>
                  <span className="text-light">Vaqt jadvali</span>
                </li>
                <li className="d-flex justify-content-start align-items-center">
                  <i class="bi bi-check icon_done"></i>
                  <span className="text-light">Asosiy qidiruv</span>
                </li>
                <li className="d-flex justify-content-start align-items-center">
                  <i class="bi bi-check icon_done"></i>
                  <span className="text-light">Jonli suhbat vidjeti</span>
                </li>
                <li className="d-flex justify-content-start align-items-center">
                  <i class="bi bi-check icon_done"></i>
                  <span className="text-light">Elektron pochta marketingi</span>
                </li>
                <li className="d-flex justify-content-start align-items-center">
                  <i class="bi bi-check icon_done"></i>
                  <span className="text-light">Maxsus shakllar</span>
                </li>
                <li className="d-flex justify-content-start align-items-center">
                  <i class="bi bi-check icon_done"></i>
                  <span className="text-light">Trafik tahlili</span>
                </li>
                <li className="d-flex justify-content-start align-items-center">
                  <i class="bi bi-check icon_done"></i>
                  <span className="text-light">Asosiy qo'llab-quvvatlash</span>
                </li>
              </ul>

              <Link to="/pricepage"><button className="btn btn-outline-warning w-100 button_price my-3">Sotib olish</button></Link>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="card card_price p-4">
              <h4 className="text-center text-light mt-4">Asosiy</h4>
              <p className="text-center text-light">
                Hamma uchun oddiy boshlanish
              </p>
              <h1 className="text-warning_h1 text-center">
                1.3
                <sub>
                  <span className="span_text">mln</span>
                </sub>
                <span className="span_text span_text__bottom">/oy</span>
              </h1>
              <ul className="ul_list__price">
                <li className="d-flex justify-content-start align-items-center">
                  <i class="bi bi-check icon_done"></i>
                  <span className="text-light">Vaqt jadvali</span>
                </li>
                <li className="d-flex justify-content-start align-items-center">
                  <i class="bi bi-check icon_done"></i>
                  <span className="text-light">Asosiy qidiruv</span>
                </li>
                <li className="d-flex justify-content-start align-items-center">
                  <i class="bi bi-check icon_done"></i>
                  <span className="text-light">Jonli suhbat vidjeti</span>
                </li>
                <li className="d-flex justify-content-start align-items-center">
                  <i class="bi bi-check icon_done"></i>
                  <span className="text-light">Elektron pochta marketingi</span>
                </li>
                <li className="d-flex justify-content-start align-items-center">
                  <i class="bi bi-check icon_done"></i>
                  <span className="text-light">Maxsus shakllar</span>
                </li>
                <li className="d-flex justify-content-start align-items-center">
                  <i class="bi bi-check icon_done"></i>
                  <span className="text-light">Trafik tahlili</span>
                </li>
                <li className="d-flex justify-content-start align-items-center">
                  <i class="bi bi-check icon_done"></i>
                  <span className="text-light">Asosiy qo'llab-quvvatlash</span>
                </li>
              </ul>

              <Link to="/pricepage"><button className="btn btn-outline-warning w-100 button_price my-3">Sotib olish</button></Link>
            </div>
          </div>
        </div>
      </div>

      <FooterHomeOne className={darkMode ? "appie-footer-area-dark" : ""} />
      <BackToTop />
    </div>
  );
}

export default Prices;
