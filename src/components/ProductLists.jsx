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
              `http://localhost:8080/stock/du_produit/${idproduit}`
            );

            let stockQuantity;
            console.log(stockResponse.type, stockResponse);

            if (typeof stockResponse.data === "number") {
              // Si la réponse est directement un nombre (Long), stockQuantity sera ce nombre
              stockQuantity = stockResponse.data;
            } else {
              // Si la réponse est un objet JSON, récupérer la quantité de stock du champ approprié
              stockQuantity = stockResponse.data.quantity;
            }

            // Retourner le produit avec la quantité de stock récupérée
            return { ...product, stockQuantity };
          })
        );

        return productsWithStock;
      } catch (error) {
        console.error(
          "Erreur lors de la récupération du stock pour les produits :",
          error.message
        );

        // En cas d'erreur, retourner les produits avec une indication d'erreur pour la quantité de stock
        return products.map((product) => ({
          ...product,
          stockQuantity: "Erreur de récupération du stock",
        }));
      }
    };

    fetchProducts(); // Appel de la fonction fetchProducts au chargement du composant
  }, []); // Les dépendances vides signifient que useEffect ne s'exécute qu'une seule fois

  const handleIncreaseQuantity = (product, action) => {};

  return (
    <div className="container">
      <h1 style={{ fontFamily: "Fredoka One, cursive" }}>Liste des Produits</h1>
      <table className="table">
        <thead style={{ width: "auto", minWidth: "40px" }}>
          <tr>
            <th
              style={{
                fontFamily: "Fredoka One, cursive",
                whiteSpace: "nowrap",
                overflow: "hidden",
              }}
            >
              Image
            </th>
            <th
              style={{
                fontFamily: "Fredoka One, cursive",
                whiteSpace: "nowrap",
                overflow: "hidden",
              }}
            >
              Nom
            </th>
            <th
              style={{
                fontFamily: "Fredoka One, cursive",
                whiteSpace: "nowrap",
                overflow: "hidden",
              }}
            >
              Prix
            </th>
            <th
              style={{
                fontFamily: "Fredoka One, cursive",
                whiteSpace: "nowrap",
                overflow: "hidden",
              }}
            >
              Date d'expiration
            </th>
            <th
              style={{
                fontFamily: "Fredoka One, cursive",
                whiteSpace: "nowrap",
                overflow: "hidden",
              }}
            >
              Type
            </th>
            <th
              style={{
                fontFamily: "Fredoka One, cursive",
                whiteSpace: "nowrap",
                overflow: "hidden",
              }}
            >
              Catégorie
            </th>
            <th
              style={{
                fontFamily: "Fredoka One, cursive",
                whiteSpace: "nowrap",
                overflow: "hidden",
              }}
            >
              Description
            </th>
            <th
              style={{
                fontFamily: "Fredoka One, cursive",
                whiteSpace: "nowrap",
                overflow: "hidden",
              }}
            >
              Quantité en stock
            </th>
            <th
              style={{
                fontFamily: "Fredoka One, cursive",
                whiteSpace: "nowrap",
                overflow: "hidden",
              }}
            >
              Action
            </th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <tr key={product.idproduit}>
              <td>
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/materiels/${product.imageUrl}`}
                  width={200}
                  alt={product.name}
                  className="img-fluid blur-up lazyloaded"
                />
              </td>
              <td style={{ fontFamily: "Poppins, sans-serif" }}>
                {product.name}
              </td>
              <td
                className="fw-bold text-theme"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Prix: {product.price}
              </td>
              <td style={{ fontFamily: "Poppins, sans-serif" }}>
                {product.expirationDate}
              </td>
              <td style={{ fontFamily: "Poppins, sans-serif" }}>
                {product.type}
              </td>
              <td style={{ fontFamily: "Poppins, sans-serif" }}>
                {product.category}
              </td>
              <td style={{ fontFamily: "Poppins, sans-serif" }}>
                {product.description}
              </td>
              <td style={{ fontFamily: "Poppins, sans-serif" }}>
                {product.stockQuantity} pcs
              </td>
              <td className="d-flex justify-content-center align-items-center mx-3 ">
                <div>
                  <textarea
                    placeholder="Nouveau Stock"
                    value={product.quantity}
                    // onChange={(e) => handleNoteChange(product, e.target.value)}
                    style={{
                      width: "10em",
                      minWidth: "60px",
                      height: "1em", // Ajuster la hauteur du textarea
                      minHeight: "40px",
                      boxSizing: "border-box",
                      fontFamily: "Poppins, sans-serif",
                      resize: "vertical",
                      marginBottom: "8px", // Espacement en bas du textarea
                    }}
                  />
                </div>

                <div className="d-flex justify-content-center mb-3 mx-1">
                  <button
                    onClick={() => handleIncreaseQuantity(product)}
                    className="btn btn-success"
                    style={{ width: "auto", minWidth: "40px" }}
                  >
                    Approvisioner
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
