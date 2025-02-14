import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";
import HomeOneHeader from "../HomeOne/HomeOneHeader";
import Drawer from "../Mobile/Drawer";
import useToggle from "../../Hooks/useToggle";
import FooterHomeOne from "../HomeOne/FooterHomeOne";
import BackToTop from "../BackToTop";
import "./style.css";
import { Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";

function Prices() {
  const {t} = useTranslation()
  const [drawer, drawerAction] = useToggle(false);
  const [darkMode, setDarkMode] = useToggle(true);

  const [themeId, setThemeId] = useState(
    localStorage.getItem("themeIdChild")
  );

  useEffect(() => {
    setThemeId(localStorage.getItem("themeIdChild"));
    document.body.classList.add("appie-init");
    if (darkMode) {
      document.body.classList.add("appie-dark");
    } else {
      document.body.classList.remove("appie-dark");
    }
    return () => {
      document.body.classList.remove("appie-dark");
    };
  }, []);

  return (
    <div className="bg-price">
      <Drawer drawer={drawer} action={drawerAction.toggle} />
      <HomeOneHeader
        className={darkMode ? "appie-header-area-dark back_header" : ""}
        dark={darkMode}
        darkEnable
        changeMode={setDarkMode.toggle}
        action={drawerAction.toggle}
      />

      <div className="container tahnksPage">
        <h1 className="tahnksPage_child">
          {t("thanks")}
        </h1>
        <div className="text-center mt-5">
          <Link to={themeId ? `/pricepage/${themeId}` : "/"}>
            <Button variant="warning">
              {themeId ? t("back_to_page") : t("purchase")}
              <i className="bi bi-arrow-right"></i>
            </Button>
          </Link>
        </div>
      </div>

      <FooterHomeOne className={darkMode ? "appie-footer-area-dark" : ""} />
      <BackToTop />
    </div>
  );
}

export default Prices;
