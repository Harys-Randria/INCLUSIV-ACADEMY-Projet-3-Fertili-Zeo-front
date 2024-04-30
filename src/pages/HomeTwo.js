import React from "react";
import FooterOne from "../common/footer/FooterOne";
import HeaderTwo from "../common/header/HeaderTwo";
import HeroTwo from "../components/hero/HeroTwo";
import ProductsList from "../components/ProductLists";

const HomeTwo = () => {
  return (
    <>
      <HeaderTwo />
      <HeroTwo />
      <div>
        <h3>Votre produit publier dan le plateforme seront ici:</h3>
      </div>
      <div className="d-flex justify-content-center align-items-center ">
        <ProductsList />
      </div>
      <FooterOne />
    </>
  );
};

export default HomeTwo;
