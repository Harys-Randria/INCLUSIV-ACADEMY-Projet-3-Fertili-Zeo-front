import React from "react";
import Cart from "./Cart";

const CartPage = ({ cart }) => (
  <div>
    <h1>Votre Panier</h1>
    <Cart cart={cart} />
  </div>
);

export default CartPage;
