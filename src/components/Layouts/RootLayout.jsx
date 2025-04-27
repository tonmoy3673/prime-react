import React from 'react';
import Navbar from '../Shared/Navbar';
import { Outlet } from 'react-router';

export const RootLayout = () => {
  return (
    <div >
        <Navbar/>
        <div className='max-w-screen-xl mx-auto'>
        <Outlet/>
        </div>
       
    </div>
  )
}
