import React, { useEffect, useState } from 'react'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { PiListLight } from 'react-icons/pi'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useLogoutMutation } from '../redux/Apis/authApi';
import { toast } from 'react-toastify';
import { CgLogOff } from 'react-icons/cg';
import { cancelOrder, emptyCart } from '../redux/slices/publicSlice';
import { useAddOrderMutation } from '../redux/Apis/orderApi';

const UserCart = () => {
    const [placeOrder, { isSuccess: placeOrderSuccess, isError: placeOrderIsError, isLoading: placeOrderIsLoading }] = useAddOrderMutation()
    const [Logout, { isSuccess: logoutSuccess, isError: outisError, isLoading: logoutIsLoading, error: outError }] = useLogoutMutation()
    const { cart } = useSelector(state => state.public)
    const { user } = useSelector(state => state.auth)
    const [discount, setDiscount] = useState(100)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handlePlaceOrder = () => {
        const products = cart.map(item => item._id)
        placeOrder({ products, customer: user._id })
    }
    useEffect(() => {
        if (placeOrderSuccess) {
            toast.success("Order Placed Success")
            dispatch(emptyCart())
            navigate("/success")
        }
    }, [placeOrderSuccess])
    useEffect(() => {
        if (logoutSuccess) {
            toast.success("User SuccessFully Logout", { theme: "dark", position: "top-center" })
            navigate("/login")
        }
    }, [logoutSuccess])
    useEffect(() => {
        if (outisError) {
            toast.error(outError.message || "Unable to Logout.", { theme: "dark", position: "bottom-center" })
        }
    }, [outisError])
    return <>
        <div>
            <nav class="navbar bg-blue-500 ">
                <div class="">
                    <div className='text-black font-bold text-3xl hidden justify-between md:hidden lg:hidden'><PiListLight /></div>
                    <a class="md:ms-[150px]" href="">
                        <img className='h-[40px] w-[100px] m-0 p-0' src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTIXOIUHHx0zKuVMDw2tTuLY0QC3TKFrsiAnUB1SlPUx5Zld7hp" alt="" />
                    </a>
                    <div className="flex justify-between ms-10">
                        <div className='hidden md:flex'>
                            <input type="text" placeholder="Search" className="input input-bordered bg-white h-10 w-[500px]" />
                        </div>
                        <div className='ms-64'>
                            <div class="flex gap-1 text-white">

                                <div className="dropdown dropdown-end">
                                    <div tabIndex={0} role="button" className="m-1 flex"> <span className='mt-3 text-2xl font-bold'><MdOutlineKeyboardArrowDown /></span>
                                        <h6 className='text-black text-lg font-semibold mt-2'>{user.name}</h6></div>
                                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                        <li><Link to='/details'>My Account</Link></li>
                                        <li><button onClick={Logout} className='flex'>
                                            <p className='text-3xl font-bold text-blue-600'><CgLogOff /></p>
                                            <h1 className='text-lg font-bold hover:text-blue-600 text-white ps-5 me-10'>LogOut</h1>
                                            {placeOrderIsLoading && <span className="loading loading-spinner loading-md"></span>}
                                        </button></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
        {/* Cart Main START  */}
        <div className='md:h-[100%] md:w-screen bg-slate-300'>
            <div className='md:h-screen md:w-screen bg-slate-300 py-7 px-3'>
                {cart.length > 0
                    ? <div className='md:flex justify-between bg-white items-center p-10'>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>
                            {cart && cart.map(item => <div key={item.price} className="my-3 card card-compact w-[200px] bg-base-100 shadow-xl">
                                <figure><img src={item.image} alt="prodcuts" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{item.name}</h2>
                                    <p>{item.desc}</p>
                                    <p>{item.price}/-</p>
                                    <div className="card-actions justify-end">

                                    </div>
                                </div>
                            </div>)}
                        </div>
                        <div className='grid grid-cols-1 top-0 gap-2'>
                            <div>
                                {
                                    cart && cart.map(item => <div key={item._id} className="card card-compact md:w-96 bg-slate-800 shadow-xl my-3">
                                        <div className="card-body">
                                            <h2 className="card-title">PRICE DETAILS</h2>
                                            <p className='font-semibold text-white text-center'>{item.name}</p>
                                            <div className='flex justify-between'>
                                                <div>
                                                    <p>Price Item:</p>
                                                    <p>Discount</p>
                                                    <p>Total:</p>
                                                </div>
                                                <div>
                                                    <p>{item.price}/-</p>
                                                    <p>{discount}/-</p>
                                                    <p>{item.price - discount}/-</p>
                                                </div>
                                            </div>
                                            <div className="card-actions justify-between">
                                                <button disabled onClick={e => dispatch(cancelOrder({ id: item._id }))} className="btn btn-error">Cancel</button>
                                                <button onClick={handlePlaceOrder} className="btn btn-primary">Buy Now</button>
                                            </div>
                                        </div>
                                    </div>)
                                }
                            </div>
                        </div>
                    </div>
                    : <div className='flex justify-center bg-white items-center pt-10'>
                        <div className=''>
                            <img className='h-32' src="https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90" alt="" />
                            <div className='pt-10'>
                                <p className='text-2xl text-black font-semibold'>Your cart is empty!</p>
                                <p className='text-black text-xs text-center ms-10'>Add items to it now.</p>
                                <Link className='' to='/'> <button className='shadow-md shadow-slate-400 p-2 my-5 w-full bg-blue-600 text-center font-semibold text-white'>Shop Now</button></Link>
                            </div>
                        </div>
                    </div>
                }
                <div className='h-[1px] w-screen p-0 mt-5 bg-slate-500'></div>
                <div className=' m-20 mb-20'>
                    <div>
                        <div className='grid grid-cols-1 md:grid-cols-4 gap-10'>
                            <ul className='grid grid-cols-1 md:grid-cols-5 gap-10 text-slate-600'>
                                <li className='text-xs flex'>
                                    <span className=''>Policies:</span>
                                    <span className='ms-2'>Returns Policy</span>
                                </li>
                                <li className='text-xs flex'>
                                    <span className=''>Terms </span>
                                    <span className='ms-2'>of use</span>
                                </li>
                                <li className='text-xs flex'>
                                    <span className=''>Security</span>
                                    <span className='ms-2'></span>
                                </li>
                                <li className='text-xs flex'>
                                    <span className=''>customer</span>
                                    <span className='ms-2'>Policy</span>
                                </li>
                                <li className='text-xs flex'>
                                    <span className=''>Infringement©</span>
                                    <span className='ms-2'>2007-2024</span>
                                </li>
                            </ul>
                        </div>
                        <div className='ms-20 mb-24 text-black text-end'>
                            <Link className='cursor-pointer hover:underline hover:text-blue-500'>Need help?</Link>
                        </div>
                    </div>
                </div>
            </div>

        </div >
        {/* Cart Main END  */}
    </>
}

export default UserCart