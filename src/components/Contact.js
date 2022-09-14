import React from 'react';
import styled from 'styled-components';

const Email = styled.a`
    float: right;
`;

const Contact = () => {
    return (
        <div id="contact" className="container">
            <div className="title right">Linkedin</div>
            <Email className="link" href="https://www.linkedin.com/in/minius/">https://www.linkedin.com/in/minius/</Email>
        </div>
    );
};

export default Contact;