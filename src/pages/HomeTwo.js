import React from "react";
import FooterOne from "../common/footer/FooterOne";
import HeaderTwo from "../common/header/HeaderTwo";
import HeroTwo from "../components/hero/HeroTwo";
import ProductsList from "../components/ProductLists";
import BlogSix from "../components/blog/BlogSix";
import BotpressChat from "../components/Chatbot/Chatbot";

const HomeTwo = () => {
  return (
    <>
      <HeaderTwo />
      <HeroTwo />
      

      <BlogSix />

      {/* <FeatureOne /> */}
      {/*<AboutTwo />*/}
      {/*<CtaOne />*/}
      {/*<ServiceTwo />*/}
      {/*<ProjectTwo />*/}
      {/*<TeamOne />*/}
      {/*<BrandTwo />*/}
      {/*<WorkProcessTwo />*/}
      {/*<PricingOne />*/}
      {/*<TestimonialTwo />*/}
      {/*<BlogTwo />*/}
      <BotpressChat /> 
      <FooterOne />
    </>
  );
};

export default HomeTwo;
