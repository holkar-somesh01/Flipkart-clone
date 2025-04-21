import React from 'react'
import { FaFacebook, FaGift, FaQuestion, FaShoppingBag, FaStar, FaStarAndCrescent, FaTwitter, FaYoutube } from 'react-icons/fa'

const Footer = () => {
    return <>
        <div className='bg-gray-950 px-5'>
            <div className='grid grid-cols-2 md:grid-cols-6'>
                <div className='my-3 1'>
                    <h1 className='text-sm font-semibold text-slate-500'>ABOUT</h1>
                    <ul>
                        <li><a className='hover:underline text-white text-sm font-semibold'>Contact Us</a></li>
                        <li><a className='hover:underline text-white text-sm font-semibold'>About Us</a></li>
                        <li><a className='hover:underline text-white text-sm font-semibold'>Careers</a></li>
                        <li><a className='hover:underline text-white text-sm font-semibold'>Flipkart Stories</a></li>
                        <li><a className='hover:underline text-white text-sm font-semibold'>Press</a></li>
                        <li><a className='hover:underline text-white text-sm font-semibold'>Corporate Information</a></li>
                    </ul>
                </div>
                <div className='my-3 2'>
                    <h1 className='text-sm font-semibold text-slate-500'>GROUP COMPANIES</h1>
                    <ul>
                        <li><a className='hover:underline text-white text-sm font-semibold'>Myntra</a></li>
                        <li><a className='hover:underline text-white text-sm font-semibold'>Flipkart Wholesale</a></li>
                        <li><a className='hover:underline text-white text-sm font-semibold'>Cleartrip</a></li>
                        <li><a className='hover:underline text-white text-sm font-semibold'>Flipkart Stories</a></li>
                        <li><a className='hover:underline text-white text-sm font-semibold'>Press</a></li>
                        <li><a className='hover:underline text-white text-sm font-semibold'>Corporate Information</a></li>
                    </ul>
                </div>
                <div className='my-3 3'>
                    <h1 className='text-sm font-semibold text-slate-500'>HELP</h1>
                    <ul>
                        <li><a className='hover:underline text-white text-sm font-semibold'>Contact Us</a></li>
                        <li><a className='hover:underline text-white text-sm font-semibold'>About Us</a></li>
                        <li><a className='hover:underline text-white text-sm font-semibold'>Careers</a></li>
                        <li><a className='hover:underline text-white text-sm font-semibold'>Flipkart Stories</a></li>
                        <li><a className='hover:underline text-white text-sm font-semibold'>Press</a></li>
                        <li><a className='hover:underline text-white text-sm font-semibold'>Corporate Information</a></li>
                    </ul>
                </div>
                <div className='my-3 flex'>
                    <div>
                        <h1 className='text-sm font-semibold text-slate-500'>CONSUMER POLICY</h1>
                        <ul>
                            <li><a className='hover:underline text-white text-sm font-semibold'>Contact Us</a></li>
                            <li><a className='hover:underline text-white text-sm font-semibold'>About Us</a></li>
                            <li><a className='hover:underline text-white text-sm font-semibold'>Careers</a></li>
                            <li><a className='hover:underline text-white text-sm font-semibold'>Flipkart Stories</a></li>
                            <li><a className='hover:underline text-white text-sm font-semibold'>Press</a></li>
                            <li><a className='hover:underline text-white text-sm font-semibold'>Corporate Information</a></li>
                        </ul>
                    </div>
                    <p className=' hidden md:flex h-full w-[1px] bg-slate-400 ms-5'></p>
                </div>
                <div className='my-3 ms-0'>
                    <h1 className='text-sm font-semibold text-slate-500'>Mail Us:</h1>
                    <ul>
                        <li className='text-xs text-white'>Flipkart Internet Private Limited, Buildings Alyssa, Begonia & Clove Embassy Tech Village,Outer Ring Road, Devarabeesanahalli Village,Bengaluru, 560103,Karnataka, India</li>
                        <li className='hidden md:flex text-sm font-semibold text-slate-500 mt-5'>Social</li>
                        <div className='gap-4 hidden md:flex'>
                            <li className='flex md:text-2xl'><FaFacebook /></li>
                            <li className='flex md:text-2xl'><FaTwitter /></li>
                            <li className='flex md:text-2xl'><FaYoutube /></li>
                        </div>
                    </ul>
                </div>
                <div className='6'>
                    <h1 className='text-sm font-semibold text-slate-500'>Registered Office Address:</h1>
                    <ul>
                        <li className='text-xs text-white'>Flipkart Internet Private Limited, Buildings Alyssa, Begonia & Clove Embassy Tech Village,  Outer Ring Road, Devarabeesanahalli Village, Bengaluru, 560103, Karnataka, India CIN : U51109KA2012PTC066107 Telephone:
                            <span className='text-xs text-blue-700 '>044-45614700 / 044-67415800</span></li>
                    </ul>
                </div>
            </div>
            <div className='mt-10 h-[1px] w-[100%] bg-slate-400'></div>
            <div className='md:hidden flex justify-center p-5'>
                <img className=' w-full' src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/payment-method_69e7ec.svg" alt="" />
            </div>
            <div className='flex px-10 pt-10'>
                <div className='grid grid-cols-2 md:grid-cols-5 gap-10 mb-10'>
                    <div className='flex gap-2'>
                        <span className='text-xl text-yellow-500'><FaShoppingBag /></span>
                        <h1 className='text-sm text-white'>Become a Seller</h1>
                    </div>
                    <div className='flex md:gap-2 '>
                        <span className='text-xl text-yellow-500'><FaStar /></span>
                        <h1 className='text-sm text-white'>Advertise</h1>
                    </div>
                    <div className='flex md:gap-2 '>
                        <span className='text-xl text-yellow-500'><FaGift /></span>
                        <h1 className='text-sm text-white'>Gift Cart</h1>
                    </div>
                    <div className='flex md:gap-2 '>
                        <span className='text-xl text-yellow-500'><FaQuestion /></span>
                        <h1 className='text-sm text-white'>Help Center</h1>
                    </div>
                    <div className='hidden md:flex'>
                        <h1 className='text-sm text-white'>© 2007-2024 Flipkart.com</h1>
                    </div>
                </div>
                <div className='hidden '>
                    <img className=' w-full' src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/payment-method_69e7ec.svg" alt="" />
                </div>
            </div>
        </div >
    </>
}

export default Footer