import axios from "axios";
import React, { useRef, useState } from "react";
import projectThumb from "../../assets/newImages/call-center.png";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ProjectHomeOne({ className }) {
  // States
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [biznesType, setBiznesType] = useState("");
  const [tarifType, setTarifType] = useState("");
  const [connectTime, setConnectTime] = useState("");

  const phoneRef = useRef(null);

  const telegram_bot_id = "1199763435:AAFqQXfb-I6OW5_S9TBBj6dJj_J7WGbwdiQ";
  const chat_id = -4063236350;
  const post_uri =
    "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage";
  const handleNumber = (event) => {
    const inputValue = event.target.value;

    if (inputValue.length == 10) {
      setPhone(phone);
    } else {
      setPhone((prev) => inputValue);
    }
  };
  // Handle Submit Form
  const sendMsg = (e) => {
    e.preventDefault();
    if (!phone) {
      toast.error("Raqam kiritilmagan", {
        icon: false,
        theme: "colored",
      });
    } else {
      if (phone.length < 9) {
        toast.error("Noto'g'ri raqam kiritdingiz", {
          icon: false,
          theme: "colored",
        });
      } else {
        const message = `telefon: ${phone}, Name: ${name}, BiznesType: ${biznesType}, Ta'rifType: ${tarifType}, connectTime: ${connectTime}`;

        const settings = {
          chat_id,
          text: message
        };
        axios
          .post(post_uri, settings)
          .then((res) => console.log(res))
          .catch((err) => console.log(err));
        toast.success("Muvaffaqiyatli jo'natildi", {
          icon: false,
          theme: "colored",
        });
        setPhone("");
        setName("")
        setBiznesType("")
        setConnectTime("")
        setTarifType("")
      }
    }
  };
  return (
    <>
      <section
        id="contact_"
        className={`appie-project-area pb-100 ${className || ""}`}
      >
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
                        Buyurtma yoki savollar bo'yicha murojaat qiling.
                      </h3>
                      <p>
                        O'z marketplaysingizga ega bo'lib, mahsulotlaringizni
                        24/7 soting!
                      </p>
                      <form onSubmit={sendMsg}>
                        <div className="input-box row mt-30">
                          <div className="number col-12 col-md-12">
                            <input
                              type="Text"
                              placeholder="Ismingiz:"
                              onChange={(e) => setName(e.target.value)}
                            />
                          </div>
                          <div className="number col-12 col-md-12 my-3">
                            <input
                              type="number"
                              ref={phoneRef}
                              value={phone}
                              placeholder="Telefon raqamingiz?"
                              onChange={(e) => handleNumber(e)}
                            />
                            {/* <div className="country-code">+998</div> */}
                          </div>
                          <div className="number col-12 col-md-12">
                            <input
                              type="Text"
                              placeholder="Biznesingiz turi?"
                              onChange={(e) => setBiznesType(e.target.value)}
                            />
                          </div>
                          <div className="number col-12 col-md-12 my-3">
                            <input
                              type="Text"
                              placeholder="Qaysi tarif sizni qiziqtirayapdi?"
                              onChange={(e) => setTarifType(e.target.value)}
                            />
                          </div>
                          <div className="number col-12 col-md-12">
                            <input
                              type="Text"
                              placeholder="Qaysi payt siz bilan bog'lansak bo'ladi?"
                              onChange={(e) => setConnectTime(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="button_submit d-flex justify-content-center">
                          <button type="submit" className="mt-3">
                            Yuborish
                          </button>
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
