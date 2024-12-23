import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import img1 from "../../assets/newImages/blogs/bloghead1.webp";
import img2 from "../../assets/newImages/blogs/bloghead2.jpg";
import img3 from "../../assets/newImages/blogs/bloghead3.jpg";
import img4 from "../../assets/newImages/blogs/bloghead4.jpg";

function AllBlogs() {
    const data = [
        {
            id:"to'liq_elektron_seo_qo'llanmasi",
            title:"Toʻliq elektron tijorat SEO qoʻllanmasi (2024)",
            img:img1,
            time:"Mart 10, 2024",
            type:"Saas & App",
            comments:"6"
        },
        {
            id:"kichik_biznes_grantlar_2024",
            title:"2024 yilda moliyalashtirishni qayerdan olish mumkin",
            img:img2,
            time:"Mart 14, 2024",
            type:"Saas & App",
            comments:"3"
        },
        {
            id:"elektron_tijorat",
            title:"Elektron tijorat",
            img:img3,
            time:"Mart 20, 2024",
            type:"Saas & App",
            comments:"11"
        },
        {
            id:"domenlar_va_veb_sayt_hosting",
            title:"Domenlar va veb-sayt hosting",
            img:img4,
            time:"Mart 22, 2024",
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
                                        {/* <a href="#">
                                            <i className="fal fa-comments"></i>{d.comments} izohlar
                                        </a> */}
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
            {/* <div className="row">
                <div className="col-lg-12">
                    <div className="bisylms-pagination">
                        <span className="current">01</span>
                        <a href="#">02</a>
                        <a className="next" href="#">
                            next<i className="fal fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </div> */}
        </>
    );
}

export default AllBlogs;