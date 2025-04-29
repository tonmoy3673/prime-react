import { Button } from 'primereact/button'
import React from 'react'
import { Link } from 'react-router'

export const User = ({user}) => {
  return (
    <div className='text-center'>
        <h4>{user?.name}</h4>
        <p>{user?.email}</p>
        <div className='mt-2 py-1 text-center'>
            <Link to={`/users/${user.id}`}><Button className='text-sm bg-cyan-700 text-white px-2 py-2 rounded-md hover:bg-amber-600 hover:border-none hover:outline-none'>Details</Button></Link>
        </div>
    </div>
  )
}
