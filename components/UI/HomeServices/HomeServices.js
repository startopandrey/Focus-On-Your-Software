import { Box, Button, Grid } from "@mui/material";
import { Container } from "@mui/system";
import Image from "next/image";
import React from "react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
const HomeServices = () => {
  const { t: translate } = useTranslation("home");
  const router = useRouter();
  return (
    <section className="home_services">
      <Container>
        <Grid
          //   justifyContent="center"
          //   alignItems="center"
          sx={{ height: "100%", mb: 5 }}
          container
          spacing={8}
        >
          <Grid
            order={{ xs: 2, sm: 1 }}
            sx={{ height: "100%" }}
            item
            md={6}
            lg={6}
          >
            <Box className="services__left">
              <Image
                alt="graph"
                width={600}
                height={600}
                src={"/graph.png"}
              ></Image>
            </Box>
          </Grid>
          <Grid order={{ xs: 1, sm: 2 }} item md={6} lg={6}>
            {" "}
            <Box className="header">
              <h3>{translate("home.services.left.header1.title")}</h3>
              <h1>{translate("home.services.left.header1.text")}</h1>
            </Box>
            <Box className="header_bottom">
              <h2>{translate("home.services.left.header2.title")}</h2>
              <p>{translate("home.services.left.header2.text")}</p>
            </Box>
            <Button
              style={{  marginTop: "1rem" }}
              size="large"
              variant="outlined"
              onClick={() => router.push("service")}
            >
              More Services
            </Button>
          </Grid>
        </Grid>
        <Grid
          //   justifyContent="center"
          //   alignItems="center"
          sx={{ height: "100%" }}
          container
          spacing={8}
        >
          <Grid sx={{ height: "100%" }} md={6} item lg={6}>
            {" "}
            <Box className="header">
              <h3>{translate("home.services.right.header1.title")}</h3>
              <h1>{translate("home.services.right.header1.text")}</h1>
            </Box>
            <Box className="header_bottom">
              <h2>{translate("home.services.right.header2.title")}</h2>
              <p>{translate("home.services.right.header2.text")}</p>
            </Box>
            <Box className="header_bottom">
              <h2>{translate("home.services.right.header3.title")}</h2>
              <p>{translate("home.services.right.header3.text")}</p>
            </Box>
            <Button
              style={{ width: 220, marginTop: "1rem" }}
              size="large"
              variant="outlined"
              onClick={() => router.push("service")}
            >
              {translate("button_more_services")}
            </Button>
          </Grid>
          <Grid md={6} item lg={6}>
            {" "}
            <Box className="services__left">
              <Image
                width={600}
                height={600}
                alt="home_2"
                src={"/home_2.png"}
              ></Image>
            </Box>
          </Grid>{" "}
        </Grid>
      </Container>
    </section>
  );
};

export default HomeServices;
