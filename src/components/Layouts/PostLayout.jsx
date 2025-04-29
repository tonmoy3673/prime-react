import React from 'react'
import { Outlet } from 'react-router'

export const PostLayout = () => {
  return (
    <div className='max-w-screen-xl mx-auto'>
        <div className='py-8 text-3xl text-center font-semibold mb-3'>
            <h2>Post Layout Navbar</h2>
        </div>
       <div>
       <Outlet/>
       </div>
    </div>
  )
}
