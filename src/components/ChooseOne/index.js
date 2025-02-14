import React, { useEffect, useState } from "react";
import {
  Link,
  useParams,
  useHistory,
} from "react-router-dom/cjs/react-router-dom";
import kosmetika from "../../assets/newImages/iframe1.png";
import HomeOneHeader from "../HomeOne/HomeOneHeader";
import Drawer from "../Mobile/Drawer";
import useToggle from "../../Hooks/useToggle";
import FooterHomeOne from "../HomeOne/FooterHomeOne";
import BackToTop from "../BackToTop";
import Steeper from "../Steeper";
import "./style.css";
import { ClipLoader } from "react-spinners";
import getData from "../../services";
import { useTranslation } from "react-i18next";

function ChooseRoute() {
  const {t} = useTranslation()
  const [drawer, drawerAction] = useToggle(false);
  const [darkMode, setDarkMode] = useToggle(true);
  const [data, setData] = useState([]);
  const useparams = useParams();
  const history = useHistory();
  localStorage.setItem("themeId", useparams.id);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getData.get(`/api/categories/${useparams.id}`);
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

  function MovePrices(id) {
    localStorage.setItem("themeIdChild", id);
    history.push(`/pricepage/${id}`);
  }

  function formatCurrency(amount) {
    return new Intl.NumberFormat("uz-UZ", {
      useGrouping: true,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })
      .format(amount)
      .replace(/,/g, ".");
  }

  return (
    <>
      <Drawer drawer={drawer} action={drawerAction.toggle} />
      <HomeOneHeader
        className={darkMode ? "appie-header-area-dark back_header" : ""}
        dark={darkMode}
        darkEnable
        changeMode={setDarkMode.toggle}
        action={drawerAction.toggle}
      />
      <div className="choosesection">
        <div className="container ">
          <Steeper number={2} />
          <h5 className="text-light mb-2">
            {t("theme_text")}
          </h5>
          <div className="row">
            {data && data.themes ? (
              data.themes?.map((item, index) => {
                return (
                  <div
                    className="col-12 col-md-4 justify-content-center d-flex my-4"
                    key={index}
                  >
                    <div className="parent_icons__choose">
                      <Link onClick={() => MovePrices(item.id)}>
                        <div className="d-flex icons_choose">
                          <p>
                            <i class="bi bi-cart2"></i>
                          </p>
                          <p>
                            <i class="bi bi-list mx-4"></i>
                          </p>
                          <p>
                            <i class="bi bi-eye"></i>
                          </p>
                        </div>
                      </Link>
                      <Link onClick={() => MovePrices(item.id)}>
                        <img
                          className="imgNow1"
                          src={
                            item.image != null
                              ? process.env.REACT_APP_BASE_URL + item.image
                              : kosmetika
                          }
                        />
                        <h5 className="text-light mt-4">{item.name}</h5>
                        <p className="text-light">
                          {formatCurrency(item.price)} so'm
                        </p>
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
          <div className="d-flex justify-content-center mt-5">
            <Link to="#">
              <button className="btn btn-outline-light px-5">{t("more")}</button>
            </Link>
          </div>
        </div>
      </div>

      <FooterHomeOne className={darkMode ? "appie-footer-area-dark" : ""} />
      <BackToTop />
    </>
  );
}

export default ChooseRoute;
