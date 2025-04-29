import React from 'react';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
    return ( 
        <div className='px-18'>
            {/* ======== Band ===== */}
            <div className='py-5 flex items-center justify-between'>
               <Link to='/'>
               <h2 className='text-cyan-700 cursor-pointer font-semibold text-xl'>Prime <span>React</span></h2>
               </Link>
                    {/* ======= Menu Items ========= */}
                <div className='mx-auto'>
                    <ul className='flex flex-col md:flex-row gap-y-6 md:gap-y-0 md:gap-x-10'>
                        <NavLink className={({isActive})=> `hover:text-cyan-700 ${isActive ? 'text-amber-700':'text-black'}` } to='/'>Home</NavLink>
                        <NavLink className={({isActive})=>`hover:text-cyan-700  ${isActive?'text-amber-700 ' : 'text-black'}`} to='about'>About</NavLink>
                        <NavLink className={({isActive})=>`hover:text-cyan-700 ${isActive?'text-amber-700 ' : 'text-black'}`} to='contact'>Contact</NavLink>
                        <NavLink className={({isActive})=>`hover:text-cyan-700 ${isActive ? 'text-amber-700 ' : 'text-black'}`} to='postLayout'>Posts</NavLink>
                    </ul>
                </div>
                {/* ======== Button ========= */}
                <div>
                    <button className='px-4 py-2 bg-cyan-700 text-white text-sm rounded-md hover:bg-amber-600 transition-transform ease-in-out duration-150 cursor-pointer'>Explore</button>
                </div>

            </div>
        </div>
    );
};

export default Navbar;