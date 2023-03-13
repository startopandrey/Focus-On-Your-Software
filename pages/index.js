import { Fragment } from "react";
// import Hero from "../components/UI/Hero";
// import Services from "../components/UI/Services";
// import About from "../components/UI/About";
// import Portfolio from "../components/UI/Portfolio";
// import Testimonial from "../components/UI/Testimonial";
// import Contact from "../components/UI/Contact";
import Hero from "../components/UI/Hero/hero";
import Gap from "../components/UI/Gap/Gap";
import HomeServices from "../components/UI/HomeServices/HomeServices";
import HomeSteps from "../components/UI/HomeSteps/HomeSteps";
import HomeContact from "../components/UI/HomeContact/HomeContact";
import ReviewsSlider from "../components/UI/ReviewsSlider/ReviewsSlider";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getStaticProps({ locale }) {
  console.log(locale);
  return {
    props: {
      ...(await serverSideTranslations(locale, ["home"])),
      // Will be passed to the page component as props
    },
  };
}
export default function Home(props) {
  console.log(props);
  return (
    <Fragment>
      <Hero></Hero>
      <Gap></Gap>
      <HomeServices></HomeServices>
      <HomeSteps></HomeSteps>
      <ReviewsSlider></ReviewsSlider>
      <HomeContact></HomeContact>
    </Fragment>
  );
}
