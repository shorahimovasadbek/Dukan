import React, { useEffect } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";
import HomeOneHeader from "../HomeOne/HomeOneHeader";
import Drawer from "../Mobile/Drawer";
import useToggle from "../../Hooks/useToggle";
import FooterHomeOne from "../HomeOne/FooterHomeOne";
import BackToTop from "../BackToTop";
import img5 from "../../assets/newImages/product.png";
import uzcard from "../../assets/newImages/uzcard.png";
import payme from "../../assets/newImages/payme.png";
import paynet from "../../assets/newImages/paynet.png";
import click from "../../assets/newImages/click.png";
import visa from "../../assets/newImages/visa.png";
import Steeper from "../Steeper";
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
      <Steeper number={3}/>
        <h5 className="text-light mb-2">Cosmetics Landing Page Divi Layout</h5>
        <h6 className="text-light_h6 mb-4">
          World-class designs with original photos and graphics available for
          free to all Divi customers
        </h6>
        <div className="card bg_1212__end p-4">
          <div className="row">
            <div className="col-12 col-md-8">
              <h5 className="text-light mb-4">To'lov usullari</h5>
              <div className="row gap-3 ps-3">
                <div className="col-12 col-md-5 border_card p-3" onClick={() => document.getElementById('uzcard').click()}>
                  <input name="payment" type="radio" id="uzcard" />
                  <img src={uzcard} className="mx-3" />
                  <label for="uzcard" className="text-light"> Uzcard/Humo</label>
                </div>
                <div className="col-12 col-md-5 border_card p-3" onClick={() => document.getElementById('payme').click()}>
                  <input name="payment" type="radio" id="payme" />
                  <img src={payme} className="mx-3" />
                  <label for="payme" className="text-light"> Payme</label>
                </div>
                <div className="col-12 col-md-5 border_card p-3" onClick={() => document.getElementById('paynet').click()}>
                  <input name="payment" type="radio" id="paynet" />
                  <img src={paynet} className="mx-3" />
                  <label for="paynet" className="text-light"> Paynet</label>
                </div>
                <div className="col-12 col-md-5 border_card p-3" onClick={() => document.getElementById('click').click()}>
                  <input name="payment" type="radio" id="click" />
                  <img src={click} className="mx-3" />
                  <label for="click" className="text-light"> Click</label>
                </div>
                <div className="col-12 col-md-5 border_card p-3" onClick={() => document.getElementById('visa').click()}>
                  <input name="payment" type="radio" id="visa" />
                  <img src={visa} className="mx-3" />
                  <label for="visa" className="text-light"> Visa</label>
                </div>
              </div>
              <h5 className="text-light my-3">Karta ma'lumotlari</h5>
              <div className="row">
                <div className="col-12">
                  <label className="text-light">Karta raqami</label>
                  <input className="form-control bg-transparent text-white input_card__number" type="number" placeholder="1111 2222 3333 4444"/>
                </div>
                <div className="col-12 col-md-3 mt-3">
                  <label className="text-light">Amal qilish muddati</label>
                  <input className="form-control bg-transparent text-white input_card__number" type="number" placeholder="MM/YY"/>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4 mt-5 mt-md-0">
              <h5 className="text-light">Mahsulot</h5>
              <div className="d-flex justify-content-between my-4">
                <img src={img5} />
                <div className="ms-3">
                  <h5 className="text-light_h6">
                    Cosmetics Landing Page Divi Layout
                  </h5>
                  <p className="text-light_h6">By pixelaxis</p>
                </div>
              </div>
              <h5 className="text-light mb-3">Narxi</h5>
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
              <button className="btn w-100 button_price my-3">
                <Link to="/">
                  Sotib olish <i class="bi bi-arrow-right"></i>
                </Link>
              </button>

              <p className="text-light_h6 my-3">
                Davom etish orqali siz Xizmat shartlari va Maxfiylik
                siyosatimizga rozilik bildirasiz. E'tibor bering, to'lovlar
                qaytarilmaydi.
              </p>
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
