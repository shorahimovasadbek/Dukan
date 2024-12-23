import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import BlogImg1 from '../../assets/newImages/blogs/bloghead1.webp';
import BlogImg2 from '../../assets/newImages/blogs/bloghead2.jpg';
import BlogImg3 from '../../assets/newImages/blogs/bloghead3.jpg';
import BlogImg4 from '../../assets/newImages/blogs/bloghead4.jpg';

function BlogSideBar() {
    const data = [
        {
            id:"to'liq_elektron_seo_qo'llanmasi",
            title:"Toʻliq elektron tijorat SEO qoʻllanmasi (2024)",
            img:BlogImg1,
            time:"Mart 10, 2024",
            type:"Saas & App",
            comments:"6"
        },
        {
            id:"kichik_biznes_grantlar_2024",
            title:"2024 yilda moliyalashtirishni qayerdan olish mumkin",
            img:BlogImg2,
            time:"Mart 14, 2024",
            type:"Saas & App",
            comments:"3"
        },
        {
            id:"elektron_tijorat",
            title:"Elektron tijorat",
            img:BlogImg3,
            time:"Mart 20, 2024",
            type:"Saas & App",
            comments:"11"
        },
        {
            id:"domenlar_va_veb_sayt_hosting",
            title:"Domenlar va veb-sayt hosting",
            img:BlogImg4,
            time:"Mart 22, 2024",
            type:"Saas & App",
            comments:"2"
        },
    ]
    return (
        <div className="blog-sidebar">
            <aside className="widget widget-search">
                <form className="search-form" action="#" method="post">
                    <input type="search" name="s" placeholder="Qidiring..." />
                    <button type="submit">
                        <i className="fal fa-search"></i>
                    </button>
                </form>
            </aside>
            <aside className="widget widget-categories">
                <h3 className="widget-title">Kategoriyalar</h3>
                <ul>
                    <li>
                        <a href="#">Veb dizayn</a>
                        <span>(24)</span>
                    </li>
                    <li>
                        <a href="#">Marketing</a>
                        <span>(15)</span>
                    </li>
                    <li>
                        <a href="#">Frontend</a>
                        <span>(8)</span>
                    </li>
                    <li>
                        <a href="#">IT & Software</a>
                        <span>(13)</span>
                    </li>
                    <li>
                        <a href="#">Fotografiya</a>
                        <span>(4)</span>
                    </li>
                    <li>
                        <a href="#">Texnologiya</a>
                        <span>(16)</span>
                    </li>
                    <li>
                        <a href="#">Umumiy</a>
                        <span>(12)</span>
                    </li>
                </ul>
            </aside>
            <aside className="widget widget-trend-post">
                <h3 className="widget-title">Mashxur postlar</h3>
                {data.map(item => {
                    return (
                        <div className="popular-post">
                            <Link to={`/blogs/blog/${item.id}`}>
                                <img src={item.img} alt="" />
                            </Link>
                            <h5>
                                <Link to={`blogs/blog/${item.id}`}>{item.title}</Link>
                            </h5>
                            <span>{item.time}</span>
                        </div>
                    )
                })}
            </aside>
            {/* <aside className="widget">
                <h3 className="widget-title">Popular Tags</h3>
                <div className="tags">
                    <a href="#">Bisy LMS</a>
                    <a href="#">Design</a>
                    <a href="#">General</a>
                    <a href="#">Online</a>
                    <a href="#">Prevention</a>
                    <a href="#">Artist</a>
                    <a href="#">Education</a>
                    <a href="#">Motivation</a>
                    <a href="#">Politico</a>
                    <a href="#">Live Cases</a>
                </div>
            </aside> */}
        </div>
    );
}

export default BlogSideBar;