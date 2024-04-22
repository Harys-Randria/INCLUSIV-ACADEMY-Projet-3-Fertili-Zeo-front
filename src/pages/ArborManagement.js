import React from 'react';
import HeaderThree from '../common/header/HeaderThree';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import SingleArborManagement from '../components/service/SingleArborManagement';
import FooterOne from '../common/footer/FooterOne';

const ArborManagement = () => {
    return (
        <>
            <HeaderThree />
            <Breadcrumb 
                heading="Arbor Management"
                currentPage="Arbor Management" 
            />
            <SingleArborManagement />
            <FooterOne />
        </>
    )
}

export default ArborManagement;