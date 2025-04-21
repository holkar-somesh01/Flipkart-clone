import React from 'react'
import { useGetUserOrdersQuery } from '../redux/Apis/orderApi'
import { useSelector } from 'react-redux'

const Details = () => {
    const { user } = useSelector(state => state.auth)
    const { data } = useGetUserOrdersQuery(user)
    return <>
        <div className='mt-10'>
            {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Order Id</th>
                        <th scope="col">Products</th>
                        <th scope="col">Status</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data && data.map(item => <tr
                            className={`${item.status === "placed" && "bg-orange-500 text-white"}
                             ${item.status === "delivred" && "bg-green-400 text-white"} 
                            ${item.status === "cancel" && "bg-red-400 text-white"}`}
                            key={item.id}>
                            <td> {item._id}</td>
                            <td>{item.products.map(p => <div className='grid grid-cols-2 my-2'>
                                <strong>{p.name}:{p.price}, </strong>
                                <img className='h-10' src={`${import.meta.env.VITE_BACKEND_URL}/${p.image}`} alt="" />
                            </div>)}</td>
                            <td>{item.status}</td>
                            <td>
                                {item.status === "placed" && <button onClick={e => cancelOrder(item)} className="btn btn-error btn-sm">Cancel</button>}
                                {item.status === "cancel" && <div className='text-red-600 font-bold text-lg p-2'>Order Canceled</div>}
                                {item.status === "delivred" && <div className='text-green-600 font-bold text-lg p-2'>Order Delivered</div>}
                            </td>
                        </tr>)
                    }
                </tbody>
            </table >
        </div >
    </>
}

export default Details