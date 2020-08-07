import React from 'react';
import styled from 'styled-components';
import color from '../css/color';

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

    .gotosee{
        opacity: 0.5;
        font-size: 0.6em;
        transition: all ease 0.5s;

        &:hover{
            opacity: 1;
            font-size: 1em;
        }
    }

    a{
        &:hover{
            text-decoration: none;
        }
    }
`;

const TitleSm = styled.h4`
    font-size: 2em;
    font-weight: 600;
    margin-top: 10px;
`;

const ProjectList = styled.ul`
    margin: 1em;
    height: 200px;

    li{
        font-weight: bold;
        font-size: 1.2em;
        line-height: 1.9em;
        font-weight: 400;
        color: ${color.black};

        a:hover{
            text-decoration: underline;
        }
    }

`;

const Desc= styled.span`
    opacity: 0.5;
    font-size: 0.6em;
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
            <div className="title">Work</div>
            <Flexbox>
                <Half left>
                    <Company>Cancelmarket <a href="https://www.cancelmarket.com/"><span className="gotosee" role="img" aria-label="go-to-see">👀</span></a></Company>
                    <TitleSm>Projects <Desc>Frond End</Desc></TitleSm>
                    <ProjectList>
                        <li>1. 서비스 웹 VER.1</li>
                        <li><a href="https://www.cancelmarket.com/">2. 서비스 웹 VER.2 <span className="gotosee" role="img" aria-label="go-to-see">👀</span></a></li>
                        <li>3. 호텔 관리자용 웹</li>
                        <li>4. 일반인용 관리자 웹</li>
                        <li>5. 회사내부 관리자 웹</li>
                    </ProjectList>
                    <TitleSm>Skill</TitleSm>
                    <SkillList>
                        <li># HTML</li>
                        <li># CSS</li>
                        <li># JS</li>
                        <li># JQUERY</li>
                        <li># PHP</li>
                        <li># PUG</li>
                        <li># LESS</li>
                        <li># Node.js</li>
                    </SkillList>
                </Half><Half right>
                    <Company>Otheon <a href="https://otheon.net/"><span className="gotosee" role="img" aria-label="go-to-see">👀</span></a></Company>
                    <TitleSm>Projects <Desc>Full Stack</Desc></TitleSm>
                    <ProjectList>
                        <li>1. 관리자 웹</li>
                        <li><a href="https://ocopage.net/">2. 서비스 웹 <span className="gotosee" role="img" aria-label="go-to-see">👀</span></a></li>
                        <li><a href="https://ocopage.net/">3. 회사 소개 웹 <span className="gotosee" role="img" aria-label="go-to-see">👀</span></a></li>
                    </ProjectList>
                    <TitleSm>Skill</TitleSm>
                    <SkillList>
                        <li># HTML</li>
                        <li># CSS</li>
                        <li># JS</li>
                        <li># JQUERY</li>
                        <li># LESS</li>
                        <li># Node.js</li>
                        <li># EJS</li>
                    </SkillList>
                </Half>
            </Flexbox>
        </div>
    );
};

export default Work;