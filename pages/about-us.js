import { Fragment } from "react";
// import Hero from "../components/UI/Hero";
// import Services from "../components/UI/Services";
// import About from "../components/UI/About";
// import Portfolio from "../components/UI/Portfolio";
// import Testimonial from "../components/UI/Testimonial";
// import Contact from "../components/UI/Contact";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Box, Button, Container, Grid, Paper } from "@mui/material";
import { useTranslation } from "next-i18next";
import json2mq from "json2mq";
import useMediaQuery from "@mui/material/useMediaQuery";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import Image from "next/image";
export async function getStaticProps({ locale }) {
  console.log(locale);
  return {
    props: {
      ...(await serverSideTranslations(locale, ["about-us", "common"])),
      // Will be passed to the page component as props
    },
  };
}
export default function AboutUs(props) {
  const { t: translate } = useTranslation("about-us");
  const { t: translateCommon } = useTranslation("common");

  const matchesMedium = useMediaQuery(
    json2mq({
      minWidth: 768,
    })
  );
  const valuesBlocks = translate("value.valuesBlocks", { returnObjects: true });
  return (
    <Fragment className="about_us">
      <section className={"hero_section"}>
        {" "}
        <Container>
          <Grid sx={{ height: "100%" }} container spacing={2}>
            <Grid sx={{ height: "100%" }} item lg={6}>
              <Box className="hero__left">
                <h1 className="hero__left_title">
                  {translate("hero.header.title")}
                </h1>
                <p className="hero__left_description">
                  {translate("hero.header.description")}
                </p>
                <Button
                  style={
                    matchesMedium
                      ? { width: 220, marginTop: "2rem" }
                      : { width: 180, marginTop: "2rem" }
                  }
                  size="large"
                  variant="contained"
                >
                  {translateCommon("button_more_services")}
                </Button>
              </Box>
            </Grid>
            <Grid item lg={6}>
              {" "}
            </Grid>
          </Grid>{" "}
        </Container>{" "}
        {matchesMedium && (
          <Box className="hero__right">
            <Image
              width={650}
              height={500}
              alt="about img"
              // height={1000}
              src={"/about-us-bg-1.jpg"}
              className={"home_img"}
            ></Image>
          </Box>
        )}
      </section>
      <section className="value">
        <Container>
          <div className="header">
            {" "}
            <h2>{translate("value.header.title")}</h2>
            <p>{translate("value.header.description")}</p>
          </div>
          <div className="value_cards">
            {valuesBlocks.map((el) => (
              <div key={el.key} className="value_card">
                <AutoAwesomeIcon className="icon"></AutoAwesomeIcon>
                <h4>{el.title}</h4>
                <p>{el.desctiption}</p>
                <p className="value_card_p">{el.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
      <section className="team">
        <Container>
          <Grid className="team_items_container" container>
            {" "}
            <Grid
              order={{ xs: 2, sm: 1 }}
              className="team_items"
              xs={12}
              item
              md="12"
              lg="8"
            >
              <Box sx={{ gridArea: "block1" }} className="team_item">
                <Image
                  width={350}
                  height={350}
                  alt="back"
                  className="team_item_img"
                  src="/team/back.jpeg"
                ></Image>
                <Box className="team_item_overlay">
                  {" "}
                  <h3 class="title">Max Demeduk</h3>
                  <span class="post">Back end Developer</span>
                </Box>
              </Box>
              <Box sx={{ gridArea: "block2" }} className="team_item">
                <Image
                  width={350}
                  height={350}
                  alt="design"
                  src="/team/design.jpeg"
                ></Image>
                <Box className="team_item_overlay">
                  <h3 class="title">Arthur Dubinskiy</h3>
                  <span class="post">Web designer</span>
                </Box>
              </Box>
              <Box sx={{ gridArea: "block3" }} className="team_item">
                <Image
                  width={350}
                  height={350}
                  alt="front"
                  src="/team/front.jpg"
                ></Image>
                <Box className="team_item_overlay">
                  {" "}
                  <h3 class="title">Andrey Ilyukhin</h3>
                  <span class="post">Frond end Developer</span>
                </Box>
              </Box>
            </Grid>
            <Grid order={{ xs: 1, sm: 2 }} md="12" xs={12} item lg="4">
              {" "}
              <Box className="header">
                <h1>{translate("team.header.title")}</h1>
                <h3>{translate("team.header.description")}</h3>
              </Box>
              <p className="team_text">{translate("team.text")}</p>
            </Grid>
          </Grid>
        </Container>
      </section>
    </Fragment>
  );
}
