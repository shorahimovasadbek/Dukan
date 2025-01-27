import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";
import HomeOneHeader from "../HomeOne/HomeOneHeader";
import Drawer from "../Mobile/Drawer";
import useToggle from "../../Hooks/useToggle";
import FooterHomeOne from "../HomeOne/FooterHomeOne";
import BackToTop from "../BackToTop";
import img5 from "../../assets/newImages/product.png";
import uzcard from "../../assets/newImages/uzcard.png";
import payme from "../../assets/newImages/payme.png";
// import paynet from "../../assets/newImages/paynet.png";
import uzum from "../../assets/newImages/uzum.png";
import oson from "../../assets/newImages/oson.png";
import click from "../../assets/newImages/click.png";
// import visa from "../../assets/newImages/visa.png";
import Steeper from "../Steeper";
import "./style.css";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import getData from "../../services";
import { toast, ToastContainer } from "react-toastify";

function Prices() {
  const [drawer, drawerAction] = useToggle(false);
  const [darkMode, setDarkMode] = useToggle(true);
  const [checkCardInfo, setCheckCardInfo] = useState(false);
  const [buttonSend, setButtonSend] = useState(false);
  const [themes, setThemes] = useState("");
  const [tariff, setTariff] = useState({});
  const [data, setData] = useState("");
  const [hozir, setHozir] = useState(false);
  const [keyin, setKeyin] = useState(false);
  const [paymentList, setPaymentList] = useState([])
  const params = useParams();

  const [selectedCard, setSelectedCard] = useState("");
  

  const fetchData = async () => {
    try {
      const response = await getData.post(`/api/payment/${selectedCard}/start`, {
        order_id: params.id,
      });
      setData(response);
      toast.success("To'lov sahivasiga yo'naltirdik!", {autoClose: 1000});
      setTimeout(() => {
        window.open(response.data.data.url, "_blank");
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchDataEnd = async () => {
    try {
      const response = await getData.post(`/api/order/update`, {
        order_id: params.id,
      });
      setData(response);
      toast.success("So'rovingiz muvaffaqiyatli qoldirildi!", {autoClose: 1000});
      setTimeout(() => {
        window.location.replace('/');
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseId = await getData.get(
          `/api/themes/${localStorage.getItem("ThemeIdAnother")}`
        );
        const responseTariff = await getData.get(
          `/api/tariffs/${localStorage.getItem("ççç")}`
        );
        const paymentList = await getData.get('/api/payment/providers')
        
        setPaymentList(paymentList.data.data.providers)
        setThemes(responseId.data);
        setTariff(responseTariff.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();

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

  function formatCurrency(amount) {
    return new Intl.NumberFormat("uz-UZ", {
      useGrouping: true,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })
      .format(amount)
      .replace(/,/g, ".");
  }

  const handleCardClick = (id, status) => {
    if (status == "active") {
      setButtonSend(true);
    } else {
      setButtonSend(false);
    }

    if (id == "uzcard_humo") {
      setCheckCardInfo(true);
    } else {
      setCheckCardInfo(false);
    }

    if(id == 'hozir'){
      setHozir(true)
      setKeyin(false)
    }

    if(id == 'keyin'){
      setKeyin(true)
      setHozir(false)
    }

    setSelectedCard(id);
  };

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
      <div className="container choosesection">
        <Steeper number={3} />
        <h5 className="text-light mb-2">Cosmetics Landing Page Divi Layout</h5>
        <h6 className="text-light_h6 mb-4">
          World-class designs with original photos and graphics available for
          free to all Divi customers
        </h6>
        <div className="card bg_1212__end p-4">
          <div className="row">
            <div className="col-12 col-md-8">
              <h5 className="text-light mb-4">To'lov usullari</h5>

              <div className="row gap-3 ps-3 mb-3">
                {[
                  { id: "hozir", label: "Hoziroq to'lash" },
                  { id: "keyin", label: "Keyinroq to'lash" },
                ].map((item) => (
                  <div
                    key={item.id}
                    className={`col-12 col-md-5 border_card p-3 ${
                      selectedCard === item.id ? "border_yellow" : ""
                    }`}
                    onClick={() => handleCardClick(item.id)}
                  >
                    <input
                      name="payment"
                      type="radio"
                      id={item.id}
                      checked={selectedCard === item.id}
                      readOnly
                    />
                    <label htmlFor={item.id} className="text-light ps-3 mb-0">
                      {item.label}
                    </label>
                  </div>
                ))}
              </div>

              {keyin && (
                <button
                  onClick={fetchDataEnd}
                  className="btn w-100 button_price my-3"
                >
                  <Link to="#">
                    So'rov qoldirish <i class="bi bi-arrow-right"></i>
                  </Link>
                </button>
              )}

              {hozir && (
                <div className="row gap-3 ps-3">
                  {(paymentList) && paymentList.map((item) => (
                    <div
                      key={item.code}
                      className={`col-12 col-md-5 border_card p-3 ${
                        selectedCard === (item.code) ? "border_yellow" : ""
                      }`}
                      onClick={() => handleCardClick(item.code, item.status)}
                    >
                      <input
                        name="payment"
                        type="radio"
                        id={item.code}
                        checked={selectedCard === item.code}
                        readOnly
                      />
                      <img src={process.env.REACT_APP_BASE_URL+item.image} className="mx-3" alt={item.name} />
                      <label htmlFor={item.id} className="text-light">
                        {item.name}
                      </label>
                    </div>
                  ))}
                </div>
              )}

              {checkCardInfo && (
                <>
                  <h5 className="text-light my-3" id="karta_info">
                    Karta ma'lumotlari
                  </h5>
                  <div className="row" id="karta_info1">
                    <div className="col-12">
                      <label className="text-light">Karta raqami</label>
                      <input
                        className="form-control bg-transparent text-white input_card__number"
                        type="number"
                        placeholder="1111 2222 3333 4444"
                      />
                    </div>
                    <div className="col-12 col-md-3 mt-3">
                      <label className="text-light">Amal qilish muddati</label>
                      <input
                        className="form-control bg-transparent text-white input_card__number"
                        type="number"
                        placeholder="MM/YY"
                      />
                    </div>
                  </div>
                </>
              )}
            </div>

            <div className="col-12 col-md-4 mt-5 mt-md-0">
              <h5 className="text-light">Mahsulot</h5>
              <div className="d-flex justify-content-between my-4">
                <img
                  className="w-50"
                  src={process.env.REACT_APP_BASE_URL + themes.image}
                />
                <div className="ms-3">
                  <h5 className="text-light_h6">
                    Cosmetics Landing Page Divi Layout
                  </h5>
                  <p className="text-light_h6">By pixelaxis</p>
                </div>
              </div>
              <h5 className="text-light mb-3">Narxi</h5>
              <div className="d-flex justify-content-between align-items-center text_body_content">
                <p>Ta'rif narxi:</p>
                <p>{formatCurrency(tariff.price)}</p>
              </div>
              <div className="d-flex justify-content-between align-items-center text_body_content">
                <p>Shablon narxi:</p>
                <p>{formatCurrency(themes.price)}</p>
              </div>
              <div className="d-flex justify-content-between align-items-center text_body_content">
                <p>Chegirma:</p>
                <p>0</p>
              </div>
              <hr className="bg-light" />
              <div className="d-flex justify-content-between align-items-center text_body_content">
                <p>Jami:</p>
                <p>{formatCurrency(themes.price + tariff.price)}</p>
              </div>
              {buttonSend && (
                <button
                  onClick={fetchData}
                  className="btn w-100 button_price my-3"
                >
                  <Link to="#">
                    Sotib olish <i class="bi bi-arrow-right"></i>
                  </Link>
                </button>
              )}

              <p className="text-light_h6 my-3">
                Davom etish orqali siz Xizmat shartlari va Maxfiylik
                siyosatimizga rozilik bildirasiz. E'tibor bering, to'lovlar
                qaytarilmaydi.
              </p>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
      <FooterHomeOne className={darkMode ? "appie-footer-area-dark" : ""} />
      <BackToTop />
    </div>
  );
}

export default Prices;
