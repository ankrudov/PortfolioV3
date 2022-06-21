import React from 'react';
import './aboutComponent.css';

const AboutComponent = ({title,bodyText,language})=>{
    return(
        <div className='about-container'>
            <div className='image-container'>
                <img src='#'/>
            </div>
            <div className='text-container'>
                <span className='title'>{title}</span>
                <span className='body-copy'>{bodyText}</span>
            </div>
        </div>
    )
}

export default AboutComponent;