import React, { useEffect, useState } from "react";
// import "../../styles/hero.scss";

import Box from "@mui/material/Box";
import { Button, Grid, Container } from "@mui/material";
import json2mq from "json2mq";
import useMediaQuery from "@mui/material/useMediaQuery";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { motion } from "framer-motion";
// import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// export async function getStaticProps({ locale }) {
//   console.log(locale);
//   return {
//     props: {
//       ...(await serverSideTranslations(locale, ["home"])),
//       // Will be passed to the page component as props
//     },
//   };
// }

import { useTranslation } from "next-i18next";
import Image from "next/image";
import { useRouter } from "next/router";
const Hero = ({mainAnimation, loadingAnimation}) => {
  // console.log(props);
  const { t: translate } = useTranslation("home");
  const { t: translateCommon } = useTranslation("common");
const router = useRouter()
  const matchesMedium = useMediaQuery(
    json2mq({
      minWidth: 768,
    })
  );



  console.log(loadingAnimation);
  return (
    <section className={"hero_section"}>
      {" "}
      <div className="hero_background_elements">
        <div className="logo">
          <Image alt="logo bg" width={500} height={200} src="/logoForBg.png"></Image>
        </div>
        <div className="left-circles"></div>
        <div className="right-circles"></div>
      </div>
      <Container
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
        maxWidth="lg"
      >
        <Box className="hero">
          <motion.h1
            animate={{ y: 0, opacity: 1 }}
            initial={{ y: 20, opacity: 0 }}
            transition={{ delay: !loadingAnimation ?  6.9 + 0 : 1.5 + 0, duration: 0.75 }}
            className="hero__title"
          >
            <span>{translate("home.hero.title.Unlock")}</span>{" "}
            {translate("home.hero.title.main")}
          </motion.h1>
          <motion.p
            animate={{ y: 0, opacity: 1 }}
            initial={{ y: 20, opacity: 0 }}
            transition={{ delay: !loadingAnimation ?  6.9 + 0.15: 1.5 + 0.15, duration: 0.75 }}
            className="hero__description"
          >
            {translate("home.hero.description")}
          </motion.p>
          <motion.div
            animate={{ y: 0, opacity: 1 }}
            initial={{ y: 20, opacity: 0 }}
            transition={{ delay: !loadingAnimation ?  6.9 + 0.3 : 1.5 +  0.3, duration: 0.75 }}
            className="hero_buttons d-flex gap-4"
          >
            <Button
              // style={matchesMedium ? { width: 220, marginTop: "2rem" } :{width: 180, marginTop: "2rem" }}
              size={!matchesMedium ? "small": "large"}
              variant="contained"
              onClick={()=> router.push("hire")}
              endIcon={<ArrowRightAltIcon></ArrowRightAltIcon>}
            >
              {translateCommon("button_get_started")}
            </Button>
            <Button
              variant="outlined"
              size={!matchesMedium ? "small": "large"}
              onClick={()=> router.push("service")}
              endIcon={<ArrowRightAltIcon></ArrowRightAltIcon>}
            >
              {" "}
              {translateCommon("button_learn_more")}
            </Button>
          </motion.div>
        </Box>

        {/* {matchesMedium && (
          <Box className="hero__right">
            <Image
              width={700}
              height={380}
              priority
              alt="home_1"
              src={"/home_1.jpg"}
              className={"home_img"}
            ></Image>
          </Box>
        )}{" "} */}
      </Container>
      {/* {!matchesMedium && (
        <Box className="hero__right">
          // <img
            layout="fill"
            // width={1000}
            // height={1000}
            src={"/home_1.jpg"}
            className={"home_img"}
          ></img>
        </Box>
      )} */}
    </section>
  );
};
// export async function getStaticProps({ locale }) {
//   console.log(locale);
//   return {
//     props: {
//       ...(await serverSideTranslations(locale, ["home"])),
//       // Will be passed to the page component as props
//     },
//   };
// }
export default Hero;
