import React from 'react'
import { useGetAllFeatureProductsQuery } from '../redux/Apis/adminApi'

const Product = () => {
    const { data } = useGetAllFeatureProductsQuery()
    return <>
        {/*Products Start  */}
        <div className='px-8 py-6'>
            <div className='flex justify-between mb-5'>
                <div className='font-bold text-white text-2xl my-2'>Featured Categories</div>
                <div>
                    <div className=" hidden md:flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#right" className="btn btn-circle">❮</a>
                        <a href="#left" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            <div className='flex'>
                <div className='flex gap-10 overflow-y-hidden'>
                    {
                        data && data.result.map(item => <div>
                            <div>
                                <img className='h-[160px] w-full rounded-t-md' src={`${import.meta.env.VITE_BACKEND_URL}/${item.image}`} alt="" />
                                <div className="card card-compact w-60 bg-white border hover:shadow-md hover:shadow-green-400 rounded-t-none rounded-b-md">
                                    <div className="card-body">
                                        <div>
                                            <h1 className='text-black text-lg font-semibold text-center'>{item.name}</h1>
                                            <p className='text-black p-3 font-semibold w-full'>{item.desc}</p>
                                            <h1 className='text-black text-md font-semibold text-center'>{item.price}</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    }

                </div>
                <div className='flex justify-end'>
                    <img className='h-72 w-[300px]' src="https://rukminim2.flixcart.com/fk-p-flap/530/810/image/fc822dc700322fcd.jpg?q=20" alt="" />
                </div>
            </div>
        </div>
        {/*Products End  */}
    </>
}

export default Product