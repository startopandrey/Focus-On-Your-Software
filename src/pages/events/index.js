import React from "react";
import Layout from "../../../components/Layout/Layout";
import styles from "../../styles/events.module.scss";
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
import { Box, Container } from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import EventIcon from "@mui/icons-material/Event";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import Image from "next/image";
const Events = () => {
  const events = [
    {
      title: "Digital and the Physical World: Payment, Analyse, DMS",
      image:
        "https://img.freepik.com/free-photo/person-paying-with-nfc-technology-restaurant_23-2150039472.jpg?w=2000&t=st=1688666926~exp=1688667526~hmac=6b1080cc026449f17d6196bc5110be07ed4c10b7968a89cffd19b382b220ba5c",

      date: "Aug 03, 2023",
      time: "9:00",
      place: "Online",
      email: "focusonyoursoftware@gmail.com",
      type: "WEBINAR",
    },
    {
        title: "AI Integration: Impect & Business Usage",
        image:
          "https://img.freepik.com/free-photo/agricultural-robots-work-smart-farms-smart-agriculture-farming-concept_35913-2811.jpg?w=2000&t=st=1688666951~exp=1688667551~hmac=ecbb90d84e95de2822b7d5bcf0ef47d8c8345b154011bf1bf35575c4bf47cb4c",

        date: "Aug 29, 2023",
        time: "13:00",
        place: "Innsbruck",
        email: "focusonyoursoftware@gmail.com",
        type: "Conference",
      },
  ];
  return (
    <Layout>
      <section className={styles.events}>
        {" "}
        <Container>
          <div className={styles.header}>
            <h3>Events & Webinars</h3>
            <p>
              Meet our teams in person or online to talk about how we can make
              your business more digital.
            </p>
          </div>
        </Container>
        <CarouselProvider
          naturalSlideWidth={250}
          naturalSlideHeight={200}
          isPlaying={true}
          totalSlides={events.length}
          interval={3000}
          infinite={true}
          visibleSlides={1}
          currentSlide={1}
          className={styles.carousel}
        >
          <PureSlider className={styles.custom_carousel_block}>
            {events.map((event, i) => (
              <PureSlide
                key={event.title}
                className={styles.carousel__inner_slide}
                index={i}
              >
                <Container>
                  <div className={styles.event_block}>
                    {" "}
                    <div className={styles.event_block_left}>
                      <Image
                        width={300}
                        height={200}
                        src={event.image}
                      ></Image>
                    </div>
                    <div className={styles.event_block_right}>
                      <h3 className={styles.event_block_type}>{event.type}</h3>
                      <h3 className={styles.event_block_title}>
                 {event.title}
                      </h3>
                      <ul className={styles.event_block_info}>
                        <li>
                          <EventIcon color="#f5ab5b"></EventIcon>
                          <time>{event.date}</time>
                        </li>
                        <li>
                          <AccessTimeIcon color="#f5ab5b"></AccessTimeIcon>
                          <time>{event.time}</time>
                        </li>
                        <li>
                          <LocationOnOutlinedIcon color="#f5ab5b"></LocationOnOutlinedIcon>
                          <time>{event.place}</time>
                        </li>
                        <li>
                          <EmailOutlinedIcon color="#f5ab5b"></EmailOutlinedIcon>
                          <time>{event.email}</time>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Container>
              </PureSlide>
            ))}
          </PureSlider>
          <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
            <DotGroup className={styles.carousel__dot_group}>
              {/* <Dot /> */}
            </DotGroup>
          </Box>{" "}
    
    
        </CarouselProvider>
      </section>
    </Layout>
  );
};

export default Events;
