import React, { useState } from 'react';
import teamOne from '../../assets/newImages/abdufattoh.jpg';
import teamSeven from '../../assets/newImages/ahror.jpg';
import teamFive from '../../assets/newImages/asadbek.jpg';
import teamThree from '../../assets/newImages/doniyor.jpg';
import teamEight from '../../assets/newImages/hakimjon.jpg';
import teamFour from '../../assets/newImages/sardor.jpg';
import teamTwo from '../../assets/newImages/sherzod.jpg';
import teamSix from '../../assets/newImages/tohir.jpg';

function TeamHomeOne({ className,dark }) {

    const data = [
        {
            id:1,
            img:teamOne,
            name:"Abdufattoh Abdurahmonov",
            role:"Project Manager"
        },
        {
            id:2,
            img:teamTwo,
            name:"Sherzod Abdujalilov",
            role:"UI/UX designer"
        },
        {
            id:3,
            img:teamThree,
            name:"Doniyor Ashiraliyev",
            role:"Mobile developer"
        },
        {
            id:4,
            img:teamFour,
            name:"Sardor Sattorov",
            role:"Mobile developer"
        },
        {
            id:5,
            img:teamFive,
            name:"Asadbek Shorahimov",
            role:"Frontend developer"
        },
        {
            id:6,
            img:teamSix,
            name:"Tohir Bahromov",
            role:"Frontend developer"
        },
        {
            id:7,
            img:teamSeven,
            name:"Ahrorbek Abduvahobov",
            role:"Frontend developer"
        },
        {
            id:8,
            img:teamEight,
            name:"Abduhakim Karimov",
            role:"Backend developer"
        },
    ]

    const [active,setActive] = useState(true)

    const handleScroll = () => {
        setActive(prev => !prev)
    }

    return (
        <>
            <section className={`appie-team-area pt-90 pb-100 ${className || ''}`} id='team'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="appie-section-title text-center">
                                <h3 className="appie-title">Bizning jamoa</h3>
                                <p>Jamoamizni tashkil etuvchi shaxslar bilan tanishing.</p>
                            </div>
                        </div>
                    </div>
                    <div className={`row team-row ${dark ? "dark" : ""}`}>
                        <div className="mobile">
                            {data.map((d,i) => {
                                return (
                                    <div className="col-lg-3 col-md-6 item" key={i}>
                                        <div
                                            className="appie-team-item mt-30 wow animated fadeInUp"
                                            data-wow-duration="2000ms"
                                            data-wow-delay="200ms"
                                        >
                                            <div className="thumb">
                                                <img src={d.img} loading='lazy' alt="" className='lazy-load-img' />
                                            </div>
                                            <div className="content text-center">
                                                <h5 className="title">{d.name}</h5>
                                                <span>{d.role}</span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="carouse_scroller" style={{transform: active ? "translateX(0)" : "translateX(-100%)"}}>
                            {data.map(d => {
                                return (
                                    <div className="col-lg-3 col-md-6" key={d.id}>
                                        <div
                                            className="appie-team-item mt-30 wow animated fadeInUp"
                                            data-wow-duration="2000ms"
                                            data-wow-delay="200ms"
                                        >
                                            <div className="thumb">
                                                <img src={d.img} alt="" loading='lazy' />
                                            </div>
                                            <div className="content text-center">
                                                <h5 className="title">{d.name}</h5>
                                                <span>{d.role}</span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="left" onClick={handleScroll}><i class="fa-solid fa-chevron-left"></i></div>
                        <div className="right" onClick={handleScroll}><i class="fa-solid fa-chevron-right"></i></div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default TeamHomeOne;
