import React from 'react';
import { Container, Row, Col, Image, Card, Button } from 'react-bootstrap';
import './produit.scss'; 
import ServiceSearchWidget from '../service/ServiceSearchWidget';


const ProductPage = () => {
  const product = {
    name: 'NPK Engrais',
    price: 100000,
    expirationDate: '2024-12-31',
    type: 'Type du produit',
    category: 'Catégorie du produit',
    quantity: 500,
    description: (
      <>
        <strong>- ORGANIQUE: </strong>Que ce soit pour vos plantes en pots (intérieur comme extérieur), vos géraniums de balcon, les fleurs votre jardin ou les tomates de votre potager, l'engrais universel MILYTEC 100% biologique apportera à vos cultures tous les nutriments nécessaires à une belle croissance.
        <br />
       <strong> - EFFICACE 3 MOIS:</strong> Lorsque les granules sont mis en contact avec le substrat, une diffusion lente s'opère pendant 3 mois. La composition NPK (Azote, Phosphore et Potassium) du fumier naturel aura pour effet de nourrir vos plantes en enrichissant le sol en nutriment indispensable à leur croissance. L'engrais MILYTEC agira comme un véritable amendement organique et votre sol sera nourri en profondeur.
        <br />
       <strong> - SANS ODEURS! PARFAIT EN INTERIEUR:</strong> Notre fumier déshydraté 100% bovin ne diffuse aucune odeur. Il est idéal pour une utilisation en intérieur. Parfait pour une jardinière urbaine.
        <br />
        <strong>-UTILISABLE TOUTE L'ANNEE:</strong> Comme vous, vos cultures mangent toute l'année  L'engrais MILYTEC est un fortifiant complet et peut être utilisé de Janvier à Décembre sur vos plantes d'intérieur, fleurs, arbres fruitiers, et autres légumes. N'hésitez pas à enrichir le sol de votre jardin en Automne pour les longs mois d'hiver. Vos plantes sauront vous le rendre au printemps!
        <br />
       <strong>-FACILE A UTILISER:</strong> Utilisé en agriculture depuis des siècles, le fumier bovin est 100% organique et sans risque pour la nature. Il est très facile d'utilisation et il n'y a pas de risque de surdosage. Comment l'utiliser? C'est simple, tout est décrit sur l'envers du paquet! Grâce à sa diffusion lente, une dose tous les trois mois suffira à embellir et à fortifier vos cultures!
      </>
    ),
    imageUrl: process.env.PUBLIC_URL + "/assets/images/resources/free-quote-v1-img1.png",
  };

  return (
    <>
      <ProductDetails product={product} />
    </>
  );
};

const ProductDetails = ({ product }) => {
    return (
      <div>
        <Container className="my-5">
          <Row>
            <Col md={6}>
              <Image src={product.imageUrl} alt={product.name} fluid />
            </Col>
            <Col md={6}>
              <Card className="border border-success shadow">
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Subtitle >
                    {product.category} - {product.type}
                  </Card.Subtitle>
                  <Card.Text>Prix : {product.price} Ar</Card.Text>
                  <Card.Text>Quantité : {product.quantity} kg</Card.Text>
                  <Card.Text>Date d'expiration : {product.expirationDate}</Card.Text>
                  <Button className="btn-green-700">Modifier</Button>
                  <Button variant="danger" className="ms-2">Supprimer produit</Button>
                </Card.Body>
              </Card>
              <Card className="my-3 p-3 border border-success shadow custom-card">
                <Card.Text className="text">{product.description}</Card.Text>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  };
  
export default ProductPage;
