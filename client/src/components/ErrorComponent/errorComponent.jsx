import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import sadPuppy from '../../assets/sadpuppy.jpg'
import './errorComponent.css';

function ErrorComponent({error}){
    return(
        <>
            <div className='error-container'>
                <Spinner animation='border'/>
                {error ? <p>sorry there was an error retreiving data: {error}</p>: <></>}
                {error ? 
                <div className='error-image-container'>
                    <img src={sadPuppy}/>
                </div> 
                : <></>}
            </div>
        </>
    );
}
export default ErrorComponent;