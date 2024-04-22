import React from 'react';
import HeaderThree from '../common/header/HeaderThree';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import SingleTrimmingPruning from '../components/service/SingleTrimmingPruning';
import FooterOne from '../common/footer/FooterOne';

const TrimmingPruning = () => {
    return (
        <>
            <HeaderThree />
            <Breadcrumb 
                heading="Trimming & Pruning"
                currentPage="Trimming & Pruning" 
            />
            <SingleTrimmingPruning />
            <FooterOne />
        </>
    )
}

export default TrimmingPruning;