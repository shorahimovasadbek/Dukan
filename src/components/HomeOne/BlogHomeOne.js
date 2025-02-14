import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import img1 from "../../assets/newImages/blogs/bloghead1.webp";
import img2 from "../../assets/newImages/blogs/bloghead2.jpg";
import img3 from "../../assets/newImages/blogs/bloghead3.jpg";
import img4 from "../../assets/newImages/blogs/bloghead4.jpg";

function BlogHomeOne({ className, dark }) {
    const data = [
        {
            id:"to'liq_elektron_seo_qo'llanmasi",
            title:"Toʻliq elektron tijorat SEO qoʻllanmasi (2025)",
            img:img1,
            time:"Mart 10, 2025",
            type:"Saas & App"
        },
        {
            id:"kichik_biznes_grantlar_2025",
            title:"2025 yilda moliyalashtirishni qayerdan olish mumkin",
            img:img2,
            time:"Mart 14, 2025",
            type:"Saas & App"
        },
        {
            id:"elektron_tijorat",
            title:"Elektron tijorat",
            img:img3,
            time:"Mart 20, 2025",
            type:"Saas & App"
        },
        {
            id:"domenlar_va_veb_sayt_hosting",
            title:"Domenlar va veb-sayt hosting",
            img:img4,
            time:"Mart 22, 2025",
            type:"Saas & App"
        },
    ]
    return (
        <>
            <section id='blogs' className={`appie-blog-area pt-90 pb-95 ${className || ''}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="appie-section-title text-center">
                                <h3 className="appie-title">Blog postlar</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {data.map(d =>{
                            return (
                                <div className="col-lg-3 col-md-6" key={d.id}>
                                    <div
                                        className="appie-blog-item mt-30 wow animated fadeInUp"
                                        data-wow-duration="3000ms"
                                        data-wow-delay="200ms"
                                    >
                                        <div className="thumb">
                                            <img src={d.img} alt="" />
                                        </div>
                                        <div className="content">
                                            <div className="blog-meta">
                                                <ul>
                                                    <li>{d.time}</li>
                                                    <li>
                                                        <a href="#">{d.type}</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <h3 className="title">
                                                <Link to={`/blogs/blog/${d.id}`}>
                                                    {d.title}
                                                </Link>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                        <div className={`col-12 all-blogs ${dark ? "dark" : ""}`}>
                            <Link to="/blogs">
                                <button>Yana</button>    
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default BlogHomeOne;
