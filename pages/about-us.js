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
  const valuesBlocks = [
    {
      key: "1",
      title: "Daily Hard Work",
      desctiption: "We work hard everyday",
      text: "We keep our promises, clear deadlines & functionality",
    },
    {
      key: "2",
      title: "Passion before money",
      desctiption: "Work first principle",
      text: "Absolutely free, design, only if you like it we continue working",
    },
    {key: "3",
      title: "Guarantees",
      desctiption: "Project Assurance",
      text: "After the end of the project, you will have half of the money for 1 month as a deposit if something goes wrong.",
    },
  ];
  return (
    <Fragment className="about_us">
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
                  {translate("hero.header.title")}
                </h1>
                <p className="hero__left_description">
                  {translate("hero.header.description")}
                </p>
                <Button
                  style={{ width: 220, marginTop: "2rem" }}
                  size="large"
                  variant="contained"
                >
                  {translateCommon("button_more_services")}
                </Button>
              </Box>
            </Grid>
            <Grid item lg={6}>
              {" "}
              {matchesMedium && (
                <Box className="hero__right">
                  <Image
                    layout="fill"
                    // width={1000}
                    alt="about img"
                    // height={1000}
                    src={"/about-us-bg-1.jpg"}
                    className={"home_img"}
                  ></Image>
                </Box>
              )}
            </Grid>
          </Grid>{" "}
        </Container>
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
            <Grid order={{  xs: 2, sm: 1 }}  className="team_items" xs={12} item md="12" lg="8">
              <Box sx={{ gridArea: "block1" }} className="team_item">
                <Image alt="back" src="/team/back.jpeg"></Image>
              </Box>
              <Box sx={{ gridArea: "block2" }} className="team_item">
                <Image alt="design" src="/team/design.jpeg"></Image>
              </Box>
              <Box sx={{ gridArea: "block3" }} className="team_item">
                <Image alt="front" src="/team/front.jpg"></Image>
                <Box className="team_item_overlay"></Box>
              </Box>
            </Grid>
            <Grid order={{  xs: 1, sm: 2 }} md="12" xs={12} item lg="4">
              {" "}
              <Box className="header">
                <h1>THE TEAM</h1>
                <h3>INTRODUCTION</h3>
              </Box>
              <p className="team_text">
                Focus On Your Software - Agency based in Austia (South Tirol),
                has been created in 2022 by 3 enthusiasts from Ukraine that
                worked at big companies and what to do there own agency to help
                small-medium sized businesses effort digitalization and IT
                solution for less price than at big companies.
              </p>
            </Grid>
          </Grid>
        </Container>
      </section>
    </Fragment>
  );
}
