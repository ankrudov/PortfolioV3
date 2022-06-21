import React from 'react';
import codingImage from '../../assets/software.jpg';
import { useSelector} from 'react-redux';
import './heroBanner.css';

const HeroBanner =()=>{
    const isEnglish = useSelector((state)=>state.language.isEnglish);
    return(
        <div className='hero-container'>
            <div className='intro-container' id='the-beauty'>
                <h2>{isEnglish ? 'Hello!' : 'Holla!'}</h2>
                <span>{isEnglish ?'Im Andre Vasquez a software engineer.' : 'Soy Andre Vasquez, ingeniero de software.'}<br/>
                {isEnglish? 'Specialzing in Frontend and Mobile development using React!':'¡Especializado en desarrollo Frontend y Mobile usando React!'}</span>
            </div>
            <div className='image-container'>
                <img src={codingImage} alt='person coding'/>
            </div>
        </div>
    )
}

export default HeroBanner;