import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";
import HomeOneHeader from "../HomeOne/HomeOneHeader";
import Drawer from "../Mobile/Drawer";
import useToggle from "../../Hooks/useToggle";
import FooterHomeOne from "../HomeOne/FooterHomeOne";
import BackToTop from "../BackToTop";
import "./style.css";
import { Button } from "react-bootstrap";

function Prices() {
  const [drawer, drawerAction] = useToggle(false);
  const [darkMode, setDarkMode] = useToggle(true);

  const [themeId, setThemeId] = useState(
    localStorage.getItem("ThemeIdAnother")
  );
  const [tariffId, setTariffId] = useState(
    localStorage.getItem("TariffIdPrices")
  );

  useEffect(() => {
    document.body.classList.add("appie-init");
    if (darkMode) {
      document.body.classList.add("appie-dark");
    } else {
      document.body.classList.remove("appie-dark");
    }
    setThemeId(localStorage.getItem("ThemeIdAnother"));
    setTariffId(localStorage.getItem("TariffIdPrices"));
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
          Arizangiz muvaffaqiyatli qabul qilindi!!!
        </h1>
        <div className="text-center mt-5">
          <Link to={themeId ? `/pricepage/${tariffId}` : "/"}>
            <Button variant="warning">
              {themeId ? "Sahifaga qaytish" : "Xaridni davom ettiring"}
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
