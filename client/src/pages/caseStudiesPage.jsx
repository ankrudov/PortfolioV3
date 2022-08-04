import React,{useEffect,useState} from 'react';
import ErrorComponent from '../components/ErrorComponent/errorComponent';
import ProjectComponent from '../components/ProjectComponent/projectComponent';
// import ProjectComponent from '../components/ProjectComponent/projectComponent';

const CaseStudiesPage = ()=>{
    const [projects,setProjects] = useState([]);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);
    useEffect(()=>{
        const fetchProjectsData = async () =>{
            setLoading(true);
            await fetch("http://localhost:5000/api/projects",{
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
            data.map((project)=>{
                console.log(project)
            })
            setProjects(data);
            setError(null);
        })
        .catch((error)=> {
            setError(error.message);
            setLoading(false);
            console.log(error);
        })
        .finally(()=> setLoading(false));
        }
        fetchProjectsData();
    },[])
    return(
        <>
        {loading && error && <ErrorComponent error={error}/>}
        {!loading && projects.length && projects.map((project,index)=>{
            return(
                <ProjectComponent key={index} data={project}/>
            )
        })}
        </>
    );

}

export default CaseStudiesPage;