import { Button, Container, Grid, Icon } from "@mui/material";
import React from "react";
import { useState, useEffect } from "react";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useRouter } from "next/router";
import Image from "next/image";
import { useTranslation } from "next-i18next";
const Pricing = () => {
  const { t: translate } = useTranslation("home");
  const { t: translateCommon } = useTranslation("common");

  const router = useRouter();
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  const pricingBlocks = [
    {
      title: translate("home.pricing.block1.title"),
      price: translate("home.pricing.block1.price"),
      newPrice: translate("home.pricing.block1.newPrice"),
      description: translate("home.pricing.block1.description"),
      rows: [
        "Pages 3-5",
        "Re/New Design",

        "CMS Admin Panel",
        "500MB Hosting Free",
      ],
    },
    {
      title: translate("home.pricing.block2.title"),
      price: translate("home.pricing.block2.price"),
      newPrice: translate("home.pricing.block2.newPrice"),
      description: translate("home.pricing.block2.description"),
      rows: [
        "Pages 5-10",
        "Re/New Design",
        "Client Supports",
        "24/7 Supports",
        "Admin Panel",
        "500MB Hosting Free",
        "Analysis Dashboard",
        "Payment System",
      ],
    },
    {
      title: translate("home.pricing.block3.title"),
      price: translate("home.pricing.block3.price"),
      newPrice: translate("home.pricing.block3.newPrice"),
      description: translate("home.pricing.block3.description"),
      rows: [
        "Pages 10+",
        "Re/New Design",
        "24/7 Supports",

        "Advanced Admin Panel",
        "1TB Hosting Free",
        "Payment System",
        "Advanced Analysis Dashboard",
        "Integration to Third Party Systems",
        "Employee Managment",
      ],
    },
    ,
    {
      title: translate("home.pricing.block4.title"),
      price: translate("home.pricing.block4.price"),

      description: translate("home.pricing.block4.description"),
      rows: [
        "Pages 10+",
        "Re/New Design",
        "24/7 Supports",

        "Advanced Admin Panel",
        "1TB Hosting Free",
        "Payment System",
        "Advanced Analysis Dashboard",
        "Integration to Third Party Systems",
        "Employee Managment",
      ],
    },
  ];
  return (
    <div className="pricing">
      <div className="pricing_background_elements">
        <div className="logo">
          <Image
            alt="logo"
            width={500}
            height={200}
            src="/logo_for_bg.png"
          ></Image>
        </div>
        <div className="left-circles"></div>
        <div className="right-circles"></div>
      </div>

      <div className="pricing_container">
        <div className="header" ref={ref}>
          <h1>Make The Wise Decision For Software Solutions</h1>
          {/* <p>The pricing methodology appears to lack sufficient precision.</p> */}
          <p>We are offering a 50% discount for the first 10 clients (7/10)</p>
        </div>
        <div className="pricing_list">
          {pricingBlocks.map((el, i) => (
            <motion.div
              key={el.title}
              variants={{
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.75, delay: i / 6 + 0.1 },
                },
                hidden: { opacity: 0, y: 10 },
              }}
              animate={controls}
              initial="hidden"
              className="pricing_item"
            >
              <h5 className="pricing_item_title">{el.title}</h5>
              {el.newPrice ? (
                <div style={{ display: "flex", alignItems: "flex-end" }}>
                  {" "}
                  <h1 className="pricing_item_price">{`${el.newPrice}`}</h1>
                  <h4 className="pricing_item_oldprice">{`${el.price}`}</h4>
                </div>
              ) : (
                <div>
                  {" "}
                  <h1 className="pricing_item_price">{`${el.price}`}</h1>
                </div>
              )}

              <p className="pricing_item_description">{el.description}</p>

              <Button
                variant="outlined"
                color="dark"
                endIcon={<ArrowRightAltIcon></ArrowRightAltIcon>}
                sx={{ width: "100%" }}
                onClick={() => {
                  router.push("hire");
                }}
              >
                Choose Package
              </Button>
              <div className="pricing__rows">
                {el.rows.map((el) => (
                  <div key={el} className="pricing_row">
                    <CheckCircleIcon color="primary"></CheckCircleIcon>
                    <h6>{el}</h6>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
