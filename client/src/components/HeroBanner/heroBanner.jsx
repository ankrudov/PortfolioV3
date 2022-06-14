import React from 'react';
import codingImage from '../../assets/software.jpg';
import './heroBanner.css';

const HeroBanner =()=>{
    return(
        <div className='hero-container'>
            <div className='intro-container' id='the-beauty'>
                <h2>Hello!</h2>
                <span>Im <a href='https://www.linkedin.com/in/andre-vasquez-20221/'>Andre Vasquez</a> a software engineer<br/>
                Specialzing in Frontend and Mobile development using React!</span>
            </div>
            <div className='image-container'>
                <img src={codingImage} alt='person coding'/>
            </div>
        </div>
    )
}

export default HeroBanner;