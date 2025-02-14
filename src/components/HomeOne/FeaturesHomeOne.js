import React, { useState, useEffect } from "react";
import shapeSix from "../../assets/images/shape/shape-6.png";
import shapeSeven from "../../assets/images/shape/shape-7.png";
import shapeEight from "../../assets/images/shape/shape-8.png";
import frame from "../../assets/newImages/frameiphone.png";
import elektronika from "../../assets/newImages/industries/soha-elektronika.png";
import oshxonaidish from "../../assets/newImages/industries/soha-idishtovoq.png";
import kiyim from "../../assets/newImages/industries/soha-kiyim.png";
import konstovar from "../../assets/newImages/industries/soha-konstovar.png";
import kosmetika from "../../assets/newImages/industries/soha-kosmetika.png";
import mebel from "../../assets/newImages/industries/soha-mebel.png";
import oziqovqat from "../../assets/newImages/industries/soha-ovqat.png";
import oyinchoqlar from "../../assets/newImages/industries/soha-oyinchoq.png";
import maishiytex from "../../assets/newImages/industries/soha-texnika.png";
import qurilish from "../../assets/newImages/industries/soha-xozmagazin.png";
import { useTranslation } from "react-i18next";

function FeaturesHomeOne({ className }) {
  const {t, i18n} = useTranslation()
  const data = [
    {
      id: 1,
      icon: "fa-solid fa-chair",
      name: t("mebel"),
      img: mebel,
      title: "",
      text: "",
    },
    {
      id: 2,
      icon: "fa-solid fa-pencil",
      name: t("konstovar"),
      img: konstovar,
      title: "",
      text: "",
    },
    {
      id: 3,
      icon: "fa-solid fa-plug",
      name: t("elektronika"),
      img: elektronika,
      title: "",
      text: "",
    },
    {
      id: 4,
      icon: "fa-solid fa-spray-can-sparkles",
      name: t("kosmetika"),
      img: kosmetika,
      title: "",
      text: "",
    },
    {
      id: 5,
      icon: "fa-solid fa-tv",
      name: t("maishiytex"),
      img: maishiytex,
      title: "",
      text: "",
    },
    {
      id: 6,
      icon: "fa-solid fa-shirt",
      name: t("kiyim"),
      img: kiyim,
      title: "",
      text: "",
    },
    {
      id: 7,
      icon: "fa-solid fa-car",
      name: t("oyinchoqlar"),
      img: oyinchoqlar,
      title: "",
      text: "",
    },
    {
      id: 8,
      icon: "fa-solid fa-hammer",
      name: t("qurilish"),
      img: qurilish,
      title: "",
      text: "",
    },
    {
      id: 9,
      icon: "fa-solid fa-kitchen-set",
      name: t("oshxona"),
      img: oshxonaidish,
      title: "",
      text: "",
    },
    {
      id: 10,
      icon: "fa-solid fa-bowl-food",
      name: t("ovqat"),
      img: oziqovqat,
      title: "",
      text: "",
    },
  ];
  const [tab, setTab] = useState(data[0]?.name || "");
  useEffect(() => {
    if (data.length > 0) {
      setTab(data[0].name);
    }
  }, [i18n.language]);

  const handleClick = (e, value) => {
    e.preventDefault();
    setTab(value);
  };


  return (
    <section
      className={`appie-features-area pb-100 pt-100 ${className}`}
      id="industries"
    >
      <div className="container">
        <p className="text-light text_info fs-1 lh-sm">
         {t("header_center")}
        </p>
        <div className="row align-items-center">
          <div className="col-lg-4 indus_scroller">
            <div className="appie-features-tabs-btn">
              <div
                className="nav flex-column nav-pills"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
              >
                {data.map((item, index) => {
                  return (
                    <a
                      onClick={(e) => handleClick(e, `${item.name}`)}
                      className={`nav-link ${
                        tab === `${item.name}` ? "active" : ""
                      }`}
                      id="v-pills-home-tab"
                      data-toggle="pill"
                      href="#v-pills-home"
                      role="tab"
                      aria-controls="v-pills-home"
                      aria-selected="true"
                      key={item.id}
                    >
                      <i className={`${item.icon}`} /> <p>{item.name}</p>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="tab-content" id="v-pills-tabContent">
              {data.map((item, index) => {
                return (
                  <div
                    className={`${
                      tab === `${item.name}` ? "show active" : ""
                    } tab-pane fade`}
                    id="v-pills-profile"
                    role="tabpanel"
                    aria-labelledby="v-pills-profile-tab"
                    key={item.id}
                  >
                    <div className="row align-items-center">
                      <div className="col-lg-6 indus_img-holder">
                        <div
                          className="appie-features-thumb text-center animated fadeInUp indus_img"
                          data-wow-duration="2000ms"
                          data-wow-delay="200ms"
                        >
                          <img
                            src={item.img}
                            loading="lazy"
                            alt=""
                            className={`main-img lazy-load-img`}
                          />
                          <img src={frame} alt="" className="absolute-frame" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div
                          className="appie-features-content animated fadeInRight"
                          data-wow-duration="2000ms"
                          data-wow-delay="600ms"
                        >
                          <span>DUKAN Platform</span>
                          <h3 className="title">
                            {item.name} {t("biznestitle")}
                          </h3>
                          <p>
                            {item.name} {t("biznestitlebottom")}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="features-shape-1">
        <img src={shapeSix} alt="" />
      </div>
      <div className="features-shape-2">
        <img src={shapeSeven} alt="" />
      </div>
      <div className="features-shape-3">
        <img src={shapeEight} alt="" />
      </div>
    </section>
  );
}

export default FeaturesHomeOne;
