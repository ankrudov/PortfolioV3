import React, {useState, useEffect} from 'react';
import HeroBanner from '../components/HeroBanner/heroBanner';
import AboutComponent from '../components/AboutComponent/aboutComponent';

const HomePage = ()=>{
    const [data, setData ] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(()=>{
        fetch("http://localhost:5000/api/about")
        .then((response)=> console.log(response.json))
    },[])
    return(
        <>
            <HeroBanner/>
        </>
    )
};

export default HomePage;