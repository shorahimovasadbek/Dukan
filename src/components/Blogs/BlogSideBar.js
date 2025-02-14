import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import BlogImg1 from '../../assets/newImages/blogs/bloghead1.webp';
import BlogImg2 from '../../assets/newImages/blogs/bloghead2.jpg';
import BlogImg3 from '../../assets/newImages/blogs/bloghead3.jpg';
import BlogImg4 from '../../assets/newImages/blogs/bloghead4.jpg';
import { useTranslation } from 'react-i18next';

function BlogSideBar() {
    const {t} = useTranslation()
    const data = [
        {
            id:"to'liq_elektron_seo_qo'llanmasi",
            title:t("qo'llanma1"),
            img:BlogImg1,
            time:t("time1"),
            type:"Saas & App",
            comments:"6"
        },
        {
            id:"kichik_biznes_grantlar_2025",
            title:t("qo'llanma2"),
            img:BlogImg2,
            time:t("time2"),
            type:"Saas & App",
            comments:"3"
        },
        {
            id:"elektron_tijorat",
            title:t("qo'llanma3"),
            img:BlogImg3,
            time:t("time3"),
            type:"Saas & App",
            comments:"11"
        },
        {
            id:"domenlar_va_veb_sayt_hosting",
            title:t("qo'llanma4"),
            img:BlogImg4,
            time:t("time4"),
            type:"Saas & App",
            comments:"2"
        },
    ]
    return (
        <div className="blog-sidebar">
            <aside className="widget widget-search">
                <form className="search-form" action="#" method="post">
                    <input type="search" name="s" placeholder={t("qidiring")} />
                    <button type="submit">
                        <i className="fal fa-search"></i>
                    </button>
                </form>
            </aside>
            <aside className="widget widget-categories">
                <h3 className="widget-title">{t("kategoriyalar")}</h3>
                <ul>
                    <li>
                        <a href="#">{t("veb")}</a>
                        <span>(24)</span>
                    </li>
                    <li>
                        <a href="#">{t("marketing")}</a>
                        <span>(15)</span>
                    </li>
                    <li>
                        <a href="#">{t("frontend")}</a>
                        <span>(8)</span>
                    </li>
                    <li>
                        <a href="#">IT & Software</a>
                        <span>(13)</span>
                    </li>
                    <li>
                        <a href="#">{t("foto")}</a>
                        <span>(4)</span>
                    </li>
                    <li>
                        <a href="#">{t("texnologiya")}</a>
                        <span>(16)</span>
                    </li>
                    <li>
                        <a href="#">{t("umumiy")}</a>
                        <span>(12)</span>
                    </li>
                </ul>
            </aside>
            <aside className="widget widget-trend-post">
                <h3 className="widget-title">{t("mashxur")}</h3>
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
        </div>
    );
}

export default BlogSideBar;