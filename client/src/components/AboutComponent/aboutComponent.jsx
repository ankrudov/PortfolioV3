import React from 'react';
import './aboutComponent.css';
import andreFace from '../../assets/andreFace.jfif'
const AboutComponent = ({title,bodyText})=>{
    return(
        <div className='about-container'>
            <div className='image-container'>
                <img src={andreFace} alt="andre vasquez face"/>
            </div>
            <div className='text-container'>
                <span className='title'>{title}</span>
                <span className='body-copy'>{bodyText}</span>
            </div>
        </div>
    )
}

export default AboutComponent;