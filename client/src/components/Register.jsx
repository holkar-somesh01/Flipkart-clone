import React, { useEffect, useState } from 'react'
import { FaAngleDown, FaSearch, FaShoppingCart } from "react-icons/fa";
import { IoPersonAddSharp } from "react-icons/io5";
import { IoMailOpenOutline } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useRegisterUserMutation } from '../redux/Apis/authApi';
import { toast } from 'react-toastify';
import { IoMdEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import Footer from './Footer';

const Register = () => {
    const [show, setShow] = useState(false)
    const navigate = useNavigate()
    const [register, { isSuccess: RegisterSuccess, isLoading, isError, error }] = useRegisterUserMutation()
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
        },
        validationSchema: yup.object({
            name: yup.string().required("Enter Name"),
            email: yup.string().email().required("Enter Email"),
            password: yup.string().required("Enter Password"),
        }),
        onSubmit: (values, { resetForm }) => {
            register(values)
            resetForm()
        }
    })
    useEffect(() => {
        if (RegisterSuccess) {
            toast.success("User Register Success", { theme: "dark" })
            navigate("/login")
        }
    }, [RegisterSuccess])
    useEffect(() => {
        if (isError) {
            toast.error(error.message || "Unable  To Register", { theme: "dark" })
        }
    }, [isError])
    return <>
        <div>
            {/* Login Navbar Start */}
            <nav className="navbar bg-blue-600">
                <div className="container-fluid">
                    <a className=" md:ms-[150px]" href="">
                        <img className='md:h-[40px] h-[50%] m-0 p-0' src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTIXOIUHHx0zKuVMDw2tTuLY0QC3TKFrsiAnUB1SlPUx5Zld7hp" alt="" />
                    </a>
                    <div className="flex gap-3 ms-[10px]" id="navbarNavAltMarkup">
                        <div className=" hidden md:flex relative">
                            <div className='absolute right-0 top-5 transform -translate-y-1/3 text-lg h-5 text-blue-700'><FaSearch /></div>
                            <input type="text" placeholder="Search For Products" className="bg-white p-2 text-start w-[400px] text-black placeholder:text-slate-900 text-sm font-semibold" />
                        </div>
                        <div className="w-[100px] mt-1 ms-[20px] h-[30px] bg-white cursor-pointer flex items-center justify-center ">
                            <h6 className="text-blue-800 font-semibold p-4">Login</h6>
                        </div>
                        <div className='flex gap-10 ms-5'>
                            <div className="width text-light">
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
                        </div>
                    </div>
                </div>
            </nav>
            {/* Login Navbar End  */}
            {/* Sub Navbar Start  */}
            <div className='hidden md:flex lg:flex'>
                <div className="md:h-[45px] h-[50px] flex md:ps-[60px] w-[100%] bg-white gap-5 md:gap-[50px]">
                    <div className="flex text-black text-sm font-semibold mt-3">
                        <h6>Electronics</h6>
                        <i className='mt-2'><FaAngleDown /></i>
                    </div>
                    <div className="flex text-black text-sm font-semibold mt-3">
                        <h6>TV & Aplication</h6>
                        <i className='mt-2'><FaAngleDown /></i>
                    </div>
                    <div className="flex text-black text-sm font-semibold mt-3">
                        <h6>Men</h6>
                        <i className='mt-2'><FaAngleDown /></i>
                    </div>
                    <div className="flex text-black text-sm font-semibold mt-3">
                        <h6>Women</h6>
                        <i className='mt-2'><FaAngleDown /></i>
                    </div>
                    <div className="flex text-black text-sm font-semibold mt-3">
                        <h6>Baby & Kids</h6>
                        <i className="bi bi-chevron-down"></i>
                    </div>
                    <div className="flex text-black text-sm font-semibold mt-3">
                        <h6>Home & Furniture</h6>
                        <i className="bi bi-chevron-down"></i>
                    </div>
                    <div className="flex text-black text-sm font-semibold mt-3">
                        <h6>Sports, Book & More</h6>
                        <i className="bi bi-chevron-down"></i>
                    </div>
                    <div className="flex text-black text-sm font-semibold mt-3">
                        <h6>Flights</h6>
                        <i className="bi bi-chevron-down"></i>
                    </div>
                    <div className="flex text-black text-sm font-semibold mt-3 me-1">
                        <h6>Offer Zone</h6>
                        <i className="bi bi-chevron-down"></i>
                    </div>
                </div>
            </div>
            {/* Sub Navbar End  */}
            {/* Main Content Start */}
            <div className='bg-slate-300 h-[100%]'>
                <div className='flex justify-center w-full md:h-screen shadow-md shadow-slate-600'>
                    <div className='hidden md:block lg:block mt-10 w-[40%] h-full'>
                        <img className='w-full h-[70%] rounded-l-md' src="https://i.ytimg.com/vi/MxTaDhwJDLg/maxresdefault.jpg" alt="" />
                    </div>
                    <div className='bg-white mt-10 h-[100%] md:h-[70%] p-10 rounded-r-md'>
                        <h1 className='text-black font-bold text-lg'>Register</h1>
                        <p className='text-slate-400 text-sm font-semibold'>Get access to your Orders,Wishlist & Recomendation</p>
                        <div className='mt-6'>
                            <form onSubmit={formik.handleSubmit}>
                                <label
                                    className={`text-black text-sm font-semibold
                                     ${formik.errors.name && formik.touched.name && "text-red-500"}`}
                                    htmlFor="#name">
                                    Enter Name
                                </label>
                                <br />
                                <div className='relative '></div>
                                <div className="flex relative">
                                    <div
                                        className={`absolute right-5 top-5 transform -translate-y-1/3 text-lg h-5 text-blue-700
                                         ${formik.errors.name && formik.touched.name && "text-red-500"}`}>
                                        <IoPersonAddSharp />
                                    </div>
                                    <input
                                        {...formik.getFieldProps("name")}
                                        id='name'
                                        name='name'
                                        type="text"
                                        placeholder="John"
                                        className={`input  text-black font-semibold h-10 input-primary w-full max-w-xs bg-white border rounded-full border-black ${formik.errors.name && formik.touched.name && "input-error border border-red-500"}`}
                                    />
                                </div>
                                <label className={`text-black text-sm font-semibold ${formik.errors.email && formik.touched.email && "text-red-500"}`} htmlFor="#email">Enter Email</label>
                                <br />
                                <div className='relative '></div>
                                <div className="flex relative">
                                    <div className={`absolute right-5 top-5 transform -translate-y-1/3 text-lg h-5 text-blue-700 ${formik.errors.email && formik.touched.email && "text-red-500"}`}><IoMailOpenOutline /></div>
                                    <input
                                        {...formik.getFieldProps("email")}
                                        id='email'
                                        name='email'
                                        type="text"
                                        placeholder="john@gmail.com"
                                        className={`input text-black font-semibold  h-10 input-primary w-full max-w-xs bg-white border rounded-full border-black ${formik.errors.email && formik.touched.email && "input-error border border-red-500"}`}
                                    />
                                </div>
                                <br />
                                <label className={`text-black text-sm font-semibold ${formik.errors.password && formik.touched.password && "text-red-500"}`} htmlFor="#password">Enter Password</label>
                                <div className="flex relative">
                                    <div onClick={e => setShow(!show)} className={`absolute right-5 top-5 transform -translate-y-1/3 text-lg h-5 text-blue-700 cursor-pointer ${formik.errors.password && formik.touched.password && "text-red-500"}`}>{show ? <IoIosEyeOff /> : <IoMdEye />}</div>
                                    <input
                                        {...formik.getFieldProps("password")}
                                        type={show ? "text" : "password"}
                                        name='password'
                                        id='password'
                                        placeholder="*****"
                                        className={`input text-black font-semibold  h-10 input-primary w-full max-w-xs bg-white border rounded-full border-black ${formik.errors.password && formik.touched.password && "input-error border border-red-500"}`}
                                    />
                                </div>

                                <div className='flex gap-4'>
                                    <button
                                        disabled={isLoading}
                                        type='submit'
                                        className="btn btn-primary w-36 rounded-full my-5">
                                        {isLoading ? <span className="loading loading-spinner loading-md text-white"></span> : "Register"}
                                    </button>
                                    <Link to='/login' className="btn btn-primary w-36 rounded-full btn-outline my-5">Login</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* Main Content End */}
            <Footer />
        </div >
    </>
}

export default Register