import React from 'react';
import HeaderThree from '../common/header/HeaderThree';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import BlogFive from '../components/blog/BlogFive';
import FooterOne from '../common/footer/FooterOne';

const BlogGrid = () => {
    return (
        <>
            <HeaderThree />
            <Breadcrumb 
                heading="Blog"
                currentPage="Blog" 
            />
            <BlogFive />
            <FooterOne />
        </>
    )
}

export default BlogGrid;