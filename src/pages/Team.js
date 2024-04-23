import React from 'react';
import HeaderThree from '../common/header/HeaderThree';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import TeamFour from '../components/team/TeamFour';
import ExcellentWorkOne from '../components/excellent-work/ExcellentWorkOne';
import TestimonialOne from '../components/testimonial/TestimonialOne';
import FooterOne from '../common/footer/FooterOne';

const Team = () => {
    return (
        <>
            <HeaderThree />
            <Breadcrumb 
                heading="Team"
                currentPage="Team" 
            />
            <TeamFour />
            <ExcellentWorkOne />
            <TestimonialOne />
            <FooterOne />
        </>
    )
}

export default Team;