import React from 'react'

const Success = () => {
    return <>
        <div className='bg-white '>


            <div className='  flex justify-center items-center gap-40'>
                <div className='flex  flex-col justify-center'>
                    <img className='w-40 mt-52 justify-center ' src="https://freshcart.codescandy.com/assets/images/logo/freshcart-logo.svg" alt="" />
                    <h1 className='font-semibold text-3xl mt-10  text-black  '>successfully...</h1>
                    <h6 className='text-slate-600'>Your Order SuccessFully Placed</h6>
                    <div className=' m-6'>
                        <button className="btn btn-sm bg-green-600 border-none text-white">Back to Home</button>
                    </div>
                </div>
                <div className='mt-52'>
                    <img src="https://res.cloudinary.com/dbkyyr68j/image/upload/v1716271272/kids-drawing-vector-illustration-happy-successful-businessman_760559-96-removebg-preview_mu6iop.png" alt="" />
                </div>
            </div>
        </div>

    </>
}

export default Success
