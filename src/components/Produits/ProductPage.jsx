import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Button } from 'react-bootstrap';
import './produit.scss';
import 'react-toastify/dist/ReactToastify.css';

const ProductPage = () => {
    const { id } = useParams(); // Extraction de l'ID du produit depuis les paramètres de l'URL
    const [product, setProduct] = useState(null); // État pour stocker les données du produit
    const [activeImg, setActiveImage] = useState(''); // Image active pour l'affichage
    const [amount, setAmount] = useState(1); // Quantité choisie par l'utilisateur

    useEffect(() => {
        // Fetch du produit depuis une API
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`url_to_your_api/product/${id}`);
                setProduct(response.data);
                setActiveImage(response.data.image); // Initialise l'image active avec l'image du produit
            } catch (error) {
                toast.error("Error fetching product data!");
                console.error(error);
            }
        };

        fetchProduct();
    }, [id]);

    if (!product) {
        return <div>Loading...</div>; // Gestion du chargement ou si le produit n'est pas trouvé
    }

    return (
        <div className="container py-4">
            <div className="row">
                <div className="col-md-6">
                    <img src={activeImg} alt={product.name} className="img-fluid rounded-xl" />
                    <div className="d-flex justify-content-between mt-3">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="img-thumbnail cursor-pointer"
                            onClick={() => setActiveImage(product.image)}
                        />
                    </div>
                </div>
                <div className="col-md-6">
                    <div>
                        <span className="text-primary font-weight-bold">{product.name}</span>
                        <h1 className="text-3xl font-weight-bold">{product.category}</h1>
                    </div>
                    <p className="text-muted">{product.description}</p>
                    <h6 className="text-xl font-weight-bold">${product.price}</h6>
                    <div className="d-flex align-items-center gap-3">
                        <div className="d-flex align-items-center">
                            <button className="btn btn-outline-secondary" onClick={() => setAmount(prev => Math.max(prev - 1, 1))}>-</button>
                            <span className="py-2 px-3 rounded">{product.price}</span>
                            <button className="btn btn-outline-secondary" onClick={() => setAmount(prev => prev + 1)}>+</button>
                        </div>
                        <button className="btn btn-success px-5">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;
