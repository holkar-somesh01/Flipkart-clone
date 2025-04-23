import React from 'react'
import { useGetSuggestProductQuery } from '../redux/Apis/suggestProductApi'
import { FaStar } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/slices/publicSlice'


const SuggestProduct = () => {
    const dispatch = useDispatch()
    const { data, isLoading } = useGetSuggestProductQuery()
    return <>
        <div className='bg-white'>
            <div className='p-10'>
                <h1 className='text-black text-2xl font-bold'>Suggested Products</h1>
                <div className='mt-5'>
                    {
                        isLoading
                            ? <span className="loading loading-spinner loading-md"></span>
                            : <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                                {data && data.result.map(item => <div div className='border border-black hover:border-green-400 hover:shadow-md hover:shadow-green-400 w-[200px] h-[300px] p-3 rounded-md'>
                                    <div className={`p-1 mb-2 w-10 text-white text-xs font-semibold rounded-md  text-center ${item.stock > 10 ? "bg-green-500" : "bg-red-500"}`}>{item.stock}</div>
                                    <img className='h-32 w-full' src={item.image} alt="" />
                                    <div className='mt-3'>
                                        <p className='text-slate-500 text-xs font-semibold'>{item.desc}</p>
                                        <h1 className='text-black font-semibold'>{item.name}</h1>
                                        <p className='flex gap-2'>
                                            <span className='text-yellow-300'><FaStar /></span>
                                            <span className='text-yellow-300'><FaStar /></span>
                                            <span className='text-yellow-300'><FaStar /></span>
                                            <span className='text-yellow-300'><FaStar /></span>
                                            <span className='text-yellow-300'><FaStar /></span>
                                            <p className='text-black text-xs font-bold'>{item.stock}</p>
                                        </p>
                                        <p className='flex justify-between'>
                                            <p className='text-slate-800 text-lg font-semibold'><span className='text-black me-[5px]'>₹:</span>{item.price}/-</p>
                                            <button onClick={e => dispatch(addToCart(item))} className="bg-green-600 p-1 px-3 text-white font-semibold hover:bg-green-800">+Add</button>
                                        </p>
                                    </div>
                                </div>)}
                            </div>
                    }
                </div>
            </div>
        </div >
    </>
}

export default SuggestProduct