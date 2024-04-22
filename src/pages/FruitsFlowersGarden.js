import React from 'react';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import SingleFruitsFlowersGarden from '../components/service/SingleFruitsFlowersGarden';
import FooterOne from '../common/footer/FooterOne';
import HeaderThree from '../common/header/HeaderThree';

const FruitsFlowersGarden = () => {
    return (
        <>
            <HeaderThree />
            <Breadcrumb 
                heading="Fruits & Flowers Garden"
                currentPage="Fruits & Flowers Garden" 
            />
            <SingleFruitsFlowersGarden />
            <FooterOne />
        </>
    )
}

export default FruitsFlowersGarden;