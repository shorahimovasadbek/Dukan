import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom/cjs/react-router-dom';

function Navigation({ lang = false }) {
    const location = useLocation()
    const isHome = location.pathname == "/"
    const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const navbarHeight = 120
      let currentSectionId = '';

      sections.forEach(section => {
        const sectionTop = section.offsetTop - navbarHeight;
        const sectionHeight = section.clientHeight;

        if (
          window.pageYOffset >= sectionTop &&
          window.pageYOffset < sectionTop + sectionHeight + 150
        ) {
          currentSectionId = section.id;
        }
      });
      setActiveSection(currentSectionId);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

    return (
        <>
            {lang ? (
                <ul>
                    <li>
                        <a href="#">
                            أنا <i className="fal fa-angle-down" />
                        </a>
                        <ul className="sub-menu">
                            <li>
                                <Link to="/">الصفحة الرئيسية 1</Link>
                            </li>
                            <li>
                                <Link to="/home-two">الصفحة الرئيسية 2</Link>
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
                                <Link to="/home-six">الصفحة الرئيسية 6</Link>
                            </li>
                            <li>
                                <Link to="/home-seven">المنزل 7</Link>
                            </li>
                            <li>
                                <Link to="/home-eight">الصفحة الرئيسية 8</Link>
                            </li>
                            <li>
                                <Link to="/home-dark">الصفحة الرئيسية الظلام</Link>
                            </li>
                            <li>
                                <Link to="/home-rtl">الصفحة الرئيسية Rtl</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link to="/service">خدمة</Link>
                    </li>
                    <li>
                        <a href="#">
                            الصفحات <i className="fal fa-angle-down" />
                        </a>
                        <ul className="sub-menu">
                            <li>
                                <Link to="/about-us">عن</Link>
                            </li>
                            <li>
                                <Link to="/error">خطأ</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">
                            أخبار <i className="fal fa-angle-down" />
                        </a>
                        <ul className="sub-menu">
                            <li>
                                <Link to="/news">صفحة الأخبار </Link>
                            </li>
                            <li>
                                <Link to="/news/single-news">أخبار واحدة</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link to="/contact">اتصل</Link>
                    </li>
                </ul>
            ) : (
                <ul>
                    <li>
                        <a href={`${isHome ? "#industries" : "/#industries"}`} className={activeSection == "industries" ? "active" : ""}>Sohalar</a>
                    </li>
                    {/* <li>
                        <a href={`${isHome ? "#about-us" : "/#about-us"}`} className={activeSection == "about-us" ? "active" : ""}>Biz haqimizda</a>
                    </li>
                    <li>
                        <a href={`${isHome ? "#team" : "/#team"}`} className={activeSection == "team" ? "active" : ""}>Jamoamiz</a>
                    </li> */}
                    <li>
                        <a href={`${isHome ? "#pricing" : "/#pricing"}`} className={activeSection == "pricing" ? "active" : ""}>Narxlar</a>
                    </li>
                    <li>
                        <a href={`${isHome ? "/blogs" : "/blogs"}`} className={activeSection == "blogs" ? "active" : ""}>Blog</a>
                    </li>
                    <li>
                        <a href={`${isHome ? "#contact_" : "/#contact_"}`} className={activeSection == "contact_" ? "active" : ""}>Aloqa</a>
                    </li>
                </ul>
            )}
        </>
    );
}

export default Navigation;
