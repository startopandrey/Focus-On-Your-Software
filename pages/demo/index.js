import { Box, Button, Container, Modal, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import json2mq from "json2mq";
import useMediaQuery from "@mui/material/useMediaQuery";
const Demo = () => {
  const { t: translate } = useTranslation("demo");
  const { t: translateCommon } = useTranslation("common");
  const [open, setOpen] = React.useState(true);
const router = useRouter()
const matchesMedium = useMediaQuery(
  json2mq({
    minWidth: 768,
  })
);
  const handleClose = () => router.back()
  return (
    <div className="demo">
      <Container>
        <div className="demo_container">
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="keep-mounted-modal-title"
            aria-describedby="keep-mounted-modal-description"
          >
            <Box
              sx={matchesMedium ? {
                position: "absolute",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: 600,
                bgcolor: "background.paper",
                border: "none",
     textAlign: "center",
                p: 4,
              } : {
                position: "absolute",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: 300,
                bgcolor: "background.paper",
                border: "none",
     textAlign: "center",
                p: 4,
              }}
            >
              <Box className="demo_modal_img_container">
                <Image alt="modal_img" className="modal_img" src="404.png"></Image>
              </Box>
              <Typography sx={matchesMedium ? {fontWeight: 700} : {
                fontWeight: 700,
                fontSize: "1.4rem"
              }} variant="h3" component="h2">
                Demo Is Not Avalible
              </Typography>
              <Typography sx={{ my: 2, color: "gray"}}>
                We&apos;re sorry, if you see this message. Demo will continue on work in shortest time. 
              </Typography>
            </Box>
          </Modal>
          <Box className="hero">
            <Box className="header">
              <h1 className="hero__title">
                {translate("hero.header.title.text1")}
                <span>{translate("hero.header.title.text2")}</span>
                {translate("hero.header.title.text3")}
              </h1>
              <p className="hero__description">
                {translate("hero.header.description")}
              </p>
              <Box sx={{ display: "flex", gap: "1rem" }}>
                <Button
                  style={{ width: 220, marginTop: "2rem" }}
                  size="large"
                  variant="contained"
                >
                  {translateCommon("button_more_services")}
                </Button>
                <Button
                  style={{ width: 220, marginTop: "2rem" }}
                  size="large"
                  variant="outlined"
                >
                  Contact Us
                </Button>
              </Box>
            </Box>{" "}
            <Box className="hero_img">
              <Image layout="fill" alt="demoAdmin" src={"/demoAdmin.png"} className="image" />
            </Box>
          </Box>
        </div>
      </Container>
    </div>
  );
};
export async function getStaticProps({ locale }) {
  console.log(locale);
  return {
    props: {
      ...(await serverSideTranslations(locale, ["demo", "common"])),
      // Will be passed to the page component as props
    },
  };
}
export default Demo;
