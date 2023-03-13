import React from "react";

import { Button, Grid, InputAdornment, TextField } from "@mui/material";
import { Box, Container, width } from "@mui/system";
import { AccountCircle } from "@mui/icons-material";

const navLinks = [
  {
    path: "/",
    display: "Home",
  },
  {
    path: "/about",
    display: "About Us",
  },
  {
    path: "/service",
    display: "Services",
  },
  {
    path: "/demo",
    display: "Demo",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Grid container spacing={4}>
          <Grid className="footer_header" lg={6} item>
            <h1>
              Thank you for <br /> your time
            </h1>
            <p>How do construction workers party? They raise the roof.</p>
            <Box sx={{ display: "flex" }}>
              <Button
                size={"large"}
                sx={{ width: 150, mr: 2 }}
                variant="contained"
              >
                Active Demo
              </Button>
              <Button size={"large"} sx={{ width: 150 }} variant="outlined">
                Contact
              </Button>
            </Box>
          </Grid>
          <Grid className="footer_nav_container" lg={3} item>
            <h3 className="header">Additional Links</h3>
            <ul className="footer_nav">
              {navLinks.map((link) => (
                <li key={link.path} className="nav_link">
                  <a href={link.path}>{link.display}</a>
                </li>
              ))}
            </ul>
          </Grid>
          <Grid className="footer_subscribe_container" lg={3} item>
            {" "}
            <h3 className="header">Subscribe</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            <div className="subscribe_textfield_container">
              <input className="subscribe_textfield" placeholder="Your Email" />

              <Button variant="contained" className="subscribe_button">
                GO
              </Button>
            </div>
            {/* <TextField
              id="input-with-icon-textfield"
              label="Your Email"
              className="subscribe_textfield"
              color="neutral"
              
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <Button variant="contained" className="subscribe_button">GO</Button>
                  </InputAdornment>
                ),
              }}
              variant="outlined"
            /> */}
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
