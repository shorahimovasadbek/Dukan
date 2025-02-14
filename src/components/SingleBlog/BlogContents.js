import React from "react";
import blog1img from "../../assets/newImages/blogs/blog1image.jpg";
import blog2img from "../../assets/newImages/blogs/blog2img.jpg";
import blog3img from "../../assets/newImages/blogs/blog3img.jpg";
import blog4img from "../../assets/newImages/blogs/blog4img.jpg";
import { useLocation } from "react-router-dom/cjs/react-router-dom";
import { useTranslation } from "react-i18next";

export default function BlogContents() {
  const location = useLocation();
  const currentLocation = location.pathname.split("/")[3];
  const { t } = useTranslation();

  const contents = [
    {
      id: "to'liq_elektron_seo_qo'llanmasi",
      title: t("qo'llanma1"),
      beforeImg: [
        t("qo'llanma1_text1"),
        t("qo'llanma1_text2"),
        t("qo'llanma1_text3"),
      ],
      img: blog1img,
      beforeQuote: [t("befoquote1")],
      quote: t("quote1"),
      afterQuote: [t("aftequote1")],
    },
    {
      id: "kichik_biznes_grantlar_2025",
      title: t("blogtitle2"),
      beforeImg: [t("blogtitle2_text1")],
      img: blog2img,
      beforeQuote: [t("befoquote2_text1"), t("befoquote2_text2")],
      quote: t("quote2"),
    },
    {
      id: "elektron_tijorat",
      title: t("qo'llanma3"),
      beforeImg: [t("qo'llanma3_text1"), t("qo'llanma3_text2")],
      img: blog3img,
      beforeQuote: [
        t("befoquote3_text1"),
        t("befoquote3_text2"),
        t("befoquote3_text3"),
      ],
      quote:
        t("quote3"),
    },
    {
      id: "domenlar_va_veb_sayt_hosting",
      title:
        t("blogtitle4"),
      beforeImg: [
        t("qo'llanma4_text1"),
        t("qo'llanma4_text2")
      ],
      img: blog4img,
      beforeQuote: [
        t("bofequote4_text1"),
        t("bofequote4_text2"),
        t("bofequote4_text3"),
      ],
      quote:
        t("quote4"),
      afterQuote: [
        t("aftequote4")
      ],
    },
  ];

  const currentBlog = contents.find((c) => {
    return c.id == currentLocation;
  });

  return (
    <>
      {currentBlog ? (
        <div className="single-post-area">
          <h1 className="article-title">{currentBlog.title}</h1>
          {currentBlog.beforeImg?.map((text, i) => {
            return <p key={i}>{text}</p>;
          })}
          <div className="post-thumb">
            <img
              loading="lazy"
              src={currentBlog?.img}
              alt=""
              className="single-blog-img"
            />
          </div>
          {currentBlog.beforeQuote?.map((text, i) => {
            return <p key={i}>{text}</p>;
          })}
          <blockquote>
            <p>{currentBlog.quote}</p>
          </blockquote>
          {currentBlog.afterQuote?.map((text, i) => {
            return <p key={i}>{text}</p>;
          })}
        </div>
      ) : (
        <div className="d-flex align-items-center justify-content-center no_blog">
          Blog mavjud emas
        </div>
      )}
    </>
  );
}
