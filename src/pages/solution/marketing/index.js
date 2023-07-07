import React, { useState } from "react";

import Image from "next/image";
import { Box, Container, useMediaQuery } from "@mui/material";
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
import styles from "../../../../src/styles/marketing.module.scss";
import Layout from "../../../../components/Layout/Layout";
import Stepper from "../../../../components/UI/Stepper/Stepper";

export async function getStaticProps({ locale }) {
  console.log(locale);
  return {
    props: {
      ...(await serverSideTranslations(locale, ["marketing", "common"], null, [
        "en",
        "de",
      ])),
      // Will be passed to the page component as props
    },
  };
}

const Marketing = () => {
  const { t: translate } = useTranslation("marketing");
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
      title: "Calculate the price for your marketing. Select duration:",
      questions: [
        { id: 3, active: false, text: "2-4 weeks (from 299€)" },
        { id: 4, active: false, text: "1-3 month (from 499€)" },
        { id: 1, active: false, text: "3-6 month(from 749€)" },
        { id: 2, active: false, text: "1+ year (from €999)" },
        { id: 5, active: false, text: "Not yet decided" },
      ],
    },
    {
      type: "checkboxPlaceholder",
      id: 2,
      active: false,
      title: "Select or enter the marketing area for ​​your business:",
      questions: [
        { id: 1, active: false, text: "SMM" },
        { id: 2, active: false, text: "Photo & Video Productions" },
        { id: 3, active: false, text: "Search Engine Optimization" },
        { id: 4, active: false, text: "Qraphic design" },
        { id: 5, active: false, text: "marketing" },
      ],
      placeholder: "Enter Your Marketing area",
      value: "",
    },
    {
      type: "checkbox",
      id: 3,
      active: false,
      title: "Marketing content that exists :",
      changeMany: true,
      questions: [
        { id: 1, active: false, text: "Blogs" },
        { id: 2, active: false, text: "Video Content" },
        { id: 3, active: false, text: "Images" },
        { id: 6, active: false, text: "Text" },
        { id: 4, active: false, text: "Social Media Posts" },
        { id: 5, active: false, text: "Nothing" },
      ],
    },
    {
      type: "checkbox",
      id: 4,
      active: false,
      title: "Website:",
      questions: [
        { id: 1, active: false, text: "I Need Website" },
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
  const submitForm = async () => {
    const data = await axios.post(
      "https://foys.herokuapp.com/send/hire",
      // "http://localhost:4000/send/email",
      { message: `${JSON.stringify(questionsForm)}` }
    );
  };
  const sliderBlocks = [
    {
      title: "Marketing that works,",
      text: "specifically for your business.",
      img: "slide3.png",
    },
    {
      title: "Foys is an integrated approach",
      text: "for acheving great results",
      img: "slide2.png",
    },
    {
      title: "Professional design and content",
      text: "tailored to the specifics of your business",
      img: "slide1.png",
    },
  ];

  return (
    <Layout>
      <div className={styles.website}>
        <SolutionHero
          onClickLastQuestion={() => submitForm()}
          formTitle={"Calculate Price For Your Marketing"}
          setQuestionsForm={setQuestionsForm}
          questionsForm={questionsForm}
          sliderBlocks={sliderBlocks}
          title={translate("hero.header.title")}
          typedWords={translate("hero.typedWords", { returnObjects: true })}
          description={translate("hero.header.description")}
          type="marketing"
        ></SolutionHero>
        <section className={styles.strategy}>
          <Container>
            <div className={styles.header}>
              <h3>Digital Marketing Strategy</h3>
              <p>Strategy to your business success</p>
            </div>
            <Box
              className={styles.strategy_banner}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Image
                width={2087}
                height={1014}
                src="/solution/marketing/marketing_banner1.png"
              ></Image>
            </Box>
          </Container>
          {/* <CustomCarousel
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
          ></CustomCarousel> */}
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
                "Optimize Social Media",
                "Create Cover & Profile Picture",

                "SEO",
                "3 Posts per week",
                "Website Analysis",
                "Ad spend - Up to 50€",
                "Marketing Report",
              ],
            },
            {
              title: translate("pricing.block2.title"),
              price: translate("pricing.block2.price"),
              newPrice: translate("pricing.block2.newPrice"),
              description: translate("pricing.block2.description"),
              rows: [
                "Website Audit",
                "Website Marketing Setup",
                "SMM",
                "4 Blog Writing",
                "Email Campaign",
                "SEO",
                "Video Content Production",
                "4 Posts per week",

                "Marketing Report",
              ],
            },
            {
              title: translate("pricing.block3.title"),
              price: translate("pricing.block3.price"),
              newPrice: translate("pricing.block3.newPrice"),
              description: translate("pricing.block3.description"),
              rows: [
                "CRM",
                "Email Campaign",
                "Website Audit & Strategy",
                "Social Media Marketing",
                "8 Blog Writing",
                "SEO",
                "Video Content Production",
                "Custom Image Content",
                "7 Posts per week",
                "Website Analysis",
                "Marketing Report",
              ],
            },
            ,
            {
              title: translate("pricing.block4.title"),
              price: translate("pricing.block4.price"),

              description: translate("pricing.block4.description"),
              rows: [
                "CRM",
                "Email Campaign",
                "Website Audit & Strategy",
                "Social Media Marketing",
                "8 Blog Writing",
                "SEO",
                "Video Content Production",
                "Custom Image Content",
                "7 Posts per week",
                "Website Analysis",
                "Marketing Report",
              ],
            },
          ]}
        ></Pricing>
        <section className={styles.faq}>
          <Container>
            <h3 className={styles.faq_title}>
              {translate("faq.header.title")}
            </h3>
            <Faq data={translate("faq.data", { returnObjects: true })}></Faq>
          </Container>
        </section>
      </div>
    </Layout>
  );
};

export default Marketing;
