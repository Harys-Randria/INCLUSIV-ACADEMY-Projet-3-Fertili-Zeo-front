import React, { useState, useEffect } from "react";
import axios from "axios";

const ProductsList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const id = sessionStorage.getItem("id");

      if (!id) {
        console.error("Identifiant introuvable dans sessionStorage");
        return;
      }

      const url = `http://localhost:8080/produit/by-compte/${id}`;

      try {
        const response = await axios.get(url);
        const fetchedProducts = response.data;

        console.log(response.data);

        if (Array.isArray(fetchedProducts)) {
          const productsWithStock = await fetchProductsStock(fetchedProducts);
          setProducts(productsWithStock);
        } else {
          console.error(
            "La réponse de l'API n'est pas un tableau d'objets produits :",
            fetchedProducts
          );
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des produits:", error);
      }
    };

    const fetchProductsStock = async (products) => {
      try {
        const productsWithStock = await Promise.all(
          products.map(async (product) => {
            const idproduit = product.idproduit;
            const stockResponse = await axios.get(
              `http://localhost:8080/stock/quantity/${idproduit}`
            );

            let stockQuantity;

            if (typeof stockResponse.data === "number") {
              stockQuantity = stockResponse.data;
            } else {
              stockQuantity = stockResponse.data.quantity;
            }

            // Initialize newQuantity to 0 for each product
            return { ...product, stockQuantity, newQuantity: 0 };
          })
        );

        return productsWithStock;
      } catch (error) {
        console.error(
          "Erreur lors de la récupération du stock pour les produits :",
          error.message
        );

        return products.map((product) => ({
          ...product,
          stockQuantity: "Erreur de récupération du stock",
          newQuantity: 0, // Initialize newQuantity to 0 in case of error
        }));
      }
    };

    fetchProducts(); // Appel de la fonction fetchProducts au chargement du composant
  }, []); // Les dépendances vides signifient que useEffect ne s'exécute qu'une seule fois

  const handleIncreaseQuantity = async (product, newQuantity) => {
    if (isNaN(newQuantity) || newQuantity <= 0) {
      console.error(
        "La quantité entrée n'est pas un nombre valide ou est inférieure ou égale à zéro"
      );
      return;
    }

    try {
      const response = await axios.post(
        `http://localhost:8080/stock/augmenter/${product.idproduit}`,
        null,
        {
          params: {
            quantity: newQuantity,
          },
        }
      );

      console.log("Stock augmenté avec succès:", response.data);

      // Mettre à jour le stock directement dans le state
      setProducts((prevProducts) => {
        return prevProducts.map((p) => {
          if (p.idproduit === product.idproduit) {
            return {
              ...p,
              stockQuantity: p.stockQuantity + newQuantity,
              newQuantity: "", // Réinitialiser à une chaîne vide après l'approvisionnement
            };
          }
          return p;
        });
      });
    } catch (error) {
      console.error("Erreur lors de l'ajout du stock:", error);
      // Gérer les erreurs ici
    }
  };

  return (
    <div className="container">
      <h1 style={{ fontFamily: "Fredoka One, cursive" }}>Liste des Produits</h1>
      <table className="table">
        <thead style={{ width: "auto", minWidth: "40px" }}>
          <tr>
            <th>Image</th>
            <th>Nom</th>
            <th>Prix</th>
            <th>Date d'expiration</th>
            <th>Type</th>
            <th>Catégorie</th>
            <th>Description</th>
            <th>Quantité en stock</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <tr key={product.idproduit}>
              <td>
                <img
                  src={`data:image/jpeg;base64,${product.image}`}
                  width={200}
                  alt={product.name}
                  className="img-fluid blur-up lazyloaded"
                />
              </td>
              <td>{product.name}</td>
              <td className="fw-bold text-theme">Prix: {product.price}</td>
              <td>{product.expirationDate}</td>
              <td>{product.type}</td>
              <td>{product.category}</td>
              <td>{product.description}</td>
              <td>{product.stockQuantity} kg</td>
              <td>
                <div>
                  <input
                    placeholder="Nouveau Stock"
                    value={product.newQuantity || ""}
                    onChange={(e) => {
                      const newQuantity = parseInt(e.target.value);
                      const updatedProducts = products.map((p) => {
                        if (p.idproduit === product.idproduit) {
                          return {
                            ...p,
                            newQuantity: newQuantity,
                          };
                        }
                        return p;
                      });
                      setProducts(updatedProducts);
                    }}
                    style={{
                      width: "10em",
                      minWidth: "60px",
                      height: "1em",
                      minHeight: "40px",
                      boxSizing: "border-box",
                      fontFamily: "Poppins, sans-serif",
                      resize: "vertical",
                      marginBottom: "8px",
                    }}
                  />
                </div>
                <div>
                  <button
                    onClick={() =>
                      handleIncreaseQuantity(product, product.newQuantity || 0)
                    }
                    className="btn btn-success"
                  >
                    Approvisionner
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsList;
