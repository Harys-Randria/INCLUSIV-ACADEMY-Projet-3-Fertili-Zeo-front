import React from 'react';
import HeaderThree from '../common/header/HeaderThree';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import BlogSix from '../components/blog/BlogSix';
import FooterOne from '../common/footer/FooterOne';

const BlogGrid = () => {
    return (
        <>
            <HeaderThree />
            <Breadcrumb 
                heading="Blog Grid"
                currentPage="Blog Grid" 
            />
           {/*} <BlogSix />*/}
            <FooterOne />
        </>
    )
}

export default BlogGrid;