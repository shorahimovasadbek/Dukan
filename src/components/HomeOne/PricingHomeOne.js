import React, { useState, useEffect } from "react";
import useToggle from "../../Hooks/useToggle";
import getData from "../../services";
import { Link } from "react-router-dom/cjs/react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useTranslation } from "react-i18next";

function PricingHomeOne({ className }) {
  const [drawer, drawerAction] = useToggle(false);
  const [darkMode, setDarkMode] = useToggle(true);
  const [data, setData] = useState([]);
  const history = useHistory();
  const { t } = useTranslation();

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

  function MoveCategories(id) {
    history.push(`/categories`);
    localStorage.setItem("TariffIdPrices", id);
  }

  return (
    <>
      <section
        className={`appie-pricing-area pt-90 pb-90 ${className || ""}`}
        id="pricing"
      >
        <div className="container">
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
                          <span className="span_text">
                            {item.price == 0 ? "" : "so'm"}
                          </span>
                        </sub>
                        {/* <span className="span_text span_text__bottom">/oy</span> */}
                      </p>
                      <ul className="ul_list__price">
                        <li className="d-flex justify-content-start align-items-center">
                          <i class="bi bi-check icon_done"></i>
                          <span className="text-light">{t("vaqt")}</span>
                        </li>
                        <li className="d-flex justify-content-start align-items-center">
                          <i class="bi bi-check icon_done"></i>
                          <span className="text-light">{t("qidiruv")}</span>
                        </li>
                        <li className="d-flex justify-content-start align-items-center">
                          <i class="bi bi-check icon_done"></i>
                          <span className="text-light">{t("suhbat")}</span>
                        </li>
                        <li className="d-flex justify-content-start align-items-center">
                          <i class="bi bi-check icon_done"></i>
                          <span className="text-light">{t("pochta")}</span>
                        </li>
                        <li className="d-flex justify-content-start align-items-center">
                          <i class="bi bi-check icon_done"></i>
                          <span className="text-light">{t("shakillar")}</span>
                        </li>
                        <li className="d-flex justify-content-start align-items-center">
                          <i class="bi bi-check icon_done"></i>
                          <span className="text-light">{t("trafik")}</span>
                        </li>
                        <li className="d-flex justify-content-start align-items-center">
                          <i class="bi bi-check icon_done"></i>
                          <span className="text-light">{t("asosiy")}</span>
                        </li>
                      </ul>

                      <Link onClick={() => MoveCategories(item.id)}>
                        <button className="btn w-100 button_price my-3">
                          {t("tanlash")}
                        </button>
                      </Link>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="text-center text-light">
                <ClipLoader color="#ffffff" />
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default PricingHomeOne;
