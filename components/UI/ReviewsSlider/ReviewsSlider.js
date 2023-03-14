import { Avatar, Box, Divider } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Slider from "react-slick";
import { lightBlue } from "@mui/material/colors";
import { useTranslation } from "next-i18next";
import json2mq from "json2mq";
import useMediaQuery from "@mui/material/useMediaQuery";
const ReviewsSlider = () => {
  const { t: translate } = useTranslation("home");
  const matchesMedium = useMediaQuery(
    json2mq({
      minWidth: 768,
    })
  );
  const matchesSmall = useMediaQuery(
    json2mq({
      minWidth: 480,
    })
  );
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    width: 1500,
    centerMode: true,
    slidesToShow: !matchesSmall ? 1 : !matchesMedium ? 2 : 3,
    slidesToScroll: 1,
    
  };
  const clientsReviews = [
    {
      key: "1", 
      name: "Eilema Ilaif",
      role: "Manager",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      key: "2", 
      name: "Eilema Ilaif",
      role: "Manager",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      key: "3", 
      name: "Eilema Ilaif",
      role: "Manager",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      key: "4", 
      name: "Eilema Ilaif",
      role: "Manager",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      key: "5", 
      name: "Eilema Ilaif",
      role: "Manager",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    },
  ];
  return (
    <section className="reviews_slider">
      <Container>
        <Box className="header">
          <h3>{translate("home.reviews.header.title")}</h3>
          <h1>{translate("home.reviews.header.description")}</h1>
        </Box>
      </Container>
      <div className="reviews_slider_container">
        <Slider {...settings}>
          {clientsReviews.map((review) => (
            <Box key={review.key} className="review">
              <Avatar
                alt={review.name}
                sx={{ bgcolor: lightBlue[100], width: 50, height: 50 }}
                className="reviews_avatar"
                src="/broken-image.jpg"
              ></Avatar>
              <p className="review_text">{`"${review.review}"`}</p>
              <span className="divider" />
              <div>
                <h4 className="reviews_name">{review.name}</h4>
                <h4 className="reviews_company">{review.role}</h4>
              </div>
            </Box>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ReviewsSlider;
