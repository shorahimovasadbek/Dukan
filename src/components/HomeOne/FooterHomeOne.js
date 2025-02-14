import React from 'react';
import { useLocation } from 'react-router-dom/cjs/react-router-dom';
import logo from '../../assets/newImages/logo/dukan-inverse.png';
import { useTranslation } from 'react-i18next';

function FooterHomeOne({ className }) {
    const {t} = useTranslation()
    const location = useLocation()
    const isHome = location.pathname == "/"
    return (
        <>
            <section className={`appie-footer-area ${className || ''}`} id='footer'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="footer-about-widget">
                                <div className="logo">
                                    <a href="#">
                                        <img src={logo} alt="" />
                                    </a>
                                </div>
                                <div className="social mt-30">
                                    <ul>
                                        <li>
                                            <a href="https://t.me/dukan_platform" target='blank_'>
                                                <i className="fa-brands fa-telegram"></i>   
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/dukan_platform/" target='blank_'>
                                                <i className="fa-brands fa-square-instagram"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.facebook.com/dukan.platform" target='blank_'>
                                                <i className="fa-brands fa-facebook"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a target='blank_' href="https://www.youtube.com/@al-raqam">
                                                <i className="fa-brands fa-youtube"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.linkedin.com/showcase/dukan-platform/" target='blank_'>
                                                <i className="fa-brands fa-linkedin"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6">
                            <div className="footer-navigation">
                                <h4 className="title">{t("kompaniya")}</h4>
                                <ul>
                                    <li>
                                        <a href={`${isHome ? "/team" : "/"}`}>{t("team")}</a>
                                    </li>
                                    <li>
                                        <a href={`${isHome ? "/blogs" : "/"}`}>{t("blog")}</a>
                                    </li>
                                    <li>
                                        <a href={`${isHome ? "#contact_" : "/"}`}>{t("contact")}</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-navigation">
                                <h4 className="title">DUKAN</h4>
                                <ul>
                                    <li>
                                        <a href={`${isHome ? "#industries" : "/"}`}>{t("industry")}</a>
                                    </li>
                                    <li>
                                        <a href={`${isHome ? "#facilities" : "/"}`}>{t("xususiyatlar")}</a>
                                    </li>
                                    <li>
                                        <a href={`${isHome ? "#pricing" : "/"}`}>{t("prices")}</a>
                                    </li>
                                    <li>
                                        <a href={`${isHome ? "#faqs" : "/"}`}>TTS</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-widget-info">
                                <h4 className="title">{t("with_contact")}</h4>
                                <ul>
                                    <li>
                                        <a href="mailto:sales@al-raqam.com">
                                            <i className="fal fa-envelope" /> info@al-raqam.com
                                        </a>
                                    </li>
                                    <li>
                                        <a href="tel:+998555131110">
                                            <i className="fal fa-phone" /> +998 55 513 11 10
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://yandex.com/maps/org/al_raqam_hub/28472095891/?ll=69.284839%2C41.355372&z=17" target="_blank">
                                            <i className="fal fa-map-marker-alt" /> {t("location")}
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://al-raqam.com/" target='_blank'>
                                            <i className="fa-solid fa-laptop" /> {t("by_companiya")}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="footer-copyright d-flex align-items-center justify-content-between pt-35">
                                <div className="apps-download-btn">
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-apple" /> App store
                                            </a>
                                        </li>
                                        <li>
                                            <a className="item-2" target='_blank' href="https://play.google.com/store/apps/details?id=com.alraqam.dukan">
                                                <i className="fab fa-google-play" /> Play market
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="copyright-text">
                                    <p>{t("huquq")}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default FooterHomeOne;
