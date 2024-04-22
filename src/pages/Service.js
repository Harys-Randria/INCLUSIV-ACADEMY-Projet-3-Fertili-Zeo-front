import React from 'react';
import HeaderThree from '../common/header/HeaderThree';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import FeatureOne from '../components/feature/FeatureOne';
import ServiceTwo from '../components/service/ServiceTwo';
import WorkProcessThree from '../components/work-process/WorkProcessThree';
import BlogFour from '../components/blog/BlogFour';
import FooterOne from '../common/footer/FooterOne';

const Service = () => {
    return (
        <>
            <HeaderThree />
            <Breadcrumb 
                heading="Our Services"
                currentPage="Our Services" 
            />
            <FeatureOne />
            <ServiceTwo />
            <WorkProcessThree />
            <BlogFour />
            <FooterOne />
        </>
    )
}

export default Service;