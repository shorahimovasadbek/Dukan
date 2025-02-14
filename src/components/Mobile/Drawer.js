import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation, useHistory } from "react-router-dom/cjs/react-router-dom";
import logo from "../../assets/newImages/logo/dukan-inverse.png";
import { useTranslation } from "react-i18next";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Uz from "../../assets/newImages/uzbekistan-flag.jpg";
import Ru from "../../assets/newImages/Flag_of_Russia.png";

function Drawer({ drawer, action }) {
  const [lang, setLang] = useState(localStorage.getItem("lang") || "uz");
  const { t, i18n } = useTranslation();
  const history = useHistory()
  const location = useLocation();
  const isHome = location.pathname == "/";
  const [itemSize, setSize] = useState("0px");
  const [item, setItem] = useState("home");
  const handler = (e, value) => {
    // e.preventDefault();
    const getItems = document.querySelectorAll(`#${value} li`).length;
    if (getItems > 0) {
      setSize(`${43 * getItems}px`);
      setItem(value);
    }
  };

  useEffect(() => {
    const handleStorageChange = () => {
      setLang(localStorage.getItem("lang"));
    };

    window.addEventListener("click", handleStorageChange);
  }, [lang]);

  function ChangeLang(params) {
    setLang(params);
    localStorage.setItem("lang", params);
    i18n.changeLanguage(params);
    const newUrl = window.location.pathname.replace(`/${lang}`, `/${params}`);
    history.push(newUrl);
    window.location.reload()
  }

  return (
    <>
      <>
        <div
          onClick={(e) => action(e)}
          className={`off_canvars_overlay ${drawer ? "active" : ""}`}
        ></div>
        <div className="offcanvas_menu">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div
                  className={`offcanvas_menu_wrapper ${drawer ? "active" : ""}`}
                >
                  <div className="canvas_close">
                    <a href="#" onClick={(e) => action(e)}>
                      <i className="fa fa-times"></i>
                    </a>
                  </div>
                  <div className="offcanvas-brand text-center mb-40">
                    <img src={logo} alt="" />
                  </div>
                  <div id="menu" className="text-left ">
                    <ul className="offcanvas_main_menu">
                      <li
                        onClick={(e) => handler(e, "news")}
                        id="news"
                        className="menu-item-has-children active"
                      >
                        <a href={`${isHome ? "#industries" : "/#industries"}`}>
                          {t("industry")}
                        </a>
                      </li>
                      <li
                        onClick={(e) => handler(e, "news")}
                        id="news"
                        className="menu-item-has-children active"
                      >
                        <a href={`${isHome ? "#pricing" : "/#pricing"}`}>
                          {t("prices")}
                        </a>
                      </li>
                      <li
                        onClick={(e) => handler(e, "pages")}
                        id="pages"
                        className="menu-item-has-children active"
                      >
                        <a href={`${isHome ? "/blogs" : "/blogs"}`}>
                          {t("blog")}
                        </a>
                      </li>
                      <li
                        onClick={(e) => handler(e, "contact")}
                        id="contact"
                        className="menu-item-has-children active"
                      >
                        <a href={`${isHome ? "#contact_" : "/#contact_"}`}>
                          {t("contact")}
                        </a>
                      </li>
                      <li
                        onClick={(e) => handler(e, "contact")}
                        id="contact"
                        className="menu-item-has-children active"
                      >
                        <DropdownButton
                          id={"dropdown-basic-button"}
                          title={
                            lang ? (
                              <span>
                                <img
                                  className="img_flag me-1"
                                  src={lang == "uz" ? Uz : Ru}
                                />
                                {lang == "uz" ? "Uz" : "Ru"}
                              </span>
                            ) : (
                              <span>
                                <img className="img_flag" src={Uz} /> Uz
                              </span>
                            )
                          }
                        >
                          <Dropdown.Item onClick={() => ChangeLang("uz")}>
                            <img className="img_flag" src={Uz} /> Uz
                          </Dropdown.Item>
                          <Dropdown.Item onClick={() => ChangeLang("ru")}>
                            <img className="img_flag" src={Ru} /> Ru
                          </Dropdown.Item>
                          {/* <Dropdown.Item href="#/action-3" onClick={() => ChangeLang("🇬🇧 En")}>🇬🇧 En</Dropdown.Item> */}
                        </DropdownButton>
                      </li>
                    </ul>
                  </div>
                  <div className="offcanvas-social">
                    <ul className="text-center">
                      <li>
                        <a href="https://t.me/dukan_platform" target="blank_">
                          <i className="fa-brands fa-telegram"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.instagram.com/dukan_platform/"
                          target="blank_"
                        >
                          <i className="fab fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.facebook.com/dukan.platform"
                          target="blank_"
                        >
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.youtube.com/@al-raqam"
                          target="blank_"
                        >
                          <i className="fab fa-youtube"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.linkedin.com/showcase/dukan-platform/"
                          target="blank_"
                        >
                          <i className="fa-brands fa-linkedin"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="footer-widget-info footer_mobiel__section">
                    <ul>
                      <li>
                        <a href="mailto:alraqam@al-raqam.com">
                          <i className="fal fa-envelope pe-1"></i>
                          info@al-raqam.com
                        </a>
                      </li>
                      <li>
                        <a href="tel:+998555131110">
                          <i className="fal fa-phone pe-1"></i> +998 55 513 11
                          10
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://yandex.com/maps/org/al_raqam_hub/28472095891/?ll=69.284839%2C41.355372&z=17"
                          target="_blank"
                        >
                          <i className="fal fa-map-marker-alt pe-1"></i>
                          {t("location")}
                        </a>
                      </li>
                      <li>
                        <a href="https://al-raqam.com/">
                          <i className="fa-solid fa-laptop pe-1" />
                          {t("by_companiya")}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
}

export default Drawer;
