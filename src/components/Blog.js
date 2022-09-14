import React from 'react';
import styled from 'styled-components';

const Title = styled.h2`
    margin-bottom: 20px;
`;

const Link = styled.a`
    text-align: right;
    display: inline-block;
    margin-bottom: 20px;
`;

const Blog = () => {
    return (
        <div id="blog" className="container">
            <Title className="title right">Blogs</Title>
            <Link href="https://emessell.tistory.com/" className="link">emessell.tistory.com</Link>
            <Link href="https://emessell.github.io/" className="link">emessell.github.io</Link>
        </div>
    );
};

export default Blog;