import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './produit.scss';

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    category: '',
    type: '',
    price: 0,
    quantity: 0,
    expirationDate: '',
    description: ''
  });

  const handleDeleteProduct = () => {
    axios.delete(`http://localhost:8080/produit/supprimer/${id}`)
      .then(response => {
        console.log('Product deleted successfully:', response.data);
        toast.success('Produit supprimé avec succès !');
      })
      .catch(error => {
        console.error('Error deleting product:', error);
        toast.error('Erreur lors de la suppression du produit.');
      });
  };

  useEffect(() => {
    axios.get(`http://localhost:8080/produit/${id}`)
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
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleUpdateProduct = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:8080/produit/modifier/${id}`, formData)
      .then(response => {
        console.log('Product updated successfully:', response.data);
        setProduct(response.data);
        setEditMode(false);
        toast.success('Modifications enregistrées avec succès !');
      })
      .catch(error => {
        console.error('Error updating product:', error);
        toast.error('Erreur lors de la mise à jour du produit.');
      });
  };

  if (!product) return <div>Loading...</div>;
  let publicUrl = process.env.PUBLIC_URL+'/assets/images/produits/';

  return (
    <div>
      <Container className="my-5">
        <Row>
          <Col md={6}>
            <img src={publicUrl + product.imageUrl} alt="" />
          </Col>
          <Col md={6}>
            <Card className="border border-success shadow">
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>

                {editMode ? (
                  <Form onSubmit={handleUpdateProduct}>
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
                    <Button type="submit" variant="success">Enregistrer</Button>
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

                {editMode ? null : (
                  <>
                    <Button className="btn-green-700" onClick={() => setEditMode(true)}>Modifier</Button>
                    <Button variant="danger" className="ms-2" onClick={handleDeleteProduct}>Supprimer produit</Button>
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
    </div>
  );
};

export default ProductPage;
