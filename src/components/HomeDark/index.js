import React, { useEffect } from "react";
import useToggle from "../../Hooks/useToggle";
import BackToTop from "../BackToTop";
import AboutUs from "../HomeOne/NowStart";
import BlogHomeOne from "../HomeOne/BlogHomeOne";
import FaqHomeOne from "../HomeOne/FaqHomeOne";
import FeaturesHomeOne from "../HomeOne/FeaturesHomeOne";
import FooterHomeOne from "../HomeOne/FooterHomeOne";
import HeroHomeOne from "../HomeOne/HeroHomeOne";
import HomeOneHeader from "../HomeOne/HomeOneHeader";
import PricingHomeOne from "../HomeOne/PricingHomeOne";
import ProjectHomeOne from "../HomeOne/ProjectHomeOne";
import ServicesHomeOne from "../HomeOne/ServicesHomeOne";
import TeamHomeOne from "../HomeOne/TeamHomeOne";
import TestimonialHomeOne from "../HomeOne/TestimonialHomeOne";
import TrafficHomeOne from "../HomeOne/TrafficHomeOne";
import Drawer from "../Mobile/Drawer";

function HomeDark() {
  const [drawer, drawerAction] = useToggle(false);
  const [darkMode, setDarkMode] = useToggle(true);

  const CURRENT_VERSION = "2.0.2"; 
  const clearOldLocalStorage = () => {
    const savedVersion = localStorage.getItem("site_version");

    if (savedVersion !== CURRENT_VERSION) {
      localStorage.removeItem("themeId");
      localStorage.removeItem("themeIdChild");
      localStorage.removeItem("TariffIdPrices");
      localStorage.setItem("site_version", CURRENT_VERSION);
    }
  };

  clearOldLocalStorage();

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
      <HeroHomeOne className={darkMode ? "appie-hero-area-dark" : ""} />
      <FeaturesHomeOne className={darkMode ? "appie-features-area-dark" : ""} />
      <ServicesHomeOne className={darkMode ? "appie-service-area-dark" : ""} />
      <AboutUs dark={darkMode} />
      <TrafficHomeOne className={darkMode ? "appie-traffic-area-dark" : ""} />
      {/* <Industries dark={darkMode} className={darkMode ? "appie-team-area-dark" : ""} /> */}
      {/* <TestimonialHomeOne /> */}
      {/* <TeamHomeOne dark={darkMode} className={darkMode ? 'appie-team-area-dark' : ''} /> */}
      <PricingHomeOne className={darkMode ? "appie-pricing-area-dark" : ""} />
      <FaqHomeOne
        dark={darkMode}
        className={darkMode ? "appie-faq-area-dark" : ""}
      />
      {/* <BlogHomeOne dark={darkMode} className={darkMode ? 'appie-blog-area-dark' : ''} /> */}
      <ProjectHomeOne />
      {/* <Contact dark={darkMode} /> */}
      <FooterHomeOne className={darkMode ? "appie-footer-area-dark" : ""} />
      <BackToTop />
    </>
  );
}

export default HomeDark;
