import React, { useEffect, useState } from 'react'

export const FetchData = (url) => {
    const [data,setData] = useState([]);
    const [error,setError] = useState(null);
    const [loading,setLoading] = useState(true);
        useEffect(()=>{
            const loadData = async()=>{
            try{
                setLoading(true);
                const res = await fetch(url)
                if (!res.ok) {
                    setLoading(false)
                    throw new Error('Data Not Loading')
                    
                }
                else {
                    const data = await res.json();
                    setLoading(false)
                    return setData(data);
                }
            }
            catch(error){
                setLoading(false);
                setError(error)
            }

            }
            loadData();
        },[url])

        return (data,error,loading);
    }
  

