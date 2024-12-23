import React from 'react';
import IconOne from '../../assets/images/icon/1.png';

function ServicesHomeOne({ className }) {
    return (
        <section className={`appie-service-area pt-90 pb-100 ${className}`} id="features">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="appie-section-title text-center">
                            <h3 className="appie-title">
                                Bizning afzalliklarimiz
                            </h3>
                            {/* <p>The full monty spiffing good time no biggie cack grub fantastic. </p> */}
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div
                            className="appie-single-service text-center mt-30 wow animated fadeInUp"
                            data-wow-duration="2000ms"
                            data-wow-delay="200ms"
                        >
                            <div className="icon">
                                <img src={IconOne} alt="" />
                                <span>1</span>
                            </div>
                            <h4 className="appie-title">Keng assortiment</h4>
                            <p>Moda, elektronika, uy va bog', sport va hordiq va boshqalar kabi mahsulotlarning katta tanlovini o'rganing.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div
                            className="appie-single-service text-center mt-30 item-2 wow animated fadeInUp"
                            data-wow-duration="2000ms"
                            data-wow-delay="400ms"
                        >
                            <div className="icon">
                                <i className="fa-solid fa-check-double text-white img-icon-services"></i>
                                <span>2</span>
                            </div>
                            <h4 className="appie-title">Sifat kafolati</h4>
                            <p>Har bir mahsulot faqat eng yaxshisini olishingizni ta'minlash uchun qattiq sifat nazoratidan o'tadi.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div
                            className="appie-single-service text-center mt-30 item-3 wow animated fadeInUp"
                            data-wow-duration="2000ms"
                            data-wow-delay="600ms"
                        >
                            <div className="icon">
                                <i className="fa-regular fa-credit-card text-white img-icon-services"></i>
                                <span>3</span>
                            </div>
                            <h4 className="appie-title">To'lov imkoniyatlar</h4>
                            <p>Kredit / debet kartalari, raqamli hamyonlar, bank o'tkazmalari va ba'zan yetkazib berishda naqd pul.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div
                            className="appie-single-service text-center mt-30 item-4 wow animated fadeInUp"
                            data-wow-duration="2000ms"
                            data-wow-delay="800ms"
                        >
                            <div className="icon">
                                <i className="fa-regular fa-calendar-check text-white img-icon-services"></i>
                                <span>4</span>
                            </div>
                            <h4 className="appie-title">24/7 foydalanish</h4>
                            <p>Iste'molchilarga o'zlari uchun qulay bo'lgan vaqtda xarid qilish imkonini beradi.</p>
                        </div>
                    </div>
                </div>
                {/* <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div
                            className="appie-single-service text-center mt-30 wow animated fadeInUp item-5"
                            data-wow-duration="2000ms"
                            data-wow-delay="200ms"
                        >
                            <div className="icon">
                                <i className="fa-solid fa-couch text-white img-icon-services"></i>
                                <span>5</span>
                            </div>
                            <h4 className="appie-title">Qulaylik</h4>
                            <p>Iste'molchilar do'konlarga tashrif buyurmasdan mahsulotlarni ko'rib chiqishlari va xarid qilishlari mumkin.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div
                            className="appie-single-service text-center mt-30 item-6 wow animated fadeInUp"
                            data-wow-duration="2000ms"
                            data-wow-delay="400ms"
                        >
                            <div className="icon">
                                <i className="fa-solid fa-scale-balanced text-white img-icon-services"></i>
                                <span>6</span>
                            </div>
                            <h4 className="appie-title">Narxlarni taqqoslash</h4>
                            <p>Iste'molchilarga bir necha marta bosish orqali turli sotuvchilardagi narxlarni solishtirishni osonlashtiradi.</p>
                        </div>
                    </div>
                    
                    <div className="col-lg-3 col-md-6">
                        <div
                            className="appie-single-service text-center mt-30 item-8 wow animated fadeInUp"
                            data-wow-duration="2000ms"
                            data-wow-delay="800ms"
                        >
                            <div className="icon">
                                <i className="fa-solid fa-comment text-white img-icon-services"></i>
                                <span>8</span>
                            </div>
                            <h4 className="appie-title">Mijozlarning sharhlari</h4>
                            <p>Xaridorlarga boshqalarning tajribasiga asoslanib, sotib olish bo'yicha qarorlar qabul qilish imkonini beradi.</p>
                        </div>
                    </div>
                </div> */}
            </div>
        </section>
    );
}

export default ServicesHomeOne;
