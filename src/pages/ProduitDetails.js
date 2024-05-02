import React from "react";
import FooterOne from "../common/footer/FooterOne";

import ProductDetails from "../components/Produits/ProductDetails";
import HeaderTwo from "../common/header/HeaderTwo";

const ProduitDetails = () => {
  return (
    <>
      <HeaderTwo />

      {/*<HeroTwo/> */}

      <ProductDetails />

      <FooterOne />
    </>
  );
};

export default ProduitDetails;
