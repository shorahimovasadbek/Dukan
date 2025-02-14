import React from 'react';
import IconOne from '../../assets/images/icon/1.png';
import { useTranslation } from 'react-i18next';

function ServicesHomeOne({ className }) {
    const {t} = useTranslation()
    return (
        <section className={`appie-service-area pt-90 pb-100 ${className}`} id="features">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="appie-section-title text-center">
                            <h3 className="appie-title">
                                {t("services_text")}
                            </h3>
                            {/* <p>The full monty spiffing good time no biggie cack grub fantastic. </p> */}
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div
                            className="appie-single-service text-center mt-30 wow animated fadeInUp"
                            data-wow-duration="2000ms"
                            data-wow-delay="200ms"
                        >
                            <div className="icon">
                                <img src={IconOne} alt="" />
                                <span>1</span>
                            </div>
                            <h4 className="appie-title">{t("assorti")}</h4>
                            <p>{t("assorti_text")}</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div
                            className="appie-single-service text-center mt-30 item-2 wow animated fadeInUp"
                            data-wow-duration="2000ms"
                            data-wow-delay="400ms"
                        >
                            <div className="icon">
                                <i className="fa-solid fa-check-double text-white img-icon-services"></i>
                                <span>2</span>
                            </div>
                            <h4 className="appie-title">{t("kafolat")}</h4>
                            <p>{t("kafolat_text")}</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div
                            className="appie-single-service text-center mt-30 item-3 wow animated fadeInUp"
                            data-wow-duration="2000ms"
                            data-wow-delay="600ms"
                        >
                            <div className="icon">
                                <i className="fa-regular fa-credit-card text-white img-icon-services"></i>
                                <span>3</span>
                            </div>
                            <h4 className="appie-title">{t("imkoniyat")}</h4>
                            <p>{t("imkoniyat_text")}</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div
                            className="appie-single-service text-center mt-30 item-4 wow animated fadeInUp"
                            data-wow-duration="2000ms"
                            data-wow-delay="800ms"
                        >
                            <div className="icon">
                                <i className="fa-regular fa-calendar-check text-white img-icon-services"></i>
                                <span>4</span>
                            </div>
                            <h4 className="appie-title">{t("foydalanish")}</h4>
                            <p>{t("foydalanish_text")}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ServicesHomeOne;
