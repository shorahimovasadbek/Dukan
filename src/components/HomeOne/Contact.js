import React from 'react';

function Contact({dark}) {
    return (
        <>
            <section id="contact_" className="contact-section">
                <div className="container">
                    <div className="row contact-us">
                        <div className="col-md-4 about-cmp">
                            <div className="contact--info-area">
                                <h3 className={`${dark ? "dark" : ""}`}>Aloqa uchun</h3>
                                <p>Yordam kerakmi ? Formani to'ldiring va yangi sayohat boshlang !</p>
                                <div className="single-info">
                                    <h5 className={`${dark ? "dark" : ""}`}>Manzil</h5>
                                    <p className={dark ? "dark" : ""}>
                                        <i className={`fal fa-home ${dark ? "dark" : ""}`}></i>
                                        Toshkent sh. Yunusobod tumani, Anorzor mahallasi, Oqilota ko'chasi
                                        <br /> 26-11. 100099
                                    </p>
                                </div>
                                <div className="single-info">
                                    <h5 className={`${dark ? "dark" : ""}`}>Telefon</h5>
                                    <p className={`${dark ? "dark" : ""}`}>
                                        <i className={`fal fa-phone ${dark ? "dark" : ""}`}></i>
                                        +998 33 313-82-22
                                        <br />
                                    </p>
                                </div>
                                <div className="single-info">
                                    <h5 className={`${dark ? "dark" : ""}`}>Qo'llab quvvatlash</h5>
                                    <p className={`${dark ? "dark" : ""}`}>
                                        <i className={`fal fa-envelope ${dark ? "dark" : ""}`}></i>
                                        sale@al-raqam.com
                                        <br />
                                        alraqam@al-raqam.com
                                    </p>
                                </div>
                                <div className="ab-social">
                                    <h5 className={`${dark ? "dark" : ""}`}>Obuna bo'ling</h5>
                                    <div className="links">
                                      <a className="fac" href="#">
                                          <i className="fab fa-facebook-f"></i>
                                      </a>
                                      <a className="tg" href="#">
                                        <i className="fa-brands fa-telegram"></i>
                                      </a>
                                      <a className="you" href="#">
                                          <i className="fab fa-youtube"></i>
                                      </a>
                                      <a className="insta" href="#">
                                        <i className="fa-brands fa-instagram"></i>
                                      </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8 contact-container">
                            <div className={`contact-form ${dark ? "dark" : ""}`}>
                                <h4 className={`${dark ? "dark" : ""}`}>Bog'lanish uchun</h4>
                                <p>Formani kerakli ma'lumotlar bilan to'ldiring</p>
                                <form action="#" method="post" className="row">
                                    <div className="col-md-6">
                                        <input type="text" name="f-name" placeholder="Ism" />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="text" name="l-name" placeholder="Familya" />
                                    </div>
                                    <div className="col-md-6">
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Email"
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <input
                                            type="number"
                                            name="phone"
                                            placeholder="Tel"
                                        />
                                    </div>
                                    {/* <div className="col-md-12">
                                        <input type="text" name="suject" placeholder="Subject" />
                                    </div> */}
                                    <div className="col-md-12">
                                        <textarea
                                            name="message"
                                            placeholder="Sizga qanday yordam bera olamiz ?"
                                        ></textarea>
                                    </div>
                                    {/* <div className="col-md-6">
                                        <div className="condition-check">
                                            <input id="terms-conditions" type="checkbox" />
                                            <label htmlFor="terms-conditions">
                                                Men  <a href="#">Terms & Conditions</a>
                                            </label>
                                        </div>
                                    </div> */}
                                    <div className="col-md-6 text-right form-submit">
                                        <input type="submit" name="submit" value="Yuborish" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Contact;