import React from 'react'
import { useSelector } from 'react-redux'
import { Link, Navigate } from 'react-router-dom'

const UserProtected = ({ compo }) => {
    const { user } = useSelector(state => state.auth)
    return (user && user.role === "customer") ? compo : <div className='p-10 flex justify-center items-center'>
        <h1 className='text-white font-bold mb-20'>User Login Please Login....</h1>
        <Link className='bg-green-500 rounded-md p-4 text-black font-semibold' to='/login'> Go To Login Page</Link>
    </div>
}

export default UserProtected