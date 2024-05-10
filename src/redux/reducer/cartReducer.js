// cartReducer.js

const initialState = {
  produits: [], // Initialisez produits à un tableau vide
  totalPrice: 0, // Initialisez le prix total à 0
  count: 0,
  // Autres états de votre panier ici...
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      // Ajouter le produit au panier avec une quantité demandée de 1 par défaut
      return {
        ...state,
        produits: [
          ...state.produits,
          {
            ...action.payload,
            quantityDemandee: 1, // Quantité demandée par défaut
          },
        ],
      };
    case "INCREMENT_CART_COUNT":
      return {
        ...state,
        count: state.count + 1, // Increment the count by 1
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        produits: state.produits.filter(
          (product) => product.idproduit !== action.payload
        ),
      };
    case "UPDATE_QUANTITY":
      const { productId, newQuantity, productPrice } = action.payload;
      // Mettez à jour la quantité du produit dans le panier
      const updatedProduits = state.produits.map((produit) => {
        if (produit.idproduit === productId) {
          return { ...produit, quantityDemandee: newQuantity };
        }
        return produit;
      });
      // Calculez le nouveau prix total du panier
      const newTotalPrice = updatedProduits.reduce(
        (total, produit) => total + produit.quantityDemandee * produit.price,
        0
      );
      // Retourne le nouveau state avec les produits et le prix total mis à jour
      return {
        ...state,
        produits: updatedProduits,
        totalPrice: newTotalPrice,
      };
    default:
      return state;
  }
};

export default cartReducer;
