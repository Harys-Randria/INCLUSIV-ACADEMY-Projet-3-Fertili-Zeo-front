import React from 'react';
import HeaderThree from '../common/header/HeaderThree';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import SingleNurseryTreeFarm from '../components/service/SingleNurseryTreeFarm';
import FooterOne from '../common/footer/FooterOne';

const NurseryTreeFarm = () => {
    return (
        <>
            <HeaderThree />
            <Breadcrumb 
                heading="Nursery/Tree Farm"
                currentPage="Nursery/Tree Farm" 
            />
            <SingleNurseryTreeFarm />
            <FooterOne />
        </>
    )
}

export default NurseryTreeFarm;