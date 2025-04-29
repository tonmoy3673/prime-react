import React, { useEffect, useState } from 'react'

export const DataFetch = (url) => {
  const [data,setData] = useState([]);
  const [error,setError] = useState(null);
  const [loading,setLoading]=useState(true);

  useEffect(()=>{
    const fetchData =async()=>{
        setLoading(true)
        const res = await fetch(url);
        try{
            if (!res.ok) {
                setLoading(false)
                throw new Error ('Data Not Loaded')
                
            }
            else{
                const data = await res.json()
                setLoading(false)
                return setData(data);
                
            }
        }
        catch(error){
            setError(error);
            setLoading(false)
       }
        
  }
  
  fetchData();
  
  },[url])

  return {data,loading,error}        

}
