import React, { useEffect } from 'react'
import { useGetUsersQuery, useUserDeleteMutation } from '../redux/Apis/authApi'
import AdminNavbar from './AdminNavbar'
import Dashboard from './Dashboard'
import Footer from '../components/Footer'
import { toast } from 'react-toastify'

const AdminUser = () => {
    const { data } = useGetUsersQuery()
    const [deleteUser, { isSuccess, isLoading }] = useUserDeleteMutation()
    useEffect(() => {
        if (isSuccess) {
            toast.success("User SuccessFully Deleted")
        }
    }, [isSuccess])
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
                                <h1 className='text-black font-bold text-center'>ALL Users</h1>
                                <div className='overflow-y-auto'>
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th className='text-black text-center'>Name</th>
                                                <th className='text-black text-center'>EMAIL</th>
                                                <th className='text-black text-center'>ROLE</th>
                                                <th className='text-black text-center'>ACTIONS</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                data && data.result.map((item, i) => <tr key={i}>
                                                    <th className='text-black text-sm font-bold'>{item.name}</th>
                                                    <td className='text-black text-sm font-bold'>{item.email}</td>
                                                    <td className='text-black text-sm font-bold'>{item.role}</td>
                                                    <td className='text-black text-sm font-bold flex gap-5'>
                                                        <button className="btn text-black bg-slate-200 ">Edit</button>
                                                        <button onClick={e => deleteUser(item)} className="btn btn-error">Delete</button>
                                                    </td>
                                                </tr>)
                                            }
                                        </tbody>
                                    </table>
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

export default AdminUser