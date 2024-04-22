import React from 'react';
import HeaderThree from '../common/header/HeaderThree';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import FaqTwo from '../components/faq/FaqTwo';
import FooterOne from '../common/footer/FooterOne';

const Faq = () => {
    return (
        <>
            <HeaderThree />
            <Breadcrumb 
                heading="Faq"
                currentPage="Faq" 
            />
            <FaqTwo />
            <FooterOne />
        </>
    )
}

export default Faq;