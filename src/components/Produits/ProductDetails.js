import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Image, Card, Button, Form, Modal } from 'react-bootstrap';

import { toast } from 'react-toastify'; // Import de la librairie react-toastify pour les notifications
import 'react-toastify/dist/ReactToastify.css'; // Styles pour les notifications
import axios from 'axios'; // Assurez-vous d'installer axios avec npm install axios
import './produit.scss'

const ProductPage = () => {
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const [product, setProduct] = useState(null);
  const [editMode, setEditMode] = useState(false); // État pour gérer le mode d'édition
  const [formData, setFormData] = useState({
    category: '',
    type: '',
    price: 0,
    quantity: 0,
    expirationDate: '',
    description: ''
  });
  const handleDeleteProduct = () => {
    axios.delete('http://localhost:8080/produit/supprimer/8')
      .then(response => {
        console.log('Product deleted successfully:', response.data);
        toast.success('Produit supprimé avec succès !');
        setProduct(null); // Mettre à jour l'état du produit pour qu'il soit null
        handleCloseModal();  // Fermer le modal après la suppression
      })
      .catch(error => {
        console.error('Error deleting product:', error);
        toast.error('Erreur lors de la suppression du produit.');
        handleCloseModal();  // Fermer le modal en cas d'erreur également
      });
};

  const handleDeleteClick = () => setShowDeleteConfirm(true);
const handleCloseModal = () => setShowDeleteConfirm(false);

  

  useEffect(() => {
    axios.get('http://localhost:8080/produit/8')
      .then(response => {
        setProduct(response.data);
        setFormData({
          category: response.data.category,
          type: response.data.type,
          price: response.data.price,
          quantity: response.data.quantity,
          expirationDate: response.data.expirationDate,
          description: response.data.description
        });
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleUpdateProduct = () => {
    axios.put(`http://localhost:8080/produit/modifier/8`, formData)
      .then(response => {
        console.log('Product updated successfully:', response.data);
        setProduct(response.data);
        setEditMode(false); // Sortir du mode d'édition après la mise à jour
        toast.success('Modifications enregistrées avec succès !'); // Notification de succès
      })
      .catch(error => {
        console.error('Error updating product:', error);
        toast.error('Erreur lors de la mise à jour du produit.'); // Notification d'erreur
      });
  };

  if (!product) {
    return (
      <div className="text-center">
        
        <img src={`
        ${process.env.PUBLIC_URL}/../assets/images/produits/Add.png`} alt="Ajouter produit" />
      </div>
    );
  }
  
  let publicUrl = process.env.PUBLIC_URL+'/assets/images/produits/';

  return (
    <div>
      <Container className="my-5">
        <Row>
        <Col md={6}>
  <div className="image-container">
    <img src={publicUrl + product.imageUrl} alt={product.name} />
  </div>
</Col>

          <Col md={6}>
            <Card className="border border-success shadow">
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>

                {editMode ? ( // Afficher les champs de formulaire en mode édition
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
                    <Form.Group controlId="formDescription">
                      <Form.Label>Description</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Entrez la description"
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                    <Button variant="success" onClick={handleUpdateProduct}>Enregistrer</Button>
                  </Form>
                ) : (
                  <>
                    <Card.Text>Catégorie : {product.category} </Card.Text>
                    <Card.Text>Type de produit :{product.type}</Card.Text>
                    <Card.Text>Prix : {product.price} Ar</Card.Text>
                    <Card.Text>Quantité : {product.quantity} kg</Card.Text>
                    <Card.Text>Date d'expiration : {product.expirationDate} </Card.Text>
                  </>
                )}

                {editMode ? null : ( // Afficher les boutons Modifier et Supprimer uniquement si editMode est faux
                  <>
                    <Button className="btn-green-700" onClick={() => setEditMode(true)}>Modifier</Button>
                    <Button variant="danger" className="ms-2" onClick={handleDeleteClick}>Supprimer produit</Button>

                  </>
                )}
              </Card.Body>
            </Card>
            <Card className="my-3 p-3 border border-success shadow custom-card">
              <Card.Text className="text">Description :</Card.Text>
              <Card.Text className="text"> {product.description}</Card.Text>
            </Card>
          </Col>
        </Row>
      </Container>
      <Modal show={showDeleteConfirm} onHide={handleCloseModal}>
  <Modal.Header closeButton>
    <Modal.Title>Confirmer la suppression</Modal.Title>
  </Modal.Header>
  <Modal.Body>Êtes-vous sûr de vouloir supprimer ce produit ? Cette action est irréversible.</Modal.Body>
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
