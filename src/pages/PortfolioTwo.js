import React from 'react';
import HeaderThree from '../common/header/HeaderThree';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import ProjectFive from '../components/project/ProjectFive';
import PricingOne from '../components/pricing/PricingOne';
import FooterOne from '../common/footer/FooterOne';

const PortfolioTwo = () => {
    return (
        <>
            <HeaderThree />
            <Breadcrumb 
                heading="Portfolio 02"
                currentPage="Portfolio 02" 
            />
            <ProjectFive />
            <PricingOne />
            <FooterOne />
        </>
    )
}

export default PortfolioTwo;