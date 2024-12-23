import React, { useState } from 'react';
import img from '../../assets/images/hero-thumb-1.png';
// import teamSeven from '../../assets/newImages/ahror.jpg';
// import teamFive from '../../assets/newImages/asadbek.jpg';
// import teamThree from '../../assets/newImages/doniyor.jpg';
// import teamEight from '../../assets/newImages/hakimjon.jpg';
// import teamFour from '../../assets/newImages/sardor.jpg';
// import teamTwo from '../../assets/newImages/sherzod.jpg';
// import teamSix from '../../assets/newImages/tohir.jpg';

function Industries({ className,dark }) {

    const data = [
        {
            id:1,
            img:img,
            name:"Mebel",
        },
        {
            id:2,
            img:img,
            name:"Restoran",
        },
        {
            id:3,
            img:img,
            name:"Konstovar",
        },
        {
            id:4,
            img:img,
            name:"Elektronika",
        },
        {
            id:5,
            img:img,
            name:"Gulchilar",
        },
        {
            id:6,
            img:img,
            name:"Perfume/Kosmetika",
        },
        {
            id:7,
            img:img,
            name:"Maishiy texnika",
        },
        {
            id:8,
            img:img,
            name:"Kiyim/Butik",
        },
        {
          id:9,
          img:img,
          name:"Sport",
        },
        {
          id:10,
          img:img,
          name:"Uy-ro'zg'or buyumlari",
        },
        {
          id:11,
          img:img,
          name:"Santexnika",
        },
        {
          id:12,
          img:img,
          name:"O'yinchoqlar",
        },
        {
          id:13,
          img:img,
          name:"Yoritish moslamasi",
        },
        {
          id:14,
          img:img,
          name:"Qurilish materiallari",
        },
        {
          id:15,
          img:img,
          name:"Novostroyka",
        },
        {
          id:16,
          img:img,
          name:"Avtosalon",
        },
        {
          id:17,
          img:img,
          name:"Parda va Jalyuzilar",
        },
        {
          id:18,
          img:img,
          name:"Gilamlar",
        },
        {
          id:19,
          img:img,
          name:"Rent Car",
        },
        {
          id:20,
          img:img,
          name:"Optika",
        },
        {
          id:21,
          img:img,
          name:"Antikvar/Suvenirlar",
        },
        {
          id:22,
          img:img,
          name:"Oshxona idishlari",
        },
        {
          id:23,
          img:img,
          name:"Avto-aksessuarlar",
        },
    ]

    const [active,setActive] = useState(1)
    const [translate,setTranslate] = useState(0)
    const numPages = Math.round(data.length / 4)
      const slideRight = () => {
        if(active < numPages){
          setActive(active + 1) 
          setTranslate(translate - 100)
        }else{
          setActive(1)
          setTranslate(0)
        }
      }
      const slideLeft = () => {
        if(active == 1){
          setActive(numPages)
          setTranslate(-100 * (numPages - 1))
        }else{
          setActive(active - 1)
          setTranslate(translate + 100)
        }
      }

    return (
        <>
            <section className={`${dark ? "industries_section" : ""} ind-s appie-team-area pt-90 pb-100 ${className || ''}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="appie-section-title text-center">
                                <h3 className="appie-title">Sanoatlar</h3>
                            </div>
                        </div>
                    </div>
                    <div className={`row team-row ${dark ? "dark" : ""}`}>
                        <div className="mobile industry_mobile">
                            {data.map((d,i) => {
                                return (
                                    <div className="col-lg-3 col-md-6 item" key={i}>
                                        <div
                                            className="appie-team-item mt-30 wow animated fadeInUp"
                                            data-wow-duration="2000ms"
                                            data-wow-delay="200ms"
                                        >
                                            <div className="thumb">
                                                <img src={d.img} alt="" />
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
                        <div className="carouse_scroller" style={{transform: `translateX(${translate}%)`}}>
                            {data.map(d => {
                                return (
                                    <div className="col-lg-3 col-md-6" key={d.id}>
                                        <div
                                            className="appie-team-item mt-30 wow animated fadeInUp"
                                            data-wow-duration="2000ms"
                                            data-wow-delay="200ms"
                                        >
                                            <div className="thumb">
                                                <img src={img} alt="" />
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
                        <div className="left" onClick={slideLeft}><i class="fa-solid fa-chevron-left"></i></div>
                        <div className="right" onClick={slideRight}><i class="fa-solid fa-chevron-right"></i></div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Industries;