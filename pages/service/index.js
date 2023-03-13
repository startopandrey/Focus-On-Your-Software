import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import json2mq from "json2mq";
import useMediaQuery from "@mui/material/useMediaQuery";
import Image from "next/image";
const Service = (props) => {
  const { t: translate } = useTranslation("home");
  const matchesMedium = useMediaQuery(
    json2mq({
      minWidth: 768,
    })
  );
  const serviceList = [
    {
      icon: "icons/web-development.png",
      title: "Web Development",
      description: "",
    },
    { icon: "icons/design.png", title: "Web Design", description: "" },
    {
      icon: "icons/app-development.png",
      title: "Mobile App Development",
      description: "",
    },
    {
      icon: "icons/data-managment.png",
      title: "Data Management",
      description: "",
    },
    {
      icon: "icons/search-op.png",
      title: "Search Engine Optimization",
      description: "",
    },
    { icon: "icons/search-opt.png", title: "Data Scraping", description: "" },
    {
      icon: "icons/custom-solution.png",
      title: "Custom IT Solution",
      description: "",
    },
  ];
  return (
    <div className="service">
      {" "}
      <section className={"hero_section"}>
        {" "}
        <Container>
          <Grid

            sx={{ height: "100%" }}
            container
            spacing={2}
          >
            <Grid sx={{ height: "100%" }} item lg={6}>
              <Box className="hero__left">
                <h1 className="hero__left_title">
                  Digital Agency <br></br> That Provides
                  <span>Solutions</span> to Your Problems.
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
             { matchesMedium &&
              <Box className="hero__right">
                <Image
                  layout="fill"
                  // width={1000}
                  alt="service_img"
                  // height={1000}
                  src={"/service.png"}
                  className={"home_img"}
                ></Image>
              </Box>}
            </Grid>
          </Grid>{" "}
        </Container>
      </section>
      <section className="gap">
        <Container className="gap_container">
          <Box className="header">
            <h3>Our Services</h3>
            <h1>What Services Do We Provide?</h1>
          </Box>
          <ul className="service_items">
            {serviceList.map((el, i) => (
              <li key={i} className="service_item">
                {" "}
                <Image  alt="service_img" className="service__img" src={el.icon} />
                <Typography
                  sx={{ fontWeight: 600 }}
                  variant="h5"
                  component="h6"
                >
                  {el.title}{" "}
                </Typography>
              </li>
            ))}
          </ul>
        </Container>
      </section>
      <section className="services_info">
        <Container>
          <Grid
            //   justifyContent="center"
            alignItems="center"
            sx={{ height: "100%" }}
            className="services_info_block"
            container
            
            spacing={matchesMedium ? 4 : 8}
          >
            <Grid   md="6" sx={{ height: "100%" }} item lg={6}>
              {" "}
              <Box className="header">
                <h1>Web Development</h1>
                <h3>INTRODUCTION</h3>
              </Box>
              <Box className="header_bottom">
                <h2>What do you use to build web application?</h2>
                <p>
                  We&apos;re using the newest technologies such as React, Next js,
                  MUI, TailWind and bunch of others to rite code.
                </p>
              </Box>
            </Grid>
            <Grid   md="6" className="services_info_img" item lg={6}>
              {" "}
              <Box className="services__left">
                <Image  alt="service_img" src={"/web-development.png"}></Image>
              </Box>
            </Grid>{" "}
          </Grid>
          <Grid
            //   justifyContent="center"
            alignItems="center"
            className="services_info_block"
            sx={{ height: "100%" }}
            container
            spacing={matchesMedium ? 4 : 8}
          >
            <Grid
              className="services_info_img"
              order={{ xs: 2, sm: 1 }}
              item
              md="6"
              lg={6}
            >
              {" "}
              <Box className="services__left">
                <Image  alt="service_img" src={"/service-design.png"}></Image>
              </Box>
            </Grid>
            <Grid   md="6" order={{ xs: 1, sm: 2 }} sx={{ height: "100%" }} item lg={6}>
              {" "}
              <Box className="header">
                <h1>Web Design</h1>
                <h3>INTRODUCTION</h3>
              </Box>
              <Box className="header_bottom">
                <h2>Where do you create design?</h2>
                <p>
                  Figma - the software that you can see on the photo. This is
                  perfect environment for creating modern web design for Your
                  product
                </p>
              </Box>
            </Grid>{" "}
          </Grid>
          <Grid
            className="services_info_block"
            alignItems="center"
            spacing={matchesMedium ? 4 : 8}
            sx={{ height: "100%" }}
            container
          >
            <Grid   md="6" sx={{ height: "100%" }} item lg={6}>
              {" "}
              <Box className="header">
                <h1>Mobile App Development</h1>
                <h3>INTRODUCTION</h3>
              </Box>
              <Box className="header_bottom">
                <h2></h2>
                <p>
                  {" "}
                  Making Mobile Application is a pritty complicatied thing, but
                  we&apos;ve all tools to make it real. We&apos;re using live server such
                  as expo to be sure that App is working correctly on all type
                  of devices. Also React Native is making code that will work on
                  Android and IPhone as well, it will make app much cheaper
                  because your don&apos;t need to do 2 separated apps.
                </p>
              </Box>
            </Grid>
            <Grid   md="6" className="services_info_img" item lg={6}>
              {" "}
              <Box className="services__left">
                <Image  alt="service_img" src={"/app-development.png"}></Image>
              </Box>
            </Grid>{" "}
          </Grid>
          <Grid
            className="services_info_block"
            alignItems="center"
            spacing={matchesMedium ? 4 : 8}
            sx={{ height: "100%" }}
            
            container
          >
            <Grid
              className="services_info_img"
              order={{ xs: 2, sm: 1 }}
              md="6"
              item
              lg={6}
            >
              {" "}
              <Box className="services__left">
                <Image alt="data-managment" src={"/data-managment.png"}></Image>
              </Box>
            </Grid>
            <Grid
              order={{ xs: 1, sm: 2 }}
              md="6"
              sx={{ height: "100%" }}
              item
              lg={6}
            >
              {" "}
              <Box className="header">
                <h1>Data Management</h1>
                <h3>INTRODUCTION</h3>
              </Box>
              <Box className="header_bottom">
                <h2>How can I manage my data?</h2>
                <p>
                  We offer custom dashboard that can take your excel file as a
                  reference and stores your data in mongo database. You will be
                  able to analize your data in beautiful dashboard and change
                  it.
                </p>
              </Box>
            </Grid>{" "}
          </Grid>
          <Grid
            className="services_info_block"
            alignItems="center"
            sx={{ height: "100%" }}
            container
            spacing={matchesMedium ? 0 : 0}
          >
            <Grid  md="6" sx={{ height: "100%" }} item lg={6}>
              {" "}
              <Box className="header">
                <h1>Data Scraping</h1>
                <h3>INTRODUCTION</h3>
              </Box>
              <Box className="header_bottom">
                <h2>What is Scraping used for ?</h2>
                <p>
                  Data Scraping used for getting huge amount of data from
                  another site or software. We rite spectial bot that can
                  provide that for you instead of human that will take a lot of
                  time to do.
                </p>
              </Box>
            </Grid>
            <Grid className="services_info_img" item  md="6" lg={6}>
              {" "}
              <Box className="services__left">
                <Image  alt="app-development" src={"/app-development.png"}></Image>
              </Box>
            </Grid>{" "}
          </Grid>
        </Container>
      </section>
    </div>
  );
};

export async function getStaticProps({ locale }) {
  console.log(locale);
  return {
    props: {
      ...(await serverSideTranslations(locale, ["home"])),
      // Will be passed to the page component as props
    },
  };
}
export default Service;
