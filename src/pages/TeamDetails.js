import React from 'react';
import HeaderThree from '../common/header/HeaderThree';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import TeamContent from '../components/team/TeamContent';
import FooterOne from '../common/footer/FooterOne';

const TeamDetails = () => {
    return (
        <>
            <HeaderThree />
            <Breadcrumb 
                heading="Team Details"
                currentPage="Team Details" 
            />
            <TeamContent />
            <FooterOne />
        </>
    )
}

export default TeamDetails;