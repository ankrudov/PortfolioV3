import React from 'react';
import './skillComponent.css';
import { 
    AiOutlineDesktop,
    AiOutlineHtml5,
    AiOutlineCode,
    AiOutlineMobile } from "react-icons/ai";
import { 
    DiCss3,
    DiJsBadge,
    DiReact,
    DiNodejsSmall } from "react-icons/di";

const SkillComponent = ({title,bodyText})=>{
    return(
        <div className='skill-container'>
            <div className='image-container'>
                <h3>Development Strengths</h3>
                <div className='icon-container'>
                    <div>
                        <AiOutlineCode className='icon'/>
                        <span>Frontend Development</span>
                    </div>
                    <div>
                        <AiOutlineDesktop className='icon'/>
                        <span>UI Development</span>
                    </div>
                    <div>
                        <AiOutlineMobile className='icon'/>
                        <span>Responsive Development</span>
                    </div>
                </div>
            </div>
            <div className='image-container'>
                <h3>Toolset experience</h3>
                <div className='icon-container'>
                    <div>
                        <DiCss3 className='icon'/>
                        <span>CSS</span>
                    </div>
                    <div>
                        <DiJsBadge className='icon'/>
                        <span>Javascript</span>
                    </div>
                    <div>
                        <DiReact className='icon'/>
                        <span>React</span>
                    </div>
                    <div>
                        <DiNodejsSmall className='icon'/>
                        <span>NodeJS</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SkillComponent;