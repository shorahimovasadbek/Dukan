import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import img1 from "../../assets/newImages/blogs/bloghead1.webp";
import img2 from "../../assets/newImages/blogs/bloghead2.jpg";
import img3 from "../../assets/newImages/blogs/bloghead3.jpg";
import img4 from "../../assets/newImages/blogs/bloghead4.jpg";
import { useTranslation } from 'react-i18next';

function AllBlogs() {
    const {t} = useTranslation()
    const data = [
        {
            id:"to'liq_elektron_seo_qo'llanmasi",
            title:t("qo'llanma1"),
            img:img1,
            time:t("time1"),
            type:"Saas & App",
            comments:"6"
        },
        {
            id:"kichik_biznes_grantlar_2025",
            title:t("qo'llanma2"),
            img:img2,
            time:t("time2"),
            type:"Saas & App",
            comments:"3"
        },
        {
            id:"elektron_tijorat",
            title:t("qo'llanma3"),
            img:img3,
            time:t("time3"),
            type:"Saas & App",
            comments:"11"
        },
        {
            id:"domenlar_va_veb_sayt_hosting",
            title:t("qo'llanma4"),
            img:img4,
            time:t("time4"),
            type:"Saas & App",
            comments:"2"
        },
    ]
    return (
        <>
            <div className="row">
                {data.map(d => {
                    return (
                        <div className="col-lg-6" key={d.id}>
                            <div className="post-item-1">
                                <img src={d.img} alt="" className='lazy-load-img' />
                                <div className="b-post-details">
                                    <div className="bp-meta">
                                        <a href="#">
                                            <i className="fal fa-clock"></i>{d.time}
                                        </a>
                                    </div>
                                    <h3>
                                        <Link to={`/blogs/blog/${d.id}`}>
                                            {d.title}
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    );
}

export default AllBlogs;