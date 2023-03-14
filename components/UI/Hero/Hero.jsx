import React from "react";
// import "../../styles/hero.scss";

import Box from "@mui/material/Box";
import { Button, Grid, Container } from "@mui/material";
import json2mq from "json2mq";
import useMediaQuery from "@mui/material/useMediaQuery";
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
  const matchesMedium = useMediaQuery(
    json2mq({
      minWidth: 768,
    })
  );
  console.log(matchesMedium);
  return (
    <section className={"hero_section"}>
      {" "}
      <Container maxWidth="lg">
        <Grid sx={{ height: "100%" }} container spacing={2}>
          <Grid sx={{ height: "100%" }} item lg={6}>
            <Box className="hero__left">
              <h1 className="hero__left_title">
                <span>{translate("home.hero.title.Unlock")}</span>{" "}
                {translate("home.hero.title.main")}
              </h1>
              <p className="hero__left_description">
                {translate("home.hero.description")}
              </p>
              <Button
                style={{ width: 220, marginTop: "2rem" }}
                size="large"
                variant="contained"
              >
                {translate("button_more_services")}
              </Button>
            </Box>
          </Grid>
          <Grid item lg={6}>
            {" "}
          </Grid>
        </Grid>{" "}
        {matchesMedium && (
          <Box className="hero__right">
            <Image
              width={700}
              height={380}
    
              alt="home_1"
              src={"/home_1.jpg"}
              className={"home_img"}
            ></Image>
          </Box>
        )}{" "}
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
