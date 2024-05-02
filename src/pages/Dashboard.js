import React from "react";
import HeaderTwo from "../common/header/HeaderTwo";
import FooterOne from "../common/footer/FooterOne";
import AjoutProduitForm from "../components/dashboard/AjoutProduitForm";

const Dashboard = () => {
  return (
    <>
      <HeaderTwo />
      <AjoutProduitForm />
      <FooterOne />
    </>
  );
};

export default Dashboard;
