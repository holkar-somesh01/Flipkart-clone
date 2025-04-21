import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom'
import { FaAngleDown, FaList, FaSearch, FaShoppingCart } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { CgLogOff } from "react-icons/cg";
import { useLogoutMutation } from '../redux/Apis/authApi'
import AdminProduct from './AdminProduct'
import AdminUser from './AdminUser'
import AdminOrder from './AdminOrder'


const AdminNavbar = () => {
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
        {/* NAVBAR START */}
        <div className='bg-blue-600'>
            <nav className="navbar">
                <a className="md:ms-[150px]" href="">
                    <img className='h-[40px] w-[100px] m-0 p-0' src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTIXOIUHHx0zKuVMDw2tTuLY0QC3TKFrsiAnUB1SlPUx5Zld7hp" alt="" />
                </a>
                <div className="flex gap-3 ms-[10px]" id="navbarNavAltMarkup">
                    <div className="relative hidden md:flex lg:flex">
                        <div className='absolute right-0 top-5 transform -translate-y-1/3 text-lg h-5 text-blue-700'><FaSearch /></div>
                        <input type="text" placeholder="Search For Products" className="bg-white p-2 text-start w-[400px] text-black placeholder:text-slate-900 text-sm font-semibold" />
                    </div>
                    <div className="w-[100px] mt-1 ms-[20px] h-[30px] bg-white cursor-pointer flex items-center justify-center ">
                        <Link to='/login' className="text-blue-800 font-semibold p-4">Login</Link>
                    </div>
                    <div className='flex gap-10 ms-5'>
                        <div className="width text-light hidden md:flex lg:flex">
                            <h6 className="text-white font-bold pt-2">Become a Seller</h6>
                        </div>
                        <div className="flex gap-1">
                            <h6 className="text-white font-bold pt-2">More</h6>
                            <span className='mt-3 text-white'><FaAngleDown /></span>
                        </div>
                        <div className="flex gap-1 text-white">
                            <span className='mt-3'><FaShoppingCart /></span>
                            <h6 className='text-white font-semibold mt-2'>Cart</h6>
                        </div>
                        <div>
                            <div className="drawer z-10">
                                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                                <div className="drawer-content">
                                    {/* Page content here */}
                                    <label htmlFor="my-drawer" className="drawer-button">
                                        <div className="flex md:hidden gap-1 text-white me-10">
                                            <span className='mt-3 text-xl text-black'><FaList /></span>
                                            <h6 className='text-white font-semibold mt-2'>Menu</h6>
                                        </div>
                                    </label>
                                </div>
                                <div className="drawer-side">
                                    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                                    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                                        <div className=' bg-white flex gap-5 p-5'>
                                            <img className='h-12 w-12 rounded-full' src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/profile-pic-male_4811a1.svg" alt="" />
                                            <div className=''>
                                                <p className='text-slate-500 text-sm font-semibold'>hello,</p>
                                                <p className='text-slate-700 text-lg font-semibold'>{user.name}</p>
                                            </div>
                                        </div>
                                        <div className='bg-white flex justify-center gap-5 my-5 p-5'>
                                            <div className=''>
                                                <h1 className='text-black font-semibold text-center'>OUR WORK</h1>
                                                <div>
                                                    {/* <AdminOrder /> */}
                                                </div>
                                            </div>
                                        </div>
                                        <div className='md:hidden bg-white flex justify-center gap-5 my-5 p-5'>
                                            <button onClick={Logout} className='flex'>
                                                <p className='text-3xl font-bold text-blue-600'><CgLogOff /></p>
                                                <h1 className='text-lg font-bold hover:text-blue-600 text-black ps-5 me-10'>LogOut</h1>
                                                {isLoading && <span className="loading loading-spinner loading-md"></span>}
                                            </button>
                                        </div>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav >
            <div className='ms-10'>
                <div className="relative md:hidden flex lg:hidden">
                    <div className='absolute right-[16%] top-5 transform -translate-y-1/3 text-lg h-5 text-blue-700'><FaSearch /></div>
                    <input type="text" placeholder="Search For Products" className="bg-white p-2 text-start w-[400px] text-black placeholder:text-slate-900 text-sm font-semibold" />
                </div>
            </div>
        </div >
        {/* NAVBAR END */}

    </>

}

export default AdminNavbar