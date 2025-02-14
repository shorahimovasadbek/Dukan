import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom";
import HomeOneHeader from "../HomeOne/HomeOneHeader";
import Drawer from "../Mobile/Drawer";
import useToggle from "../../Hooks/useToggle";
import FooterHomeOne from "../HomeOne/FooterHomeOne";
import BackToTop from "../BackToTop";
import "./style.css";
import img4 from "../../assets/newImages/Avatar.png";
import Steeper from "../Steeper";
import getData from "../../services";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast, ToastContainer } from "react-toastify";
import { ClipLoader } from "react-spinners";
import { useTranslation } from "react-i18next";

function Prices() {
  const { t } = useTranslation();
  const [drawer, drawerAction] = useToggle(false);
  const [darkMode, setDarkMode] = useToggle(true);
  const [data, setData] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [idThemeImg, setIdThemeImg] = useState([]);
  const [user, setUser] = useState([]);
  const [themes, setThemes] = useState("");
  const [tariff, setTariff] = useState({});
  const history = useHistory();
  const [themeId, setThemeId] = useState(localStorage.getItem("themeIdChild"));
  const [themeIdCategory, setThemeIdCategory] = useState(
    localStorage.getItem("themeId")
  );
  const [userId, setUserId] = useState(localStorage.getItem("UserId"));
  const [userInfo, setUserInfo] = useState(localStorage.getItem("UserInfo"));
  const [modalShow, setModalShow] = useState(!userId);
  const params = useParams();

  useEffect(() => {
    setThemeId(localStorage.getItem("themeIdChild"));
    setUserId(localStorage.getItem("UserId"));
    setThemeIdCategory(localStorage.getItem("themeId"));
    setUserInfo(JSON.parse(localStorage.getItem("UserInfo")));

    const fetchData = async () => {
      try {
        const [responseTheme, responseId] = await Promise.all([
          getData.get(`/api/theme-images/${themeId}`),
          getData.get(`/api/themes/${themeId}`),
        ]);

        setIdThemeImg(responseTheme.data);
        setThemes(responseId.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();

    document.body.classList.add("appie-init");
    document.body.classList.toggle("appie-dark", darkMode);

    return () => {
      document.body.classList.remove("appie-dark");
    };
  }, [themeId, userId, params.id]);

  useEffect(() => {
    const button = document.getElementById("buttonSend");
    if (!button) return;
    if (name.trim() !== "" && phone.trim() !== "" && company.trim() !== "") {
      button.removeAttribute("disabled");
    } else {
      button.setAttribute("disabled", "false");
    }
  }, [name, phone, company]);

  const SendUserPost = async () => {
    try {
      const responseTheme = await getData.post(`/api/clients`, {
        full_name: name,
        phone_number: phone,
        company_name: company,
      });
      toast.success("Ma'lumotlaringiz muvaffaqiyatli yuborildi!", {
        autoClose: 1000,
      });
      setUser(responseTheme.data);
      localStorage.setItem("UserId", responseTheme.data[0].id);
      localStorage.setItem("UserInfo", JSON.stringify(responseTheme.data));
      console.log(JSON.parse(localStorage.getItem("UserInfo")));

      setTimeout(() => {
        history.push("/thanks");
      }, 2000);
    } catch (error) {
      const errorMessage = extractErrorMessage(error);
      toast.error(errorMessage, {
        autoClose: 2000,
      });
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }
  };

  const extractErrorMessage = (error) => {
    let firstError = [];
    if (error.response && error.response.data && error.response.data.errors) {
      const errors = error.response.data.errors;
      Object.keys(errors).forEach((key) => {
        errors[key].forEach((message) => {
          firstError.push(message);
        });
      });
    } else if (error.response.data.data && error.response.data.data.message) {
      return error.response.data.message;
    }
    return firstError.join(" ");
  };

  function SendButton() {
    SendUserPost();
    setModalShow(false);
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
    <div className="bg-price">
      <Modal
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={modalShow}
        className="modal_user__info"
      >
        <Modal.Header>
          <Modal.Title
            className="text-light"
            id="contained-modal-title-vcenter"
          >
            {t("client_text")}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-12">
              <input
                type="text"
                className="opacity_content form-control"
                placeholder={t("client_name")}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="col-12 my-3">
              <label class="sr-only" for="inlineFormInputGroup">
                Username
              </label>
              <div class="input-group">
                <div class="input-group-prepend">
                  <div class="input-group-text">+998</div>
                </div>
                <input
                  type="number"
                  className="form-control opacity_content"
                  placeholder={t("client_phone")}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>
            <div className="col-12">
              <input
                type="text"
                className="opacity_content form-control"
                placeholder={t("client_comp")}
                onChange={(e) => setCompany(e.target.value)}
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="btn btn-warning"
            onClick={SendButton}
            id="buttonSend"
          >
            {t("send")}
          </Button>
        </Modal.Footer>
      </Modal>

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
        <div className="">
          <Link to={`/theme/${themeIdCategory}`}>
            <button className="btn btn-outline-warning w-100 button_price1 my-3">
              <i class="bi bi-arrow-left"></i> {t("back")}
            </button>
          </Link>
        </div>
        <h5 className="text-light mb-2">
          {t("kosmetica")}
        </h5>
        <h6 className="text-light_h6 mb-4">
          {t("kosmetica_text")}
        </h6>
        <div className="row">
          <div className="col-12 col-md-8">
            <div
              className="modalImg"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            >
              <img
                className="w-100 rounded rounded-5"
                src={
                  themes.image ? (
                    process.env.REACT_APP_BASE_URL + themes.image
                  ) : (
                    <div className="text-center text-light">
                      <ClipLoader color="#ffffff" />
                    </div>
                  )
                }
              />
              {themes ? (
                <div className="d-flex justify-content-between div_more">
                  <p>1/{themes ? themes.images.length : ""}</p>
                  <p>
                    <i class="bi bi-aspect-ratio"></i>
                  </p>
                </div>
              ) : (
                <div className="text-center text-light">
                  <ClipLoader color="#ffffff" />
                </div>
              )}
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
                    <div
                      id="carouselExample"
                      class="carousel slide carousel-fade"
                      data-ride="carousel"
                    >
                      <div class="carousel-indicators">
                        {idThemeImg ? (
                          idThemeImg.map((item, index) => (
                            <button
                              type="button"
                              data-bs-target="#carouselExampleIndicators"
                              data-bs-slide-to={index}
                              aria-current={index === 0 ? true : ""}
                              className={` button_indicators d-none d-md-block ${
                                index === 0 ? "active" : ""
                              }`}
                              aria-label={`Slide ${index}`}
                            ></button>
                          ))
                        ) : (
                          <div className="text-center text-light">
                            <ClipLoader color="#ffffff" />
                          </div>
                        )}
                      </div>

                      <div className="carousel-inner">
                        {idThemeImg && idThemeImg.length > 0 ? (
                          idThemeImg.map((item, index) => (
                            <div
                              className={`carousel-item ${
                                index === 0 ? "active" : ""
                              }`}
                              key={index}
                            >
                              {item.image_path ? (
                                <img
                                  src={`${process.env.REACT_APP_BASE_URL}${item.image_path}`}
                                  alt="..."
                                />
                              ) : (
                                <div className="text-center text-light">
                                  <ClipLoader color="#ffffff" />
                                </div>
                              )}
                            </div>
                          ))
                        ) : (
                          <div className="text-center text-light">
                            <ClipLoader color="#ffffff" />
                          </div>
                        )}
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
              {themes ? (
                <>
                  {userInfo ? (
                    <>
                      <div>
                        <h4 className="text-light">
                          {t("kompaniya_user")} {userInfo[0].company_name}
                        </h4>
                        <h4 className="text-light">
                          {t("kompaniya_ism")} {userInfo[0].full_name}
                        </h4>
                        <h4 className="text-light">
                          {t("kompaniya_tel")} {userInfo[0].phone_number}
                        </h4>
                      </div>
                    </>
                  ) : (
                    <div className="text-center text-light">
                      <ClipLoader color="#ffffff" />
                    </div>
                  )}
                  <hr className="bg-light" />
                  <h1 className="text-center text-light mb-4">
                    {formatCurrency(themes.price)}{" "}
                    <span className="som_text">so'm</span>
                  </h1>
                </>
              ) : (
                <div className="text-center text-light">
                  <ClipLoader color="#ffffff" />
                </div>
              )}
              <div className="d-flex justify-content-between align-items-center text_body_content">
                <p>{t("chegirma")}</p>
                <p>0</p>
              </div>
              <Link to={`/prices`}>
                <button className="btn btn-outline-warning w-100 button_price1 my-3">
                  {t("next")} <i class="bi bi-arrow-right"></i>
                </button>
              </Link>
            </div>
          </div>

          <div className="col-12 col-md-8 mt-5">
            <h5 className="text-light mb-2">{t("about_them")}</h5>
            <p className="text-light_h6">
              {t("about_them__text")}
            </p>
            <hr className="bg-light" />

            <h5 className="text-light my-2">{t("mahsulot")}</h5>
            <p className="text-light_h6">{t("create_them")}</p>
            <p className="text-light_h6">
              {t("compatibility_them")}
            </p>
            <p className="text-light_h6">{t("them_size")}</p>
            <p className="text-light_h6">
              {t("them_vektor")}
            </p>
            <p className="text-light_h6">{t("them_dpi")}</p>
            <hr className="bg-light" />

            <h5 className="text-light my-2">{t("description_them")}</h5>
            <p className="text-light_h6">
              {t("description_them1")}
            </p>
            <p className="text-light_h6 my-3">
            {t("description_them2")}
            </p>
            <p className="text-light_h6">
            {t("description_them3")}
            </p>
            <hr className="bg-light" />

            <h5 className="text-light my-3">{t("instruktor")}</h5>
            <div className="d-flex align-items-center">
              <img src={img4} />
              <div className="ms-3">
                <h6 className="text-light">Devonne Wallbridge</h6>
                <p className="text-light_h6">
                  {t("instruktor_text")}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-start">
          <Link to={`/theme/${themeIdCategory}`}>
            <button className="btn btn-outline-warning w-100 button_price1 my-3">
              <i class="bi bi-arrow-left"></i> {t("back")}
            </button>
          </Link>
        </div>
      </div>
      <ToastContainer />
      <FooterHomeOne className={darkMode ? "appie-footer-area-dark" : ""} />
      <BackToTop />
    </div>
  );
}

export default Prices;
