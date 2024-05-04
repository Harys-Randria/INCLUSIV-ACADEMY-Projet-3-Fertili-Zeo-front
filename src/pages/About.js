import React from "react";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import FooterOne from "../common/footer/FooterOne";
import HeaderTwo from "../common/header/HeaderTwo";
import AboutThree from "../components/about/AboutThree";
import CounterOne from "../components/counter/CounterOne";
import FeatureTwo from "../components/feature/FeatureTwo";
import ServiceThree from "../components/service/ServiceThree";
import TeamThree from "../components/team/TeamThree";
import TestimonialTwo from "../components/testimonial/TestimonialTwo";
import HeroTwo from "../components/hero/HeroTwo";

const About = () => {
  return (
    <>
      <HeaderTwo />
      <Breadcrumb heading="Nous connaître" currentPage="A propos" />
      
      <FeatureTwo />
      <AboutThree />
      <ServiceThree />
      <CounterOne />
      <TestimonialTwo />
      <TeamThree />
      <FooterOne />
    </>
  );
};

export default About;
