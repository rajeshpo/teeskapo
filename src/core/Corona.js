import React, { useEffect, useState } from 'react';
import Base from './Base.js';
 import Cards from './Cards.js'
 
 import {fetchData} from './helper/coronaHelper.js';
 

const  Corona=()=>{

    const [posts, setPosts] = useState({});
    const [country,setCountry]=useState("")

    useEffect(() => {
  
      (async () => {
        const fetchedPosts = await fetchData();
        setPosts(fetchedPosts);
      })();
  
    }, []);
   const handleCountryChange= async (country)=>{

      const fetchedData=await fetchData(country);
  
      setPosts(fetchedData)
      setCountry(country)
  }
 return(
      <Base title="Corona News" description="Please maintain social distancing">
    <div className="container text-center mt-5">
    <img  className="mb-3 corona-image" width="200px" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT6NN88L3rmowdVDLtyU1d7KMojLDpiy7zGkADUElqx-mSS80Km&usqp=CAU"} alt={"covid-19"}/>
    <h1 className="rounded mt-50px">COVID</h1>  
     <p className="alert-success rounded text-danger">Stay Safe Wear Mask</p>
    </div>
     
   <Cards data={posts}/> 
    
   
  
      </Base>
 )
}

export default Corona;