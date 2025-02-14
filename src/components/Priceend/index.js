import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";
import HomeOneHeader from "../HomeOne/HomeOneHeader";
import Drawer from "../Mobile/Drawer";
import useToggle from "../../Hooks/useToggle";
import FooterHomeOne from "../HomeOne/FooterHomeOne";
import BackToTop from "../BackToTop";
import Steeper from "../Steeper";
import "./style.css";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import getData from "../../services";
import { toast, ToastContainer } from "react-toastify";
import { ClipLoader } from "react-spinners";
import { useTranslation } from "react-i18next";

function Prices() {
  const {t} = useTranslation()
  const [drawer, drawerAction] = useToggle(false);
  const [darkMode, setDarkMode] = useToggle(true);
  const [checkCardInfo, setCheckCardInfo] = useState(false);
  const [buttonSend, setButtonSend] = useState(false);
  const [themes, setThemes] = useState("");
  const [tariff, setTariff] = useState({});
  const [data, setData] = useState("");
  const [dataOrderPost, setDataOrderPost] = useState(null);
  const [userId, setUserId] = useState(localStorage.getItem("UserId"));
  const [themeId, setThemeId] = useState(localStorage.getItem("themeIdChild"));
  const [hozir, setHozir] = useState(false);
  const [keyin, setKeyin] = useState(false);
  const [paymentList, setPaymentList] = useState([]);
  const params = useParams();

  const [selectedCard, setSelectedCard] = useState("");

  const fetchData = async () => {
    try {
      const response = await getData.post(
        `/api/payment/${selectedCard}/start`,
        {
          order_id: dataOrderPost,
        }
      );
      setData(response);
      toast.success("To'lov sahivasiga yo'naltirdik!", { autoClose: 1000 });
      setTimeout(() => {
        window.open(response.data.data.url, "_blank");
        localStorage.removeItem('themeId')
        localStorage.removeItem('themeIdChild')
        localStorage.removeItem('TariffIdPrices')
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchDataEnd = async () => {
    try {
      const response = await getData.post(`/api/order/update`, {
        order_id: dataOrderPost,
      });
      setData(response);
      toast.success("So'rovingiz muvaffaqiyatli qoldirildi!", {
        autoClose: 1000,
      });
      setTimeout(() => {
        localStorage.removeItem('themeId')
        localStorage.removeItem('themeIdChild')
        localStorage.removeItem('TariffIdPrices')
        window.location.replace("/");
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setUserId(localStorage.getItem("UserId"));
    setThemeId(localStorage.getItem("themeIdChild"));
    const fetchData = async () => {
      try {
        const responseId = await getData.get(
          `/api/themes/${localStorage.getItem("themeIdChild")}`
        );
        const responseTariff = await getData.get(`/api/tariffs/${params.id}`);
        const paymentList = await getData.get("/api/payment/providers");

        const response = await getData.post(`/api/order/store`, {
          tariff_id: params.id,
          client_id: userId,
          theme_id: themeId,
        });

        setDataOrderPost(response.data.data.order_id);

        setPaymentList(paymentList.data.data.providers);
        setThemes(responseId.data);
        console.log(themes.image,' bu themeni imagesi ');
        
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
    if (amount) {
      return new Intl.NumberFormat("uz-UZ", {
        useGrouping: true,
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      })
        .format(amount)
        .replace(/,/g, ".");
    } else {
      <div className="text-center text-light">
        <ClipLoader color="#ffffff" />
      </div>
    }
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

    if (id == "hozir") {
      setHozir(true);
      setKeyin(false);
    }

    if (id == "keyin") {
      setKeyin(true);
      setHozir(false);
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
        <div className="row">
          <div className="col-12 col-md-8">
            <h5 className="text-light mb-2">
              {t("kosmetica")}
            </h5>
            <h6 className="text-light_h6 mb-4">
              {t("kosmetica_text")}
            </h6>
          </div>
          <div className="col-6 col-md-4 text-end">
            <Link to={`/prices`}>
              <button className="btn btn-outline-warning w-100 button_price1 my-3">
                <i class="bi bi-arrow-left"></i> {t("back")}
              </button>
            </Link>
          </div>
        </div>
        <div className="card bg_1212__end p-4">
          <div className="row">
            <div className="col-12 col-md-8">
              <h5 className="text-light mb-4">{t("payment_method")}</h5>

              <div className="row gap-3 ps-3 mb-3">
                {[
                  { id: "hozir", label: t("now_pay") },
                  { id: "keyin", label: t("then_pay") },
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
                    {t("leave_request")} <i class="bi bi-arrow-right"></i>
                  </Link>
                </button>
              )}

              {hozir && (
                <div className="row gap-3 ps-3">
                  {paymentList &&
                    paymentList.map((item) => (
                      <div
                        key={item.code}
                        className={`col-12 col-md-5 border_card p-3 ${
                          selectedCard === item.code ? "border_yellow" : ""
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
                        <img
                          src={process.env.REACT_APP_BASE_URL + item.image}
                          className="mx-3"
                          alt={item.name}
                        />
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
                    {t("card_info")}
                  </h5>
                  <div className="row" id="karta_info1">
                    <div className="col-12">
                      <label className="text-light">{t("card_number")}</label>
                      <input
                        className="form-control bg-transparent text-white input_card__number"
                        type="number"
                        placeholder="1111 2222 3333 4444"
                      />
                    </div>
                    <div className="col-12 col-md-3 mt-3">
                      <label className="text-light">{t("validty_period")}</label>
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
              <h5 className="text-light">{t("mahsulot_end")}</h5>
              <div className="d-flex justify-content-between my-4">
                {themes.image ? (
                  <img
                    className="w-50"
                    src={`${process.env.REACT_APP_BASE_URL}${themes.image}`}
                    alt="..."
                  />
                ) : (
                  <div className="text-center text-light">
                    <ClipLoader color="#ffffff" />
                  </div>
                )}
                <div className="ms-3">
                  <h5 className="text-light_h6">
                    {t("kosmetica")}
                  </h5>
                </div>
              </div>
              <h5 className="text-light mb-3">{t("narxi")}</h5>
              <div className="d-flex justify-content-between align-items-center text_body_content">
                <p>{t("tarif_narxi")}</p>
                <p>{formatCurrency(tariff.price)}</p>
              </div>
              <div className="d-flex justify-content-between align-items-center text_body_content">
                <p>{t("shablon_narxi")}</p>
                <p>{formatCurrency(themes.price)}</p>
              </div>
              <div className="d-flex justify-content-between align-items-center text_body_content">
                <p>{t("chegirma")}</p>
                <p>0</p>
              </div>
              <hr className="bg-light" />
              <div className="d-flex justify-content-between align-items-center text_body_content">
                <p>{t("jami")}</p>
                <p>{formatCurrency(themes.price + tariff.price)}</p>
              </div>
              {buttonSend && (
                <button
                  onClick={fetchData}
                  className="btn w-100 button_price my-3"
                >
                  <Link to="#">
                    {t("sotib_olish")} <i class="bi bi-arrow-right"></i>
                  </Link>
                </button>
              )}

              <p className="text-light_h6 my-3">
                {t("sotib_olish__text")}
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
