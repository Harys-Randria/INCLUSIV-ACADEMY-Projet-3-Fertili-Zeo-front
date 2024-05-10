import React from "react";
import cartIcon from "./shopping-cart.svg";
import "./FloatingCart.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const FloatingCart = () => {
  // Utilisez useSelector pour accéder à l'état Redux contenant le nombre de produits dans le panier
  const cartCount = useSelector((state) => state.produits.length);

  return (
    <Link to="/panier">
      <div className="floating-cart">
        <div className="img-notif-container">
          <img src={cartIcon} alt="icône caddie" />
          <span className="notif">{cartCount}</span>{" "}
          {/* Affiche le nombre de produits dans le panier */}
        </div>
      </div>
    </Link>
  );
};

export default FloatingCart;
