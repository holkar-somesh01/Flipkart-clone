import React from 'react'
import { Link } from 'react-router-dom'

const OrderSuccess = () => {
    return <>
        <div>
            <div className='  flex justify-center items-center gap-40'>
                <div className='flex  flex-col justify-center'>
                    <img className='w-40 mt-52 justify-center ' src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg" alt="" />
                    <h1 className='font-semibold text-3xl mt-10  text-white'>Order Placed Successfully...</h1>
                    <h6 className='text-slate-600'>Your Order SuccessFully Placed.</h6>
                    <div className='m-6 flex gap-10'>
                        <Link to='/'><button className="btn btn-sm bg-green-600 border-none text-white">Back to Home</button></Link>
                        <Link to=""><button className="btn btn-sm bg-green-600 border-none text-white">View Order</button></Link>
                    </div>
                </div>
                <div className='mt-52'>
                    <img src="https://res.cloudinary.com/dbkyyr68j/image/upload/v1716271272/kids-drawing-vector-illustration-happy-successful-businessman_760559-96-removebg-preview_mu6iop.png" alt="" />
                </div>
            </div>
        </div>
    </>
}

export default OrderSuccess