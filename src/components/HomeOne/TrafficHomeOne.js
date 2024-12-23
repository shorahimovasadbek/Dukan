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
                                    <h5 className="title">Qo'shimcha hamkor platformalar bilan ishlash imkoniyati</h5>
                                    <p> Kerakli hamkor platformalar va to'lov tizimlari bilan ishlash imkoniyati</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="appie-traffic-service item-2 mb-30">
                                    <div className="icon">
                                        <i className="fal fa-check" />
                                    </div>
                                    <h5 className="title">Qo'llab-quvvatlash xizmati</h5>
                                    <p>Ish davomida yuzaga kelishi mumkin bo'lgan muammolar uchun doimiy qo'llab-quvvatlash xizmati va qo'shimcha online qo'llanmalar</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="appie-traffic-service item-3 mb-30">
                                    <div className="icon">
                                        <i className="fal fa-check" />
                                    </div>
                                    <h5 className="title">Mobil qurilmalar uchun moslashuvchanlik</h5>
                                    <p>IOS va Android mobil qurilmalar uchun moslashuvchan va qulay interfeys</p>
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
                                    <p>Sotib olish, yillik va oylik obuna evaziga o'z online do'koningizga ega bo'lish imkoniyati!</p>
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
