import React from "react";
import HeaderThree from "../common/header/HeaderThree";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import FooterOne from "../common/footer/FooterOne";

const BlogGrid = () => {
  return (
    <>
      <HeaderThree />
      <Breadcrumb heading="Blog Grid" currentPage="Blog Grid" />
      <FooterOne />
    </>
  );
};

export default BlogGrid;
