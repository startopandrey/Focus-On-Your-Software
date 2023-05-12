import { Button, Container, Grid, Icon } from "@mui/material";
import React from "react";
import { useState, useEffect } from "react";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useRouter } from "next/router";
import Image from "next/image";
const Pricing = () => {
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
      title: "Basic Software",
      price: "$700+",
      description:
        "The best choice for small and medium-sized businesses who are looking for a web-site with the ability to change data.",
      rows: [
        "Re/New Design",

        "Business Site",
        "CMS Admin Panel",
        "500MB Hosting Free",
      ],
    },
    {
      title: "Basic Software",
      price: "$1500+",
      description:
        "If you are looking for a website with the ability to pay online, it is the best choice.",
      rows: [
        "Re/New Design",
        "Client Supports",
        "Business Site",
        "24/7 Supports",
        "Admin Panel",
        "500MB Hosting Free",
        "Analysis Dashboard",
        "Payment System",
      ],
    },
    {
      title: "Advence Software",
      price: "$5000+",
      description:
        "An advanced plan is used for automatic processes in the company and allows you to have full control of business from one place.",
      rows: [
        "Re/New Design",
        "24/7 Supports",
        "Business Site",
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
      title: "Custom Software",
      price: "Let's Talk",
      description:
        "We can arrange a brief phone conversation to gain a deeper understanding of the issue and determine the best possible solution.",
      rows: [
        "Re/New Design",
        "24/7 Supports",
        "Business Site",
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
          <Image alt="logo" width={500} height={200} src="/logo_for_bg.png"></Image>
        </div>
        <div className="left-circles"></div>
        <div className="right-circles"></div>
      </div>

      <div className="pricing_container">
        <div className="header">
          <h1>Make The Wise Decision For Software Solutions</h1>
          <p>The pricing methodology appears to lack sufficient precision.</p>
        </div>
        <div className="pricing_list">
          {pricingBlocks.map((el, i) => (
            <motion.div
            key={el.title}
              ref={ref}
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
              <h1 className="pricing_item_price">{`${el.price}`}</h1>
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
