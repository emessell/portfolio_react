import React from 'react';
import styled from 'styled-components';

const Email = styled.div`
    text-align: right;
    font-size: 4em;
`;

const Contact = () => {
    return (
        <div id="contact" className="container">
            <div className="title right">Contact</div>
            <Email>dev.minius@gmail.com</Email>
        </div>
    );
};

export default Contact;