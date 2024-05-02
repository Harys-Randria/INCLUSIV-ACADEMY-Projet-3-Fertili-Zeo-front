import React, { useEffect, useState } from "react";

import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Modal,
  Row,
} from "react-bootstrap";

import axios from "axios"; // Assurez-vous d'installer axios avec npm install axios
import { toast } from "react-toastify"; // Import de la librairie react-toastify pour les notifications
import "react-toastify/dist/ReactToastify.css"; // Styles pour les notifications

import { useParams } from "react-router-dom";

const ProductPage = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    category: "",
    type: "",
    price: 0,
    quantity: 0,
    expirationDate: "",
    description: "",
    image: "",
  });
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const handleDeleteProduct = () => {
    axios
      .delete(`http://localhost:8080/produit/supprimer/${id}`)
      .then((response) => {
        console.log("Product deleted successfully:", response.data);
        toast.success("Produit supprimé avec succès !");
        setProduct(null); // Mettre à jour l'état du produit pour qu'il soit null
        setShowDeleteConfirm(false);

        handleCloseModal();
      })
      .catch((error) => {
        console.error("Error deleting product:", error);
        toast.error("Erreur lors de la suppression du produit.");
        setShowDeleteConfirm(false);
        handleCloseModal(); // Fermer le modal en cas d'erreur également
      });
  };

  const handleDeleteClick = () => setShowDeleteConfirm(true);
  const handleCloseModal = () => setShowDeleteConfirm(false);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/produit/${id}`)

      .then((response) => {
        setProduct(response.data);
        setFormData({
          category: response.data.category,
          type: response.data.type,
          price: response.data.price,
          quantity: response.data.quantity,
          expirationDate: response.data.expirationDate,
          description: response.data.description,
          image: response.data.image,
        });
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleUpdateProduct = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8080/produit/modifier/${id}`, formData)

      .then((response) => {
        console.log("Product updated successfully:", response.data);
        setProduct(response.data);
        setEditMode(false);
        toast.success("Modifications enregistrées avec succès !");
      })
      .catch((error) => {
        console.error("Error updating product:", error);
        toast.error("Erreur lors de la mise à jour du produit.");
      });
  };

  if (!product) {
    return (
      <div className="text-center">
        <img
          src={`
        ${process.env.PUBLIC_URL}/../assets/images/produits/Add.png`}
          alt="Ajouter produit"
        />
      </div>
    );
  }

  let publicUrl = process.env.PUBLIC_URL + "/assets/images/produits/";

  return (
    <div className="product-page-wrapper">
      <Container className="my-5">
        <Row>
          <Col md={6}>
            <div className="image-container">
              <img
                src={`data:image/jpeg;base64,${product.image}`}
                alt={product.name}
              />
            </div>
          </Col>
          <Col md={6}>
            <Card className="border border-success shadow">
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                {editMode ? (
                  <Form>
                    <Form.Group controlId="formCategory">
                      <Form.Label>Catégorie</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Entrez la catégorie"
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                    <Form.Group controlId="formType">
                      <Form.Label>Type de produit</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Entrez le type de produit"
                        name="type"
                        value={formData.type}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                    <Form.Group controlId="formPrice">
                      <Form.Label>Prix</Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="Entrez le prix"
                        name="price"
                        value={formData.price}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                    <Form.Group controlId="formQuantity">
                      <Form.Label>Quantité</Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="Entrez la quantité"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                    <Form.Group controlId="formExpirationDate">
                      <Form.Label>Date d'expiration</Form.Label>
                      <Form.Control
                        type="date"
                        placeholder="Entrez la date d'expiration"
                        name="expirationDate"
                        value={formData.expirationDate}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                    <div className="d-flex justify-content-start">
                      <Button
                        variant="secondary"
                        onClick={() => {
                          setEditMode(false);
                          setFormData({
                            category: product.category,
                            type: product.type,
                            price: product.price,
                            quantity: product.quantity,
                            expirationDate: product.expirationDate,
                            description: product.description,
                          });
                        }}
                      >
                        Annuler
                      </Button>

                      <Button variant="success" onClick={handleUpdateProduct}>
                        Enregistrer
                      </Button>
                    </div>
                  </Form>
                ) : (
                  <>
                    <Form.Group controlId="formCategory">
                      <Form.Label>Catégorie</Form.Label>
                      <Form.Control
                        type="text"
                        value={product.category}
                        readOnly
                      />
                    </Form.Group>
                    <Form.Group controlId="formType">
                      <Form.Label>Type de produit</Form.Label>
                      <Form.Control type="text" value={product.type} readOnly />
                    </Form.Group>
                    <Form.Group controlId="formPrice">
                      <Form.Label>Prix</Form.Label>
                      <Form.Control
                        type="number"
                        value={product.price}
                        readOnly
                      />
                    </Form.Group>
                    <Form.Group controlId="formQuantity">
                      <Form.Label>Quantité</Form.Label>
                      <Form.Control
                        type="number"
                        value={product.quantity}
                        readOnly
                      />
                    </Form.Group>
                    <Form.Group controlId="formExpirationDate">
                      <Form.Label>Date d'expiration</Form.Label>
                      <Form.Control
                        type="date"
                        value={product.expirationDate}
                        readOnly
                      />
                    </Form.Group>
                  </>
                )}
                {!editMode && (
                  <>
                    {/* Code des champs en lecture seule */}
                    <Button
                      className="btn-green-700"
                      variant="success"
                      onClick={() => setEditMode(true)}
                    >
                      Modifier
                    </Button>
                    <Button
                      className="btn-red-700"
                      variant="danger"
                      onClick={handleDeleteClick}
                    >
                      Supprimer
                    </Button>
                  </>
                )}
              </Card.Body>
            </Card>
            <Card className="my-3 p-3 border border-success shadow custom-card">
              <Form.Control
                as="textarea"
                rows={4}
                value={formData.description}
                readOnly={!editMode} // Toujours éditable lorsque le mode édition est activé
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
              />
            </Card>
          </Col>
        </Row>
      </Container>
      <Modal show={showDeleteConfirm} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmer la suppression</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Êtes-vous sûr de vouloir supprimer ce produit ? Cette action est
          irréversible.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Annuler
          </Button>
          <Button variant="danger" onClick={handleDeleteProduct}>
            Supprimer
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ProductPage;
