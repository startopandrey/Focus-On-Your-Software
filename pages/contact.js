import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  TextField,
  Snackbar,
  Alert,
} from "@mui/material";
import React, { useState } from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import SaveIcon from "@mui/icons-material/Save";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
const Contact = (props) => {
  const { t: translate } = useTranslation("contact");
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = useState(false);
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const [message, setMessage] = useState({
    email: "",
    name: "",
    message: "",
    company: "",
  });
  const validateForm = () => {
    if (
      message.name != "" &&
      String(message.email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ) &&
      message.message != "" &&
      message.company != ""
    ) {
      return false;
    }
    return true;
  };
  const submitForm = async () => {
    setLoading(true);
    setMessage({
      email: "",
      name: "",
      message: "",
      company: "",
    });
    const response = await fetch("/api/sendEmail", {
      method: "POST",
      body: JSON.stringify(message)
    });

    const data = await response.json();

    if (data) {
      setOpen(true);
      setLoading(false);
    }
    console.log(data);
  };

  return (
    <div className="contact">
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
      <Box className="contact_container">
        <Container>
          {" "}
          <Grid sx={{ display: "flex" }} container spacing={10}>
            <Grid item lg={6}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
                spacing={4}
              >
                <Box className="header">
                  <h3>{translate("header.desctiption")}</h3>
                  <h1>{translate("header.title")}</h1>
                </Box>

                <Grid container spacing={2}>
                  <Grid item xs="6" sm="6" md="6" lg="6">
                    <TextField
                      id="outlined-basic"
                      label="Your Name*"
                      value={message.name}
                      onChange={(event) => {
                        if (/^[a-zA-Z]/.test(event.target.value)) {
                          setMessage({ ...message, name: event.target.value });
                        }
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
                        if (/^[a-zA-Z]/.test(event.target.value)) {
                          setMessage({
                            ...message,
                            company: event.target.value,
                          });
                        }
                      }}
                      label="Your Company*"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs="12" sm="12" md="12" lg="12">
                    <TextField
                      sx={{ background: "#fff", width: "100%" }}
                      id="outlined-basic"
                      label="Your Email*"
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
                      label="Your Message*"
                      value={message.message}
                      onChange={(event) => {
                        if (/^[a-zA-Z]/.test(event.target.value)) {
                          setMessage({
                            ...message,
                            message: event.target.value,
                          });
                        }
                      }}
                      multiline
                      // maxRows={8}
                      rows="6"
                    />
                  </Grid>
                </Grid>
              </Box>
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
            </Grid>
            <Grid item lg={6}>
              <Box className="home_contact_address">
                <Box className={"address_item"}>
                  <h3 className={"address_item_title"}>Address :</h3>
                  <h3 className={"address_item_content"}>
                    Franz-Josef-pl. 10, 6330 Kufstein, Austria
                  </h3>
                </Box>
                <Box className={"address_item"}>
                  <h3 className={"address_item_title"}>Phone :</h3>
                  <h3 className={"address_item_content"}>+43 676 4312048</h3>
                </Box>
                <Box className={"address_item"}>
                  <h3 className={"address_item_title"}>Email :</h3>
                  <h3 className={"address_item_content"}>
                    focusonyoursoftware@gmail.com
                  </h3>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>{" "}
      </Box>{" "}
      <div style={{ width: "100%" }}>
        <iframe
          width="100%"
          height="600"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Kufstien+(My%20Business%20Name)&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          <a href="https://www.maps.ie/distance-area-calculator.html">
            distance maps
          </a>
        </iframe>
      </div>
    </div>
  );
};

export async function getStaticProps({ locale }) {
  console.log(locale);
  return {
    props: {
      ...(await serverSideTranslations(locale, ["contact"])),
      // Will be passed to the page component as props
    },
  };
}
export default Contact;
