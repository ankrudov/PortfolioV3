import React, {useState, useEffect} from 'react';
import HeroBanner from '../components/HeroBanner/heroBanner';
import AboutComponent from '../components/AboutComponent/aboutComponent';

const HomePage = ()=>{
    const [responseData, setResponseData ] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(()=>{
        const fetchData = async () =>{
            await fetch("http://localhost:5000/api/about",{
            method:"GET"
        })
        .then((response)=> {
            if(!response.ok){
                throw new Error(
                    `This is an HTTP error: The status is ${response.status}`
                )
            }
            return response.json()
        })
        .then((data)=>{
            setResponseData(data)
            setError(null)
        })
        .catch((error)=> {
            setError(error.message)
            setResponseData(null)
        })
        .finally(()=> setLoading(false))
        }
        fetchData()
        
    },[])
    
    return(
        <>
            <HeroBanner/>
            {/* TODO: create a loading info component and error component */}
            {loading && <div>Loading About info..</div>}
            {error && <div> {`there was an error retrieving data ${error}`}</div>}
            {responseData && responseData.map((data)=>
                <AboutComponent
                    id={data.id}
                    title={data.title}
                    bodyText={data.bodyText}
                />
                )
            }
        </>
    )
};

export default HomePage;