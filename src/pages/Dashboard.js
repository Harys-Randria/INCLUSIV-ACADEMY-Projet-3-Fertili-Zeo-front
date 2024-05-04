import React from "react";
import HeaderTwo from "../common/header/HeaderTwo";
import FooterOne from "../common/footer/FooterOne";
import AjoutProduitForm from "../components/dashboard/AjoutProduitForm";
import BlogFive from "../components/blog/BlogFive";


const Dashboard = () => {
  return (
    <>
      <HeaderTwo />
      {/*<AjoutProduitForm /> */}
      <BlogFive />

      <FooterOne />
    </>
  );
};

export default Dashboard;
