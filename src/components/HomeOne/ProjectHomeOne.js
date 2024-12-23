import axios from 'axios';
import React, { useRef, useState } from 'react';
import projectThumb from '../../assets/newImages/call-center.png';
import {toast, ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

function ProjectHomeOne({ className }) {
    // States
    const [phone,setPhone] = useState("")
    // const [phoneCharacters,setPhoneCharacters] = useState([])
    // const [notEntered,setNotEntered] = useState([])
    const phoneRef = useRef(null)
    
    // Lifecycle
    // useEffect(() => {
    //     setPhoneCharacters(prev => phone.split(""))
    // },[phone])

    // Handle variables
    // const spans = [
    //     {
    //         id:1,
    //     },
    //     {
    //         id:2,
    //     },
    //     {
    //         id:3,
    //     },
    //     {
    //         id:4,
    //     },
    //     {
    //         id:5,
    //     },
    //     {
    //         id:6,
    //     },
    //     {
    //         id:7,
    //     },
    //     {
    //         id:8,
    //     },
    //     {
    //         id:9,
    //     },
    // ]
    
    // Send bot
    const telegram_bot_id = "1199763435:AAFqQXfb-I6OW5_S9TBBj6dJj_J7WGbwdiQ";
    const chat_id = -4063236350;
    const post_uri = "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage"
    
    // Functions
    // const focusInput = () => {
    //     if(phoneRef.current){
    //         phoneRef.current.focus()
    //     }
    // }
    const handleNumber = (event) => {
        const inputValue = event.target.value
        
        if(inputValue.length == 10){
            setPhone(phone)
        }else{
            setPhone(prev => inputValue)
        }

    }
    // Handle Submit Form
    const sendMsg = (e) => {
        e.preventDefault()
        if(!phone){
            toast.error("Raqam kiritilmagan",{
                icon:false,
                theme:"colored"
            })
        }else{
            if(phone.length < 9){
                toast.error("Noto'g'ri raqam kiritdingiz",{
                    icon:false,
                    theme:"colored"
                })
            }else{
                const message = `telefon: ${phone}`
                const settings = {
                    chat_id,
                    text:message
                };   
                axios.post(post_uri,settings)
                    .then(res => console.log(res)).catch(err => console.log(err))
                toast.success("Muvaffaqiyatli jo'natildi",{
                    icon:false,
                    theme:"colored"
                })
                setPhone("")
            }
        }
    }
    return (
        <>
            <section id='contact_' className={`appie-project-area pb-100 ${className || ''}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div
                                className="appie-project-box wow animated slideInUp"
                                data-wow-duration="1000ms"
                                data-wow-delay="0ms"
                            >
                                <div className="row">
                                    <div className="col-lg-6 temporary-width">
                                        <div className="appie-project-content">
                                            <h3 className="title">
                                                Savolingiz bormi ?
                                            </h3>
                                            <p>Siz bilan o'zimiz aloqaga chiqamiz</p>
                                            <form onSubmit={sendMsg}>
                                                <div className="input-box mt-30">
                                                    <div className="number">
                                                        <input type="number" ref={phoneRef} value={phone} placeholder="Telefon raqamingiz" onChange={(e) => handleNumber(e)} />
                                                        <div className="country-code">+998</div>
                                                        {/* {phone && <div className="ongoing-number" onClick={focusInput}>
                                                            {spans.map((item,index) => {
                                                                return (
                                                                    <span key={item.id} className={`${notEntered.includes(index) ? "not-entered" : ""}`}>
                                                                        <p className={`${phoneCharacters[index] ? "entered" : ""}`}>{phoneCharacters[index]}</p>
                                                                    </span>
                                                                )
                                                            })}
                                                        </div>} */}
                                                    </div>
                                                    <button type="submit">Yuborish</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="appie-project-thumb">
                                    <div className="email-us_">
                                        <div className="img">
                                            <img src={projectThumb} alt="" />   
                                        </div>
                                        <div className="background"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <ToastContainer />
            </section>
        </>
    );
}

export default ProjectHomeOne;
