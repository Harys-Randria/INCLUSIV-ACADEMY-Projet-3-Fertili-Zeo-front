import React from 'react';
import HeaderThree from '../common/header/HeaderThree';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import SingleGardenManagement from '../components/service/SingleGardenManagement';
import FooterOne from '../common/footer/FooterOne';

const GardenManagement = () => {
    return (
        <>
            <HeaderThree />
            <Breadcrumb 
                heading="Garden Management"
                currentPage="Garden Management" 
            />
            <SingleGardenManagement />
            <FooterOne />
        </>
    )
}

export default GardenManagement;