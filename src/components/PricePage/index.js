import React, { useEffect } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";
import HomeOneHeader from "../HomeOne/HomeOneHeader";
import Drawer from "../Mobile/Drawer";
import useToggle from "../../Hooks/useToggle";
import FooterHomeOne from "../HomeOne/FooterHomeOne";
import BackToTop from "../BackToTop";
import modalImg from "../../assets/newImages/modalimg.png";
import "./style.css";
import img1 from "../../assets/newImages/img1.png";
import img2 from "../../assets/newImages/img2.png";
import img3 from "../../assets/newImages/img3.png";
import img4 from '../../assets/newImages/Avatar.png'
import Steeper from "../Steeper";

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
      <Steeper number={3}/>
        <h5 className="text-light mb-2">Cosmetics Landing Page Divi Layout</h5>
        <h6 className="text-light_h6 mb-4">
          World-class designs with original photos and graphics available for
          free to all Divi customers
        </h6>
        <div className="row">
          <div className="col-12 col-md-8">
            <div
              className="modalImg"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            >
              <img src={modalImg} />
            </div>

            <div
              class="modal fade"
              id="staticBackdrop"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabindex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-dialog-scrollable modal-xl">
                <div class="modal-content">
                  <button
                    type="button"
                    class="btn-close custom-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                  <div class="modal-body">
                    <div id="carouselExample" class="carousel slide">
                      <div class="carousel-inner">
                        <div class="carousel-item active">
                          <img src={img1} alt="..." />
                        </div>
                        <div class="carousel-item">
                          <img src={img2} alt="..." />
                        </div>
                        <div class="carousel-item">
                          <img src={img3} alt="..." />
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExample"
                    data-bs-slide="prev"
                  >
                    <span
                      class="carousel-control-prev-icon custom_prev"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExample"
                    data-bs-slide="next"
                  >
                    <span
                      class="carousel-control-next-icon custom_next"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 mt-5 mt-md-0">
            <div className="card p-4 pt-5 card_price_content">
              <h1 className="text-center text-light mb-4">$56.77</h1>
              <div className="d-flex justify-content-between align-items-center text_body_content">
                <p>Obuna</p>
                <p>$85.99</p>
              </div>
              <div className="d-flex justify-content-between align-items-center text_body_content">
                <p>Soliq</p>
                <p>$4.99</p>
              </div>
              <hr className="bg-light" />
              <div className="d-flex justify-content-between align-items-center text_body_content">
                <p>Jami</p>
                <p>$90.98</p>
              </div>
              <Link to="/pricepageend">
                <button className="btn btn-outline-warning w-100 button_price my-3">
                  Sotib olish <i class="bi bi-arrow-right"></i>
                </button>
              </Link>
            </div>
          </div>

          <div className="col-12 col-md-8 mt-5">
            <h5 className="text-light mb-2">Loyiha haqida</h5>
            <p className="text-light_h6">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
            <hr className="bg-light" />

            <h5 className="text-light my-2">Mahsulot xususiyatlari</h5>
            <p className="text-light_h6">Yaratilgan: 2023 yil 04-may</p>
            <p className="text-light_h6">
              Quyidagilar bilan mos keladi: Adobe InDesign, Boshqa
            </p>
            <p className="text-light_h6">Fayl hajmi: 44,58 MB</p>
            <p className="text-light_h6">
              Vektor Olchamlari: 1080 x 1350 piksel
            </p>
            <p className="text-light_h6">DPI: 300 Qatlamli</p>
            <hr className="bg-light" />

            <h5 className="text-light my-2">Tavsif</h5>
            <p className="text-light_h6">
              Ushbu kursning materiallari HTML5 va CSS3 bilan veb-dizayn va
              ishlab chiqish bo'yicha boshqa kursimda ham yoritilgan. Ushbu
              kursni ham tekshirish uchun ushbu sahifaning pastki qismiga
              o'ting! Agar siz mening boshqa kursimni olayotgan bo'lsangiz,
              bugungi kunda chiroyli veb-saytlarni loyihalashni boshlash uchun
              sizga kerak bo'lgan hamma narsa bor!
            </p>
            <p className="text-light_h6 my-3">
              "Eng yaxshi veb-dizayn kursi: Agar siz veb-dizaynga qiziqsangiz,
              lekin shunchaki "WordPressdan qanday foydalanish" kursidan ko'proq
              narsani istasangiz, men buni tavsiya qilaman." - Florian Giusti
            </p>
            <p className="text-light_h6">
              "Biz chap miyali odamlar uchun juda foydali: men HTML, CSS, JQuery
              va Twitter Bootstrap bilan yaxshi tanishman, lekin menga
              veb-dizayn bo'yicha ko'rsatmalar kerak edi. Bu kurs menga
              veb-saytlarni yanada chiroyli va qiziqarli qilish uchun amaliy,
              ta'sirli usullarni berdi." - Syuzan Darlen{" "}
            </p>
            <hr className="bg-light" />

            <h5 className="text-light my-3">Instruktor</h5>
            <div className="d-flex align-items-center">
                <img src={img4}/>
                <div className="ms-3">
                    <h6 className="text-light">Devonne Wallbridge</h6>
                    <p className="text-light_h6">Veb dasturchi, dizayner va o'qituvchi</p>
                </div>
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
