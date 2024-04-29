import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class BlogSix extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            products: [] // Initialiser l'état pour stocker les produits récupérés du backend
        };
    }

    componentDidMount() {
        fetch('http://localhost:8080/produit/allproduct') // Remplacez l'URL par celle de votre backend
            .then(response => response.json())
            .then(data => {
                this.setState({ products: data }); // Mettre à jour l'état avec les produits récupérés
            })
            .catch(error => console.error('Erreur lors de la récupération des données:', error));
    }



    render(){
        let publicUrl = process.env.PUBLIC_URL+'/assets/images/produits/';
        const { products } = this.state; // Récupérer les produits de l'état
        return (
            <>
               <section className="blog-grid-page">
            <div className="container">
                <div className="row">
                    {/* Mapper chaque produit à un composant de blog */}
                    {products.map(product => (
                        <div key={product.idproduit} className="col-xl-4 col-lg-4 wow animated fadeInUp" data-wow-delay="0.1s">
                            <div className="blog-one__single">
                                <div className="blog-one__single-content">
                                    {/* Afficher les détails du produit */}
                                    <ul className="meta-box clearfix">
                                        <li>
                                            <div className="icon">
                                                <span className="icon-calendar"></span>
                                            </div>
                                            <div className="text">
                                                <p><Link to={process.env.PUBLIC_URL + `/`}>Exp: {product.expirationDate}</Link></p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-user"></span>
                                            </div>
                                            <div className="text">
                                                <p><Link to={process.env.PUBLIC_URL + `/`}>by {product.compte ? product.compte.name : 'Admin'}</Link></p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-dollar"></span>
                                            </div>
                                            <div className="text">
                                                <p><Link to={process.env.PUBLIC_URL + `/`}>  {product.price} Ar/Kg</Link></p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-leaf"></span>
                                            </div>
                                            <div className="text">
                                                <p><Link to={process.env.PUBLIC_URL + `/`}> {product.type}</Link></p>
                                            </div>
                                        </li>
                                    </ul>
                                    <div className="blog-one__single-content-inner">
                                        <h2><Link to={process.env.PUBLIC_URL + `/blog-details`}>{product.name}</Link></h2>
                                        <p>{product.description}</p>
                                    </div>
                                    <div className="blog-one__single-content-bottom clearfix">
                                        <ul className="clearfix">
                                            <li>
                                                <div className="comment-box">
                                                    <Link to={process.env.PUBLIC_URL + `/`}><span className="icon-folder"></span> Catégorie: {product.category}</Link>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="btn-box">
                                                    <Link to={`${process.env.PUBLIC_URL}/product-details`}>Read More <span className="icon-right-arrow-1"></span></Link>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="blog-one__single-img">
                                    <img src={publicUrl + product.imageUrl} alt="" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
            </>
        )
    }
}
