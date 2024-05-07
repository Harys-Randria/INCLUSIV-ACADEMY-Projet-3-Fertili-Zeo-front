import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import BlogCategoryWidget from "./BlogCategoryWidget";
import { FaShoppingCart } from "react-icons/fa";
import { addToCart } from "../../redux/panierAction.js";
import { toast, ToastContainer } from "react-toastify";

class BlogSix extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      types: ["Matières Premières", "Fertilisant Bio"],
      selectedType: "",
      categoriesByType: {
        "Matières Premières": [
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
      selectedCategoryByType: "",
      showModal: false,
    };
  }

  addToCart = (product) => {
    this.props.addToCart(product);
    console.log(product);
    toast.success(product.name + " ajouter au panier", {
      position: "top-center",
    });
  };

  componentDidMount() {
    fetch("http://localhost:8080/produit/allproduct")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ products: data }, () => {
          this.fetchProductsStock(this.state.products);
        });
      })
      .catch((error) =>
        console.error("Erreur lors de la récupération des données:", error)
      );
  }

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
            stockQuantity = stockResponse.data;
          } else {
            stockQuantity = stockResponse.data.quantity;
          }

          return { ...product, stockQuantity };
        })
      );

      this.setState({ products: productsWithStock });
    } catch (error) {
      console.error(
        "Erreur lors de la récupération du stock pour les produits :",
        error.message
      );

      const productsWithError = products.map((product) => ({
        ...product,
        stockQuantity: "Erreur de récupération du stock",
      }));

      this.setState({ products: productsWithError });
    }
  };

  handleTypeChange = (type) => {
    if (type === "Tous les types") {
      this.setState({ selectedType: "", selectedCategoryByType: "" });
    } else {
      this.setState({ selectedType: type });
    }
  };

  handleCategoryChange = (categoriesByType) => {
    this.setState({ selectedCategoryByType: categoriesByType });
  };

  render() {
    const { cart } = this.props;
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

    filteredProducts = filteredProducts.filter(
      (product) => product.stockQuantity > 0
    );

    return (
      <div
        style={{ backgroundColor: "#f1f3f8" }}
        className="d-flex flex-row justify-content-center"
      >
        <ToastContainer />
        <BlogCategoryWidget
          types={types}
          selectedType={selectedType}
          handleTypeChange={this.handleTypeChange}
          handleCategoryChange={this.handleCategoryChange}
          categoriesByType={categoriesByType}
          selectedCategoryByType={selectedCategoryByType}
          products={products}
        />

        <section
          style={{
            width: "1500px",
            backgroundColor: "#f1f3f8",
            paddingTop: "110px",
          }}
          className="blog-grid-page"
        >
          <div className="container">
            <div className="row">
              {filteredProducts.map((product) => (
                <div
                  key={product.idproduit}
                  className="col-xl-4 col-lg-4 wow animated fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div className="blog-one__single">
                    <div className="product-image">
                      <img
                        src={`data:image/jpeg;base64,${product.image}`}
                        alt={product.name}
                      />
                    </div>
                    <div className="blog-one__single-content">
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
                          <ul
                            style={{ backgroundColor: "#f1f3f8" }}
                            className="meta-box clearfix"
                          >
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
                              <div className="acheter-btn">
                                <button onClick={() => this.addToCart(product)}>
                                  <FaShoppingCart /> Ajouter au panier
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

const mapStateToProps = (state) => ({
  cart: state.produits, // Mappez le panier du state Redux aux props
});

const mapDispatchToProps = {
  addToCart, // Ajoutez d'autres actions si nécessaire
};

export default connect(mapStateToProps, mapDispatchToProps)(BlogSix);
