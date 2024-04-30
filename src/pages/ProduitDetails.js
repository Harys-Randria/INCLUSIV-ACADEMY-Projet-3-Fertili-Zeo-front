import React from 'react';
import HeaderThree from '../common/header/HeaderThree';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import ContactForm from '../components/contact/ContactForm';
import ContactMap from '../components/contact/ContactMap';
import FooterOne from '../common/footer/FooterOne';

import ProductDetails from '../components/Produits/ProductDetails';
import HeaderTwo from '../common/header/HeaderTwo';
import HeroTwo from '../components/hero/HeroTwo';

const ProduitDetails = () => {
    return (
        <>
            <HeaderTwo/>

  

            {/*<HeroTwo/> */}


            <ProductDetails />

           
            
            <FooterOne />
        </>
    )
}

export default ProduitDetails;