import React, {useState, useEffect} from 'react';
import HeroBanner from '../components/HeroBanner/heroBanner';
import AboutComponent from '../components/AboutComponent/aboutComponent';
import SkillComponent from '../components/SkillComponent/skillComponent';
import ErrorComponent from '../components/ErrorComponent/errorComponent';
import { useSelector} from 'react-redux';
import './homePage.css';

const HomePage = ()=>{
    const [response,setResponse] = useState(null);
    const [englishData, setEnglishData ] = useState(null);
    const [spanishData, setSpanishData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const isEnglish = useSelector((state)=>state.language.isEnglish);
    useEffect(()=>{
        const fetchData = async () =>{
            setLoading(true);
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
            setResponse(data);
            setError(null)
        })
        .catch((error)=> {
            setError(error.message)
            setLoading(false)
        })
        .finally(()=> setLoading(true))
        }
        fetchData()
    },[])
    useEffect(()=>{
        setLoading(true)
        const updateLanguage = async ()=>{
            if(await response){
                for(let i = 0; i < response.length;i++){
                    try{
                        if(response[i].language === 'english'){ 
                            setEnglishData(response[i])
                        }else{
                            setSpanishData(response[i])
                        }
                    }
                    catch(error){
                        console.log(error)
                    }  
                }
            }   setLoading(false)
        }
        updateLanguage()
    },[response])
    
    return(
        <>
            <HeroBanner/>
            {/* TODO: create a loading info component and error component */}
            {loading && error && <ErrorComponent error={error}/>}
            {/* {error && <div> {`there was an error retrieving data ${error}`}</div>} */}
            {!loading && englishData && isEnglish && <AboutComponent title={englishData.title} bodyText={englishData.bodyText}/>}
            {!loading && spanishData && !isEnglish && <AboutComponent title={spanishData.title} bodyText={spanishData.bodyText}/>}
            <SkillComponent/>
        </>
    )
};

export default HomePage;