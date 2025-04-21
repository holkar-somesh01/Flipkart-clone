import React from 'react'
import { Link } from 'react-router-dom'

const Errorpage = () => {
    return <>
        <div className='bg-white '>


            <div className='  flex justify-center items-center gap-40'>
                <div className='flex  flex-col justify-center'>
                    <img className='w-40 mt-52 justify-center ' src="https://freshcart.codescandy.com/assets/images/logo/freshcart-logo.svg" alt="" />
                    <h1 className='font-semibold text-3xl mt-10  text-black  '>Something’s wrong here...</h1>
                    <h6 className='text-slate-600'>We can’t find the page you’re looking for.
                        <br />
                        Check out our help center or head back to home.</h6>
                    <div className='flex gap-5 m-6 '>
                        <button className="btn btn-sm bg-black border-none text-white">Help Center</button>
                        <Link to='/'> <button className="btn btn-sm bg-green-600 border-none text-white">Back to Home</button></Link>
                    </div>
                </div>
                <div className='mt-52'>
                    <img src="https://freshcart.codescandy.com/assets/images/svg-graphics/error.svg" alt="" />
                </div>
            </div>



        </div>

    </>
}

export default Errorpage
