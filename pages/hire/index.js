import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  TextField,
  Snackbar,
  Alert,
  Divider,
  FormGroup,
  Checkbox,
} from "@mui/material";

import React, { useState } from "react";
import { useRouter } from "next/router";

import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import axios from "axios";
import LoadingButton from "@mui/lab/LoadingButton";
import SaveIcon from "@mui/icons-material/Save";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import json2mq from "json2mq";
import useMediaQuery from "@mui/material/useMediaQuery";
import Image from "next/image";
const Hire = (props) => {
  const { t: translate } = useTranslation("hire");
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const matchesMedium = useMediaQuery(
    json2mq({
      minWidth: 768,
    })
  );
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const messageSchema = {
    email: "",
    name: "",
    message: "",
    company: "",
    time: "",
  };
  const [message, setMessage] = useState(messageSchema);

  const [questionsWant, setQuestionsWant] = useState({
    question: "I want to*",
    multiOptions: false,
    options: [
      {
        id: 1,
        option: "Build a new project from scratch",
        active: false,
      },
      { id: 2, option: "Scale existing project", active: false },
      { id: 3, option: "Organize the meeting", active: false },
    ],
  });
  const [questionsStart, setQuestionStart] = useState({
    question: "How soon would you like to start?*",
    multiOptions: false,
    options: [
      {
        option: "As soon as possible",
        active: false,
      },
      {
        option: "Less than 30 days",
        active: false,
      },
      {
        option: "Next 60 days",
        active: false,
      },
      {
        option: "Not sure",
        active: false,
      },
    ],
  });
  const [questionsKind, setQuestionsKind] = useState({
    question: "What kind of project do you need?*",
    multiOptions: true,
    options: [
      {
        option: "Mobile",
        active: false,
      },
      {
        option: "Web",
        active: false,
      },
      {
        option: "Backend",
        active: false,
      },
      {
        option: "Integration",
        active: false,
      },
      {
        option: "UI/UX design",
        active: false,
      },
      {
        option: "Backend",
        active: false,
      },
      {
        option: "Data Management",
        active: false,
      },
      {
        option: "Other",
        active: false,
      },
    ],
  });
  const [questions, setQuestions] = useState([
    questionsWant,
    questionsKind,
    questionsStart,
  ]);
  const questionsWantExist = questionsWant.options.find(
    (e) => e.active == true
  );
  const questionsStartExist = questionsStart.options.find(
    (e) => e.active == true
  );
  const questionsKindExist = questionsKind.options.filter(
    (e) => e.active == true
  );
  console.log(questionsKindExist);
  const validateForm = () => {
    if (
      questionsWant.options[2].active &&
      message.time != "" &&
      String(message.email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ) &&
      message.message != ""
    ) {
      return false;
    }

    if (
      message.name != "" &&
      String(message.email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ) &&
      message.message != "" &&
      message.company != "" &&
      questionsWantExist &&
      questionsStartExist &&
      questionsKindExist
    ) {
      return false;
    }
    return true;
  };
  const formatMessage = () => {
    if (questionsWant.options[2].active) {
      return `I want to organize meeting at ${message.time}, my email is ${message.email}, ${message.message}`;
    }
    return `My Name is ${message.name},my email is ${message.email}, company ${
      message.company
    } I want to ${
      questionsWantExist?.option
    }, with this tec stack ${questionsKindExist.map((e) => e.option)}, ${
      questionsStartExist?.option
    }`;
  };
  const submitForm = async () => {
    formatMessage();
    setLoading(true);
    const mes = formatMessage();
    const data = await axios.post(
      "https://foys.herokuapp.com/send/hire",
      // "http://localhost:4000/send/email",
      { message: mes }
    );

    if (data) {
      setOpen(true);
      setLoading(false);
      setMessage(messageSchema);
    }
    console.log(data);
  };

  console.log(formatMessage());
  return (
    <div className="hire">
    {" "}
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Email has been sent!
        </Alert>
      </Snackbar>
      <Box className="hire_container">
        {" "}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
          spacing={4}
        >
          <div className={`logo`} onClick={() => router.push("/")}>
            <Image
              height={"50"}
              width={"120"}
              style={{ cursor: "pointer" }}
              src="/foys_logo.png"
              alt="logo"
            ></Image>
          </div>
          <Box className="header">
            <h3>{translate("header.desctiption")}</h3>
            <p>{translate("header.text")}</p>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              mb: "1rem",
              width: !matchesMedium ? '100%' : 'fit-content'
            }}
          >
            <FormControl className="row_form_control">
              {" "}
              <FormLabel
                className="form_control_label"
                id="demo-radio-buttons-group-label"
              >
                {questionsWant.question}
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
                className="row_radio_group"
              >
                {questionsWant.options.map((option, i) => (
                  <FormControlLabel
                    value={option.option}
                    className="radio_group"
                    key={i}
                    control={
                      <Radio
                        onChange={() => {
                          setMessage(messageSchema);
                          questionsWant.options.map(
                            (op) => (op.active = false)
                          );
                          option.active = true;
                          const newArr = questionsWant.options.map((op) => {
                            if (option.id != op.id) {
                              return op;
                            }
                            op.active = true;
                            return op;
                          });
                          console.log(newArr);
                          setQuestionsWant({
                            ...questionsWant,
                            options: newArr,
                          });
                          //   option.active = !option.active;
                        }}
                      />
                    }
                    label={option.option}
                  />
                ))}
              </RadioGroup>
            </FormControl>
            {!questionsWant.options[2].active && (
              <FormControl className="row_form_control">
                <FormLabel
                  className="form_control_label"
                  id="demo-radio-buttons-group-label"
                >
                  {questionsKind.question}
                </FormLabel>

                <FormGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                  className="row_radio_group"
                >
                  {questionsKind.options.map((option, i) => (
                    <FormControlLabel
                      key={i}
                      value={option.option}
                      className="radio_group"
                      control={
                        <Checkbox
                          onChange={() => {
                            option.active = !option.active;
                          }}
                        />
                      }
                      label={option.option}
                    />
                  ))}
                </FormGroup>
              </FormControl>
            )}
            {!questionsWant.options[2].active && (
              <FormControl className="row_form_control">
                {" "}
                <FormLabel
                  className="form_control_label"
                  id="demo-radio-buttons-group-label"
                >
                  {questionsStart.question}
                </FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                  className="row_radio_group"
                >
                  {questionsStart.options.map((option, i) => (
                    <FormControlLabel
                      value={option.option}
                      className="radio_group"
                      key={i}
                      control={
                        <Radio
                          onChange={() => {
                            questionsStart.options.map(
                              (op) => (op.active = false)
                            );
                            option.active = !option.active;
                          }}
                        />
                      }
                      label={option.option}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            )}
            {questionsWant.options[2].active && (
              <DateTimePicker
                label="Meeting Time*"
                value={message.time}
                onChange={(event) => {
                  setMessage({
                    ...message,
                    time: event,
                  });
                }}
              />
            )}
            {questionsWant.options[2].active && (
              <TextField
                sx={{ background: "#fff", width: "100%" }}
                id="outlined-basic"
                label="Email*"
                value={message.email}
                onChange={(event) => {
                  setMessage({ ...message, email: event.target.value });
                }}
                variant="outlined"
                fullWidth
              />
            )}{" "}
            {questionsWant.options[2].active && (
              <TextField
                sx={{ background: "#fff" }}
                fullWidth
                id="outlined-multiline-flexible"
                label="Project description/Country*"
                value={message.message}
                onChange={(event) => {
                  setMessage({
                    ...message,
                    message: event.target.value,
                  });
                }}
                multiline
                // maxRows={8}
                rows="6"
              />
            )}
          </Box>
        </Box>{" "}
        {!questionsWant.options[2].active ? (
          <Grid container spacing={2}>
            <Grid item xs="6" sm="6" md="6" lg="6">
              <TextField
                id="outlined-basic"
                label="First Name*"
                value={message.name}
                onChange={(event) => {
                  setMessage({
                    ...message,
                    name: event.target.value,
                  });
                }}
                variant="outlined"
                sx={{ background: "#fff", width: "100%" }}
              />
            </Grid>
            <Grid item xs="6" sm="6" md="6" lg="6">
              <TextField
                sx={{ background: "#fff", width: "100%" }}
                id="outlined-basic"
                value={message.company}
                onChange={(event) => {
                  setMessage({
                    ...message,
                    company: event.target.value,
                  });
                }}
                label="Company Name*"
                variant="outlined"
              />
            </Grid>
            <Grid item xs="12" sm="12" md="12" lg="12">
              <TextField
                sx={{ background: "#fff", width: "100%" }}
                id="outlined-basic"
                label="Email*"
                value={message.email}
                onChange={(event) => {
                  setMessage({ ...message, email: event.target.value });
                }}
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs="12" sm="12" md="12" lg="12">
              {" "}
              <TextField
                sx={{ background: "#fff" }}
                fullWidth
                id="outlined-multiline-flexible"
                label="Project description*"
                value={message.message}
                onChange={(event) => {
                  setMessage({
                    ...message,
                    message: event.target.value,
                  });
                }}
                multiline
                // maxRows={8}
                rows="6"
              />
            </Grid>
          </Grid>
        ) : (
          <div></div>
        )}
        {loading ? (
          <LoadingButton
            loading
            loadingPosition="start"
            startIcon={<SaveIcon />}
            sx={{ width: 150, mt: 2 }}
            size="large"
            variant="outlined"
          >
            Submit
          </LoadingButton>
        ) : (
          <Button
            sx={{ width: 150, mt: 2 }}
            variant="outlined"
            size="large"
            onClick={submitForm}
            disabled={validateForm()}
          >
            Submit
          </Button>
        )}
      </Box>{" "}
    </div>
  );
};

export async function getStaticProps({ locale }) {
  console.log(locale);
  return {
    props: {
      ...(await serverSideTranslations(locale, ["hire"])),
      // Will be passed to the page component as props
    },
  };
}
export default Hire;
