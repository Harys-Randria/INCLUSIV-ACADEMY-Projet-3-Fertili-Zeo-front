import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import BlogCategoryWidget from './BlogCategoryWidget';

export default class BlogSix extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            products: [], // Initialiser l'état pour stocker les produits récupérés du backend
            types: ['Matières Premières', 'Fertilisant Bio'], // Types de produits disponibles
            selectedType: '', // Type sélectionné
            categoriesByType: {
                'Matières Premières': [ // Catégories pour le type "Matières Premières"
                    
                    'Résidus végétaux',
                   'Déchets alimentaires organiques',
                    'Fumier animal',
                    'Compost',
                    'Algues marines',
                    'Farine de poisson',
                    'Mélasse', 
                    'Marc de café' ,
                    'Tourbe', 
                    'Guano', 
                ],
                'Fertilisant Bio': [ // Catégories pour le type "Fertilisant Bio"
                    
                    'Engrais organique',
                    'Engrais à base de compost',
                    'Engrais à base d\'algues marines',
                    'Engrais à base de farine de poisson',
                    'Engrais à base de mélasse',
                    'Engrais à base de marc de café',
                    'Engrais à base de tourbe',
                    'Engrais à base de guano',
                    'Engrais à base d\'extrait de plantes',
                    'Engrais à base de bactéries bénéfiques',
                ]
            },
            selectedCategoryByType: '' // Catégorie sélectionnée
        };
    }

    componentDidMount() {
        // Récupérer les produits depuis le backend
        fetch('http://localhost:8080/produit/allproduct')
            .then(response => response.json())
            .then(data => {
                this.setState({ products: data }); // Mettre à jour l'état avec les produits récupérés
            })
            .catch(error => console.error('Erreur lors de la récupération des données:', error));
    }

    // Gérer le changement de type
    handleTypeChange = (type) => {
        if (type === 'Tous les types') {
            this.setState({ selectedType: '', selectedCategoryByType: '' });
        } else {
            this.setState({ selectedType: type });
        }
    };
    
    
    
    // Gérer le changement de catégorie
    handleCategoryChange=(categoriesByType) => {
        this.setState({ selectedCategoryByType: categoriesByType });
    }



    render(){
        const { products, types, selectedType, categoriesByType, selectedCategoryByType } = this.state;

        let filteredProducts = products;

        if (selectedType && selectedType !== '') {
            filteredProducts = filteredProducts.filter(product => product.type === selectedType);
        }

        if (selectedCategoryByType && selectedCategoryByType !== '') {
            filteredProducts = filteredProducts.filter(product => product.category === selectedCategoryByType);
        }

        const publicUrl = process.env.PUBLIC_URL + '/assets/images/produits/';

        return (
            <>
                {/* Composant de filtre de types et catégories */}
                <BlogCategoryWidget
                    types={types}
                    selectedType={selectedType}
                    handleTypeChange={this.handleTypeChange}
                    handleCategoryChange={this.handleCategoryChange}
                    categoriesByType={categoriesByType}
                    selectedCategoryByType={selectedCategoryByType}
                />

                {/* Affichage des produits filtrés */}
                <section className="blog-grid-page">
                    <div className="container">
                        <div className="row">
                            {/* Mapper chaque produit à un composant de blog */}
                            {filteredProducts.map(product => (
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
                                                        <p><Link to={process.env.PUBLIC_URL + `/`}> {product.compte ? product.compte.name:'Aucun'}</Link></p>
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
                                                            <Link to={`${process.env.PUBLIC_URL}/product-details/${product.idproduit}`}>Voir détails <span className="icon-right-arrow-1"></span></Link>
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
