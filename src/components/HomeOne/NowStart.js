import React from 'react';
import img from "../../assets/newImages/favicon/about-us4.jpg";
import { Link } from 'react-router-dom/cjs/react-router-dom';
import kosmetika from '../../assets/newImages/kosmetika.png'
import mebel from '../../assets/newImages/mebel.png'
import oziqovqat from '../../assets/newImages/oziqovqat.png'
import kiyimkechak from '../../assets/newImages/kiyimkechak.png'
import electronika from '../../assets/newImages/electronika.png'
import shifoxona from '../../assets/newImages/shifoxona.png'

function NowStart({dark}) {
    return (
        <>
            <section className={`appie-services-2-area pt-90 pb-55 ${dark ? "dark_about" : ""}`} id="about-us">
                <div className="container">
                    <h3 className='text-center text-light mb-5'>Hoziroq boshlang</h3>
                    <div className='row'>
                        <div className='col-12 col-md-4 justify-content-center d-flex'>
                            <Link>
                                <img className='imgNow' src={kosmetika}/>
                                <h5 className='text-light mt-4'>Kosmetika</h5>
                                <p className='text-light'>443 templates</p>
                            </Link>
                        </div>
                        <div className='col-12 col-md-4 justify-content-center d-flex mt-5 mt-md-0'>
                            <Link>
                                <img className='imgNow' src={mebel}/>
                                <h5 className='text-light mt-4'>Mebel</h5>
                                <p className='text-light'>443 templates</p>
                            </Link>
                        </div>
                        <div className='col-12 col-md-4 justify-content-center d-flex mt-5 mt-md-0'>
                            <Link>
                                <img className='imgNow' src={oziqovqat}/>
                                <h5 className='text-light mt-4'>Oziq-ovqat</h5>
                                <p className='text-light'>443 templates</p>
                            </Link>
                        </div>
                        <div className='col-12 col-md-4 justify-content-center d-flex mt-5'>
                            <Link>
                                <img className='imgNow' src={kiyimkechak}/>
                                <h5 className='text-light mt-4'>Kiyim-kechak</h5>
                                <p className='text-light'>443 templates</p>
                            </Link>
                        </div>
                        <div className='col-12 col-md-4 justify-content-center d-flex mt-5'>
                            <Link>
                                <img className='imgNow' src={electronika}/>
                                <h5 className='text-light mt-4'>Elektronika</h5>
                                <p className='text-light'>443 templates</p>
                            </Link>
                        </div>
                        <div className='col-12 col-md-4 justify-content-center d-flex mt-5'>
                            <Link>
                                <img className='imgNow' src={shifoxona}/>
                                <h5 className='text-light mt-4'>Shifoxona</h5>
                                <p className='text-light'>443 templates</p>
                            </Link>
                        </div>
                    </div>

                    <div className='d-flex justify-content-center mt-5'>
                        <Link>
                            <button className='btn btn-outline-light px-5'>Ko'proq</button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}

export default NowStart;