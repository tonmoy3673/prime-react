import React from 'react'
import { Link } from 'react-router';

export const Post = ({post}) => {
    const {id,title}=post;
  return (
    <div className='text-center'>
        <h4>
           ID : {id}
        </h4>
        <p>Title : {title}</p>
        <div className='text-center'>
            <Link to={`posts/${id}`}><button className='px-3 text-white rounded-md mt-2 cursor-pointer py-1 bg-cyan-600 text-sm hover:bg-amber-600 transition-transform duration-200'>More..</button></Link>
        </div>
    </div>
  )
}
