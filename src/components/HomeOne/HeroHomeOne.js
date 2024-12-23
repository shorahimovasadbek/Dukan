import React from "react";
import shapeTwo from "../../assets/images/shape/shape-2.png";
import shapeThree from "../../assets/images/shape/shape-3.png";
import shapeFour from "../../assets/images/shape/shape-4.png";
import heroThumbTwo from "../../assets/newImages/card1.png";
import heroThumbOne from "../../assets/newImages/heromockup1.png";

function HeroHomeOne({ className }) {
  return (
    <>
      <section className={`appie-hero-area ${className || ""}`}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="appie-hero-content">
                <span>DUKAN Platform</span>
                <h1 className="appie-title">
                  Bir necha qadamlar bilan o'z online do'koningizga ega bo'ling!
                </h1>
                <p>
                  Internet do'konga ega bo'lib, online savdolaringizni oshirish
                  vaqti keldi!
                </p>
                <div className="home_hero-links">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fab fa-apple" /> App store
                      </a>
                    </li>
                    <li>
                      <a
                        className="item-2"
                        target="_blank"
                        href="https://play.google.com/store/apps/details?id=com.alraqam.dukan"
                      >
                        <i className="fab fa-google-play" /> Play market
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="appie-hero-thumb">
                <div
                  className="thumb wow animated fadeInUp"
                  data-wow-duration="2000ms"
                  data-wow-delay="200ms"
                >
                  <img src={heroThumbOne} alt="" className="mockup1" />
                </div>
                <div
                  className="thumb-2 wow animated fadeInRight"
                  data-wow-duration="2000ms"
                  data-wow-delay="600ms"
                >
                  <img src={heroThumbTwo} alt="" className="mockup2" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-shape-1">
          <img src={shapeTwo} alt="" />
        </div>
        <div className="hero-shape-2">
          <img src={shapeThree} alt="" />
        </div>
        <div className="hero-shape-3">
          <img src={shapeFour} alt="" />
        </div>
      </section>
    </>
  );
}

export default HeroHomeOne;
