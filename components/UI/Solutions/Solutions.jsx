import { Box, Container, Grid } from "@mui/material";
import React from "react";
import { useTranslation } from "next-i18next";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
const Solutions = () => {
  const { t: translate } = useTranslation("home");
  const solutionsArr = [
    {
      title: translate("home.solutions.step1.title"),
      description: translate("home.solutions.step1.text"),
      color: "#0049ff"
    },
    {
      title: translate("home.solutions.step2.title"),
      description: translate("home.solutions.step2.text"),
      color: "#ffc800"
    },
    {
      title: translate("home.solutions.step3.title"),
      description: translate("home.solutions.step3.text"),
      color: "#ff6101"
    },
    {
        title: translate("home.solutions.step4.title"),
        description: translate("home.solutions.step4.text"),
        color: "#f001ff"
      },
  ];
  return (
    <div className="solutions_section">
      <Container>
        {" "}
        <Box className="header">
          <h3>{translate("home.solutions.header.title")}</h3>
          <h1>{translate("home.solutions.header.description")}</h1>
        </Box>
        <Grid className="solutions__container" container>
          {solutionsArr.map((el, i) => (
            <Grid key={i} className="step" item lg={12 / solutionsArr.length}>
              <Box className="step_text">
                {" "}
                <h1 className="step_number">{`0${i + 1}/`}</h1>{" "}
                <CheckCircleIcon
                  sx={{ zIndex: 10, width: 30, height: 30, color: el.color }}
                ></CheckCircleIcon>
                <h4>{el.title}</h4> <p>{el.description}</p>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Solutions;
