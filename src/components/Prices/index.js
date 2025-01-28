import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom";
import HomeOneHeader from "../HomeOne/HomeOneHeader";
import Drawer from "../Mobile/Drawer";
import useToggle from "../../Hooks/useToggle";
import FooterHomeOne from "../HomeOne/FooterHomeOne";
import BackToTop from "../BackToTop";
import Steeper from "../Steeper";
import "./style.css";
import getData from "../../services";
import { ClipLoader } from "react-spinners";
import { Button } from "react-bootstrap";

function Prices() {
  const [drawer, drawerAction] = useToggle(false);
  const [darkMode, setDarkMode] = useToggle(true);
  const [themeId, setThemeId] = useState(localStorage.getItem("themeIdChild"));
  const [tarifId, setTarifId] = useState(
    localStorage.getItem("TariffIdPrices")
  );
  const [data, setData] = useState([]);
  const history = useHistory()

  useEffect(() => {
    setTarifId(localStorage.getItem("TariffIdPrices"));
    setThemeId(localStorage.getItem("themeIdChild"));
    const fetchData = async () => {
      try {
        const response = await getData.get("/api/tariffs");
        setData(response.data);
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
    if (amount == 0) {
      return "Kelishuv asosida";
    }
    return new Intl.NumberFormat("uz-UZ", {
      useGrouping: true,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })
      .format(amount)
      .replace(/,/g, ".");
  }

  function sendTarifId(id){
    localStorage.setItem('TariffIdPrices', id)
    history.push(`/pricepageend/${id}`)
  }
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
        <Steeper number={2} />
        <div className="d-flex justify-content-between align-items-center row">
          <div className="col-12 col-md-6">
            <h5 className="text-light mb-2">Narxlar rejalari</h5>
            <h6 className="text-light_h6 mb-4">
              Ehtiyojlaringizga mos keladigan eng yaxshi rejani tanlang.
            </h6>
          </div>
          <div className="text-end mt-2 mt-md-5 col-12 col-md-6">
            <Link to={themeId ? `/pricepage/${themeId}` : ""}>
              <Button variant="warning">
                <i className="bi bi-arrow-left"></i> Orqaga qaytish
              </Button>
            </Link>

            {tarifId ? (
              <Link
                className="ms-3"
                to={themeId ? `/pricepageend/${tarifId}` : ""}
              >
                <Button variant="warning">
                  Keyingisi <i className="bi bi-arrow-right"></i>
                </Button>
              </Link>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="row justify-content-center">
          {data ? (
            data.map((item, index) => {
              return (
                <div className="col-12 col-md-3 my-3" key={index}>
                  <div
                    className={`card card_price p-4 tarifCard ${
                      tarifId && tarifId == item.id ? "borderTarif" : ""
                    }`}
                  >
                    <h4 className="text-center text-light mt-4">{item.name}</h4>
                    <p className="text-center text-light">
                      {item.description ? item.description : ""}
                    </p>
                    <p className="text-warning_h1 text-center">
                      {formatCurrency(item.price)}
                      <sub>
                        <span className="span_text">
                          {item.price == 0 ? "" : "so'm"}
                        </span>
                      </sub>
                      {/* <span className="span_text span_text__bottom">/oy</span> */}
                    </p>
                    <ul className="ul_list__price">
                      <li className="d-flex justify-content-start align-items-center">
                        <i
                          class={`bi bi-check icon_done ${
                            tarifId && tarifId == item.id
                              ? "icon_done__another"
                              : ""
                          }`}
                        ></i>
                        <span className="text-light">Vaqt jadvali</span>
                      </li>
                      <li className="d-flex justify-content-start align-items-center">
                        <i
                          class={`bi bi-check icon_done ${
                            tarifId && tarifId == item.id
                              ? "icon_done__another"
                              : ""
                          }`}
                        ></i>
                        <span className="text-light">Asosiy qidiruv</span>
                      </li>
                      <li className="d-flex justify-content-start align-items-center">
                        <i
                          class={`bi bi-check icon_done ${
                            tarifId && tarifId == item.id
                              ? "icon_done__another"
                              : ""
                          }`}
                        ></i>
                        <span className="text-light">Jonli suhbat vidjeti</span>
                      </li>
                      <li className="d-flex justify-content-start align-items-center">
                        <i
                          class={`bi bi-check icon_done ${
                            tarifId && tarifId == item.id
                              ? "icon_done__another"
                              : ""
                          }`}
                        ></i>
                        <span className="text-light">
                          Elektron pochta marketingi
                        </span>
                      </li>
                      <li className="d-flex justify-content-start align-items-center">
                        <i
                          class={`bi bi-check icon_done ${
                            tarifId && tarifId == item.id
                              ? "icon_done__another"
                              : ""
                          }`}
                        ></i>
                        <span className="text-light">Maxsus shakllar</span>
                      </li>
                      <li className="d-flex justify-content-start align-items-center">
                        <i
                          class={`bi bi-check icon_done ${
                            tarifId && tarifId == item.id
                              ? "icon_done__another"
                              : ""
                          }`}
                        ></i>
                        <span className="text-light">Trafik tahlili</span>
                      </li>
                      <li className="d-flex justify-content-start align-items-center">
                        <i
                          class={`bi bi-check icon_done ${
                            tarifId && tarifId == item.id
                              ? "icon_done__another"
                              : ""
                          }`}
                        ></i>
                        <span className="text-light">
                          Asosiy qo'llab-quvvatlash
                        </span>
                      </li>
                    </ul>

                    {!tarifId ? (
                      <Link onClick={() => sendTarifId(item.id)}>
                        <button className="btn w-100 button_price my-3">
                          Tarifni tanlash
                        </button>
                      </Link>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              );
            })
          ) : (
            <div className="text-center text-light">
              <ClipLoader color="#ffffff" />
            </div>
          )}

          {/* <div className="col-12 col-md-4 my-5 my-md-0">
            <div className="card card_price p-4">
              <h4 className="text-center text-light mt-4">Asosiy</h4>
              <p className="text-center text-light">
                Hamma uchun oddiy boshlanish
              </p>
              <h1 className="text-warning_h1 text-center">
                1.3
                <sub>
                  <span className="span_text">mln</span>
                </sub>
                <span className="span_text span_text__bottom">/oy</span>
              </h1>
              <ul className="ul_list__price">
                <li className="d-flex justify-content-start align-items-center">
                  <i class="bi bi-check icon_done"></i>
                  <span className="text-light">Vaqt jadvali</span>
                </li>
                <li className="d-flex justify-content-start align-items-center">
                  <i class="bi bi-check icon_done"></i>
                  <span className="text-light">Asosiy qidiruv</span>
                </li>
                <li className="d-flex justify-content-start align-items-center">
                  <i class="bi bi-check icon_done"></i>
                  <span className="text-light">Jonli suhbat vidjeti</span>
                </li>
                <li className="d-flex justify-content-start align-items-center">
                  <i class="bi bi-check icon_done"></i>
                  <span className="text-light">Elektron pochta marketingi</span>
                </li>
                <li className="d-flex justify-content-start align-items-center">
                  <i class="bi bi-check icon_done"></i>
                  <span className="text-light">Maxsus shakllar</span>
                </li>
                <li className="d-flex justify-content-start align-items-center">
                  <i class="bi bi-check icon_done"></i>
                  <span className="text-light">Trafik tahlili</span>
                </li>
                <li className="d-flex justify-content-start align-items-center">
                  <i class="bi bi-check icon_done"></i>
                  <span className="text-light">Asosiy qo'llab-quvvatlash</span>
                </li>
              </ul>

              <Link to="/pricepage"><button className="btn btn-outline-warning w-100 button_price my-3">Sotib olish</button></Link>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="card card_price p-4">
              <h4 className="text-center text-light mt-4">Asosiy</h4>
              <p className="text-center text-light">
                Hamma uchun oddiy boshlanish
              </p>
              <h1 className="text-warning_h1 text-center">
                1.3
                <sub>
                  <span className="span_text">mln</span>
                </sub>
                <span className="span_text span_text__bottom">/oy</span>
              </h1>
              <ul className="ul_list__price">
                <li className="d-flex justify-content-start align-items-center">
                  <i class="bi bi-check icon_done"></i>
                  <span className="text-light">Vaqt jadvali</span>
                </li>
                <li className="d-flex justify-content-start align-items-center">
                  <i class="bi bi-check icon_done"></i>
                  <span className="text-light">Asosiy qidiruv</span>
                </li>
                <li className="d-flex justify-content-start align-items-center">
                  <i class="bi bi-check icon_done"></i>
                  <span className="text-light">Jonli suhbat vidjeti</span>
                </li>
                <li className="d-flex justify-content-start align-items-center">
                  <i class="bi bi-check icon_done"></i>
                  <span className="text-light">Elektron pochta marketingi</span>
                </li>
                <li className="d-flex justify-content-start align-items-center">
                  <i class="bi bi-check icon_done"></i>
                  <span className="text-light">Maxsus shakllar</span>
                </li>
                <li className="d-flex justify-content-start align-items-center">
                  <i class="bi bi-check icon_done"></i>
                  <span className="text-light">Trafik tahlili</span>
                </li>
                <li className="d-flex justify-content-start align-items-center">
                  <i class="bi bi-check icon_done"></i>
                  <span className="text-light">Asosiy qo'llab-quvvatlash</span>
                </li>
              </ul>

              <Link to="/pricepage"><button className="btn btn-outline-warning w-100 button_price my-3">Sotib olish</button></Link>
            </div>
          </div> */}
        </div>
      </div>

      <FooterHomeOne className={darkMode ? "appie-footer-area-dark" : ""} />
      <BackToTop />
    </div>
  );
}

export default Prices;
