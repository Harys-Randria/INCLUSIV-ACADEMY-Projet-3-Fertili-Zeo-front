import React from 'react';
import HeaderThree from '../common/header/HeaderThree';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import ContactForm from '../components/contact/ContactForm';
import ContactMap from '../components/contact/ContactMap';
import FooterOne from '../common/footer/FooterOne';

const Contact = () => {
    return (
        <>
            <HeaderThree />
            <Breadcrumb 
                heading="Contact Us"
                currentPage="Contact" 
            />
            <ContactForm />
            <ContactMap />
            <FooterOne />
        </>
    )
}

export default Contact;