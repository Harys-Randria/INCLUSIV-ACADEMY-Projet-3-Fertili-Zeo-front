export const addToCart = (produit) => ({
  type: "ADD_TO_CART",
  payload: produit,
});

export const updateQuantity = (productId, newQuantity, productPrice) => {
  return {
    type: "UPDATE_QUANTITY",
    payload: { productId, newQuantity, productPrice },
  };
};

export const removeFromCart = (produit) => ({
  type: "REMOVE_FROM_CART",
  payload: produit,
});
