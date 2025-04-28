
import React from 'react';
import { FetchData } from '../hooks/FetchData';
import { About } from './About';

export const Home = () => {

  const {data:users,error,loading} = FetchData('https://jsonplaceholder.typicode.com/users')
console.log(users);


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
            users && 
            <div>
              
            </div>
          }
        </div>
      
    </div>
  )
}



