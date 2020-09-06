import React from 'react';
import styled from 'styled-components';

const Email = styled.a`
    float: right;
`;

const Contact = () => {
    return (
        <div id="contact" className="container">
            <div className="title right">Contact</div>
            <Email className="link" href="mailto:dev.minius@gmail.com">dev.minius@gmail.com</Email>
        </div>
    );
};

export default Contact;