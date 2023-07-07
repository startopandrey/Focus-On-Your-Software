import React from "react";

import { Button, Grid, InputAdornment, TextField } from "@mui/material";
import { Box, Container, width } from "@mui/system";
import { AccountCircle } from "@mui/icons-material";
import { useRouter } from "next/router";
import style from "../../src/styles/footer.module.scss";
const navLinks = [
  {
    path: "/solution/website",
    display: "Create Website",
  },
  {
    path: "/solution/marketing",
    display: "Marketing",
  },

  {
    path: "/blog",
    display: "Blog",
  },
  {
    path: "/events",
    display: "Events",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];

const Footer = () => {
  const router = useRouter();
  return (
    <footer className={style.footer}>
      <Container>
        <Grid container spacing={4}>
          <Grid className={style.footer_header} md={6} lg={6} item>
            <h1>
              Thank you for <br /> your time
            </h1>
            <p>How do construction workers party? They raise the roof.</p>
            <Box sx={{ display: "flex" }}>
              <Button
                size={"large"}
                sx={{ width: 150, mr: 2 }}
                variant="contained"
                onClick={() => {
                  router.push("/solution/website");
                }}
              >
               Create Website
              </Button>
              <Button
                size={"large"}
                sx={{ width: 150 }}
                onClick={() => {
                  router.push("hire");
                }}
                variant="outlined"
              >
                Hire Foys
              </Button>
            </Box>
          </Grid>
          <Grid className={style.footer_nav_container} md={3} lg={3} item>
            <h3 className={style.header}>Additional Links</h3>
            <ul className={style.footer_nav}>
              {navLinks.map((link) => (
                <li key={link.path} className={style.nav_link}>
                  <a href={link.path}>{link.display}</a>
                </li>
              ))}
            </ul>
          </Grid>
          <Grid className={style.footer_subscribe_container} md={3} lg={3} item>
            {" "}
            <h3 className={style.header}>Subscribe</h3>
            <p>Get more information about Foys</p>
            <div className={style.subscribe_textfield_container}>
              <input
                className={style.subscribe_textfield}
                placeholder="Your Email"
              />

              <Button
                variant="contained"
                sx={{ m: 0 }}
                className={style.subscribe_button}
              >
                GO
              </Button>
            </div>
            {/* <TextField
              id="input-with-icon-textfield"
              label="Your Email"
              className={style.subscribe_textfield"
              color="neutral"
              
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <Button variant="contained" className={style.subscribe_button">GO</Button>
                  </InputAdornment>
                ),
              }}
              variant="outlined"
            /> */}
          </Grid>
        </Grid>
        <p
          style={{
            marginTop: "4rem",
            color: "rgb(100, 100, 100)",
            textAlign: "center",
          }}
        >
          ©2022 FOYS, All rights reserved
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
