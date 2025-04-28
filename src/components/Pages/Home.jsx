
import React from 'react';
import { FetchData } from '../hooks/FetchData';
import { User } from './User';


export const Home = () => {

  const {data:users,error,loading} = FetchData('https://jsonplaceholder.typicode.com/users')

  return (
    <div>
        <h2 className='text-amber-500 mb-6'>Home Page</h2>

        {/* ============ Loading ========== */}
        <div>
        {
          loading && <p>Loading .........</p>
        }
        </div>

        {/* ========== Error ======== */}
        <div>
          {
            error && <p>{error.message}</p>
          }
        </div>

        {/* =========== Users Part ========== */}
        <div>
          {
            users ? 
           (
            <div className='grid grid-cols-3 gap-8 items-center justify-between'>
              {
                users.map((user)=><User key={user.id} user={user}/>)
              }
            </div>
           )
           :
          (<div>
            <p>Users Not Found</p> 
            
          </div>
          )

          }
        </div>
      
    </div>
  )
}



