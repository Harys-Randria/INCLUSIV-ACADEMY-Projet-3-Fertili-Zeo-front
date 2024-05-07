import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../../redux/panierAction.js";
import "./CartItem.css";
import Bin from "./bin.png";

const CartItem = ({ produit }) => {
  const dispatch = useDispatch();
  const { idproduit, name, price, image, quantityDemandee } = produit;
  const [quantity, setQuantity] = useState(quantityDemandee);

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value, 10);
    setQuantity(newQuantity);
    dispatch(updateQuantity(idproduit, newQuantity));
  };

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(idproduit));
  };

  return (
    <li className="cart-item">
      <div className="cart-item__image-container">
        <img
          className="cart-item__image"
          src={`data:image/jpeg;base64,${image}`}
          alt={name}
        />
      </div>
      <div className="cart-item__details">
        <div className="cart-item__name">{name}</div>
        <div className="cart-item__quantity">
          <p>Quantité:</p>
          <input
            type="number"
            className="cart-item__quantity-input"
            value={quantity}
            min={1}
            onChange={handleQuantityChange}
          />
        </div>
        <div className="cart-item__price">Prix: {price} Ariary/kg</div>
        <div className="supprimer-btn">
          <img
            src={Bin}
            alt="supprimer du panier"
            className="cart-remove"
            onClick={handleRemoveFromCart}
          />
        </div>
      </div>
    </li>
  );
};

export default CartItem;
