import React from 'react';
import img from "../../assets/newImages/favicon/about-us4.jpg";

function AboutUs({dark}) {
    return (
        <>
            <section className={`appie-services-2-area pt-90 pb-55 ${dark ? "dark_about" : ""}`} id="about-us">
                <div className="container">
                    <div className="row align-items-end">
                        <div className="col-lg-6 col-md-8">
                            <div className="appie-section-title dark">
                                <h3 className={`appie-title ${dark ? "dark" : ""}`}>Biz haqimizda</h3>
                                <p className={`${dark ? "dark" : ""}`}>Xarid qilish sayohatingizni oson va qiziqarli qilaylik!</p>
                            </div>
                        </div>
                    </div>
                    <div className="row about-us_r">
                        <div className="col-lg-6 about-us_content">
                            <p className={`${dark ? "dark" : ""}`}>Bizning tayyor onlayn-do'konlarimiz bilan imkoniyatlar dunyosiga xush kelibsiz! Biz <a href="https://al-raqam.com" target='_blank'>AL-RAQAM</a>   jamoasimiz, sizga o'z onlayn biznesingizni tez va muvaffaqiyatli yo'lga qo'yish bo'yicha yechimlarni taklif etamiz. Bizning vazifamiz samarali elektron tijorat do'konini yaratish uchun ishonchli va qulay vositalarni taqdim etish orqali onlayn savdoga yo'lingizni osonlashtirishdir.</p>
                            <p className={`mt-30 ${dark ? "dark" : ""}`}>Biz sizning ishingizni iloji boricha sodda va qulay qilishga intilamiz. Foydalanishga tayyor onlayn-do‘konlarimiz sizga biznesingizni onlayn tarzda tezda sozlash, boshqarish va rivojlantirish imkonini beruvchi keng ko‘lamli funksionallik va vositalar bilan ta’minlangan. Biz elektron tijoratning dinamik dunyosida muvaffaqiyat qozonishingizga yordam beradigan yuqori sifatli yechimlarni taqdim etishdan faxrlanamiz.</p>
                        </div>
                        <div className="col-lg-6 about-us_img">
                            <img src={img} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default AboutUs;