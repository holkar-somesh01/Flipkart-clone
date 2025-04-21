import React from 'react'
import { useSelector } from 'react-redux'
import { Link, Navigate } from 'react-router-dom'

const AdminProtected = ({ compo }) => {
    const { user } = useSelector(state => state.auth)
    return (user && user.role === "admin") ? compo : <div className='p-10 flex justify-center items-center'>
        {user && user.role === "customer" ? <Navigate to='/cart' /> : <h1 className='text-white font-bold mb-10'>Only Admin Can Login </h1>}
        <h1 className='text-white font-bold mb-10'>Please Login....</h1>
        <Link className='bg-green-500 rounded-md p-4 text-black font-semibold' to='/login'> Go To Login Page</Link>
    </div>
}

export default AdminProtected