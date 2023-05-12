import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import json2mq from "json2mq";
import useMediaQuery from "@mui/material/useMediaQuery";
import Image from "next/image";
import Layout from "../../components/Layout/Layout";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
const Service = (props) => {
  const { t: translate } = useTranslation("service");
  const { t: translateCommon } = useTranslation("common");
  const matchesMedium = useMediaQuery(
    json2mq({
      minWidth: 768,
    })
  );
  const serviceList = translate("ourServices.serviceList", {
    returnObjects: true,
  });
  const services = translate("services", { returnObjects: true });
  return (
    <Layout>
    <div className="service">
      {" "}
      <section className={"hero_section"}>
        {" "}
        <Container>
          <Grid sx={{ height: "100%" }} container spacing={2}>
            <Grid sx={{ height: "100%" }} item lg={6}>
              <Box className="hero__left">
                <h1 className="hero__left_title">
                  {translate("header.title.text1")} <br></br>{" "}
                  {translate("header.title.text2")}
                  <span> {translate("header.title.text3")}</span>{" "}
                  {translate("header.title.text4")}
                </h1>
                <p className="hero__left_description">
                  {translate("header.description")}
                </p>
                <Button
                    style={
                      matchesMedium
                        ? { width: 220, marginTop: "2rem" }
                        : { width: 180, marginTop: "2rem" }
                    }
                    size="large"
                    variant="outlined"
                    endIcon={<ArrowRightAltIcon></ArrowRightAltIcon>}
                  >
                    {translateCommon("button_get_started")}
                  </Button>
              </Box>
            </Grid>
            <Grid item lg={6}>
              {matchesMedium && (
                <Box className="hero__right">
                  <Image
                    alt="service_img"
                    width={650}
                    priority
                    height={500}
                    src={"/service.png"}
                    className={"home_img"}
                  ></Image>
                </Box>
              )}
            </Grid>
          </Grid>{" "}
        </Container>
      </section>
      <section className="gap">
        <Container className="gap_container">
          <Box className="header">
            <h3> {translate("ourServices.header.title")}</h3>
            <h1>{translate("ourServices.header.description")}</h1>
          </Box>
          <ul className="service_items">
            {serviceList.map((el, i) => (
              <li key={i} className="service_item">
                {" "}
                <Image
                  alt="service_img"
                  className="service__img"
                  src={el.icon}
                  width={matchesMedium ? 100 : 70}
                  height={matchesMedium ? 100 : 70}
                />
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
            <Grid md="6" sx={{ height: "100%" }} item lg={6}>
              {" "}
              <Box className="header">
                <h1>{services[0].title}</h1>
                <h3>{services[0].introducton}</h3>
              </Box>
              <Box className="header_bottom">
                <h2>{services[0].question}</h2>
                <p>{services[0].anwser}</p>
              </Box>
            </Grid>
            <Grid md="6" className="services_info_img" item lg={6}>
              {" "}
              <Box className="services__left">
                <Image
                  alt="service_img"
                  width={500}
                  height={500}
                  src={"/web-development.png"}
                ></Image>
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
                <Image
                  width={500}
                  height={500}
                  alt="service_img"
                  src={"/service-design.png"}
                ></Image>
              </Box>
            </Grid>
            <Grid
              md="6"
              order={{ xs: 1, sm: 2 }}
              sx={{ height: "100%" }}
              item
              lg={6}
            >
              {" "}
              <Box className="header">
                <h1>{services[1].title}</h1>
                <h3>{services[1].introducton}</h3>
              </Box>
              <Box className="header_bottom">
                <h2>{services[1].question}</h2>
                <p>{services[1].anwser}</p>
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
            <Grid md="6" sx={{ height: "100%" }} item lg={6}>
              {" "}
              <Box className="header">
                <h1>{services[2].title}</h1>
                <h3>{services[2].introducton}</h3>
              </Box>
              <Box className="header_bottom">
                <h2>{services[2].question}</h2>
                <p>{services[2].anwser}</p>
              </Box>
            </Grid>
            <Grid md="6" className="services_info_img" item lg={6}>
              {" "}
              <Box className="services__left">
                <Image
                  width={500}
                  height={500}
                  alt="service_img"
                  src={"/app-development.png"}
                ></Image>
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
                <Image
                  width={500}
                  height={500}
                  alt="data-managment"
                  src={"/data-managment.png"}
                ></Image>
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
                <h1>{services[3].title}</h1>
                <h3>{services[3].introducton}</h3>
              </Box>
              <Box className="header_bottom">
                <h2>{services[3].question}</h2>
                <p>{services[3].anwser}</p>
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
            <Grid md="6" sx={{ height: "100%" }} item lg={6}>
              {" "}
              <Box className="header">
                <h1>{services[4].title}</h1>
                <h3>{services[4].introducton}</h3>
              </Box>
              <Box className="header_bottom">
                <h2>{services[4].question}</h2>
                <p>{services[4].anwser}</p>
              </Box>
            </Grid>
            <Grid className="services_info_img" item md="6" lg={6}>
              {" "}
              <Box className="services__left">
                <Image
                  width={500}
                  height={500}
                  alt="data-development"
                  src={"/data-scraping.png"}
                ></Image>
              </Box>
            </Grid>{" "}
          </Grid>
        </Container>
      </section>
    </div></Layout>
  );
};

export async function getStaticProps({ locale }) {
  console.log(locale);
  return {
    props: {
      ...(await serverSideTranslations(locale, ["service", "common"])),
      // Will be passed to the page component as props
    },
  };
}
export default Service;
