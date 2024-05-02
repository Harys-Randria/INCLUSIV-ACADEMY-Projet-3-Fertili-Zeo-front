import React, { useState } from "react";
import AddProductForm from "./AjoutProduitForm";

function AddProduct() {
  const [products, setProducts] = useState([]);
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleAddProduct = (product) => {
    setProducts([...products, product]);
  };

  const toggleForm = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    <div className={`container mt-4 ${isFormVisible ? "form-visible" : ""}`}>
      <AddProductForm onAddProduct={handleAddProduct} />
    </div>
  );
}

export default AddProduct;
