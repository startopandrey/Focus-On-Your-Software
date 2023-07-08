import Image from "next/image";
import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  Dot,
  DotGroup,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import styles from "../../../src/styles/custom-carousel.module.scss";

import { Box } from "@mui/material";
const CustomCarousel = ({ type, blocks, visibleSlides }) => {
  return (
    <div className={styles.custom_carousel}>
      {" "}
      <CarouselProvider
        naturalSlideWidth={250}
        naturalSlideHeight={125}
        isPlaying={true}
        totalSlides={blocks.length}
        interval={3000}
        infinite={true}
        visibleSlides={visibleSlides}
        currentSlide={1}
        className={styles.carousel}
      >
        <Slider
          className={
            type == "image"
              ? styles.custom_carousel_image
              : styles.custom_carousel_block
          }
        >    
          {blocks.map((el, i) => {
            if (type == "image") {
              return (
                <Slide key={el.image} className={styles.carousel__inner_slide} index={i}>
                  <div className={styles.backgound_image}>
                    <Image
                      width={800}
                      height={480}
                      // objectPosition={"20%"}
                      alt={el.image}
                      src={el.image}
                    ></Image>
                  </div>
     
                </Slide>
              );
            }
            if (type == "block") {
              return (
                <Slide key={el.title} index={i}>
                  <div
                    style={{ background: el.bgColor }}
                    className={styles.carousel_card}
                  >
                    <div className={styles.carousel_card_content}>
                      <h3>{el.title}</h3>
                      <p>{el.description}</p>{" "}
                      {el.image && (
                        <div className={styles.carousel_card_image}>
                          <Image
                            width={"300"}
                            height={"300"}
                            alt="service background image"
                            src={el.image}
                          ></Image>
                        </div>
                      )}
                    </div>

                    {/* <div className={styles.carousel_card_image">
                      {" "}
                      <Image
                        width={800}
                        height={480}
                        // objectPosition={"20%"}
                        src={el.image}
                      ></Image>
                    </div> */}
                  </div>
                </Slide>
              );
            }
          })}
        </Slider>
        <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
          <DotGroup
          
            className={styles.carousel__dot_group}
          >
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
    </div>
  );
};

export default CustomCarousel;
