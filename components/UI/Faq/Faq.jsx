import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import styles from "../../../src/styles/faq.module.scss"
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import json2mq from "json2mq";
import { useMediaQuery } from "@mui/material";
const Faq = ({ data }) => {
  const [expanded, setExpanded] = React.useState(false);
  const matchesMedium = useMediaQuery(
    json2mq({
      minWidth: 764,
    })
  );
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={styles.faq}>
      {data.map((el, i) => (
        <Accordion
          expanded={expanded === `panel${i}`}
          onChange={handleChange(`panel${i}`)}
          sx={{ mb: 2, borderRadius: 0 }}
        >
          <AccordionSummary
            expandIcon={
              expanded === `panel${i}` ? (
                <RemoveRoundedIcon></RemoveRoundedIcon>
              ) : (
                <AddRoundedIcon></AddRoundedIcon>
              )
            }
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography
              sx={
                matchesMedium
                  ? { width: "100%",  fontSize: "1.5rem", fontWeight: 600, flexShrink: 0 }
                  : { width: "100%",fontSize: "1.1rem", fontWeight: 600, flexShrink: 0 }
              }
            >
              {el.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ padding: "1.5rem" }}>
            {el.answer.map((text) => (
              <Typography
                sx={
                  matchesMedium
                    ? { fontSize: "1.2rem", color: "gray", mb: 2 }
                    : { fontSize: "1rem", color: "gray", mb: 2 }
                }
              >
                {text}
              </Typography>
            ))}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default Faq;
