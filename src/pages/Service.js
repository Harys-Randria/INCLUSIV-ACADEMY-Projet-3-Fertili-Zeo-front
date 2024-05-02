import React from "react";
import HeaderThree from "../common/header/HeaderThree";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import FeatureOne from "../components/feature/FeatureOne";
import ServiceTwo from "../components/service/ServiceTwo";
import WorkProcessThree from "../components/work-process/WorkProcessThree";
import BlogFour from "../components/blog/BlogFour";
import FooterOne from "../common/footer/FooterOne";
import HeaderTwo from "../common/header/HeaderTwo";
import ProductsList from "../components/ProductLists";

const Service = () => {
  return (
    <>
      <HeaderTwo />
      {/* <Breadcrumb 
                heading="Our Services"
                currentPage="Our Services" 
            />
            <FeatureOne />
            <ServiceTwo />
            <WorkProcessThree />
            <BlogFour /> */}
      <ProductsList />
      <FooterOne />
    </>
  );
};

export default Service;
