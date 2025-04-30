import React from 'react'
import { Link, useParams } from 'react-router'
import { DataFetch } from '../hooks/DataFetch';

export const PostDetails = () => {
    const {postId} = useParams();
    const {data:postInfo,loading,error} = DataFetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    const {userId,id,title,body} = postInfo;


 
  return (
    <div className='py-8 text-center'>
            {/* ========== loading  ============ */}
            {
               loading && (
                <div className='text-center text-2xl font-semibold text-cyan-700'>
                <p>Loading</p>
                </div>
               )
            }

                {/* =============== Error =========== */}
            {
                error && (
                    <div>
                        <p className='text-center text-2xl text-red-600'>{error.message}</p>
                    </div>
                )
            }

        {/* ============ post info =========== */}
        <div className='py-2 text-start'>
            <h4 className='mb-1'>ID : {id}</h4>
            <h5 className='mb-1'>UserID : {userId}</h5>
            <p className='mb-1'>Title : {title}</p>
            <p>Body : {body}</p>
        </div>

        <div className='mt-3 '>

           <Link to='/'>
           <button className='cursor-pointer text-sm bg-cyan-600 px-4 py-2 rounded-md hover:bg-amber-600'>Go to Homepage</button>
           </Link>
        </div>
    </div>
  )
}
