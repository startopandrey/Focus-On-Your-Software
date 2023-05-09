import { Fragment } from "react";
// import Hero from "../components/UI/Hero";
// import Services from "../components/UI/Services";
// import About from "../components/UI/About";
// import Portfolio from "../components/UI/Portfolio";
// import Testimonial from "../components/UI/Testimonial";
// import Contact from "../components/UI/Contact";

import Gap from "../components/UI/Gap/Gap.js";
import HomeServices from "../components/UI/HomeServices/HomeServices.js";
import Hero from "../components/UI/Hero/Hero.jsx";
import HomeSteps from "../components/UI/HomeSteps/HomeSteps";
import HomeContact from "../components/UI/HomeContact/HomeContact";
import ReviewsSlider from "../components/UI/ReviewsSlider/ReviewsSlider";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Layout from "../components/Layout/Layout.jsx";
import Solutions from "../components/UI/Solutions/Solutions.jsx";
import Content from "../components/UI/Content/Content.jsx";
import Counter from "../components/UI/Counter/Counter.jsx";
import Services from "../components/UI/Services/Services.jsx";

export async function getStaticProps({ locale }) {
  console.log(locale);
  return {
    props: {
      ...(await serverSideTranslations(locale, ["home", "common"], null, ["en", "de"])),
      // Will be passed to the page component as props
    },
  };
}
export default function Home(props) {
  return (
    <Layout>
      <Fragment>
        <Hero></Hero>
        <Gap></Gap>
        <Solutions></Solutions>
        <Content></Content>
        <Counter></Counter>
        <Services></Services>
        <HomeServices></HomeServices>
        <HomeSteps></HomeSteps>
        <ReviewsSlider></ReviewsSlider>
        <HomeContact></HomeContact>
      </Fragment>
    </Layout>
  );
}
