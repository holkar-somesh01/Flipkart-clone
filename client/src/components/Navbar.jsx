import React, { useEffect } from 'react'
import { FaAngleDown, FaList, FaSearch, FaShoppingCart } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { PiListLight } from "react-icons/pi";
import { useSelector } from 'react-redux';
import { useLogoutMutation } from '../redux/Apis/authApi';
import { toast } from 'react-toastify';

const Navbar = () => {
    const navigate = useNavigate()
    const { cart } = useSelector(state => state.public)
    const [Logout, { isSuccess: logoutSuccess, isError: outisError, isLoading, error: outError }] = useLogoutMutation()
    const { user } = useSelector(state => state.auth)
    useEffect(() => {
        if (logoutSuccess) {
            toast.success("Admin SuccessFully Logout.", { theme: "dark", position: "bottom-center" })
            navigate("/login")
        }
    }, [logoutSuccess])
    return <>
        {/* Navbar start */}
        <div className='bg-blue-600'>
            <nav class="navbar ">
                <div class="container-fluid">
                    <div className='text-black font-bold text-3xl flex md:hidden lg:hidden'><PiListLight /></div>
                    <a class="md:ms-[150px]" href="">
                        <img className='h-[40px] w-[100px] m-0 p-0' src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTIXOIUHHx0zKuVMDw2tTuLY0QC3TKFrsiAnUB1SlPUx5Zld7hp" alt="" />
                    </a>
                    <div class="flex gap-3 ms-[10px]" id="navbarNavAltMarkup">
                        <div class="relative hidden md:flex lg:flex">
                            <div className='absolute right-0 top-5 transform -translate-y-1/3 text-lg h-5 text-blue-700'><FaSearch /></div>
                            <input type="text" placeholder="Search For Products" className="bg-white p-2 text-start w-[400px] text-black placeholder:text-slate-900 text-sm font-semibold" />
                        </div>
                        <div class="w-[100px] mt-1 ms-[20px] h-[30px] bg-white cursor-pointer flex items-center justify-center ">
                            <Link to='/login' class="text-blue-800 font-semibold p-4">Login</Link>
                        </div>
                        <div className='flex gap-10 ms-5'>
                            <div class="width text-light hidden md:flex lg:flex">
                                <h6 class="text-white font-bold pt-2">Become a Seller</h6>
                            </div>
                            <div class="flex gap-1">
                                <h6 class="text-white font-bold pt-2">More</h6>
                                <span className='mt-3 text-white'><FaAngleDown /></span>
                            </div>
                            {
                                !user ? ""
                                    : user && user.role === "customer" ? <Link to='/cart' className="flex gap-1 text-white cursor-pointer">
                                        <div className="indicator">
                                            <span className="indicator-item badge badge-secondary">{cart && cart.length}</span>
                                            {/* <div className="grid w-32 h-32 bg-base-300 place-items-center">content</div> */}
                                            <span className='mt-3'><FaShoppingCart /></span>
                                            <h6 className='text-white font-semibold mt-2'>Cart</h6>
                                        </div>
                                    </Link>
                                        : <div className='mt-2'>
                                            <details className="dropdown dropdown-left">
                                                <summary className="btn btn-sm">{user && user.name}</summary>
                                                <ul className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                                    <li><Link to='/admin' className='text-white text-lg font-semibold'>Admin</Link></li>
                                                    <li><button onClick={Logout} className="btn btn-error btn-sm">Logout</button></li>
                                                </ul>
                                            </details>
                                        </div>
                            }
                        </div>
                    </div>
                </div>
            </nav>
            <div className='ms-10'>
                <div class="relative md:hidden flex lg:hidden">
                    <div className='absolute right-16 top-5 transform -translate-y-1/3 text-lg h-5 text-blue-700'><FaSearch /></div>
                    <input type="text" placeholder="Search For Products" className="bg-white p-2 text-start w-[400px] text-black placeholder:text-slate-900 text-sm font-semibold" />
                </div>
            </div>
        </div>
        {/* Navbar end */}

        {/* Navbar sub start */}
        <div class="overflow-y-hidden h-[160px] m-[10px] ms-3 me-3 flex justify-between bg-white cursor-pointer">
            <div>
                <div class="p-5">
                    <div>
                        <img className='h-[90px]' src="https://rukminim1.flixcart.com/flap/96/96/image/29327f40e9c4d26b.png?q=100" alt="" />
                    </div>
                    <div>
                        <h6 className='font-bold text-black'>Grocery</h6>
                    </div>
                </div>
            </div>
            <div>
                <div className="p-5">
                    <div>
                        <img className='h-[90px]' src="https://rukminim1.flixcart.com/flap/96/96/image/22fddf3c7da4c4f4.png?q=100" alt="" />
                    </div>
                    <div>
                        <h6 className='font-bold text-black'>Mobiles</h6>
                    </div>
                </div>
            </div>
            <div>
                <div class="p-5">
                    <div>
                        <img className='h-[90px]' src="https://rukminim1.flixcart.com/fk-p-flap/96/96/image/0d75b34f7d8fbcb3.png?q=100" alt="" />
                    </div>
                    <div>
                        <h6 className='font-bold text-black'>Fashion<i class="bi bi-chevron-down"></i></h6>
                    </div>
                </div>
            </div>
            <div>
                <div class="p-5">
                    <div>
                        <img className='h-[90px]' src="https://rukminim1.flixcart.com/flap/96/96/image/69c6589653afdb9a.png?q=100" alt="" />
                    </div>
                    <div class=" d-flex">
                        <h6 className='font-bold text-black'>Electronics<i class="font-bold bi bi-chevron-down"></i></h6>
                    </div>
                </div>
            </div>
            <div>
                <div class="p-5">
                    <div>
                        <img className='h-[90px]' src="https://rukminim1.flixcart.com/flap/96/96/image/ab7e2b022a4587dd.jpg?q=100" alt="" />
                    </div>
                    <div class="flex">
                        <h6 className='font-bold text-black'>Home & Furniture<i class="font-bold bi bi-chevron-down"></i></h6>
                    </div>
                </div>
            </div>
            <div>
                <div class="p-5">
                    <div>
                        <img className='h-[90px]' src="https://rukminim1.flixcart.com/fk-p-flap/96/96/image/0139228b2f7eb413.jpg?q=100" alt="" />
                    </div>
                    <div>
                        <h6 className='font-bold text-black'>Appliances</h6>
                    </div>
                </div>
            </div>
            <div>
                <div class="p-5">
                    <div>

                        <img className='h-[90px]' src="https://rukminim1.flixcart.com/flap/96/96/image/71050627a56b4693.png?q=100" alt="" />
                    </div>
                    <div>
                        <h6 className='font-bold text-black'>Travel</h6>
                    </div>
                </div>
            </div>
            <div>
                <div class="p-5">
                    <div>
                        <img className='h-[90px]' src="https://rukminim1.flixcart.com/flap/96/96/image/dff3f7adcf3a90c6.png?q=100" alt="" />
                    </div>
                    <div class="d-flex">
                        <h6 className='font-bold text-black'>Fashion<i class="font-bold bi bi-chevron-down"></i></h6>
                    </div>
                </div>
            </div>
            <div>
                <div class="p-5">
                    <div>
                        <img className='h-[90px]' src="https://rukminim1.flixcart.com/fk-p-flap/96/96/image/05d708653beff580.png?q=100" alt="" />
                    </div>
                    <div class=" d-flex">
                        <h6 className='font-bold text-black'>Fashion<i class="font-bold bi bi-chevron-down"></i></h6>
                    </div>
                </div>
            </div>
        </div >
        {/* Navbar sub end  */}
    </>
}

export default Navbar