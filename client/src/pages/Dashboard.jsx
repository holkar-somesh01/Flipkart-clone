import React, { createContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom'
import { FaAngleDown, FaList, FaSearch, FaShoppingCart } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { CgLogOff } from "react-icons/cg";
import Footer from '../components/Footer'
import { useGetUsersQuery, useLogoutMutation } from '../redux/Apis/authApi'
import { useAddFeatureProductMutation } from '../redux/Apis/adminApi'
import AdminProduct from './AdminProduct'
import AdminUser from './AdminUser'
import AdminOrder from './AdminOrder'
import AdminNavbar from './AdminNavbar'

export const ThemeContex = createContext()
const Dashboard = () => {
    const [show, setShow] = useState(false)
    const navigate = useNavigate()
    const [Logout, { isSuccess: logoutSuccess, isError: outisError, isLoading, error: outError }] = useLogoutMutation()
    const { user } = useSelector(state => state.auth)
    useEffect(() => {
        if (logoutSuccess) {
            toast.success("Admin SuccessFully Logout.", { theme: "dark", position: "bottom-center" })
            navigate("/login")
        }
    }, [logoutSuccess])
    useEffect(() => {
        if (outisError) {
            toast.error(outError.message || "Unable to Logout.", { theme: "dark", position: "bottom-center" })
        }
    }, [outisError])
    return <>
        <div className='py-20 px-10 ps-48'>
            <div className='hidden bg-white md:flex gap-5 p-5'>
                <img className='h-12 w-12 rounded-full' src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/profile-pic-male_4811a1.svg" alt="" />
                <div className=''>
                    <p className='text-slate-500 text-sm font-semibold'>hello,</p>
                    <p className='text-slate-700 text-lg font-semibold'>{user.name}</p>
                </div>
            </div>
            <div className='hidden bg-white md:flex justify-center gap-5 my-5 p-5'>
                <div className=''>
                    <h1 className='text-black font-semibold text-center bg-slate-500 p-2 px-5'>OUR WORK</h1>
                    <div className='bg-white w-full'>
                        <p className='text-center underline text-blue-500 font-semibold'><Link to='/Orders'>Order</Link></p>
                        <p className='text-center underline text-blue-500 font-semibold'><Link to='/Products'>Products</Link></p>
                        <p className='text-center underline text-blue-500 font-semibold'><Link to='/Users'>User</Link></p>
                    </div>
                </div >
            </div >
            <div className='hidden bg-white md:flex justify-center gap-5 my-5 p-5'>
                <button onClick={Logout} className='flex'>
                    <p className='text-3xl font-bold text-blue-600'><CgLogOff /></p>
                    <h1 className='text-lg font-bold hover:text-blue-600 text-black ps-5 me-10'>LogOut</h1>
                    {isLoading && <span className="loading loading-spinner loading-md"></span>}
                </button>
            </div>
        </div >
    </>
}

export default Dashboard