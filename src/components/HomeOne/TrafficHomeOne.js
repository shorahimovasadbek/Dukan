import React from 'react';
import thumb from "../../assets/newImages/features/features1.png";
import imgpartner1 from '../../assets/newImages/partner1.jpg'
import imgpartner2 from '../../assets/newImages/partner2.jpg'
import { useTranslation } from 'react-i18next';

function TrafficHomeOne({ className }) {
    const {t} = useTranslation()
    return (
        <section className={`appie-traffic-area pt-140 pb-180 ${className || ''}`} id='facilities'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="appie-traffic-title">
                            {/* <span>Traffic</span> */}
                            <h3 className="title">{t("xususiyat")}</h3>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <div className="appie-traffic-service mb-30">
                                    <div className="icon">
                                        <i className="fal fa-check" />
                                    </div>
                                    <h5 className="title">{t("hamkor")}</h5>
                                    <p> {t("hamkor_text")}</p>
                                    <div className='d-flex partner_content'>
                                        <img src={imgpartner1}/>
                                        <img className='ms-3' src={imgpartner2}/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="appie-traffic-service item-2 mb-30">
                                    <div className="icon">
                                        <i className="fal fa-check" />
                                    </div>
                                    <h5 className="title">{t("xizmat")}</h5>
                                    <p>{t("xizmat_text")}</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="appie-traffic-service item-3 mb-30">
                                    <div className="icon">
                                        <i className="fal fa-check" />
                                    </div>
                                    <h5 className="title">{t("moslashish")}</h5>
                                    <p>{t("moslashish_text")}</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="appie-traffic-service item-4">
                                    <div className="icon">
                                        <i className="fal fa-check" />
                                    </div>
                                    <h5 className="title">{t("obuna")}</h5>
                                    <p>{t("obuna_text")}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="traffic-thumb ">
                <img
                    className="wow animated fadeInRight"
                    data-wow-duration="2000ms"
                    data-wow-delay="200ms"
                    src={thumb}
                    alt=""
                />
            </div>
        </section>
    );
}

export default TrafficHomeOne;
