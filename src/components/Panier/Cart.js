import React from "react";
import CartItem from "./CartItem";

export default function Cart({ cart }) {
  return (
    <div>
      <h2>Panier</h2>
      <ul>
        {cart.map((item, index) => (
          <CartItem key={index} item={item} />
        ))}
      </ul>
    </div>
  );
}
