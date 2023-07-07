import { Box, Container, Grid } from "@mui/material";
import React, {useEffect} from "react";
import { useTranslation } from "next-i18next";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
const Solutions = () => {
  const { t: translate } = useTranslation("home");
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const solutionsArr = [
    {
      title: translate("home.solutions.step1.title"),
      description: translate("home.solutions.step1.text"),
      color: "#023fda",
    },
    {
      title: translate("home.solutions.step2.title"),
      description: translate("home.solutions.step2.text"),
      color: "#ffc800",
    },
    {
      title: translate("home.solutions.step3.title"),
      description: translate("home.solutions.step3.text"),
      color: "#ff6101",
    },
    {
      title: translate("home.solutions.step4.title"),
      description: translate("home.solutions.step4.text"),
      color: "#f001ff",
    },
  ];
  return (
    <div className="solutions_section">
      <Container>
        {" "}
        <Box  ref={ref} className="header">
          <h3>{translate("home.solutions.header.title")}</h3>
          <h1>{translate("home.solutions.header.description")}</h1>
        </Box>
        <div className="solutions__container" >
          {solutionsArr.map((el, i) => (
            <motion.div
            
              variants={{
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.75, delay: i / 5 + 0.1 },
                },
                hidden: { opacity: 0, y: 10 },
              }}
              animate={controls}
              initial="hidden"
              key={i}
              className="step"
             

            >
              <Box className="step_text">
                {" "}
                <h1 className="step_number">{`0${i + 1}/`}</h1>{" "}
                <CheckCircleIcon
                  sx={{ zIndex: 10, width: 30, height: 30, color: el.color }}
                ></CheckCircleIcon>
                <h4>{el.title}</h4> <p>{el.description}</p>
              </Box>
            </motion.div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Solutions;
