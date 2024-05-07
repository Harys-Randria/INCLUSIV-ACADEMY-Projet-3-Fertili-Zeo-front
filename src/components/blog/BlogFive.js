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
import { AiOutlineDownload,AiOutlineUpload } from "react-icons/ai";
import { IoMdArrowRoundUp } from "react-icons/io"

export default class BlogFive extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      selectedTab: "Mes Produits",
      showAddProductModal: false,
      showProfileContent: false,
      showStockContent: false,
      selectedFile: null,
      importSuccessModal: false // Ajout de l'état pour gérer la visibilité du modal
    };
  }

  componentDidMount() {
    const accountId = sessionStorage.getItem('id');
  
    fetch(`http://localhost:8080/produit/by-compte/${accountId}`)
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

  handleFileChange = (event) => {
    this.setState({
      selectedFile: event.target.files[0]
    });
  };

  handleImportStock = () => {
    const formData = new FormData();
    formData.append("file", this.state.selectedFile);

    axios.post("http://localhost:8080/stock/import", formData)
      .then(response => {
        console.log("Stock data imported successfully");
        this.setState({ importSuccessModal: true }); // Afficher le modal en cas d'importation réussie
        // Ajoutez ici la logique pour mettre à jour l'interface utilisateur en cas de succès
      })
      .catch(error => {
        console.error("Error importing stock data:", error);
        // Ajoutez ici la logique pour gérer les erreurs et afficher un message à l'utilisateur
      });
  };

  handleExportStock = () => {
    const accountId = sessionStorage.getItem('id');
    // Vérifiez d'abord si accountId est défini
    if (accountId) {
      // Envoi de la requête GET à l'API backend avec l'ID du compte dans les paramètres de l'URL
      axios.get(`http://localhost:8080/stock/export/${accountId}`, { responseType: 'blob' }) // Spécifiez responseType: 'blob' pour indiquer que la réponse est un blob
        .then((response) => {
          // Créer un objet URL à partir des données de réponse
          const url = window.URL.createObjectURL(new Blob([response.data]));
          // Créer un élément <a> pour le téléchargement
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', 'historique_stock.csv'); // Définir le nom du fichier
          // Simuler un clic sur le lien pour démarrer le téléchargement
          document.body.appendChild(link);
          link.click();
          // Nettoyer l'URL de l'objet après le téléchargement
          window.URL.revokeObjectURL(url);
        })
        .catch((error) => {
          // Gérez les erreurs ici
          console.error("Error exporting stocks:", error);
        });
    } else {
      console.error("Account ID not available.");
    }
  };
  

  render() {
    const { products, selectedTab, showAddProductModal, showProfileContent, showStockContent, importSuccessModal } = this.state;
    let publicUrl = process.env.PUBLIC_URL + "/";
    
    return (
      <div style={{ backgroundColor:"#f1f3f8" }} className="d-flex flex-row justify-content-center">
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

        {/* Modal pour l'importation du stock */}
        <Modal
          show={showStockContent && importSuccessModal} // Afficher le modal si showStockContent est vrai et importSuccessModal est vrai
          onHide={() => this.setState({ importSuccessModal: false })} // Masquer le modal lorsque l'utilisateur clique sur le bouton "Fermer"
          size="lg"
          dialogClassName="modal-lg d-flex align-items-center justify-content-center"
        >
          <Modal.Header closeButton>
            <Modal.Title>Importer le stock</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div style={{ display: "flex", alignItems: "center" }}>
              <label htmlFor="file-upload" className="custom-file-upload">
                <AiOutlineUpload size={25}/> Importer le stock
              </label>
              <input id="file-upload" type="file" onChange={this.handleFileChange} />
            </div>
            <button type="button" onClick={this.handleImportStock}> <IoMdArrowRoundUp/>Importer le stock</button>
          </Modal.Body>
        </Modal>

        <section style={{ width: "1500px", backgroundColor: "#f1f3f8", paddingTop: "50px" }} className="blog-grid-page" s>
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
                            <ul style={{backgroundColor: "#f1f3f8"}}

 className="meta-box clearfix">
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
    <>
      <button type="button" onClick={() => this.setState({ showAddProductModal: true })}> <BsPlusCircle size={25} /> Ajouter un produit</button>
      <button style={{ whiteSpace: "nowrap", justifyContent: "center" }} type="button" onClick={this.handleExportStock}>
  <AiOutlineDownload size={25}/> Exporter l'historique de stock
</button>

<div style={{ display: "flex", alignItems: "center" }}>
                <label htmlFor="file-upload" className="custom-file-upload">
                  <AiOutlineUpload size={25}/> Importer le stock
                </label>
                <input id="file-upload" type="file" onChange={this.handleFileChange} />
              </div>
              <button type="button" onClick={this.handleImportStock}> <IoMdArrowRoundUp/>Importer le stock</button>
    </>
  )}
</div>

      </div>
    );
  }
}
