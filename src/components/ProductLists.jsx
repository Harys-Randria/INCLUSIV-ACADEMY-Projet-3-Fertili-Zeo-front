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

  // Fonction pour augmenter la quantité d'un produit
  const handleIncreaseQuantity = (product) => {
    axios
      .post(`/augmenter/${product.id}`, null, {
        params: { quantity: 1 },
      })
      .then((response) => {
        console.log(`Augmentation de la quantité pour ${product.name}`);
        // Mettre à jour l'état des produits dans votre composant ou application si nécessaire
        // Exemple : setState pour déclencher le rendu avec la nouvelle quantité
      })
      .catch((error) => {
        console.error("Erreur lors de l'augmentation de la quantité :", error);
      });
  };

  // Fonction pour diminuer la quantité d'un produit
  const handleDecreaseQuantity = (product) => {
    axios
      .post(`/diminuer/${product.id}`, null, {
        params: { quantity: 1 },
      })
      .then((response) => {
        console.log(`Diminution de la quantité pour ${product.name}`);
        // Mettre à jour l'état des produits dans votre composant ou application si nécessaire
        // Exemple : setState pour déclencher le rendu avec la nouvelle quantité
      })
      .catch((error) => {
        console.error("Erreur lors de la diminution de la quantité :", error);
      });
  };

  return (
    <div>
      <h1>Liste des Produits</h1>
      <table className="table">
        <thead>
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
                  src={`${process.env.PUBLIC_URL}/assets/images/materiels/${product.imageUrl}`}
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
              <td>{product.stockQuantity} pcs</td>
              <td>
                <button
                  onClick={() => handleDecreaseQuantity(product)}
                  className="btn btn-danger"
                >
                  -
                </button>
                <button
                  onClick={() => handleIncreaseQuantity(product)}
                  className="btn btn-success me-2"
                >
                  +
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsList;
