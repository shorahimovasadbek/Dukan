import React, { useState } from "react";
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

function FeaturesHomeOne({ className }) {
  const [tab, setTab] = useState("Mebel");
  const handleClick = (e, value) => {
    e.preventDefault();
    setTab(value);
  };
  const data = [
    {
      id: 1,
      icon: "fa-solid fa-chair",
      name: "Mebel",
      img: mebel,
      title: "",
      text: "",
    },
    {
      id: 2,
      icon: "fa-solid fa-pencil",
      name: "Konstovar",
      img: konstovar,
      title: "",
      text: "",
    },
    {
      id: 3,
      icon: "fa-solid fa-plug",
      name: "Elektronika",
      img: elektronika,
      title: "",
      text: "",
    },
    {
      id: 4,
      icon: "fa-solid fa-spray-can-sparkles",
      name: "Parfume/Kosmetika",
      img: kosmetika,
      title: "",
      text: "",
    },
    {
      id: 5,
      icon: "fa-solid fa-tv",
      name: "Maishiy texnika",
      img: maishiytex,
      title: "",
      text: "",
    },
    {
      id: 6,
      icon: "fa-solid fa-shirt",
      name: "Kiyim/Butik",
      img: kiyim,
      title: "",
      text: "",
    },
    {
      id: 7,
      icon: "fa-solid fa-car",
      name: "O'yinchoqlar",
      img: oyinchoqlar,
      title: "",
      text: "",
    },
    {
      id: 8,
      icon: "fa-solid fa-hammer",
      name: "Qurilish materiallari",
      img: qurilish,
      title: "",
      text: "",
    },
    {
      id: 9,
      icon: "fa-solid fa-kitchen-set",
      name: "Oshxona Idishlari",
      img: oshxonaidish,
      title: "",
      text: "",
    },
    {
      id: 10,
      icon: "fa-solid fa-bowl-food",
      name: "Oziq-ovqat",
      img: oziqovqat,
      title: "",
      text: "",
    },
  ];
  return (
    <section
      className={`appie-features-area pb-100 pt-100 ${className}`}
      id="industries"
    >
      <div className="container">
        <p className="text-light text_info fs-1 lh-sm">
          Dukan bu - biznesingiz uchun internet do'kon! <br/> Mijozlar siz uxlab
          yotganda ham sizdan sotib olishi mumkin!
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
                {data.map((item) => {
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
                            {item.name} biznesingiz uchun veb-platforma sotib
                            olish (2024)
                          </h3>
                          <p>
                            {/* {item.text} */}
                            2024 yilda biz tarmoqda mavjudligimiz va mijozlar
                            tajribasini yaxshilash uchun veb-platforma.
                          </p>
                          {/* <a className="main-btn" href="#">
                                                        Learn More
                                                    </a> */}
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
