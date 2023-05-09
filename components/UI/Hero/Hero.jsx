import React from "react";
// import "../../styles/hero.scss";

import Box from "@mui/material/Box";
import { Button, Grid, Container } from "@mui/material";
import json2mq from "json2mq";
import useMediaQuery from "@mui/material/useMediaQuery";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
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
const Hero = (props) => {
  // console.log(props);
  const { t: translate } = useTranslation("home");
  const { t: translateCommon } = useTranslation("common");
  const matchesMedium = useMediaQuery(
    json2mq({
      minWidth: 768,
    })
  );
  console.log(matchesMedium);
  return (
    <section className={"hero_section"}>
      {" "}
      <div className="hero_background_elements">
        <div className="logo">
          <Image width={500} height={200} src="/logo_for_bg.png"></Image>
        </div>
        <div className="left-circles"></div>
        <div className="right-circles"></div>
      </div>
      <Container
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
        maxWidth="lg"
      >
        <Box className="hero">
          <h1 className="hero__title">
            <span>{translate("home.hero.title.Unlock")}</span>{" "}
            {translate("home.hero.title.main")}
          </h1>
          <p className="hero__description">
            {translate("home.hero.description")}
          </p>
          <div className="hero_buttons d-flex gap-4">
            <Button
              // style={matchesMedium ? { width: 220, marginTop: "2rem" } :{width: 180, marginTop: "2rem" }}
              size="large"
              variant="contained"
              endIcon={<ArrowRightAltIcon></ArrowRightAltIcon>}
            >
              {translateCommon("button_get_started")}
            </Button>
            <Button
              variant="outlined"
              size="large"
              endIcon={<ArrowRightAltIcon></ArrowRightAltIcon>}
            >
              {" "}
              {translateCommon("button_learn_more")}
            </Button>
          </div>
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
