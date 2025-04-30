
import React from 'react';
import { FetchData } from '../hooks/FetchData';
import { User } from './User';


export const Home = () => {

  const {data:users,error,loading} = FetchData('https://jsonplaceholder.typicode.com/users');

  // ========= handle create user ======//

  const handleCreateUser =async(event)=>{
    console.log('clicked');
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const website = form.website.value;

    
    const user ={
      name,email,phone,website
    };

    
    console.log(user);



  }

  return (
    <div>
        <h2 className='text-amber-500 mb-6'>Home Page</h2>

        {/* ============ Loading ========== */}
        <div>
        {
          loading && <p className='text-cyan-500 text-center text-xl font-semibold'>Loading .........</p>
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
        {/* =============== create users ======= */}
        <div>
          <div className='mb-4'>
          <h2 className='text-center py-5 text-2xl font-semibold text-cyan-600'>Create New User</h2>
          </div>
          {/* ======== create user form =========== */}
          <div className='py-8 mb-10'>
            <form onSubmit={handleCreateUser}>
              {/* ====== name & email container ======== */}
              <div className='flex items-center justify-center gap-x-12'>
              <div>
                <label htmlFor='name'>Name :</label>
                <input  type='text' required id='name' name='name' className='bg-blue-200 ms-2 py-1 rounded-md focus:none outline-none px-2 placeholder:text-sm' placeholder='Type User name'/>
              </div>
              <div>
                <label htmlFor='email'>Email :</label>
                <input type='email' id='email' name='email' className='bg-blue-200 ms-2 py-1 rounded-md focus:none outline-none px-2 placeholder:text-sm' placeholder='Type User email'/>
              </div>
              

              </div>
               {/* ====== phone & website container ====== */}
               <div className='flex items-center justify-center gap-x-12 mt-6'>
               
               <div>
                 <label htmlFor='phone'>phone :</label>
                 <input  type='text' required id='phone' name='phone' className='bg-blue-200 ms-2 py-1 rounded-md focus:none outline-none px-2 placeholder:text-sm' placeholder='Type User phone number'/>
               </div>
               <div>
                 <label htmlFor='website'>Website :</label>
                 <input type='text' required id='website' name='website' className='bg-blue-200 ms-2 py-1 rounded-md focus:none outline-none px-2 placeholder:text-sm' placeholder='Type User website name'/>
               </div>
               </div>
               {/* ============ submit button ========= */}
               <div className='py-3 mt-4 text-center'>
                <button className='px-4 py-2 bg-cyan-700 text-white text-sm cursor-pointer rounded-md hover:bg-amber-600 transition-all duration-200'>Submit to Add</button>
               </div>
            </form>
          </div>
        </div>
      
    </div>
  )
}



