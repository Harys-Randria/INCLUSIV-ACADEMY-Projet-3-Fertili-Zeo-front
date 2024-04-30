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
      const productsWithStock = await Promise.all(
        products.map(async (product) => {
          try {
            const idproduit = product.idproduit;
            const stockResponse = await axios.get(
              `http://localhost:8080/stock/by-produit/${idproduit}`
            );

            // Si la réponse est un nombre (Long), stockQuantity sera ce nombre
            const stockQuantity = stockResponse.data;

            // Retourner le produit avec la quantité de stock récupérée
            return { ...product, stockQuantity };
          } catch (error) {
            if (error.response && error.response.status === 403) {
              // Gérer l'erreur 403 (Forbidden)
              console.error(
                `Accès refusé pour le produit ${product.idproduit}. Vérifiez les autorisations.`
              );
            } else {
              // Gérer les autres erreurs
              console.error(
                `Erreur lors de la récupération du stock pour le produit ${product.idproduit}:`,
                error.message
              );
            }

            // Retourner une copie du produit avec un message d'erreur pour la quantité de stock
            return {
              ...product,
              stockQuantity: "Erreur de récupération du stock",
            };
          }
        })
      );

      return productsWithStock;
    };

    fetchProducts(); // Appel de la fonction fetchProducts au chargement du composant
  }, []); // Les dépendances vides signifient que useEffect ne s'exécute qu'une seule fois

  return (
    <div>
      <h1>Liste des Produits</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Nom</th>
            <th>Catégorie</th>
            <th>Prix</th>
            <th>Quantité en stock</th>
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
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td className="fw-bold text-theme">Prix: {product.price}</td>
              <td>{product.stockQuantity} pcs</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsList;
