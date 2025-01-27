import React from 'react';
import { useLocation } from 'react-router-dom/cjs/react-router-dom';
import logo from '../../assets/newImages/logo/dukan-inverse.png';

function FooterHomeOne({ className }) {
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
                                <h4 className="title">Kompaniya</h4>
                                <ul>
                                    {/* <li>
                                        <a href={`${isHome ? "#features" : "/"}`}>Afzalliklarimiz</a>
                                    </li> */}
                                    {/* <li>
                                        <a href={`${isHome ? "#about-us" : "/"}`}>Biz haqimizda</a>
                                    </li> */}
                                    <li>
                                        <a href={`${isHome ? "/team" : "/"}`}>Jamoamiz</a>
                                    </li>
                                    <li>
                                        <a href={`${isHome ? "/blogs" : "/"}`}>Blog</a>
                                    </li>
                                    <li>
                                        <a href={`${isHome ? "#contact_" : "/"}`}>Aloqa</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-navigation">
                                <h4 className="title">DUKAN</h4>
                                <ul>
                                    <li>
                                        <a href={`${isHome ? "#industries" : "/"}`}>Sohalar</a>
                                    </li>
                                    <li>
                                        <a href={`${isHome ? "#facilities" : "/"}`}>Xususiyatlar</a>
                                    </li>
                                    {/* <li>
                                        <a href="#testimonial">Izohlar</a>
                                    </li> */}
                                    <li>
                                        <a href={`${isHome ? "#pricing" : "/"}`}>Narxlar</a>
                                    </li>
                                    <li>
                                        <a href={`${isHome ? "#faqs" : "/"}`}>TTS</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-widget-info">
                                <h4 className="title">Aloqa uchun</h4>
                                <ul>
                                    <li>
                                        <a href="mailto:sales@al-raqam.com">
                                            <i className="fal fa-envelope" /> sales@al-raqam.com
                                        </a>
                                    </li>
                                    <li>
                                        <a href="tel:+998333138222">
                                            <i className="fal fa-phone" /> +998 55 513 11 10
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fal fa-map-marker-alt" /> Toshkent sh. Yunusobod tumani, Anorzor mahallasi, Oqilota ko'chasi, 26-11. 100099
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://al-raqam.com/" target='_blank'>
                                            <i className="fa-solid fa-laptop" />al-raqam.com
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
                                    <p>Copyright © 2023 al-raqam. Barcha huquqlar himoyalangan.</p>
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
