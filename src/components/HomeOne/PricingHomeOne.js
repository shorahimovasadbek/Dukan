import React, { useState } from 'react';

function PricingHomeOne({ className }) {
    const [toggleSwitch, setSwitchValue] = useState(false);
    return (
        <>
            <section className={`appie-pricing-area pt-90 pb-90 ${className || ''}`} id='pricing'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="appie-section-title text-center">
                                <h3 className="appie-title">Ta'rifingizni tanlang</h3>
                                {/* <p>Different layouts and styles for team sections.</p> */}
                            </div>
                            {/* <ul
                                className="list-inline text-center switch-toggler-list"
                                role="tablist"
                                id="switch-toggle-tab"
                            >
                                <li className={`month ${toggleSwitch ? 'active' : ''}`}>
                                    <a href="#">Oylik to'lov</a>
                                </li>
                                <li>
                                    <label
                                        onClick={() => setSwitchValue(!toggleSwitch)}
                                        className={`switch ${toggleSwitch ? 'on' : 'off'}`}
                                    >
                                        <span className="slider round" />
                                    </label>
                                </li>
                                <li className={`year ${toggleSwitch === false ? 'active' : ''}`}>
                                    <a href="#">To'liq sotib olish</a>
                                </li>
                            </ul> */}
                        </div>
                    </div>
                    <div className="tabed-content">
                        {toggleSwitch ? (
                            <div id="month">
                                <div className="row justify-content-center">
                                    <div className="col-lg-4 col-md-6 wow animated fadeInLeft">
                                        <div className="pricing-one__single">
                                            <div className="pricig-heading">
                                                <h6>Vebsaytlar</h6>
                                                <div className="price-range">
                                                    <span>250.000 so'm</span>
                                                    <p>/oy</p>
                                                </div>
                                                <p>Sozlash 799.000 so'm</p>
                                            </div>
                                            {/* <div className="pricig-body">
                                                <ul>
                                                    <li>
                                                        <i className="fal fa-check" /> 60-day chat
                                                        history
                                                    </li>
                                                    <li>
                                                        <i className="fal fa-check" /> 15 GB cloud
                                                        storage
                                                    </li>
                                                </ul>
                                                <div className="pricing-btn mt-35">
                                                    <a className="main-btn" href="#">
                                                        Choose plan
                                                    </a>
                                                </div>
                                            </div> */}
                                            <div className="pricing-btn mt-35">
                                                <a className="main-btn" href="#">
                                                    Tarifni tanlash
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 wow animated fadeInUp">
                                        <div className="pricing-one__single center">
                                            <div className="pricig-heading">
                                                <h6>Mobil ilovalar</h6>
                                                <div className="price-range">
                                                    <span>350.000 so'm</span>
                                                    <p>/oy</p>
                                                </div>
                                                <p>Sozlash 799.000 so'm</p>
                                            </div>
                                            {/* <div className="pricig-body">
                                                <ul>
                                                    <li>
                                                        <i className="fal fa-check" /> 60-day chat
                                                        history
                                                    </li>
                                                    <li>
                                                        <i className="fal fa-check" /> 50 GB cloud
                                                        storage
                                                    </li>
                                                    <li>
                                                        <i className="fal fa-check" /> 24/7 Support
                                                    </li>
                                                </ul>
                                                <div className="pricing-btn mt-35">
                                                    <a className="main-btn" href="#">
                                                        Choose plan
                                                    </a>
                                                </div>
                                            </div> */}
                                            <div className="pricing-btn mt-35">
                                                <a className="main-btn" href="#">
                                                    Tarifni tanlash
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 wow animated fadeInRight">
                                        <div className="pricing-one__single">
                                            <div className="pricig-heading">
                                                <h6>1 + 1</h6>
                                                <div className="price-range">
                                                    <span>539.000 so'm</span>
                                                    <p>/oy</p>
                                                </div>
                                                <p>Sozlash 799.000 so'm</p>
                                            </div>
                                            {/* <div className="pricig-body">
                                                <ul>
                                                    <li>
                                                        <i className="fal fa-check" /> 60-day chat
                                                        history
                                                    </li>
                                                    <li>
                                                        <i className="fal fa-check" /> Data security
                                                    </li>
                                                    <li>
                                                        <i className="fal fa-check" /> 100 GB cloud
                                                        storage
                                                    </li>
                                                    <li>
                                                        <i className="fal fa-check" /> 24/7 Support
                                                    </li>
                                                </ul>
                                                <div className="pricing-btn mt-35">
                                                    <a className="main-btn" href="#">
                                                        Choose plan
                                                    </a>
                                                </div>
                                            </div> */}
                                            <div className="pricing-btn mt-35">
                                                <a className="main-btn" href="#">
                                                    Tarifni tanlash
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div id="year">
                                <div className="row justify-content-center">
                                    <div className="col-lg-4 col-md-6 wow animated fadeInLeft">
                                        <div className="pricing-one__single">
                                            <div className="pricig-heading">
                                                <h6>Vebsaytlar</h6>
                                                <div className="price-range">
                                                    <span>6 750 000 so'm</span>
                                                    <p>/to'liq</p>
                                                </div>
                                                {/* <p>14 kun demo foydalanib ko'ring</p> */}
                                            </div>
                                            {/* <div className="pricig-body">
                                                <ul>
                                                    <li>
                                                        <i className="fal fa-check" /> 60-day chat
                                                        history
                                                    </li>
                                                    <li>
                                                        <i className="fal fa-check" /> 15 GB cloud
                                                        storage
                                                    </li>
                                                </ul>
                                                <div className="pricing-btn mt-35">
                                                    <a className="main-btn" href="#">
                                                        Choose plan
                                                    </a>
                                                </div>
                                            </div> */}
                                            <div className="pricing-btn mt-35">
                                                <a className="main-btn" href="#">
                                                    Tarifni tanlash
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 wow animated fadeInUp">
                                        <div className="pricing-one__single center">
                                            <div className="pricig-heading">
                                                <h6>Vebsayt + Telegram</h6>
                                                <div className="price-range">
                                                    <span>10 125 000 so'm</span>
                                                    <p>/to'liq</p>
                                                </div>
                                                {/* <p>To'liq sotib olish 18mln so'm</p> */}
                                            </div>
                                            {/* <div className="pricig-body">
                                                <ul>
                                                    <li>
                                                        <i className="fal fa-check" /> 60-day chat
                                                        history
                                                    </li>
                                                    <li>
                                                        <i className="fal fa-check" /> 50 GB cloud
                                                        storage
                                                    </li>
                                                    <li>
                                                        <i className="fal fa-check" /> 24/7 Support
                                                    </li>
                                                </ul>
                                                <div className="pricing-btn mt-35">
                                                    <a className="main-btn" href="#">
                                                        Choose plan
                                                    </a>
                                                </div>
                                            </div> */}
                                            <div className="pricing-btn mt-35">
                                                <a className="main-btn" href="#">
                                                   Tarifni tanlash
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 wow animated fadeInRight">
                                        <div className="pricing-one__single">
                                            <div className="pricig-heading">
                                                <h6>Vebsayt + Mobile</h6>
                                                <div className="price-range">
                                                    <span>12 825 000 so'm</span>
                                                    <p>/to'liq</p>
                                                </div>
                                                {/* <p>To'liq sotib olish 25mln so'm</p> */}
                                            </div>
                                            {/* <div className="pricig-body">
                                                <ul>
                                                    <li>
                                                        <i className="fal fa-check" /> 60-day chat
                                                        history
                                                    </li>
                                                    <li>
                                                        <i className="fal fa-check" /> Data security
                                                    </li>
                                                    <li>
                                                        <i className="fal fa-check" /> 100 GB cloud
                                                        storage
                                                    </li>
                                                    <li>
                                                        <i className="fal fa-check" /> 24/7 Support
                                                    </li>
                                                </ul>
                                                <div className="pricing-btn mt-35">
                                                    <a className="main-btn" href="#">
                                                        Choose plan
                                                    </a>
                                                </div>
                                            </div> */}
                                            <div className="pricing-btn mt-35">
                                                <a className="main-btn" href="#">
                                                    Tarifni tanlash
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-6 wow animated fadeInRight mt-4">
                                        <div className="pricing-one__single">
                                            <div className="pricig-heading">
                                                <h6>Mijoz talablariga mos</h6>
                                                <div className="price-range">
                                                    <span>Kelishilgan holda</span>
                                                </div>
                                                {/* <p>To'liq sotib olish 25mln so'm</p> */}
                                            </div>
                                            {/* <div className="pricig-body">
                                                <ul>
                                                    <li>
                                                        <i className="fal fa-check" /> 60-day chat
                                                        history
                                                    </li>
                                                    <li>
                                                        <i className="fal fa-check" /> Data security
                                                    </li>
                                                    <li>
                                                        <i className="fal fa-check" /> 100 GB cloud
                                                        storage
                                                    </li>
                                                    <li>
                                                        <i className="fal fa-check" /> 24/7 Support
                                                    </li>
                                                </ul>
                                                <div className="pricing-btn mt-35">
                                                    <a className="main-btn" href="#">
                                                        Choose plan
                                                    </a>
                                                </div>
                                            </div> */}
                                            <div className="pricing-btn mt-35">
                                                <a className="main-btn" href="#">
                                                    Tarifni tanlash
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
}

export default PricingHomeOne;
