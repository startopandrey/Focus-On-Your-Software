import { Button, Container, Grid, Icon } from "@mui/material";
import React from "react";
import { useState, useEffect } from "react";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useRouter } from "next/router";
import Image from "next/image";
import styles from '../../../src/styles/pricing.module.scss'
const Pricing = ({ title, description, pricingBlocks }) => {
  const router = useRouter();
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section className={styles.pricing}>
      <div className={styles.pricing_background_elements}>
        <div className={styles.logo}>
          <Image
            alt="logo"
            width={500}
            height={200}
            src="/logoForBg.png"
          ></Image>
        </div>
        <div className={styles.left_circles}></div>
        <div className={styles.right_circles}></div>
      </div>

      <div className={styles.pricing_container}>
        <div className={styles.header} ref={ref}>
          <h1>{title}</h1>
          {/* <p>The pricing methodology appears to lack sufficient precision.</p> */}
          <p>{description}</p>
        </div>
        <div className={styles.pricing_list}>
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
              className={styles.pricing_item}
            >
              <h5 className={styles.pricing_item_title}>{el.title}</h5>
              {el.newPrice ? (
                <div style={{ display: "flex", alignItems: "flex-end" }}>
                  {" "}
                  <h1 className={styles.pricing_item_price}>{`${el.newPrice}`}</h1>
                  <h4 className={styles.pricing_item_oldprice}>{`${el.price}`}</h4>
                </div>
              ) : (
                <div>
                  {" "}
                  <h1 className={styles.pricing_item_price}>{`${el.price}`}</h1>
                </div>
              )}

              <p className={styles.pricing_item_description}>{el.description}</p>

              <Button
                variant="outlined"
                color="dark"
                endIcon={<ArrowRightAltIcon></ArrowRightAltIcon>}
                sx={{ width: "100%" }}
                onClick={() => {
                  router.push("/contact");
                }}
              >
                Learn More
              </Button>
              <div className={styles.pricing__rows}>
                {el.rows.map((el) => (
                  <div key={el} className={styles.pricing_row}>
                    <CheckCircleIcon color="primary"></CheckCircleIcon>
                    <h5>{el}</h5>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
