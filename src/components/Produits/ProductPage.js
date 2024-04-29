import React from 'react';
import ProductDetails from './ProductDetails';

const ProductPage = () => {
  const product = {
    name: 'Nom du produit',
    price: 10.99,
    expirationDate: '2024-12-31',
    type: 'Type du produit',
    category: 'Catégorie du produit',
    description: 'Description du produit',
    imageUrl: 'url-de-l-image-du-produit.jpg',
  };

  return <ProductDetails product={product} />;
};

export default ProductPage;
