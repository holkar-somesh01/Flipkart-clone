import React, { Suspense, lazy } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import UserProtected from './UserProtected'
import { Route, Routes } from 'react-router-dom'
import Error from '../pages/Error'
import Loading from '../pages/Loading'
import Errorpage from '../components/Errorpage'
import AdminProtected from './AdminProtected'
import OrderSuccess from '../components/OrderSuccess'

const Home = lazy(() => import("./../pages/Home"))
const UserCart = lazy(() => import("./../components/UserCart"))
const AdminDashboard = lazy(() => import("./../pages/AdminDashboard"))
const Login = lazy(() => import("./../components/Login"))
const Register = lazy(() => import("./../components/Register"))
const AdminOrder = lazy(() => import("./../pages/AdminOrder"))
const AdminProduct = lazy(() => import("./../pages/AdminProduct"))
const AdminUser = lazy(() => import("./../pages/AdminUser"))
const Details = lazy(() => import("./../components/Details"))

const Allroutes = () => {
    const ROUTES = [
        { path: "/", element: <Home /> },
        { path: "/login", element: <Login /> },
        { path: "/register", element: <Register /> },
        { path: "/cart", element: <UserProtected compo={<UserCart />} /> },
        { path: "/details", element: <UserProtected compo={<Details />} /> },
        { path: "/orders", element: <AdminProtected compo={<AdminOrder />} /> },
        { path: "/products", element: <AdminProtected compo={<AdminProduct />} /> },
        { path: "/users", element: <AdminProtected compo={<AdminUser />} /> },
        { path: "/success", element: <OrderSuccess /> },
        { path: "/admin", element: <AdminProtected compo={<AdminDashboard />} /> },

    ]
    return <Routes>
        {
            ROUTES.map(item => <Route
                path={item.path}
                key={item.path}
                element={<ErrorBoundary FallbackComponent={Error}>
                    <Suspense fallback={Loading}>
                        {item.element}
                    </Suspense>
                </ErrorBoundary>}
            >
            </Route>)
        }
        <Route path="*" element={<Errorpage />} />
    </Routes>
}

export default Allroutes