import React from 'react';
import styled from 'styled-components';

const Title = styled.h2`
    text-align: right;
    margin-bottom: 20px;
`;

const Link = styled.a`
    text-align: right;
    font-size: 4em;
    display: block;
    margin-bottom: 20px;
`;

const Blog = () => {
    return (
        <div id="blog" className="container">
            <Title className="title">Blog</Title>
            <Link href="https://emessell.tistory.com/" className="underline">emessell.tistory.com</Link>
            <Link href="https://emessell.github.io/" className="underline">emessell.github.io</Link>
        </div>
    );
};

export default Blog;