import React, { useState } from "react";

import Image from "next/image";
import { Container, useMediaQuery } from "@mui/material";
import Typed from "react-typed";
import axios from "axios";
import AliceCarousel from "react-alice-carousel";
import SolutionHero from "../../../../components/UI/SolutionHero/SolutionHero";
import CustomCarousel from "../../../../components/UI/CustomCarousel/CustomCarousel";
import CustomerSupport from "../../../../components/UI/CustomerSupport/CustomerSupport";
import Faq from "../../../../components/UI/Faq/Faq";
import Pricing from "../../../../components/UI/Pricing/Pricing";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import json2mq from "json2mq";
import styles from "../../../../src/styles/website.module.scss";
import Layout from "../../../../components/Layout/Layout";
export async function getStaticProps({ locale }) {
  console.log(locale);
  return {
    props: {
      ...(await serverSideTranslations(locale, ["website", "common"], null, [
        "en",
        "de",
      ])),
      // Will be passed to the page component as props
    },
  };
}

const Website = () => {
  const { t: translate } = useTranslation("website");
  const { t: translateCommon } = useTranslation("common");
  const matchesMedium = useMediaQuery(
    json2mq({
      minWidth: 992,
    })
  );
  const matchesSmall = useMediaQuery(
    json2mq({
      minWidth: 480,
    })
  );
  const colors = [
    ["#ffb501", "#fe4582"],
    ["#179EFF", "#FF22DC"],
    ["#D25BF4", "#1FF0FC"],
    ["#D0D501", "#0CD65F"],
  ];
  const [boxShadowColor, setBoxShadowColor] = useState(colors[0]);
  const [questionsForm, setQuestionsForm] = useState([
    {
      type: "checkbox",
      id: 1,
      active: true,
      title: "Calculate the price for your site. Select the desired one:",
      questions: [
        { id: 3, active: false, text: "Landing(from 299€)" },
        { id: 4, active: false, text: "Website-business card (from 499€)" },
        { id: 1, active: false, text: "Multi-page website (from 749€)" },
        { id: 2, active: false, text: "Online store (from €999)" },

        { id: 5, active: false, text: "Not yet decided" },
      ],
    },
    {
      type: "checkboxPlaceholder",
      id: 2,
      active: false,
      title: "Select or enter the area of ​​your business:",
      questions: [
        { id: 1, active: false, text: "Legal Services" },
        { id: 2, active: false, text: "Construction Services" },
        { id: 3, active: false, text: "Hotel and Tourism" },
        { id: 4, active: false, text: "Real Estate" },
        { id: 5, active: false, text: "Food Industry" },
        { id: 6, active: false, text: "Renting Services" },
      ],
      placeholder: "Enter Your Business Area",
      value: "",
    },
    {
      type: "checkbox",
      id: 3,
      active: false,
      title: "To fill the website you have:",
      changeMany: true,
      questions: [
        { id: 1, active: false, text: "Texts" },
        { id: 2, active: false, text: "Videos" },
        { id: 3, active: false, text: "Images" },
        { id: 4, active: false, text: "Database" },
        { id: 5, active: false, text: "Nothing" },
      ],
    },
    {
      type: "checkbox",
      id: 4,
      active: false,
      title: "Marketing and SEO:",
      questions: [
        { id: 1, active: false, text: "I Need Marketing Service" },
        { id: 2, active: false, text: "No, thanks" },
      ],
    },
    {
      type: "total",
      id: 5,
      active: false,
      title:
        "Choose a way to send the price calculation that works for you, write your email, or give us a phone number.",
      placeholder: "Email",
      value: "",
      phone: "",
      questions: [
        { id: 1, active: false, text: "I Need Marketing Service" },
        { id: 2, active: false, text: "No, thanks" },
      ],
    },
    {
      type: "success",
      id: 6,
      active: false,
      title:
        "Choose a way to send the price calculation that works for you, write your email, or give us a phone number.",
      placeholder: "Email",
      value: "",
      phone: "",
      questions: [
        { id: 1, active: false, text: "I Need Marketing Service" },
        { id: 2, active: false, text: "No, thanks" },
      ],
    },
  ]);
  const sliderBlocks = [
    {
      title: "Do business - earn,",
      text: "we will ensure the work of your site!",
      img: "slide1.png",
    },
    {
      title: "Foys is an integrated approach",
      text: "for acheving great results",
      img: "slide2.png",
    },
    {
      title: "Professional design and content",
      text: "tailored to the specifics of your business",
      img: "slide3.png",
    },
  ];

  return (
    <Layout>
      <div className={styles.website}>
        <SolutionHero
        formTitle="Calculate Price For Your Website"
          setQuestionsForm={setQuestionsForm}
          questionsForm={questionsForm}
          sliderBlocks={sliderBlocks}
          title={translate("hero.header.title")}
          typedWords={translate("hero.typedWords", { returnObjects: true })}
          description={translate("hero.header.description")}
          type="website"
        ></SolutionHero>
        <section className={styles.portfolio}>
          <div className={styles.header}>
            <h3>Our Portfolio</h3>
            <p>Websites with modern design & adaptation to any device</p>
          </div>
          <CustomCarousel
            type="image"
            visibleSlides={1}
            blocks={[
              {
                image: "/solution/website/website2.png",
              },
              {
                image: "/solution/website/website1.png",
              },
              {
                image: "/solution/website/website3.png",
              },
              {
                image: "/solution/website/website4.png",
              },
            ]}
          ></CustomCarousel>
        </section>
        <CustomerSupport></CustomerSupport>
        <CustomCarousel
          type="block"
          visibleSlides={matchesMedium ? 3 : matchesSmall ? 2 : 1}
          blocks={translate("carousel.blocks", { returnObjects: true })}
        ></CustomCarousel>{" "}
        <Pricing
          title={translate("pricing.header.title")}
          description={translate("pricing.header.description")}
          pricingBlocks={[
            {
              title: translate("pricing.block1.title"),
              price: translate("pricing.block1.price"),
              newPrice: translate("pricing.block1.newPrice"),
              description: translate("pricing.block1.description"),
              rows: [
                "Pages 3-5",

                "CMS",

                "24/7 Supports",
                "Basic Analysis Dashboard",
                "Free Domin For 6 Month",
                "Basic SMM",
                "Constructor Made Site",
              ],
            },
            {
              title: translate("pricing.block2.title"),
              price: translate("pricing.block2.price"),
              newPrice: translate("pricing.block2.newPrice"),
              description: translate("pricing.block2.description"),
              rows: [
                "Pages 5-15",

                "Manually Made Site",
                "Free Domin For 1 Month",
                "Admin Panel",
                "Client Supports",
                "24/7 Supports",
                "Standard  Analysis Dashboard",

                "Payment System",
              ],
            },
            {
              title: translate("pricing.block3.title"),
              price: translate("pricing.block3.price"),
              newPrice: translate("pricing.block3.newPrice"),
              description: translate("pricing.block3.description"),
              rows: [
                "Pages 15+",

                "Data Managment",
                "Payment System",
                "Advanced Analysis Dashboard",
                "Integration to Third Party Systems",
                "Employee Managment",

                "Client Supports",
              ],
            },
            ,
            {
              title: translate("pricing.block4.title"),
              price: translate("pricing.block4.price"),

              description: translate("pricing.block4.description"),
              rows: [
                "Pages 15+",

                "Data Managment",
                "Payment System",
                "Advanced Analysis Dashboard",
                "Integration to Third Party Systems",
                "Employee Managment",

                "Client Supports",
              ],
            },
          ]}
        ></Pricing>
        <section className={styles.faq}>
          <Container>
            <h3 className={styles.faq_title}>{translate("faq.header.title")}</h3>
            <Faq data={translate("faq.data", { returnObjects: true })}></Faq>
          </Container>
        </section>
      </div>
    </Layout>
  );
};

export default Website;
