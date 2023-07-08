import Head from "next/head";
import Image from "next/image";
// import localFont from "next/font/local";
import styles from "../../src/styles/home.module.scss";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Layout from "../../components/Layout/Layout.jsx";
import Box from "@mui/material/Box";
import {
  Button,
  Grid,
  Container,
  Snackbar,
  Alert,
  TextField,
  Avatar,
} from "@mui/material";

import json2mq from "json2mq";
import useMediaQuery from "@mui/material/useMediaQuery";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { motion, useAnimation } from "framer-motion";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
// import Gap from "../../components/UI/Gap/Gap.js";
// import HomeServices from "../../components/UI/HomeServices/HomeServices.js";
// import Hero from "../../components/UI/Hero/Hero.jsx";
// import HomeSteps from "../../components/UI/HomeSteps/HomeSteps";
// import HomeContact from "../../components/UI/HomeContact/HomeContact";
// import ReviewsSlider from "../../components/UI/ReviewsSlider/ReviewsSlider";

// import Solutions from "../../components/UI/Solutions/Solutions.jsx";
// import Content from "../../components/UI/Content/Content.jsx";
// import Counter from "../../components/UI/Counter/Counter.jsx";
// import Services from "../../components/UI/Services/Services.jsx";
// import Pricing from "../../components/UI/Pricing/Pricing.jsx";
// import { useState } from "react";
// import Compare from "../../components/UI/Compare/Compare.jsx";
// import PromotionVideo from "../../components/UI/PromotionVideo/PromotionVideo.jsx";
// import CustomCarousel from "../components/UI/CustomCarousel/CustomCarousel.jsx";
import { useTranslation } from "next-i18next";
import { useInView } from "react-intersection-observer";
import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import CustomCarousel from "../../components/UI/CustomCarousel/CustomCarousel";
import ReactCurvedText from "react-curved-text";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { data } from "../../data";
import {
  ReactCompareSlider,
  ReactCompareSliderHandle,
} from "react-compare-slider";
import Pricing from "../../components/UI/Pricing/Pricing";
import { lightBlue } from "@mui/material/colors";
import Slider from "react-slick";
import { useRouter } from "next/router";
import {
  CarouselProvider,
  Slider as PureSlider,
  Slide as PureSlide,
  ButtonBack,
  ButtonNext,
  Dot,
  DotGroup,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import PostBlock from "../../components/UI/PostBlock/PostBlock";
import { LoadingButton } from "@mui/lab";
export async function getStaticProps({ locale }) {
  console.log(locale);
  return {
    props: {
      postsData: data,
      ...(await serverSideTranslations(locale, ["home", "common"], null, [
        "en",
        "de",
      ])),
      // Will be passed to the page component as props
    },
  };
}

export default function Home({ postsData }) {
  const { t: translate } = useTranslation("home");
  const { t: translateCommon } = useTranslation("common");
  const controls = useAnimation();
  const [refGap, inViewGap] = useInView();
  const [refSolutions, inViewSolutions] = useInView();
  const [openVideo, setOpenVideo] = useState(false);
  const router = useRouter();
  const matchesSmall = useMediaQuery(
    json2mq({
      minWidth: 480,
    })
  );
  const matchesMedium = useMediaQuery(
    json2mq({
      minWidth: 768,
    })
  );
  const matchesDesktop = useMediaQuery(
    json2mq({
      minWidth: 992,
    })
  );
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    width: 1500,
    centerMode: true,
    slidesToShow: !matchesSmall ? 1 : !matchesMedium ? 1 : 3,
    slidesToScroll: 1,
  };
  const clientsReviews = translate("home.reviews.clientsReviews", {
    returnObjects: true,
  });
  useEffect(() => {
    if (inViewSolutions) {
      controls.start("visible");
    }
  }, [controls, inViewSolutions]);

  useEffect(() => {
    if (inViewGap) {
      controls.start("visible");
    }
  }, [controls, inViewGap]);

  const [refContent, inViewContent] = useInView();
  useEffect(() => {
    if (inViewContent) {
      controls.start("visible");
    }
  }, [controls, inViewContent]);

  const handlePositionChange = useCallback(
    (position) => console.log("[CustomHandle]", position),
    []
  );
  const [refCompare, inViewCompare] = useInView();

  useEffect(() => {
    if (inViewCompare) {
      controls.start("visible");
    }
  }, [controls, inViewCompare]);
  const clientsList = [
    { img: "https://www.warketolog.com/clients/Sharikava.svg" },
    { img: "https://www.warketolog.com/clients/BSK.svg" },
    { img: "https://www.warketolog.com/clients/Brita.svg" },
    { img: "https://www.warketolog.com/clients/SkinMelanin.svg" },
  ];
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

  const counterBlocks = [
    {
      image: "/icons/happy_clients.svg",
      number: "50+",
      title: translate("home.counter.block1.text"),
    },
    {
      image: "/icons/apps.svg",
      number: "7+",
      title: translate("home.counter.block2.text"),
    },
    {
      image: "/icons/awards.svg",
      number: "5+",
      title: translate("home.counter.block3.text"),
    },
    {
      image: "/icons/members.svg",
      number: "5+",
      title: translate("home.counter.block4.text"),
    },
  ];
  const [refService, inViewService] = useInView();
  useEffect(() => {
    if (inViewService) {
      controls.start("visible");
    }
  }, [controls, inViewService]);
  const [serviceBlocks, setServiceBlocks] = useState([
    {
      image: "/managment.jpg",
      title: "Data Managment (DMS)",
      description: "Private School DMS",
      active: true,
      id: 1,
    },
    {
      image: "/employee_managment.png",
      title: "Employee Managment",
      description: "Realtor Setup",
      active: false,
      id: 2,
    },
    {
      image: "/ecommerce.png",
      title: "Ecommerce Admin",
      description: "Clothes Shop",
      active: false,
      id: 3,
    },
    {
      image: "/track.jpg",
      title: "Client Support",
      description: "Education CSS",
      active: false,
      id: 4,
    },
  ]);
  const activeImage = serviceBlocks.find((el) => el.active == true);
  const [openMessage, setOpenMessage] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleClickMessage = () => {
    setOpen(true);
  };

  const handleCloseMessage = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenMessage(false);
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
    const data = await axios.post(
      "https://foys.herokuapp.com/send/email",
      // "http://localhost:4000/send/email",
      message
    );

    if (data) {
      setOpen(true);
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div className={styles.home}>
        <section className={styles.hero_section}>
          <div className={styles.hero_background_elements}>
            <div className={styles.logo}>
              <Image
                alt="logo bg"
                width={500}
                height={200}
                src="/logoForBg.png"
              ></Image>
            </div>
            <div className={styles.left_circles}></div>
            <div className={styles.right_circles}></div>
          </div>
          <Container
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            maxWidth="lg"
          >
            <Box className={styles.hero}>
              <motion.h1
                animate={{ y: 0, opacity: 1 }}
                initial={{ y: 20, opacity: 0 }}
                transition={{
                  delay: 0.6 + 0,
                  duration: 0.75,
                }}
                className={styles.hero__title}
              >
                <span>{translate("home.hero.title.Unlock")}</span>{" "}
                {translate("home.hero.title.main")}
              </motion.h1>
              <motion.p
                animate={{ y: 0, opacity: 1 }}
                initial={{ y: 20, opacity: 0 }}
                transition={{
                  delay: 0.5 + 0.15,
                  duration: 0.75,
                }}
                className={styles.hero__description}
              >
                {translate("home.hero.description")}
              </motion.p>
              <motion.div
                animate={{ y: 0, opacity: 1 }}
                initial={{ y: 20, opacity: 0 }}
                transition={{
                  delay: 0.5 + 0.3,
                  duration: 0.75,
                }}
                className={styles.hero_buttons}
              >
                <Button
                  // styles={matchesMedium ? { width: 220, marginTop: "2rem" } :{width: 180, marginTop: "2rem" }}
                  size={!matchesMedium ? "small" : "large"}
                  variant="contained"
                  onClick={() => router.push("/solution/website")}
                  endIcon={<ArrowRightAltIcon></ArrowRightAltIcon>}
                >
                  {"Create Website"}
                </Button>
                <Button
                  variant="outlined"
                  size={!matchesMedium ? "small" : "large"}
                  onClick={() => router.push("/solution/marketing")}
                  endIcon={<ArrowRightAltIcon></ArrowRightAltIcon>}
                >
                  {" "}
                  {matchesMedium ? "Digital Marketing" : "Marketing"}
                </Button>
              </motion.div>
            </Box>
          </Container>
        </section>
        <section className={styles.gap_section}>
          <Container className={styles.gap_container}>
            <div className={styles.gap_image}>
              <Image
                alt="demo admin"
                priority
                width={1000}
                height={500}
                src="/homeHero.png"
              ></Image>
            </div>
            <div>
              <h3 className={styles.gap__title}>
                {translate("home.gap.title")}
              </h3>
              <p className={styles.gap_description}>
                {translate("home.gap.description")}
              </p>
              <ul className={styles.clients}>
                {clientsList.map((el, i) => (
                  <motion.li
                    ref={refGap}
                    variants={{
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.5, delay: i / 5 + 0.1 },
                      },
                      hidden: { opacity: 0, y: -20 },
                    }}
                    animate={controls}
                    initial="hidden"
                    key={i}
                    style={{ cursor: "pointer" }}
                    className={styles.client_item}
                  >
                    <Link href="https://sharikava.com/">
                      <Image
                        className={styles.client_img}
                        height={100}
                        width={150}
                        src={el.img}
                        alt=""
                      />
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          </Container>
        </section>
        <section className={styles.solutions_section}>
          <Container>
            {" "}
            <Box ref={refSolutions} className={styles.header}>
              <h3>{translate("home.solutions.header.title")}</h3>
              <h1>{translate("home.solutions.header.description")}</h1>
            </Box>
            <div className={styles.solutions__container}>
              {solutionsArr.map((el, i) => (
                <motion.article
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
                  className={styles.step}
                >
                  <Box className={styles.step_text}>
                    {" "}
                    <h1 className={styles.step_number}>{`0${i + 1}/`}</h1>{" "}
                    <CheckCircleIcon
                      sx={{
                        zIndex: 10,
                        width: 30,
                        height: 30,
                        color: el.color,
                      }}
                    ></CheckCircleIcon>
                    <h4>{el.title}</h4> <p>{el.description}</p>
                  </Box>
                </motion.article>
              ))}
            </div>
          </Container>
        </section>
        <section className={styles.portfolio}>
          <div className={styles.header}>
            <h3>Our Portfolio</h3>
            <p>Websites with modern design & adaptation to any device</p>
          </div>
          <CustomCarousel
            type="image"
            visibleSlides={1}
            blocks={[
              {
                image: "/portfolio/website1.png",
              },

              {
                image: "/solution/website/website3.png",
              },
              {
                image: "/portfolio/website2.png",
              },
              {
                image: "/solution/website/website4.png",
              },
            ]}
          ></CustomCarousel>
        </section>
        <section className={styles.promotion}>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={openVideo}
            onClose={() => setOpenVideo(false)}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
              backdrop: {
                timeout: 500,
              },
            }}
          >
            <Fade in={openVideo}>
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: matchesMedium ? 710 : 370,
                  bgcolor: "background.paper",
                  height: matchesMedium ? 400 : 210,
                  boxShadow: 24,
                  border: "none !important",
                  pb: 0,
                }}
              >
                <iframe
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                  src="https://www.youtube.com/embed/Z7ISKeGIikU"
                ></iframe>
              </Box>
            </Fade>
          </Modal>
          <div className={styles.promotion_container}>
            {" "}
            <div
              className={styles.promotion_video__play}
              onClick={() => setOpenVideo(true)}
            >
              <div className={styles.promotion_video__play_circle}>
                <ReactCurvedText
                  width={matchesMedium ? 300 : 200}
                  height={matchesMedium ? 300 : 200}
                  cx={matchesMedium ? 150 : 100}
                  cy={matchesMedium ? 150 : 100}
                  rx={matchesMedium ? 100 : 70}
                  ry={matchesMedium ? 100 : 70}
                  startOffset={10}
                  reversed={true}
                  text="*Promotion Video*Promotion Video"
                  textProps={{
                    style: {
                      fontSize: matchesMedium ? 24 : 15,
                      color: "#fff",
                      fill: "#fff",
                    },
                  }}
                  textPathProps={null}
                  tspanProps={null}
                  ellipseProps={null}
                  svgProps={null}
                />
              </div>
              <PlayArrowIcon
                className={styles.promotion_video__play_icon}
              ></PlayArrowIcon>
              {/* <h3>Promotion Video</h3> */}
            </div>
            <div className={styles.promo_video_container}>
              <Image
                style={{ objectFit: "cover" }}
                layout="fill"
                alt="promo_video"
                src="/promo_video.png"
              ></Image>
            </div>
          </div>
        </section>
        <section className={styles.content}>
          <Container>
            <div className={styles.content_container}>
              <div className={styles.header}>
                <h1>{translate("home.content.header.title")}</h1>
                <p>{translate("home.content.header.description")}</p>
              </div>
              <motion.div
                ref={refContent}
                variants={{
                  visible: {
                    opacity: 1,
                    scale: 1,
                    transition: { duration: 0.5, delay: 0.4 },
                  },
                  hidden: { opacity: 0, scale: 0.9 },
                }}
                animate={controls}
                initial="hidden"
                className={styles.content_banner}
              >
                <Image
                  alt="foys_banner"
                  src="/foys_banner.png"
                  width={800}
                  height={400}
                ></Image>
              </motion.div>
            </div>
          </Container>
        </section>
        <section className={styles.counter}>
          <Container sx={{ position: "relative" }}>
            <div className={styles.counter_container}>
              <div className={styles.success_container}>
                {counterBlocks.map((el) => (
                  <div key={el.title} className={styles.success_item}>
                    <div className={styles.success_icon}>
                      <Image
                        style={{
                          full: "white",
                          color: "#fff",
                        }}
                        width="55"
                        height={"55"}
                        src={el.image}
                        alt="success icon"
                      ></Image>
                    </div>{" "}
                    <h1>{el.number}</h1>
                    <p>{el.title}</p>
                  </div>
                ))}
              </div>
              <div className={styles.white_circle}>
                <Image
                  alt="Bg white circle"
                  width={20}
                  height={20}
                  src="/white_circle.png"
                ></Image>
              </div>
            </div>
          </Container>
          <div className={styles.bg_yellow}></div>
        </section>
        <section className={styles.compare}>
          {" "}
          <Container>
            <div className={styles.compare_container}>
              <Box className={styles.header}>
                <h3>{translate("home.compare.header.title")}</h3>
                <h1>{translate("home.compare.header.description")}</h1>
              </Box>
              <motion.div
                ref={refCompare}
                variants={{
                  visible: {
                    opacity: 1,
                    y: 1,
                    transition: { duration: 0.5, delay: 0.2 },
                  },
                  hidden: { opacity: 0, y: 20 },
                }}
                animate={controls}
                initial="hidden"
              >
                <ReactCompareSlider
                  handle={
                    <ReactCompareSliderHandle
                      buttonStyle={{
                        backdropFilter: undefined,
                        background: "white",
                        border: 0,
                        color: "#333",
                      }}
                    />
                  }
                  itemOne={
                    <Image
                      src="/before.png"
                      width={1152}
                      height={776}
                      style={{}}
                      alt="website before"
                    />
                  }
                  itemTwo={
                    <Image
                      width={1152}
                      height={776}
                      src="/after.png"
                      alt="website after"
                    />
                  }
                  onPositionChange={handlePositionChange}
                  style={{
                    display: "flex",
                    width: "100%",
                    height: "100%",
                    //   ...style,
                  }}
                />
              </motion.div>
            </div>
          </Container>
        </section>
        <section className={styles.services}>
          <Container>
            <div className={styles.services_container}>
              <div className={styles.header}>
                <h3>{translate("home.services1.header.title")}</h3>
                <h1>{translate("home.services1.header.description")}</h1>
              </div>
              <motion.div
                ref={refService}
                variants={{
                  visible: {
                    opacity: 1,
                    y: 1,
                    transition: { duration: 0.5, delay: 0.2 },
                  },
                  hidden: { opacity: 0, y: 20 },
                }}
                animate={controls}
                initial="hidden"
                className={styles.services_tabs_container}
              >
                <Grid container gap={4}>
                  <Grid
                    lg={4}
                    sm={12}
                    md={4}
                    className={styles.services_tabs}
                    item
                  >
                    {serviceBlocks.map((el) => (
                      <div
                        key={el.id}
                        onClick={() => {
                          const newState = serviceBlocks.map((obj) =>
                            obj.id === el.id
                              ? { ...obj, active: true }
                              : { ...obj, active: false }
                          );
                          setServiceBlocks(newState);
                        }}
                        className={`${styles.services_tab} ${
                          el.active ? styles.active : ""
                        }`}
                      >
                        <h3>{el.title}</h3>
                        <p>{el.description}</p>
                      </div>
                    ))}
                  </Grid>
                  <Grid lg={7} md={7} sm={12} item>
                    <motion.div
                      key={activeImage.image}
                      animate={{
                        opacity: 1,
                        y: 1,
                        transition: { duration: 0.5 },
                      }}
                      initial={{
                        opacity: 0,
                      }}
                      className={styles.services_image}
                    >
                      <Image
                        width={1920}
                        height={1440}
                        alt="Service Image"
                        src={activeImage.image}
                      ></Image>
                    </motion.div>
                  </Grid>
                </Grid>
              </motion.div>
            </div>
          </Container>
        </section>
        <section className={styles.blog}>
          {" "}
          <Container>
            <div className={styles.header}>
              <h3>Our Blog</h3>
              <h1>Check out our blog.</h1>
            </div>
          </Container>
          <CarouselProvider
            naturalSlideWidth={250}
            naturalSlideHeight={200}
            isPlaying={true}
            totalSlides={postsData.length}
            interval={3000}
            infinite={true}
            visibleSlides={matchesDesktop ? 3 : matchesMedium ? 2 : 1}
            currentSlide={1}
            className={styles.carousel}
          >
            <PureSlider className={styles.custom_carousel_block}>
              {postsData.map((post, i) => (
                <PureSlide
                  key={post.id}
                  className={styles.carousel__inner_slide}
                  index={i}
                >
                  <PostBlock post={post}></PostBlock>
                </PureSlide>
              ))}
            </PureSlider>
            <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
              <DotGroup className={styles.carousel__dot_group}>
                {/* <Dot /> */}
              </DotGroup>
            </Box>{" "}
            <ButtonBack className={styles.carousel__back_button}>
              <ArrowBackRoundedIcon></ArrowBackRoundedIcon>
            </ButtonBack>
            <ButtonNext className={styles.carousel__next_button}>
              <ArrowForwardRoundedIcon></ArrowForwardRoundedIcon>
            </ButtonNext>
          </CarouselProvider>
        </section>
        <Pricing
          title={translate("home.pricing.header.title")}
          description={
            "We are offering up to 30% discount for the first 10 clients (7/10)"
          }
          pricingBlocks={[
            {
              title: translate("home.pricing.block1.title"),
              price: translate("home.pricing.block1.price"),
              newPrice: translate("home.pricing.block1.newPrice"),
              description: translate("home.pricing.block1.description"),
              rows: [
                "Pages 3-5",
                "Re/New Design",
                "CMS",
                "Basic SEO",
                "Register in SE",
                "24/7 Supports",
                "Basic Analysis Dashboard",
                "Free Domin For 6 Month",
                "Basic SMM",
                "Constructor Made Site",
              ],
            },
            {
              title: translate("home.pricing.block2.title"),
              price: translate("home.pricing.block2.price"),
              newPrice: translate("home.pricing.block2.newPrice"),
              description: translate("home.pricing.block2.description"),
              rows: [
                "Pages 5-15",
                "Re/New Design",
                "2 Weeks Marketing",
                "Manually Made Site",
                "Free Domin For 1 Month",
                "Admin Panel",
                "Client Supports",
                "24/7 Supports",
                "Standard  Analysis Dashboard",

                "Payment System",
              ],
            },
            {
              title: translate("home.pricing.block3.title"),
              price: translate("home.pricing.block3.price"),
              newPrice: translate("home.pricing.block3.newPrice"),
              description: translate("home.pricing.block3.description"),
              rows: [
                "Pages 15+",

                "Data Managment",
                "Payment System",
                "Advanced Analysis Dashboard",
                "Integration to Third Party Systems",
                "Employee Managment",

                "Client Supports",
                "1 Month Marketing",
                "SEO",
              ],
            },
            ,
            {
              title: translate("home.pricing.block4.title"),
              price: translate("home.pricing.block4.price"),

              description: translate("home.pricing.block4.description"),
              rows: [
                "Pages 15+",
                "CRM",
                "Data Managment",
                "Payment System",
                "Advanced Analysis Dashboard",
                "Integration to Third Party Systems",
                "Employee Managment",

                "Client Supports",
                "1 Month Marketing",
                "SEO",
              ],
            },
          ]}
        ></Pricing>
        <section className={styles.reviews_slider}>
          <Container>
            <Box className={styles.header}>
              <h3>{translate("home.reviews.header.title")}</h3>
              <h1>{translate("home.reviews.header.description")}</h1>
            </Box>
          </Container>
          <div className={styles.reviews_slider_container}>
            <Slider {...settings}>
              {clientsReviews.map((review) => (
                <Box key={review.key} className={styles.review}>
                  <p className={styles.review_text}>{`"${review.review}"`}</p>
                  <span className={styles.divider} />
                  <div>
                    <h4 className={styles.reviews_name}>{review.name}</h4>
                    <h4 className={styles.reviews_company}>{review.role}</h4>
                  </div>
                </Box>
              ))}
            </Slider>
          </div>
        </section>
        <section className={styles.contact}>
          <Snackbar
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            open={openMessage}
            autoHideDuration={6000}
            onClose={handleCloseMessage}
          >
            <Alert
              onClose={handleCloseMessage}
              severity="success"
              sx={{ width: "100%" }}
            >
              Email has been sent!
            </Alert>
          </Snackbar>
          <Box className={styles.video_container}>
            <Container></Container>
          </Box>
          <Box className={styles.contact_container}>
            <Container>
              {" "}
              <Grid sx={{ display: "flex" }} container spacing={10}>
                <Grid item md={12} lg={6}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                    spacing={4}
                  >
                    <Box className={styles.header}>
                      <h3>{translate("home.contact.header.title")}</h3>
                      <h1>{translate("home.contact.header.description")}</h1>
                    </Box>

                    <Grid container spacing={2}>
                      <Grid item xs={6} sm={6} md={6} lg={6}>
                        <TextField
                          id="outlined-basic"
                          label="Your Name*"
                          value={message.name}
                          onChange={(event) => {
                            if (/^[a-zA-Z]/.test(event.target.value)) {
                              setMessage({
                                ...message,
                                name: event.target.value,
                              });
                            }
                          }}
                          variant="outlined"
                          sx={{ background: "#fff", width: "100%" }}
                        />
                      </Grid>
                      <Grid item xs={6} sm={6} md={6} lg={6}>
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
                      <Grid item xs={12} sm={12} md={12} lg={12}>
                        <TextField
                          sx={{ background: "#fff", width: "100%" }}
                          id="outlined-basic"
                          label="Your Email*"
                          value={message.email}
                          onChange={(event) => {
                            setMessage({
                              ...message,
                              email: event.target.value,
                            });
                          }}
                          variant="outlined"
                          fullWidth
                        />
                      </Grid>
                      <Grid item xs={12} sm={12} md={12} lg={12}>
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
                      // startIcon={<SaveIcon />}
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
                <Grid item md={12} lg={6}>
                  <Box className={styles.contact_address}>
                    <Box className={styles.address_item}>
                      <h3 className={styles.address_item_title}>Address :</h3>
                      <h3 className={styles.address_item_content}>
                        Franz-Josef-pl. 10, 6330 Kufstein, Austia
                      </h3>
                    </Box>
                    <Box className={styles.address_item}>
                      <h3 className={styles.address_item_title}>Phone :</h3>
                      <h3 className={styles.address_item_content}>
                        +43 676 4312048
                      </h3>
                    </Box>
                    <Box className={styles.address_item}>
                      <h3 className={styles.address_item_title}>Email :</h3>
                      <h3 className={styles.address_item_content}>
                      focusonyoursoftware@gmail.com
                      </h3>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Container>
          </Box>
        </section>
        {/* <Hero
          mainAnimation={props.mainAnimation}
          loadingAnimation={props.loadingAnimation}
        ></Hero>
        <Gap></Gap>
        <Solutions></Solutions>
        <section className={styles.portfolio">
          <div className={styles.header">
            <h3>Our Portfolio</h3>
            <p>Websites with modern design & adaptation to any device</p>
          </div>
          <CustomCarousel
            type="image"
            visibleSlides={1}
            blocks={[
              {
                image: "/portfolio/website1.png",
              },

              {
                image: "/solution/website/website3.png",
              },
              {
                image: "/portfolio/website2.png",
              },
              {
                image: "/solution/website/website4.png",
              },
            ]}
          ></CustomCarousel>
        </section>
        <PromotionVideo></PromotionVideo>
        <Content></Content>
        <Counter></Counter>
        <Compare></Compare>
        <Services></Services>

        <Pricing
          title={translate("home.pricing.header.title")}
          description={
            "We are offering up to 30% discount for the first 10 clients (7/10)"
          }
          pricingBlocks={[
            {
              title: translate("home.pricing.block1.title"),
              price: translate("home.pricing.block1.price"),
              newPrice: translate("home.pricing.block1.newPrice"),
              description: translate("home.pricing.block1.description"),
              rows: [
                "Pages 3-5",
                "Re/New Design",
                "CMS",
                "Basic SEO",
                "Register in SE",
                "24/7 Supports",
                "Basic Analysis Dashboard",
                "Free Domin For 6 Month",
                "Basic SMM",
                "Constructor Made Site",
              ],
            },
            {
              title: translate("home.pricing.block2.title"),
              price: translate("home.pricing.block2.price"),
              newPrice: translate("home.pricing.block2.newPrice"),
              description: translate("home.pricing.block2.description"),
              rows: [
                "Pages 5-15",
                "Re/New Design",
                "2 Weeks Marketing",
                "Manually Made Site",
                "Free Domin For 1 Month",
                "Admin Panel",
                "Client Supports",
                "24/7 Supports",
                "Standard  Analysis Dashboard",

                "Payment System",
              ],
            },
            {
              title: translate("home.pricing.block3.title"),
              price: translate("home.pricing.block3.price"),
              newPrice: translate("home.pricing.block3.newPrice"),
              description: translate("home.pricing.block3.description"),
              rows: [
                "Pages 15+",

                "Data Managment",
                "Payment System",
                "Advanced Analysis Dashboard",
                "Integration to Third Party Systems",
                "Employee Managment",

                "Client Supports",
                "1 Month Marketing",
                "SEO",
              ],
            },
            ,
            {
              title: translate("home.pricing.block4.title"),
              price: translate("home.pricing.block4.price"),

              description: translate("home.pricing.block4.description"),
              rows: [
                "Pages 15+",

                "Data Managment",
                "Payment System",
                "Advanced Analysis Dashboard",
                "Integration to Third Party Systems",
                "Employee Managment",

                "Client Supports",
                "1 Month Marketing",
                "SEO",
              ],
            },
          ]}
        ></Pricing>

        <ReviewsSlider></ReviewsSlider>
        <HomeContact></HomeContact> */}
      </div>
    </Layout>
  );
}
