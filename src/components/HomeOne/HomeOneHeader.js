import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom/cjs/react-router-dom';
import logodark from '../../assets/newImages/logo/dukan-inverse.png';
import StickyMenu from '../../lib/StickyMenu';
import Navigation from '../Navigation';

function HomeOneHeader({
    lang,
    darkEnable = false,
    action,
    langEnabled = false,
    changeMode,
    changeModeLan,
    dark,
    className,
}) {
    useEffect(() => {
        StickyMenu();
    });
    const location = useLocation()
    const isBlogs = location.pathname == "/blogs" || location.pathname.split("/")[2] == "blog"
    return (
        <header className={`appie-header-area ${isBlogs ? "appie-header-page-area" : ""} appie-sticky ${className || ''}`}>
            <div className="container">
                <div className="header-nav-box">
                    <div className="row align-items-center">
                        <div className="col-lg-2 col-md-4 col-sm-5 col-6 order-1 order-sm-1">
                            <div className="appie-logo-box">
                                {darkEnable && dark ? (
                                    <a href="/">
                                        <img src={logodark} alt="" />
                                    </a>
                                ) : (
                                    <a href="/">
                                        <img src={logodark} alt="" />
                                    </a>
                                )}
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-1 col-sm-1 order-3 order-sm-2 links-header">
                            <div className={`appie-header-main-menu ${isBlogs ? "not-home" : ""}`}>
                                <Navigation />
                            </div>
                        </div>
                        <div className="col-lg-4  col-md-7 col-sm-6 col-6 order-2 order-sm-3">
                            <div className="appie-btn-box text-right">
                                <a href="tel:+998333138222" className='header-num'>
                                    <i className="fal fa-phone" /> +998 55 513 11 10
                                </a>
                                {langEnabled &&
                                    (lang ? (
                                        <span
                                            className="align-content-center ml-3"
                                            onClick={(e) => changeModeLan(e)}
                                        >
                                            RTL
                                        </span>
                                    ) : (
                                        <span
                                            className="align-content-center mr-3"
                                            onClick={(e) => changeModeLan(e)}
                                        >
                                            LTR
                                        </span>
                                    ))}
                                <a className={`main-btn ml-30`} href="/#contact_">
                                    Buyurtma berish
                                </a>
                                <div
                                    onClick={(e) => action(e)}
                                    className={`toggle-btn ml-30 canvas_open d-lg-none d-block ${isBlogs || dark ? "dark" : ""}`}
                                >
                                    <i className={`fa fa-bars ${isBlogs ? "dark-hamburger" : ""}`} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default HomeOneHeader;
