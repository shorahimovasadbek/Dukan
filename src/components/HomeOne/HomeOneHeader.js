import React, { useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router-dom/cjs/react-router-dom";
import logodark from "../../assets/newImages/logo/dukan-inverse.png";
import StickyMenu from "../../lib/StickyMenu";
import Navigation from "../Navigation";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useTranslation } from "react-i18next";
import Uz from "../../assets/newImages/uzbekistan-flag.jpg";
import Ru from "../../assets/newImages/Flag_of_Russia.png";

function HomeOneHeader({ darkEnable = false, action, dark, className, color }) {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState(localStorage.getItem("lang"));
  const history = useHistory()
  useEffect(() => {
    StickyMenu();
    setLang(localStorage.getItem("lang"));
  }, []);
  const location = useLocation();
  const isBlogs =
    location.pathname == "/blogs" || location.pathname.split("/")[2] == "blog";

  function ChangeLang(params) {
    setLang(params);
    localStorage.setItem("lang", params);
    i18n.changeLanguage(params);
    const newUrl = window.location.pathname.replace(`/${lang}`, `/${params}`);
    history.push(newUrl);
    window.location.reload()
  }

  return (
    <header
      className={`appie-header-area ${
        isBlogs ? "appie-header-page-area" : ""
      } appie-sticky ${className || ""}`}
    >
      <div className="container">
        <div className="header-nav-box">
          <div className="row align-items-center">
            <div className="col-lg-2 col-md-4 col-sm-5 col-6 order-1 order-sm-1">
              <div className="appie-logo-box">
                {darkEnable && dark ? (
                  <a href="/">
                    <img src={logodark} alt="" />
                  </a>
                ) : (
                  <a href="/">
                    <img src={logodark} alt="" />
                  </a>
                )}
              </div>
            </div>
            <div className="col-lg-6 col-md-1 col-sm-1 order-3 order-sm-2 links-header">
              <div
                className={`appie-header-main-menu ${
                  isBlogs ? "not-home" : ""
                }`}
              >
                <Navigation />
              </div>
            </div>
            <div className="col-lg-4  col-md-7 col-sm-6 col-6 order-2 order-sm-3 d-flex justify-content-end align-items-center">
              <div className="appie-btn-box text-right">
                <div className="d-flex align-items-center">
                  <a
                    href="tel:+998555131110"
                    className="header-num text-nowrap"
                  >
                    <i className="fal fa-phone" /> +998 55 513 11 10
                  </a>
                  <a className={`main-btn ml-30`} href="/#contact_">
                    {t("order")}
                  </a>
                </div>
                <div
                  onClick={(e) => action(e)}
                  className={`toggle-btn ml-30 canvas_open d-lg-none d-block ${
                    isBlogs || dark ? "dark" : ""
                  }`}
                >
                  <i
                    className={`fa fa-bars ${isBlogs ? "dark-hamburger" : ""}`}
                  />
                </div>
              </div>
              <DropdownButton
                id={color ? "black" : "dropdown-basic-button"}
                title={
                  lang ? (
                    <span>
                      <img className="img_flag" src={lang == "uz" ? Uz : Ru} /> {lang == 'uz' ? "Uz" : "Ru"}
                    </span>
                  ) : (
                    <span>
                      <img className="img_flag" src={Uz} /> Uz
                    </span>
                  )
                }
                className="d-none d-md-block"
              >
                <Dropdown.Item onClick={() => ChangeLang("uz")}>
                  <img className="img_flag" src={Uz} /> Uz
                </Dropdown.Item>
                <Dropdown.Item onClick={() => ChangeLang("ru")}>
                  <img className="img_flag" src={Ru} /> Ru
                </Dropdown.Item>
                {/* <Dropdown.Item href="#/action-3" onClick={() => ChangeLang("🇬🇧 En")}>🇬🇧 En</Dropdown.Item> */}
              </DropdownButton>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HomeOneHeader;
