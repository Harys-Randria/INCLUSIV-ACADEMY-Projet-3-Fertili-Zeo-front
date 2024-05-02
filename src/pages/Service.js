import React from "react";
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
