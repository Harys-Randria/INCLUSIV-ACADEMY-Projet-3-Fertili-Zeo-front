import React, { useState } from "react";
import axios from "axios";
import { Modal } from "react-bootstrap";
import AjoutProduitForm from "../dashboard/AjoutProduitForm";
import ContactForm from "../contact/ContactForm";
import ProductLists from "../ProductLists";
import "./affichageProduit.css";
import { Link } from "react-router-dom";
import { BsFillPersonFill, BsTagFill, BsCartFill, BsClipboardData, BsCheckCircleFill, BsPlusCircle  } from "react-icons/bs";
import { BiLeaf } from "react-icons/bi";
export default class BlogFive extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      selectedTab: "Mes Produits",
      showAddProductModal: false,
      showProfileContent: false,
      showStockContent: false,
    };
  }

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

    this.setState({ selectedTab: "Mes Produits" });
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

  render() {
    const { products, selectedTab, showAddProductModal, showProfileContent, showStockContent } = this.state;

    return (
      <div className="d-flex flex-row justify-content-center">
        <div style={{ marginLeft: "-10px", width: "300px" }} className="button-container-left">
          <button
            type="button"
            onClick={() => this.setState({ selectedTab: "Mes Produits", showProfileContent: false, showStockContent: false })}
            className={`tab-button ${selectedTab === "Mes Produits" ? "selected" : ""}`}
          >
            <BsCartFill/> Mes Produits
          </button>
          <button
            type="button"
            onClick={() => this.setState({ selectedTab: "Mon Profil", showProfileContent: true, showStockContent: false })}
            className={`tab-button ${selectedTab === "Mon Profil" ? "selected" : ""}`}
          >
            <BsFillPersonFill/> Mon Profil
          </button>
          <button
            type="button"
            onClick={() => this.setState({ selectedTab: "Mes Stocks", showProfileContent: false, showStockContent: true })}
            className={`tab-button ${selectedTab === "Mes Stocks" ? "selected" : ""}`}
          >
            <BsClipboardData/> Mes Stocks
          </button>
          <button
            type="button"
            onClick={() => this.setState({ selectedTab: "Mes Commandes", showProfileContent: false, showStockContent: false })}
            className={`tab-button ${selectedTab === "Mes Commandes" ? "selected" : ""}`}
          >
            <BsCheckCircleFill/> Mes Commandes
          </button>
        </div>

        <Modal
          show={showAddProductModal}
          onHide={() => this.setState({ showAddProductModal: false })}
          size="lg"
          dialogClassName="modal-lg d-flex align-items-center justify-content-center"
        >
          <Modal.Header closeButton>
            <Modal.Title>Ajouter un produit</Modal.Title>
          </Modal.Header>
          <Modal.Body className="text-center">
            <AjoutProduitForm />
          </Modal.Body>
        </Modal>

        <section className="blog-grid-page" style={{ width: "1500px" }}>
          <div className="container">
            <div className="row">
              {showProfileContent ? (
                <ContactForm />
              ) : showStockContent ? (
                <ProductLists /> // Afficher le composant ProductsList si showStockContent est vrai
              ) : (
                products.map((product) => (
                  <div
                    key={product.idproduit}
                    className="col-xl-4 col-lg-4 wow animated fadeInUp"
                    data-wow-delay="0.1s"
                  >
                    <div className="blog-one__single">
                      <div className="product-image">
                        <img src={`data:image/jpeg;base64,${product.image}`} alt={product.name} />
                      </div>
                      <div className="blog-one__single-content">
                        <div className="blog-one__single-content-inner">
                          <br></br>
                          <h2>
                            {product.name}
                            </h2>
                          <h2> {product.price}Ar/Kg</h2>
                          
                          <div style={{ textAlign: "right" }} className="blog-one__single-content-price">
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
                          </div>
                          <div className="blog-one__single-content-bottom ">
                            <ul className="clearfix">
                              <li>
                                <div className="comment-box">
                                  <Link to={process.env.PUBLIC_URL + `/`}>
                                    <span className="icon-folder"></span>{" "}
                                    Stock Dispo: {product.stockQuantity} Kg
                                  </Link>
                                </div>
                              </li>
                              <li>
                                <div className="btn-box">
                                  <a href={`${process.env.PUBLIC_URL}/product-details/${product.idproduit}`}>Voir détails <span className="icon-right-arrow-1"></span></a>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </section>

        <div style={{ alignItems: "end", width: "300px" }} className="button-container-right">
          {!showProfileContent && !showStockContent && (
            <button type="button" onClick={() => this.setState({ showAddProductModal: true })}> <BsPlusCircle />Ajouter un produit</button>
          )}
        </div>
      </div>
    );
  }
}
