import React from 'react';
import { DataFetch } from '../hooks/DataFetch';
import { Post } from './Post';
const Posts =()=>{

    const {data:posts,error,loading} = DataFetch('https://jsonplaceholder.typicode.com/posts');

    return(
        <div>
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


            {/* ======== posts ========= */}
            {
                posts ? (
                    <div>
                        <div>
                    <h2 className='text-center py-3 mb-6 text-xl'>Total Posts : <span className='text-cyan-600 font-semibold'>{posts.length}</span></h2>
                    </div>
                    <div className='grid grid-cols-5 gap-10'>
                        {
                            posts.map((post)=><Post post={post} key={post?.id}/>)
                        }
                    </div>
                    </div>
                ):
                (
                    <p className='text-center text-lg'>Posts Not Available</p>
                )
            }

           
        </div>
    )
};

export default Posts;