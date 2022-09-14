import React from 'react';
import styled from 'styled-components';
import color from '../css/color';

const Flexbox = styled.div`
    display: flex;
    flex-flow: row wrap;

    @media (max-width: 768px){
        flex-flow: column;
    }
`;

const Half = styled.div`
    flex: 50%;
    padding: 15px;
    box-sizing: border-box;

    &.first{
        background-color: ${color.oxley};
    }

    &.second{
        background-color: ${color.straw};
    }

    &.third{
        background-color: ${color.straw};
        
        @media (max-width: 768px){
            background-color: ${color.oxley};
        }
    }

    &.fourth{
        background-color: ${color.oxley};
        
        @media (max-width: 768px){
            display: none;
            background-color: ${color.straw};
        }
    }
`;

const Company = styled.h3`
    font-size: 3rem;
    border-bottom: 2px solid;
    height: 1.2em;
    font-weight: 700;
    margin-top: 0.4em;

    @media (max-width: 768px){
        font-size: 1.8rem;
    }

    .gotosee{
        opacity: 0.5;
        font-size: 0.6em;
        transition: all ease 0.5s;

        &:hover{
            opacity: 1;
            font-size: 1em;
        }
    }

    .workDate{
        width: 140px;
        float: right;
        font-size: 1rem;
        position: relative;
        bottom: -35px;
        
        @media (max-width: 768px){
            bottom: -15px;
        }
    }

    a {
        &:hover{
            text-decoration: none;
        }
    }
`;

const TitleSm = styled.h4`
    font-size: 2rem;
    font-weight: 600;
    margin-top: 10px;

    @media (max-width: 768px){
        font-size: 1.5rem;
    }
`;

const ProjectList = styled.ul`
    margin: 1rem;
    height: 200px;

    li{
        font-weight: bold;
        font-size: 1.2rem;
        line-height: 1.9em;
        font-weight: 400;
        color: ${color.black};

        @media (max-width: 768px){
            font-size: 1rem;    
        }

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
        font-size: 1rem;
        background-color: rgba(255,255,255, 0.6);
        line-height: 2rem;
        border-radius: 1rem;
        padding: 0 12px;
        margin: 0 10px 10px 0;

        @media (max-width: 768px){
            font-size: 0.8rem;
        }
    }
`;

const Work = () => {
    return (
        <div id="work" className="container">
            <div className="title">Works</div>
            <Flexbox>
                <Half className="first">
                    <Company>Cancelmarket
                        <a href="https://www.cancelmarket.com/">
                            <span className="gotosee" role="img" aria-label="go-to-see">👀</span>
                        </a>
                        <span className="workDate">2018.11 ~ 2020.01</span>
                    </Company>
                    <TitleSm>Projects <Desc>Frond End</Desc></TitleSm>
                    <ProjectList>
                        <li>1. 서비스 웹 VER.1</li>
                        <li><a href="https://www.cancelmarket.com/">2. 서비스 웹 VER.2 <span className="gotosee" role="img" aria-label="go-to-see">👀</span></a></li>
                        <li>3. 호텔 관리자용 웹</li>
                        <li>4. 일반인용 관리자 웹</li>
                        <li>5. 회사내부 관리자 웹</li>
                    </ProjectList>
                    <TitleSm>Skills</TitleSm>
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
                </Half><Half className="second">
                    <Company>Otheon
                        <a href="https://otheon.net/">
                            <span className="gotosee" role="img" aria-label="go-to-see">👀</span>
                        </a>
                        <span className="workDate">2020.02 ~ 2020.08</span>
                    </Company>
                    <TitleSm>Projects <Desc>Full Stack</Desc></TitleSm>
                    <ProjectList>
                        <li>1. 관리자 웹</li>
                        <li><a href="https://ocopage.net/">2. 서비스 웹 <span className="gotosee" role="img" aria-label="go-to-see">👀</span></a></li>
                        <li><a href="https://ocopage.net/">3. 회사 소개 웹 <span className="gotosee" role="img" aria-label="go-to-see">👀</span></a></li>
                    </ProjectList>
                    <TitleSm>Skills</TitleSm>
                    <SkillList>
                        <li># HTML</li>
                        <li># CSS</li>
                        <li># JS</li>
                        <li># JQUERY</li>
                        <li># LESS</li>
                        <li># Node.js</li>
                        <li># EJS</li>
                    </SkillList>
                </Half><Half className="third">
                    <Company>LAB021
                        <a href="http://www.lab021.co.kr/">
                            <span className="gotosee" role="img" aria-label="go-to-see">👀</span>
                        </a>
                        <span className="workDate working">2020.09 ~ 재직중</span>
                        </Company>
                    <TitleSm>Projects <Desc>Front End</Desc></TitleSm>
                    <ProjectList>
                        <li>1. 서비스 API 개발 및 오류 수정</li>
                    </ProjectList>
                    <TitleSm>Skills</TitleSm>
                    <SkillList>
                        <li># C#</li>
                    </SkillList>
                </Half>
                <Half className="fourth">
                </Half>
            </Flexbox>
        </div>
    );
};

export default Work;