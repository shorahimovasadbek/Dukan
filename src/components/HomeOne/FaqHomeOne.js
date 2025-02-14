import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

function FaqHomeOne({ className,dark }) {
    const {t} = useTranslation()
    const [showQues, setQues] = useState(0);
    const [showMore,setShowMore] = useState(false)
    const openQuestion = (value) => {
        if(showQues == value){
            setQues(0)
        }else{
            setQues(value);
        }
    };
    const data = [
        {
            id:1,
            question: t("question1"),
            answer: t("answer1")
        },
        {
            id:2,
            question:t("question2"),
            answer:t("answer2")
        },
        {
            id:3,
            question:t("question3"),
            answer:t("answer3")
        },
        {
            id:4,
            question:t("question4"),
            answer:t("answer4")
        },
        {
            id:5,
            question:t("question5"),
            answer:t("answer5")
        },
        {
            id:6,
            question:t("question6"),
            answer:t("answer6")
        },
        {
            id:7,
            question:t("question7"),
            answer:t("answer7")
        },
        {
            id:8,
            question:t("question8"),
            answer:t("answer8")
        },
        {
            id:9,
            question:t("question9"),
            answer:t("answer9")
        },
        {
            id:10,
            question:t("question10"),
            answer:t("answer10")
        },
        {
            id:11,
            question:t("question11"),
            answer:t("answer11")
        },
        {
            id:12,
            question:t("question12"),
            answer:t("answer12")
        },
        {
            id:13,
            question:t("question13"),
            answer:t("answer13")
        },
        {
            id:14,
            question:t("question14"),
            answer:t("answer14")
        },
        {
            id:15,
            question:t("question15"),
            answer:t("answer15")
        },
        {
            id:16,
            question:t("question16"),
            answer:t("answer16")
        },
        {
            id:17,
            question:t("question17"),
            answer:t("answer17")
        }
    ]
    const handleShowMore = () => {
        setShowMore(prev => !prev)
    }

    const leftData = data.filter(d => {
        if(showMore){
            return d.id < 9
        }else{
            return d.id < 6
        }
    })
    const rightData = data.filter(d => {
        if(showMore){
            return d.id > 8 
        }else{
            return d.id > 5 && d.id <= 10
        }
    })

    return (
        <>
            <section id="faqs" className={`appie-faq-area pb-95 ${className || ''}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="appie-section-title text-center">
                                <h3 className="appie-title">{t("questions")}</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className={`col-lg-6 item`}>
                            {leftData.map(d => {
                                return (
                                    <div
                                        className="faq-accordion wow fadeInRight mt-30"
                                        data-wow-duration="1500ms"
                                        key={d.id}
                                    >
                                        <div
                                            className="accrodion-grp animated fadeIn faq-accrodion wow"
                                            data-wow-duration="1500ms"
                                            data-grp-name="faq-accrodion"
                                        >
                                            <div
                                                onClick={() => openQuestion(d.id)}
                                                className={`accrodion ${showQues === d.id ? 'active' : ''}`}
                                            >
                                                <div className="accrodion-inner">
                                                    <div className="accrodion-title">
                                                        <h4>{d.question}</h4>
                                                    </div>
                                                    <div
                                                        className="accrodion-content"
                                                        style={{
                                                            display: showQues === d.id ? 'block' : 'none',
                                                        }}
                                                    >
                                                        <div className="inner">
                                                            <p>{d.answer}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <div className={`col-lg-6 item none991 ${showMore ? "block991" : ""}`}>
                            {rightData.map(d => {
                                return (
                                    <div
                                        className="faq-accordion wow fadeInRight mt-30"
                                        data-wow-duration="1500ms"
                                        key={d.id}
                                    >
                                        <div
                                            className="accrodion-grp animated fadeIn faq-accrodion wow"
                                            data-wow-duration="1500ms"
                                            data-grp-name="faq-accrodion"
                                        >
                                            <div
                                                onClick={() => openQuestion(d.id)}
                                                className={`accrodion ${showQues === d.id ? 'active' : ''}`}
                                            >
                                                <div className="accrodion-inner">
                                                    <div className="accrodion-title">
                                                        <h4>{d.question}</h4>
                                                    </div>
                                                    <div
                                                        className="accrodion-content"
                                                        style={{
                                                            display: showQues === d.id ? 'block' : 'none',
                                                        }}
                                                    >
                                                        <div className="inner">
                                                            <p>{d.answer}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <div className={`col-lg-12 all-blogs ${dark ? "dark" : ""}`}>
                            <button onClick={handleShowMore}>{t("yana")}</button>
                        </div>
                        <div className="col-lg-12">
                            <div className="faq-text text-center pt-40">
                                <p>
                                    {t("qidirgan")}
                                    <a href="#contact_">{t("aloqa")}</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default FaqHomeOne;
