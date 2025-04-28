import React from 'react'

export const User = ({user}) => {
    
  return (
    <div>
        <h4>{user?.name}</h4>
        <p>{user?.email}</p>
    </div>
  )
}
