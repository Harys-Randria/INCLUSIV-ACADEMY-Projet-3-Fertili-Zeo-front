import React from 'react';
import { Link } from 'react-router-dom';

export default class BlogCategoryWidget extends React.Component {
    
    render() {
        const { types, selectedType, handleTypeChange, handleCategoryChange, categoriesByType, selectedCategoryByType } = this.props; // Les types et les catégories sont passés en tant que props
        
        // Filtrer les catégories en fonction du type sélectionné
        const categories = selectedType ? categoriesByType[selectedType] || [] : [];

        return (
            <div className="d-flex justify-content-between"> 
                <div className="sidebar__single sidebar__category wow animated fadeInUp" data-wow-delay="0.2s">
                    <h3 className="sidebar__title">Types</h3>
                    <ul className="sidebar__category-list">
                        <li className={!selectedType ? 'active' : ''}>
                            <Link to={process.env.PUBLIC_URL + `/`} onClick={() => handleTypeChange('Tous les types')}>
                                Tous les types
                            </Link>
                        </li>
                        {types.map((type, index) => (
                            <li key={index} className={type === selectedType ? 'active' : ''}>
                                <Link to={process.env.PUBLIC_URL + `/`} onClick={() => handleTypeChange(type)}>
                                    {type}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {selectedType && (
                    <div className="sidebar__single sidebar__category wow animated fadeInUp " data-wow-delay="0.2s">
                        <h3 className="sidebar__title">Catégories pour {selectedType}</h3>
                        <ul className="sidebar__category-list d-flex flex-wrap justify-content-center">
                            <li className={!selectedCategoryByType ? 'active' : ''} style={{marginTop: '15px'}}>
                                <Link to={process.env.PUBLIC_URL + `/`} onClick={() => handleCategoryChange('')}>
                                    Tous les Catégories
                                </Link>
                            </li>
                            {categories.map((category, index) => (
                                <li key={index} className={category === selectedCategoryByType ? 'active' : ''}>
                                    <Link to={process.env.PUBLIC_URL + `/`} onClick={() => handleCategoryChange(category)}>
                                        {category} 
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        )
    }
}
