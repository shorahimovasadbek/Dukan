import React, { useState } from 'react';

function FaqHomeOne({ className,dark }) {
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
            question:"DUKAN Platformasidan foydalanishni qanday boshlash kerak?",
            answer:"Birinchidan, rasmiy Dukan veb-saytida raqamanigizni qoldirishingiz  kerak biz aloqaga chiqishimz uchun. Keyin do'koningizni ishga tushirish uchun kerakli maketni tanlab ishga tushirishingiz mumkin."
        },
        {
            id:2,
            question:"Do'konga mahsulotlarni qanday qo'shish kerak?",
            answer:"Hisobingizga kirganingizdan so'ng, mahsulot ma'lumotlarini yuborish uchun 'Mahsulot' bo'limidagi 'Mahsulot qo`shish' opsiyasini o'tkazing va foydalaning."
        },
        {
            id:3,
            question:"To'lov usullarini qanday sozlash kerak?",
            answer:"Sozlamalar bo'limida To'lov-ni tanlang va kerakli to'lov usullarini qo'shing. Dukan turli to'lov tizimlari bilan integratsiyalashgan."
        },
        {
            id:4,
            question:"Men o'z domenimdan foydalana olamanmi?",
            answer:"Ha, siz domeningizni Dukan tizimidagi doʻkoningizga ulashingiz mumkin.Buyurtmalari qayta ishlash qanday ishlaydi?"
        },
        {
            id:5,
            question:"Buyurtmalari qayta ishlash qanday ishlaydi?",
            answer:"'Buyurtmalar' bo'limida siz barcha buyurtmalarni ko'rishingiz va boshqarishingiz, shuningdek, bajarilish holatini kuzatishingiz mumkin."
        },
        {
            id:6,
            question:"To'lovlar bilan bog'liq muammolar bo'lsa nima qilish kerak?",
            answer:"Toʻlov sozlamalarini tekshiring, ular faollashtirilganligiga ishonch hosil qiling va muammolarni hal qilish uchun Dukan qoʻllab-quvvatlash xizmatiga murojaat qiling."
        },
        {
            id:7,
            question:"Chegirmalar va aktsiyalarni o'rnatishim mumkinmi?",
            answer:"Ha, chegirma kuponlari, vaqtinchalik aksiyalar va boshqa maxsus takliflarni Savdo -> Chegirmalar bo'limida yaratishingiz mumkin."
        },
        {
            id:8,
            question:"Do'konimni ijtimoiy tarmoqlar bilan qanday integratsiyalash mumkin?",
            answer:"Savdo bo'limida Savdo kanallarini tanlang va ijtimoiy tarmoqlarni qo'shing. Ijtimoiy media ilovalari bilan integratsiyadan ham foydalanishingiz mumkin."
        },
        {
            id:9,
            question:"Do'kon uchun mobil ilovani qanday sozlash kerak?",
            answer:"Do'koningizni boshqarish uchun mobil ilovani taqdim etadi. Siz uni App Store yoki Google Play-dan yuklab olishingiz mumkin."
        },
        {
            id:10,
            question:"Do'konimga bannerni qanday qo'shish mumkin?",
            answer:"Savdo bo'limida Banner-ni tanlang, u erda kontentni tahrirlash va boshqarish hamda imtiyozlar uchun blogga tashrif buyurish mumkin."
        },
        {
            id:11,
            question:"Hisob qaydnomangiz parolini unutgan bo'lsangiz nima qilish kerak?",
            answer:"Veb-saytda va Dukan hisobingizda parolni tiklash opsiyasidan foydalaning"
        },
        {
            id:12,
            question:"Analitikani do’konimga integratsiya qilish mumkinmi?",
            answer:"Ha, siz doʻkoningiz ish faoliyatini kuzatish uchun Google Analytics kabi uchinchi tomon tahlil vositalarini ulashingiz mumkin."
        },
        {
            id:13,
            question:"Qanday qilib do'konimni xavfsiz saqlashim mumkin?",
            answer:"Do'konda standart xavfsizlik choralari, jumladan SSL shifrlash, firibgarlikdan himoyalanish va tizimni muntazam yangilash mavjud."
        },
        {
            id:14,
            question:"Do'konda ko'p tilli funksionallikni o'rnatish mumkinmi?",
            answer:"'Sozlamalar' -> 'Til' bo'limida siz do'koningiz uchun kerakli tilni qo'shishingiz mumkin."
        },
        {
            id:15,
            question:"Dukan yordamiga qanday murojaat qilish mumkin?",
            answer:"Do'kon administrator paneli, chat, elektron pochta yoki telefon orqali qo'llab-quvvatlash xizmatiga murojaat qilishingiz mumkin."
        },
        {
            id:16,
            question:"Maketni qanday test qilish mumkin?",
            answer:"Marketni visual uchun quyidagi havolaga bosing: DukanDemo"
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
                                <h3 className="appie-title">Tez-tez so'raladigan savollar</h3>
                                {/* <p>Different layouts and styles for team sections.</p> */}
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
                            <button onClick={handleShowMore}>Yana</button>
                        </div>
                        <div className="col-lg-12">
                            <div className="faq-text text-center pt-40">
                                <p>
                                    Qidirgan javobingizni topa olmadingizmi?{' '}
                                    <a href="#contact_">Aloqaga chiqing</a>
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
