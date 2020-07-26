import React from 'react';
import styled from 'styled-components';
import color from '../css/color';

const Title = styled.div`
`;

const Flexbox = styled.div`
    display: flex;
`;

const Half = styled.div`
    display: inline-block;
    width: 50%;
    padding: 15px;
    background-color: ${props => props.left ? color.oxley : color.straw };
`;

const Company = styled.h3`
    font-size: 3em;
    border-bottom: 2px solid;
    height: 1.2em;
    font-weight: 700;
    margin-top: 0.4em;
`;

const TitleSm = styled.h4`
    font-size: 2em;
    font-weight: 600;
    margin-top: 10px;
`;

const ProjectList = styled.ul`
    margin-top: 1em;
    margin-bottom: 1.5em;
    height: 200px;

    li{
        font-weight: bold;
        font-size: 1.2em;
        line-height: 1.9em;
        font-weight: 400;
    }
`;

const SkillList = styled.ul`
    margin-top: 10px;

    li{
        display: inline-block;
        background-color: rgba(255,255,255, 0.6);
        line-height: 2em;
        border-radius: 2em;
        padding: 0 12px;
        margin: 0 10px 10px 0;
    }
`;

const Work = () => {
    return (
        <div id="work" className="container">
            <Title className="title">Work</Title>
            <Flexbox>
                <Half left>
                    <Company>Cancelmarket</Company>
                    <TitleSm>Projects</TitleSm>
                    <ProjectList>
                        <li>1. 서비스 웹 VER.1</li>
                        <li>2. 서비스 웹 VER.2</li>
                        <li>3. 호텔 관리자 웹</li>
                        <li>4. 일반인 관리자 웹</li>
                        <li>5. 회사내부 관리자 웹</li>
                    </ProjectList>
                    <TitleSm>Skill</TitleSm>
                    <SkillList>
                        <li># HTML</li>
                        <li># CSS</li>
                        <li># JAVASCRIPT</li>
                        <li># JQUERY</li>
                        <li># PHP</li>
                        <li># PUG</li>
                        <li># LESS</li>
                        <li># Node.js</li>
                    </SkillList>
                </Half><Half right>
                    <Company>Otheon</Company>
                    <TitleSm>Projects</TitleSm>
                    <ProjectList>
                        <li>1. 서비스 웹 VER.1</li>
                        <li>2. 서비스 웹 VER.2</li>
                        <li>3. 호텔 관리자 웹</li>
                        <li>4. 일반인 관리자 웹</li>
                        <li>5. 회사내부 관리자 웹</li>
                    </ProjectList>
                    <TitleSm>Skill</TitleSm>
                    <SkillList>
                        <li># HTML</li>
                        <li># CSS</li>
                        <li># JAVASCRIPT</li>
                        <li># JQUERY</li>
                        <li># PHP</li>
                        <li># PUG</li>
                        <li># LESS</li>
                        <li># Node.js</li>
                    </SkillList>
                </Half>
            </Flexbox>
        </div>
    );
};

export default Work;