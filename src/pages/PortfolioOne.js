import React from 'react';
import HeaderThree from '../common/header/HeaderThree';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import ProjectFour from '../components/project/ProjectFour';
import FooterOne from '../common/footer/FooterOne';

const PortfolioOne = () => {
    return (
        <>
            <HeaderThree />
            <Breadcrumb 
                heading="Portfolio 01"
                currentPage="Portfolio 01" 
            />
            <ProjectFour />
            <FooterOne />
        </>
    )
}

export default PortfolioOne;