import React from 'react';

const AboutComponent = (props)=>{
    return(
        <div className='about-container'>
            <div className='image-container'>
                <img src='#'/>
            </div>
            <div className='text-container'>
                <span className='title'>{props.title}</span>
                <span className='body-copy'>{props.bodyText}</span>
            </div>
        </div>
    )
}

export default AboutComponent;