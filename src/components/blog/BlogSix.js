import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import BlogCategoryWidget from "./BlogCategoryWidget";
import "./affichageProduit.css";
import { FaShoppingCart } from "react-icons/fa";

export default class BlogSix extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [], // Initialiser l'état pour stocker les produits récupérés du backend
      types: ["Matières Premières", "Fertilisant Bio"], // Types de produits disponibles
      selectedType: "", // Type sélectionné
      categoriesByType: {
        "Matières Premières": [
          // Catégories pour le type "Matières Premières"
          "Résidus végétaux",
          "Déchets alimentaires organiques",
          "Fumier animal",
          "Compost",
          "Algues marines",
          "Farine de poisson",
          "Mélasse",
          "Marc de café",
          "Tourbe",
          "Guano",
        ],
        "Fertilisant Bio": [
          // Catégories pour le type "Fertilisant Bio"
          "Engrais organique",
          "Engrais à base de compost",
          "Engrais à base d'algues marines",
          "Engrais à base de farine de poisson",
          "Engrais à base de mélasse",
          "Engrais à base de marc de café",
          "Engrais à base de tourbe",
          "Engrais à base de guano",
          "Engrais à base d'extrait de plantes",
          "Engrais à base de bactéries bénéfiques",
        ],
      },
      selectedCategoryByType: "", // Catégorie sélectionnée
      showModal: false, // Modal affichée
    };
  }

  componentDidMount() {
    // Récupérer les produits depuis le backend
    fetch("http://localhost:8080/produit/allproduct")
      .then((response) => response.json())
      .then((data) => {
        // Mettre à jour l'état avec les produits récupérés
        this.setState({ products: data }, () => {
          // Appeler fetchProductsStock une fois que les produits sont récupérés
          this.fetchProductsStock(this.state.products);
        });
      })
      .catch((error) =>
        console.error("Erreur lors de la récupération des données:", error)
      );
  }

  // Fonction pour récupérer la quantité de stock pour chaque produit
  fetchProductsStock = async (products) => {
    try {
      const productsWithStock = await Promise.all(
        products.map(async (product) => {
          const idproduit = product.idproduit;
          const stockResponse = await axios.get(
            `http://localhost:8080/stock/quantity/${idproduit}`
          );

          let stockQuantity;

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

      // Mettre à jour l'état avec les produits contenant la quantité de stock
      this.setState({ products: productsWithStock });
    } catch (error) {
      console.error(
        "Erreur lors de la récupération du stock pour les produits :",
        error.message
      );

      // En cas d'erreur, retourner les produits avec une indication d'erreur pour la quantité de stock
      const productsWithError = products.map((product) => ({
        ...product,
        stockQuantity: "Erreur de récupération du stock",
      }));

      // Mettre à jour l'état avec les produits contenant l'erreur de quantité de stock
      this.setState({ products: productsWithError });
    }
  };

  // Gérer le changement de type
  handleTypeChange = (type) => {
    if (type === "Tous les types") {
      this.setState({ selectedType: "", selectedCategoryByType: "" });
    } else {
      this.setState({ selectedType: type });
    }
  };

  // Gérer le changement de catégorie
  handleCategoryChange = (categoriesByType) => {
    this.setState({ selectedCategoryByType: categoriesByType });
  };

  render() {
    const {
      products,
      types,
      selectedType,
      categoriesByType,
      selectedCategoryByType,
    } = this.state;

    let filteredProducts = products;

    if (selectedType && selectedType !== "") {
      filteredProducts = filteredProducts.filter(
        (product) => product.type === selectedType
      );
    }

    if (selectedCategoryByType && selectedCategoryByType !== "") {
      filteredProducts = filteredProducts.filter(
        (product) => product.category === selectedCategoryByType
      );
    }

    // Filtrer les produits avec un stock supérieur à 0
    filteredProducts = filteredProducts.filter(
      (product) => product.stockQuantity > 0
    );

    //const publicUrl = process.env.PUBLIC_URL + "/assets/images/produits/";

    return (
      <div className="d-flex flex-row justify-content-center">
        {/* Composant de filtre de types et catégories */}
        <BlogCategoryWidget
          types={types}
          selectedType={selectedType}
          handleTypeChange={this.handleTypeChange}
          handleCategoryChange={this.handleCategoryChange}
          categoriesByType={categoriesByType}
          selectedCategoryByType={selectedCategoryByType}
          products={products} // Passer les produits en tant que prop
        />

        {/* Affichage des produits filtrés */}
        <section className="blog-grid-page">
          <div className="container">
            <div className="row">
              {/* Mapper chaque produit à un composant de blog */}
              {filteredProducts.map((product) => (
                <div
                  key={product.idproduit}
                  className="col-xl-4 col-lg-4 wow animated fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div className="blog-one__single">
                    <div className="product-image">
                      {/* Afficher l'image du produit */}
                      <img
                        src={`data:image/jpeg;base64,${product.image}`}
                        alt={product.name}
                      />
                    </div>
                    <div className="blog-one__single-content">
                      {/* Afficher les détails du produit */}
                      <div className="blog-one__single-content-inner">
                        <br></br>
                        <h2>
                          <Link to={process.env.PUBLIC_URL + `/blog-details`}>
                            {product.name}
                          </Link>
                        </h2>
                        <div
                          style={{ textAlign: "right" }}
                          className="blog-one__single-content-price"
                        >
                          <h2>{product.price}Ar/Kg</h2>
                          <ul className="meta-box clearfix">
                            <li>
                              <div className="icon">
                                <span className="icon-calendar"></span>
                              </div>
                              <div className="text">
                                <p>
                                  <Link to={process.env.PUBLIC_URL + `/`}>
                                    Exp: {product.expirationDate}
                                  </Link>
                                </p>
                              </div>
                            </li>
                            <li>
                              <div className="icon">
                                <span className="icon-user"></span>
                              </div>
                              <div className="text">
                                <p>
                                  <Link to={process.env.PUBLIC_URL + `/`}>
                                    {product.compte
                                      ? product.compte.name
                                      : "Aucun"}
                                  </Link>
                                </p>
                              </div>
                            </li>
                            <li>
                              <div className="icon">
                                <span className="icon-leaf"></span>{" "}
                              </div>
                              <div className="text">
                                <p>
                                  <Link to={process.env.PUBLIC_URL + `/`}>
                                    {product.type}-{product.category}
                                  </Link>
                                </p>
                              </div>
                            </li>
                          </ul>
                          {/*<p>{product.description}</p> */}
                        </div>
                        <div className="blog-one__single-content-bottom ">
                          <ul className="clearfix">
                            <li>
                              <div className="comment-box">
                                <Link to={process.env.PUBLIC_URL + `/`}>
                                  <span className="icon-folder"></span> Stock
                                  Dispo: {product.stockQuantity} Kg
                                </Link>
                              </div>
                            </li>
                            <li>
                              <div className="btn-box">
                                <Link
                                  to={`${process.env.PUBLIC_URL}/product-details/${product.idproduit}`}
                                >
                                  Voir détails{" "}
                                  <span className="icon-right-arrow-1"></span>
                                </Link>
                              </div>
                            </li>
                            <li>
                              {/* Bouton "Acheter" */}
                              <div className="acheter-btn">
                                <button
                                  onClick={() =>
                                    alert(`Achat du produit: ${product.name}`)
                                  }
                                >
                                  <FaShoppingCart /> Acheter
                                </button>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }
}
