import React from 'react';
import HeaderThree from '../common/header/HeaderThree';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import SinglePestsWeedsControl from '../components/service/SinglePestsWeedsControl';
import FooterOne from '../common/footer/FooterOne';

const PestsWeedsControl = () => {
    return (
        <>
            <HeaderThree />
            <Breadcrumb 
                heading="Pests & Weeds Control"
                currentPage="Pests & Weeds Control" 
            />
            <SinglePestsWeedsControl />
            <FooterOne />
        </>
    )
}

export default PestsWeedsControl;