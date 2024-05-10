// Panier.js

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "./CartItem";
import { removeFromCart, updateQuantity } from "../../redux/panierAction.js";
import HeaderTwo from "../../common/header/HeaderTwo.js";
import "./Panier.css";
import Payer from "../Payments/Payment.jsx";

const Panier = () => {
  const produits = useSelector((state) => state.produits);
  const dispatch = useDispatch();

  const envoyerPanierAuBackend = async (produits) => {
    try {
      // Faire une requête HTTP POST au backend avec les produits du panier
      //const response = await axios.post('/api/panier', { produits });

      // Traiter la réponse du backend si nécessaire
      console.log(produits);
      //console.log(response.data);
    } catch (error) {
      // Gérer les erreurs
      console.error(
        "Erreur lors de la tentative d'envoi du panier au backend:",
        error
      );
    }
  };

  const passerCommande = () => {
    envoyerPanierAuBackend(produits);
    console.log({ totalPrice });
  };

  const handleRemoveFromCart = (produitId) => {
    dispatch(removeFromCart(produitId));
  };

  const handleQuantityChange = (produitId, newQuantity) => {
    dispatch(updateQuantity(produitId, newQuantity));
  };

  // Calculer le prix total de la commande
  const totalPrice = produits.reduce((total, produit) => {
    return total + produit.price * produit.quantityDemandee;
  }, 0);

  return (
    <div>
      <HeaderTwo />
      <div className="container">
        <div className="tittre">
          <h1>Panier</h1>
        </div>
        <div>
          <ul>
            {produits.map((produit) => (
              <CartItem
                key={produit.id}
                produit={produit}
                onRemove={() => handleRemoveFromCart(produit.id)}
                onQuantityChange={(newQuantity) =>
                  handleQuantityChange(produit.id, newQuantity)
                }
              />
            ))}
          </ul>
        </div>
        <div>
          <p>Prix Total:</p> <h4>{totalPrice.toFixed(2)} Ariary</h4>
        </div>
        <button className="passer-commande-btn" onClick={passerCommande}>
          Passer la commande
        </button>
        <Payer prix={totalPrice} />
      </div>
    </div>
  );
};

export default Panier;
