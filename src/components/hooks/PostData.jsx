import React, { useState } from 'react'

export const PostData = (url,data) => {

    const [postError,setPostError] = useState(null);
    const [postLoading,setPostLoading] = useState(true);

    const setPostData =async()=>{
        setPostLoading(true);
        try{
            const res = await fetch(url,{
                method:'POST',
                headers:{
                    'Content-Type' : 'application/json'
                },
                body:JSON.stringify(data)
            })
            if (!res.ok) {
                throw new Error ('Wrong URL link!!')
            }
            else {
                const data = await res.json();
                setPostLoading(false)
                return data;
               
            }
        }
      catch(error){
        setPostError(error)
        setPostLoading(false)
        return null;
        }

    }

    return {setPostData,postLoading,postError}

}
