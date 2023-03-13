import { Box, Grid } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

import { useTranslation } from "next-i18next";

const HomeSteps = () => {
  const { t: translate } = useTranslation("home");
  const stepsArr = [
    {
      title: translate("home.steps.step1.title"),
      description: translate("home.steps.step1.text"),
    },
    {
      title: translate("home.steps.step2.title"),
      description: translate("home.steps.step2.text"),
    },
    {
      title: translate("home.steps.step3.title"),
      description: translate("home.steps.step3.text"),
    },
  ];
  return (
    <section className="home_steps">
      <Container>
        {" "}
        <Box className="header">
          <h3>{translate("home.steps.header.title")}</h3>
          <h1>{translate("home.steps.header.description")}</h1>
        </Box>
        <Grid className="home_steps__container" container>
          {stepsArr.map((el, i) => (
            <Grid key={i} className="step" item lg={12 / stepsArr.length}>
              {" "}
              <h1 className="step_number">{`0${i + 1}/`}</h1>
              <Box className="step_text">
                <h3>{el.title}</h3> <p>{el.description}</p>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
};

export default HomeSteps;
