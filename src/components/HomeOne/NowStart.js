import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";
import kosmetika from "../../assets/newImages/kosmetika.png";
import mebel from "../../assets/newImages/mebel.png";
import oziqovqat from "../../assets/newImages/oziqovqat.png";
import kiyimkechak from "../../assets/newImages/kiyimkechak.png";
import electronika from "../../assets/newImages/electronika.png";
import shifoxona from "../../assets/newImages/shifoxona.png";
import getData from "../../services";
import { ClipLoader } from "react-spinners";
import { useTranslation } from "react-i18next";

function NowStart({ dark }) {
  const {t} = useTranslation()
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getData.get("/api/categories");
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <section
        className={`appie-services-2-area pt-90 pb-55 ${
          dark ? "dark_about" : ""
        } `}
        id="about-us"
      >
        <div className="container ">
          <h3 className="text-center text-light mb-5">{t("now")}</h3>
          <div className="row">
            {data ? (
              data.map((item, index) => {
                if (index < 6) {
                  return (
                    <div
                      className="col-12 col-md-4 justify-content-center d-flex my-4"
                      key={index}
                    >
                      <Link to={`/theme/${item.id}`}>
                        <img
                          className="imgNow"
                          src={
                            item.image != null
                              ? process.env.REACT_APP_BASE_URL + item.image
                              : kosmetika
                          }
                        />
                        <h5 className="text-light mt-4">{item.name}</h5>
                        {/* <p className='text-light'>443 templates</p> */}
                      </Link>
                    </div>
                  );
                }
              })
            ) : (
              <div className="text-center text-light">
                <ClipLoader color="#ffffff" />
              </div>
            )}
          </div>

          <div className="d-flex justify-content-center mt-5">
            <Link to="/categories">
              <button className="btn btn-outline-light px-5">{t("more")}</button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default NowStart;
