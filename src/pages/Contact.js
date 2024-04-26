import React from 'react';
import HeaderThree from '../common/header/HeaderThree';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import ContactForm from '../components/contact/ContactForm';
import ContactMap from '../components/contact/ContactMap';
import FooterOne from '../common/footer/FooterOne';
import HeaderTwo from '../common/header/HeaderTwo';

const Contact = () => {
    return (
        <>
            <HeaderTwo />

            <ContactForm />
            
            <FooterOne />
        </>
    )
}

export default Contact;