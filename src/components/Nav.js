import React from 'react';
import styled from "styled-components";

const Navi = styled.nav`
    height: 50px;
`;

const Ul = styled.ul`
    float: right;
`;

const Li = styled.li`
    display: inline-block;
    margin-right: 30px;
    line-height: 50px;
`;

const Nav = () => {
    return (
        <Navi>
            <Ul>
                <Li><a href="#intro">Home</a></Li>
                <Li><a href="#blog">Blog</a></Li>
                <Li><a href="#work">Work</a></Li>
            </Ul>
        </Navi>
    );
};

export default Nav;