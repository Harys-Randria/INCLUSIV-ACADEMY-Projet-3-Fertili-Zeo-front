import React from "react";

const Cart = ({ cart }) => (
  <div className="cart-container">
    <h2>Votre panier :</h2>
    {cart.map((product) => (
      <div key={product.idproduit} className="cart-item">
        <img
          src={`data:image/jpeg;base64,${product.image}`}
          alt={product.name}
          className="product-image"
        />
        <div className="product-details">
          <h3>{product.name}</h3>
          <p>Prix : {product.price} Ar/Kg</p>
          <p>Quantité : {product.quantity}</p>
          {/* Vous pouvez ajouter d'autres détails ici, comme la date d'expiration, etc. */}
        </div>
      </div>
    ))}
    {cart.length === 0 && <p>Votre panier est vide.</p>}
  </div>
);

export default Cart;
