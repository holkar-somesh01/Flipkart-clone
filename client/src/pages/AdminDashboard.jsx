import React from 'react'
import AdminNavbar from './AdminNavbar'
import Dashboard from './Dashboard'
import Footer from '../components/Footer'

const AdminDashboard = () => {
    return <>
        <AdminNavbar />
        <div className='bg-slate-400'>
            <div className='md:flex '>
                <div>
                    <Dashboard />
                </div>
            </div>
        </div>
        <Footer />
    </>
}

export default AdminDashboard