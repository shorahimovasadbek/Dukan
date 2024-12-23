import React from 'react';
import thumb from "../../assets/newImages/features/features1.png";

function TrafficHomeOne({ className }) {
    return (
        <section className={`appie-traffic-area pt-140 pb-180 ${className || ''}`} id='facilities'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="appie-traffic-title">
                            {/* <span>Traffic</span> */}
                            <h3 className="title">Dukan xususiyatlari</h3>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <div className="appie-traffic-service mb-30">
                                    <div className="icon">
                                        <i className="fal fa-check" />
                                    </div>
                                    <h5 className="title">Hamkorlik va QR to'lov tizimi</h5>
                                    <p> Hamkorlik qilgan tijorat platformalari va QR to'lov tizimlarini qo'llash imkoniyati</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="appie-traffic-service item-2 mb-30">
                                    <div className="icon">
                                        <i className="fal fa-check" />
                                    </div>
                                    <h5 className="title">Onlayn qo'llanma va yordam</h5>
                                    <p>Yordam chat xizmati mijozlar uchun tezroq yordam olishni ta'minlaydi</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="appie-traffic-service item-3 mb-30">
                                    <div className="icon">
                                        <i className="fal fa-check" />
                                    </div>
                                    <h5 className="title">Mobil qurilma uchun moslamalar</h5>
                                    <p>Mobil qurilmalarda ham yaxshi ko'rinishini foydalanuvchilar uchun ta'minlash</p>
                                </div>
                            </div>
                            {/* <div className="col-lg-6 col-md-6">
                                <div className="appie-traffic-service item-4 mb-30">
                                    <div className="icon">
                                        <i className="fal fa-check" />
                                    </div>
                                    <h5 className="title">Produktlar xilma-xilligi</h5>
                                    <p>Har bir mahsulotning turli xususiyatli versiyalarini taqdim etish</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="appie-traffic-service mb-30">
                                    <div className="icon">
                                        <i className="fal fa-check" />
                                    </div>
                                    <h5 className="title">Yetkazib berishning qulay variantlari</h5>
                                    <p>Turli xil yetkazib berish variantlarini taklif qilish, jumladan, standart yuk, tezkor yuk va ba'zi hollarda, xuddi shu kun yoki keyingi kun.</p>
                                </div>
                            </div> */}
                            <div className="col-lg-6 col-md-6">
                                <div className="appie-traffic-service item-4">
                                    <div className="icon">
                                        <i className="fal fa-check" />
                                    </div>
                                    <h5 className="title">Obuna xizmatlari</h5>
                                    <p>Dukanning doimiy foydalanuvchilari uchun obuna servislari. Bu ularga mahsulot uchun ma'lum chegirma beradi!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="traffic-thumb ">
                <img
                    className="wow animated fadeInRight"
                    data-wow-duration="2000ms"
                    data-wow-delay="200ms"
                    src={thumb}
                    alt=""
                />
            </div>
        </section>
    );
}

export default TrafficHomeOne;
