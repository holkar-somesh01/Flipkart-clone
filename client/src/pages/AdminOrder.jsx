import React from 'react'
import Dashboard from './Dashboard'
import AdminNavbar from './AdminNavbar'
import Footer from '../components/Footer'
import { useGetOrdersQuery, useGetUserOrdersQuery } from '../redux/Apis/orderApi'

const AdminOrder = () => {
    const { data } = useGetOrdersQuery()
    return <>
        <div>
            <AdminNavbar />
            <div className='bg-slate-400'>
                <div className='md:flex '>
                    <div>
                        <Dashboard />
                    </div>
                    <div>
                        <div className=' py-10 md:py-20 md:block'>
                            <div className='bg-white gap-5 p-5 md:w-[650px]'>
                                <h1 className='text-black font-bold text-center'>ALL Orders</h1>
                                <div className='overflow-y-auto'>
                                    <table class="table table-dark table-striped table-hover">
                                        <thead>
                                            <tr>
                                                {/* <th className='text-black text-center'></th> */}
                                                <th className='text-black text-center'>Products</th>
                                                <th className='text-black text-center'>Status</th>
                                                <th className='text-black text-center'>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                data && data.map(item => <tr
                                                    className={`${item.status === "placed" && "bg-orange-500 text-white"}`}
                                                    key={item.id}>
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    </>
}

export default AdminOrder