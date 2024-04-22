import React from 'react';
import HeaderThree from '../common/header/HeaderThree';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import FeatureTwo from '../components/feature/FeatureTwo';
import AboutThree from '../components/about/AboutThree';
import ServiceThree from '../components/service/ServiceThree';
import CounterOne from '../components/counter/CounterOne';
import TestimonialTwo from '../components/testimonial/TestimonialTwo';
import TeamThree from '../components/team/TeamThree';
import FooterOne from '../common/footer/FooterOne';

const About = () => {
    return (
        <>
            <HeaderThree />
            <Breadcrumb 
                heading="About Us"
                currentPage="About Us" 
            />
            <FeatureTwo />
            <AboutThree />
            <ServiceThree />
            <CounterOne />
            <TestimonialTwo />
            <TeamThree />
            <FooterOne />
        </>
    )
}

export default About;