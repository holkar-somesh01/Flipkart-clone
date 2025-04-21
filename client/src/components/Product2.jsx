import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/slices/publicSlice'
import { useGetAllPopularProductsQuery } from '../redux/Apis/popularApi'


const ProductTwo = () => {
    const dispatch = useDispatch()
    const { data, isLoading } = useGetAllPopularProductsQuery()
    // const [AddToCart, { isSuccess }] = useAddToCartMutation()
    // useEffect(() => {
    //     if (isSuccess) {
    //         toast.success("Your Order Placed")
    //     }
    // }, [isSuccess])
    return <>
        <div className='px-8 py-6'>
            {
                isLoading
                    ? <span className="loading loading-spinner loading-lg"></span>
                    : <div className='flex gap-10 overflow-y-hidden'>
                        {data && data.result.map(item => <div className='w-60'>
                            <img className='h-[165px] w-full rounded-t-md object-cover' src={`${import.meta.env.VITE_BACKEND_URL}/${item.image}`} alt="" />
                            <div className="card card-compact w-60 bg-white border hover:shadow-md hover:shadow-green-400 rounded-t-none rounded-b-md">
                                <div className="card-body">
                                    <div>
                                        <h1 className='text-black text-lg font-semibold text-center'>{item.name}</h1>
                                        <p className='text-black p-3 text-center font-semibold w-full'>{item.desc}</p>
                                        <button onClick={e => dispatch(addToCart(item))} className='btn hover:bg-slate-500 btn-sm text-black p-2 rounded-md text-md font-semibold bg-slate-300 text-center w-full'>+ Add To Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>)}
                    </div>
            }
        </div>
    </>
}

export default ProductTwo