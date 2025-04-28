import React from 'react';
import { useParams } from 'react-router';
import { FetchData } from '../hooks/FetchData';

const UserDetails = () => {
    const {userId} = useParams();

    const {data:userInfo,error,loading}= FetchData(`https://jsonplaceholder.typicode.com/users/${userId}`)
    const {id,name,username,email,phone,website}=userInfo;
   

    return (
        <div>
            {/* ========= loading ====== */}
            <div>
                {
                    loading && (<div className='text-center '>
                        <p className='text-2xl font-semibold'>Loading .....</p>
                    </div>)
                }
            </div>
            {/* ============ error ===== */}
            <div>
                {
                    error && (
                        <div>
                            <p>{error.message}</p>
                        </div>
                    )
                }
            </div>
            <div>

            </div>


            {/* =========== user details ======= */}
            <div className='py-2 text-center'>
            <h5>Id : {id}</h5>
            <h2>Name : {name}</h2>
            <h4>User Name : {username}</h4>
            <p>Email : {email}</p>
            <p>Phone : {phone}</p>
            <p>Website : {website}</p>
        </div>
        </div>
    );
};

export default UserDetails;