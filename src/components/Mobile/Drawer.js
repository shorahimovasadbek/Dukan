import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom/cjs/react-router-dom';
import logo from '../../assets/newImages/logo/dukan-inverse.png';

function Drawer({ drawer, action, lang }) {
    const location = useLocation()
    const isHome = location.pathname == "/"
    const [itemSize, setSize] = useState('0px');
    const [item, setItem] = useState('home');
    const handler = (e, value) => {
        // e.preventDefault();
        const getItems = document.querySelectorAll(`#${value} li`).length;
        if (getItems > 0) {
            setSize(`${43 * getItems}px`);
            setItem(value);
        }
    };
    return (
        <>
            {lang ? (
                <>
                    <div
                        onClick={(e) => action(e)}
                        className={`off_canvars_overlay ${drawer ? 'active' : ''}`}
                    ></div>
                    <div className="offcanvas_menu">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-12">
                                    <div
                                        className={`offcanvas_menu_wrapper ${
                                            drawer ? 'active' : ''
                                        }`}
                                    >
                                        <div className="canvas_close">
                                            <a href="#" onClick={(e) => action(e)}>
                                                <i className="fa fa-times"></i>
                                            </a>
                                        </div>
                                        <div className="offcanvas-brand text-center mb-40">
                                            <img src={logo} alt="" />
                                        </div>
                                        <div id="menu" className="text-left ">
                                            <ul className="offcanvas_main_menu">
                                                <li
                                                    onClick={(e) => handler(e, 'home')}
                                                    id="home"
                                                    className="menu-item-has-children active"
                                                >
                                                    <span className="menu-expand">
                                                        <i className="fa fa-angle-down"></i>
                                                    </span>
                                                    <a href="#">أنا</a>
                                                    <ul
                                                        className="sub-menu"
                                                        style={{
                                                            height:
                                                                item === 'home' ? itemSize : '0px',
                                                        }}
                                                    >
                                                        <li>
                                                            <Link to="/">الصفحة الرئيسية 1</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/home-two">
                                                                الصفحة الرئيسية 2
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/home-three">المنزل 3</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/home-four">المنزل 4</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/home-five">المنزل 5</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/home-six">
                                                                الصفحة الرئيسية 6
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/home-seven">المنزل 7</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/home-eight">
                                                                الصفحة الرئيسية 8
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/home-dark">
                                                                الصفحة الرئيسية الظلام
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/home-rtl">
                                                                الصفحة الرئيسية Rtl
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li
                                                    onClick={(e) => handler(e, 'service')}
                                                    id="service"
                                                    className="menu-item-has-children active"
                                                >
                                                    <Link to="/service">خدمة</Link>
                                                </li>
                                                <li
                                                    onClick={(e) => handler(e, 'pages')}
                                                    id="pages"
                                                    className="menu-item-has-children active"
                                                >
                                                    <span className="menu-expand">
                                                        <i className="fa fa-angle-down"></i>
                                                    </span>
                                                    <a href="#">الصفحات</a>
                                                    <ul
                                                        className="sub-menu"
                                                        style={{
                                                            height:
                                                                item === 'pages' ? itemSize : '0px',
                                                        }}
                                                    >
                                                        <ul className="sub-menu">
                                                            <li>
                                                                <Link to="/about-us">عن</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/error">خطأ</Link>
                                                            </li>
                                                        </ul>
                                                    </ul>
                                                </li>
                                                <li
                                                    onClick={(e) => handler(e, 'news')}
                                                    id="news"
                                                    className="menu-item-has-children active"
                                                >
                                                    <span className="menu-expand">
                                                        <i className="fa fa-angle-down"></i>
                                                    </span>
                                                    <a href="#">أخبار</a>
                                                    <ul
                                                        className="sub-menu"
                                                        style={{
                                                            height:
                                                                item === 'news' ? itemSize : '0px',
                                                        }}
                                                    >
                                                        <ul className="sub-menu">
                                                            <li>
                                                                <Link to="/news">
                                                                    صفحة الأخبار{' '}
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/news/single-news">
                                                                    أخبار واحدة
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </ul>
                                                </li>
                                                <li
                                                    onClick={(e) => handler(e, 'contact')}
                                                    id="contact"
                                                    className="menu-item-has-children active"
                                                >
                                                    <Link to="/contact">اتصل</Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="offcanvas-social">
                                            <ul className="text-center">
                                                <li>
                                                    <a href="$">
                                                        <i className="fab fa-facebook-f"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="$">
                                                        <i className="fab fa-twitter"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="$">
                                                        <i className="fab fa-instagram"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="$">
                                                        <i className="fab fa-dribbble"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="footer-widget-info">
                                            <ul>
                                                <li>
                                                    <a href="#">
                                                        <i className="fal fa-envelope"></i>{' '}
                                                        support@appie.com
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fal fa-phone"></i> +(642) 342
                                                        762 44
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fal fa-map-marker-alt"></i>{' '}
                                                        442 Belle Terre St Floor 7, San Francisco,
                                                        AV 4206
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div
                        onClick={(e) => action(e)}
                        className={`off_canvars_overlay ${drawer ? 'active' : ''}`}
                    ></div>
                    <div className="offcanvas_menu">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-12">
                                    <div
                                        className={`offcanvas_menu_wrapper ${
                                            drawer ? 'active' : ''
                                        }`}
                                    >
                                        <div className="canvas_close">
                                            <a href="#" onClick={(e) => action(e)}>
                                                <i className="fa fa-times"></i>
                                            </a>
                                        </div>
                                        <div className="offcanvas-brand text-center mb-40">
                                            <img src={logo} alt="" />
                                        </div>
                                        <div id="menu" className="text-left ">
                                            <ul className="offcanvas_main_menu">
                                                <li
                                                    onClick={(e) => handler(e, 'news')}
                                                    id="news"
                                                    className="menu-item-has-children active"
                                                >
                                                    <a href={`${isHome ? "#industries" : "/#industries"}`}>Sohalar</a>
                                                </li>
                                                <li
                                                    onClick={(e) => handler(e, 'news')}
                                                    id="news"
                                                    className="menu-item-has-children active"
                                                >
                                                    <a href={`${isHome ? "#about-us" : "/#about-us"}`}>Biz haqimizda</a>
                                                </li>
                                                <li
                                                    onClick={(e) => handler(e, 'pages')}
                                                    id="pages"
                                                    className="menu-item-has-children active"
                                                >
                                                    <a href={`${isHome ? "#team" : "/#team"}`}>Bizning jamoa</a>
                                                </li>
                                                <li
                                                    onClick={(e) => handler(e, 'contact')}
                                                    id="contact"
                                                    className="menu-item-has-children active"
                                                >
                                                    <a href={`${isHome ? "#pricing" : "/#pricing"}`}>Narxlar</a>
                                                </li>
                                                <li
                                                    onClick={(e) => handler(e, 'contact')}
                                                    id="contact"
                                                    className="menu-item-has-children active"
                                                >
                                                    <a href={`${isHome ? "#contact_" : "/#contact_"}`}>Aloqa</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="offcanvas-social">
                                            <ul className="text-center">
                                                <li>
                                                    <a href="https://t.me/dukan_platform" target='blank_'>
                                                        <i className="fa-brands fa-telegram"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://www.instagram.com/dukan_platform/" target='blank_'>
                                                        <i className="fab fa-instagram"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://www.facebook.com/dukan.platform" target='blank_'>
                                                        <i className="fab fa-facebook-f"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://www.youtube.com/@al-raqam" target='blank_'>
                                                        <i className="fab fa-youtube"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://www.linkedin.com/showcase/dukan-platform/" target='blank_'>
                                                        <i className="fa-brands fa-linkedin"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="footer-widget-info">
                                            <ul>
                                                <li>
                                                    <a href="mailto:alraqam@al-raqam.com">
                                                        <i className="fal fa-envelope"></i>{' '}
                                                        alraqam@al-raqam.com
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="tel:+998333138222">
                                                        <i className="fal fa-phone"></i> +998 33 313-82-22
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fal fa-map-marker-alt"></i>{' '}
                                                        Toshkent sh. Yunusobod tumani, Anorzor mahallasi, Oqilota ko'chasi
                                                        26-11. 100099
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://al-raqam.com/">
                                                        <i className="fa-solid fa-laptop" />al-raqam.com
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}

export default Drawer;
