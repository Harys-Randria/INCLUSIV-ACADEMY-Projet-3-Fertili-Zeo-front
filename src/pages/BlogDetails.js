import React from 'react';
import HeaderThree from '../common/header/HeaderThree';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import BlogContent from '../components/blog/BlogContent';
import FooterOne from '../common/footer/FooterOne';

const BlogDetails = () => {
    return (
        <>
            <HeaderThree />
            <Breadcrumb 
                heading="Blog details"
                currentPage="Blog details" 
            />
            <BlogContent />
            <FooterOne />
        </>
    )
}

export default BlogDetails;