import React, { useState, useEffect } from "react";
import useToggle from "../../Hooks/useToggle";
import getData from "../../services";
import { Link } from "react-router-dom/cjs/react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function PricingHomeOne({ className }) {
  const [drawer, drawerAction] = useToggle(false);
  const [darkMode, setDarkMode] = useToggle(true);
  const [data, setData] = useState([]);
  const history = useHistory();

  useEffect(() => {
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
    if(amount == 0){
        return 'Kelishuv asosida'
    }

    return new Intl.NumberFormat("uz-UZ", {
      useGrouping: true,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })
      .format(amount)
      .replace(/,/g, ".");
  }

  function MoveCategories(id) {
    history.push(`/categories`);
    localStorage.setItem('TariffIdPrices', id)
  }

  return (
    <>
      <section
        className={`appie-pricing-area pt-90 pb-90 ${className || ""}`}
        id="pricing"
      >
        <div className="container">
          {/* <div className="row">
                        <div className="col-lg-12">
                            <div className="appie-section-title text-center">
                                <h3 className="appie-title">Ta'rifingizni tanlang</h3>
                                <p>Different layouts and styles for team sections.</p>
                            </div>
                            <ul
                                className="list-inline text-center switch-toggler-list"
                                role="tablist"
                                id="switch-toggle-tab"
                            >
                                <li className={`month ${toggleSwitch ? 'active' : ''}`}>
                                    <a href="#">Oylik to'lov</a>
                                </li>
                                <li>
                                    <label
                                        onClick={() => setSwitchValue(!toggleSwitch)}
                                        className={`switch ${toggleSwitch ? 'on' : 'off'}`}
                                    >
                                        <span className="slider round" />
                                    </label>
                                </li>
                                <li className={`year ${toggleSwitch === false ? 'active' : ''}`}>
                                    <a href="#">To'liq sotib olish</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="tabed-content">
                        {toggleSwitch ? (
                            <div id="month">
                                <div className="row justify-content-center">
                                    <div className="col-lg-4 col-md-6 wow animated fadeInLeft">
                                        <div className="pricing-one__single">
                                            <div className="pricig-heading">
                                                <h6>Vebsaytlar</h6>
                                                <div className="price-range">
                                                    <span>250.000 so'm</span>
                                                    <p>/oy</p>
                                                </div>
                                                <p>Sozlash 799.000 so'm</p>
                                            </div>
                                            <div className="pricig-body">
                                                <ul>
                                                    <li>
                                                        <i className="fal fa-check" /> 60-day chat
                                                        history
                                                    </li>
                                                    <li>
                                                        <i className="fal fa-check" /> 15 GB cloud
                                                        storage
                                                    </li>
                                                </ul>
                                                <div className="pricing-btn mt-35">
                                                    <a className="main-btn" href="#">
                                                        Choose plan
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="pricing-btn mt-35">
                                                <a className="main-btn" href="#">
                                                    Tarifni tanlash
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 wow animated fadeInUp">
                                        <div className="pricing-one__single center">
                                            <div className="pricig-heading">
                                                <h6>Mobil ilovalar</h6>
                                                <div className="price-range">
                                                    <span>350.000 so'm</span>
                                                    <p>/oy</p>
                                                </div>
                                                <p>Sozlash 799.000 so'm</p>
                                            </div>
                                            <div className="pricig-body">
                                                <ul>
                                                    <li>
                                                        <i className="fal fa-check" /> 60-day chat
                                                        history
                                                    </li>
                                                    <li>
                                                        <i className="fal fa-check" /> 50 GB cloud
                                                        storage
                                                    </li>
                                                    <li>
                                                        <i className="fal fa-check" /> 24/7 Support
                                                    </li>
                                                </ul>
                                                <div className="pricing-btn mt-35">
                                                    <a className="main-btn" href="#">
                                                        Choose plan
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="pricing-btn mt-35">
                                                <a className="main-btn" href="#">
                                                    Tarifni tanlash
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 wow animated fadeInRight">
                                        <div className="pricing-one__single">
                                            <div className="pricig-heading">
                                                <h6>1 + 1</h6>
                                                <div className="price-range">
                                                    <span>539.000 so'm</span>
                                                    <p>/oy</p>
                                                </div>
                                                <p>Sozlash 799.000 so'm</p>
                                            </div>
                                            <div className="pricig-body">
                                                <ul>
                                                    <li>
                                                        <i className="fal fa-check" /> 60-day chat
                                                        history
                                                    </li>
                                                    <li>
                                                        <i className="fal fa-check" /> Data security
                                                    </li>
                                                    <li>
                                                        <i className="fal fa-check" /> 100 GB cloud
                                                        storage
                                                    </li>
                                                    <li>
                                                        <i className="fal fa-check" /> 24/7 Support
                                                    </li>
                                                </ul>
                                                <div className="pricing-btn mt-35">
                                                    <a className="main-btn" href="#">
                                                        Choose plan
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="pricing-btn mt-35">
                                                <a className="main-btn" href="#">
                                                    Tarifni tanlash
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div id="year">
                                <div className="row justify-content-center">
                                    <div className="col-lg-4 col-md-6 wow animated fadeInLeft">
                                        <div className="pricing-one__single">
                                            <div className="pricig-heading">
                                                <h6>Vebsaytlar</h6>
                                                <div className="price-range">
                                                    <span>6 750 000 so'm</span>
                                                    <p>/to'liq</p>
                                                </div>
                                                <p>14 kun demo foydalanib ko'ring</p>
                                            </div>
                                            <div className="pricig-body">
                                                <ul>
                                                    <li>
                                                        <i className="fal fa-check" /> 60-day chat
                                                        history
                                                    </li>
                                                    <li>
                                                        <i className="fal fa-check" /> 15 GB cloud
                                                        storage
                                                    </li>
                                                </ul>
                                                <div className="pricing-btn mt-35">
                                                    <a className="main-btn" href="#">
                                                        Choose plan
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="pricing-btn mt-35">
                                                <a className="main-btn" href="#">
                                                    Tarifni tanlash
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 wow animated fadeInUp">
                                        <div className="pricing-one__single center">
                                            <div className="pricig-heading">
                                                <h6>Vebsayt + Telegram</h6>
                                                <div className="price-range">
                                                    <span>10 125 000 so'm</span>
                                                    <p>/to'liq</p>
                                                </div>
                                                <p>To'liq sotib olish 18mln so'm</p>
                                            </div>
                                            <div className="pricig-body">
                                                <ul>
                                                    <li>
                                                        <i className="fal fa-check" /> 60-day chat
                                                        history
                                                    </li>
                                                    <li>
                                                        <i className="fal fa-check" /> 50 GB cloud
                                                        storage
                                                    </li>
                                                    <li>
                                                        <i className="fal fa-check" /> 24/7 Support
                                                    </li>
                                                </ul>
                                                <div className="pricing-btn mt-35">
                                                    <a className="main-btn" href="#">
                                                        Choose plan
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="pricing-btn mt-35">
                                                <a className="main-btn" href="#">
                                                   Tarifni tanlash
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 wow animated fadeInRight">
                                        <div className="pricing-one__single">
                                            <div className="pricig-heading">
                                                <h6>Vebsayt + Mobile</h6>
                                                <div className="price-range">
                                                    <span>12 825 000 so'm</span>
                                                    <p>/to'liq</p>
                                                </div>
                                                <p>To'liq sotib olish 25mln so'm</p>
                                            </div>
                                            <div className="pricig-body">
                                                <ul>
                                                    <li>
                                                        <i className="fal fa-check" /> 60-day chat
                                                        history
                                                    </li>
                                                    <li>
                                                        <i className="fal fa-check" /> Data security
                                                    </li>
                                                    <li>
                                                        <i className="fal fa-check" /> 100 GB cloud
                                                        storage
                                                    </li>
                                                    <li>
                                                        <i className="fal fa-check" /> 24/7 Support
                                                    </li>
                                                </ul>
                                                <div className="pricing-btn mt-35">
                                                    <a className="main-btn" href="#">
                                                        Choose plan
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="pricing-btn mt-35">
                                                <a className="main-btn" href="#">
                                                    Tarifni tanlash
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6 wow animated fadeInRight mt-4">
                                        <div className="pricing-one__single end_card__pricing">
                                            <div className="pricig-heading">
                                                <h6>Mijoz talablariga mos</h6>
                                                <div className="price-range">
                                                    <span>Kelishilgan holda</span>
                                                </div>
                                                <p>To'liq sotib olish 25mln so'm</p>
                                            </div>
                                            <div className="pricig-body">
                                                <ul>
                                                    <li>
                                                        <i className="fal fa-check" /> 60-day chat
                                                        history
                                                    </li>
                                                    <li>
                                                        <i className="fal fa-check" /> Data security
                                                    </li>
                                                    <li>
                                                        <i className="fal fa-check" /> 100 GB cloud
                                                        storage
                                                    </li>
                                                    <li>
                                                        <i className="fal fa-check" /> 24/7 Support
                                                    </li>
                                                </ul>
                                                <div className="pricing-btn mt-35">
                                                    <a className="main-btn" href="#">
                                                        Choose plan
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="pricing-btn mt-35">
                                                <a className="main-btn" href="#">
                                                    Tarifni tanlash
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div> */}

          <div className="row justify-content-center">
            {data ? (
              data.map((item, index) => {
                return (
                  <div className="col-12 col-md-3 my-3" key={index}>
                    <div className="card card_price p-4 tarifCard">
                      <h4 className="text-center text-light mt-4">
                        {item.name}
                      </h4>
                      <p className="text-center text-light">
                        {item.description ? item.description : ""}
                      </p>
                      <p className="text-warning_h1 text-center">
                        {formatCurrency(item.price)}
                        <sub>
                          <span className="span_text">{(item.price == 0) ? '': "so'm"}</span>
                        </sub>
                        {/* <span className="span_text span_text__bottom">/oy</span> */}
                      </p>
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
                          <span className="text-light">
                            Jonli suhbat vidjeti
                          </span>
                        </li>
                        <li className="d-flex justify-content-start align-items-center">
                          <i class="bi bi-check icon_done"></i>
                          <span className="text-light">
                            Elektron pochta marketingi
                          </span>
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
                          <span className="text-light">
                            Asosiy qo'llab-quvvatlash
                          </span>
                        </li>
                      </ul>

                      <Link onClick={() => MoveCategories(item.id)}>
                        <button className="btn w-100 button_price my-3">
                          Tarifni tanlash
                        </button>
                      </Link>
                    </div>
                  </div>
                );
              })
            ) : (
              <ClipLoader />
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default PricingHomeOne;
