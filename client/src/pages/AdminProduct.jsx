import React, { useEffect } from 'react'
import AdminNavbar from './AdminNavbar'
import Dashboard from './Dashboard'
import Footer from '../components/Footer'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useAddFeatureProductMutation, useDeleteFeatureProductMutation, useGetAllFeatureProductsQuery, useUpdateFeatureProductMutation } from '../redux/Apis/adminApi'
import { toast } from 'react-toastify'
import PopularProduct from './AdminPopularProduct'
import { useAddPopularProductMutation, useDeletePopularProductMutation, useUpdatePopularProductMutation } from '../redux/Apis/popularApi'
import AdminSuggestProduct from './AdminSuggestProduct'

const AdminProduct = () => {
    const { data } = useGetAllFeatureProductsQuery()
    const [AddProduct, { isSuccess: AddIsSuccess, isError: AddIsError, isLoading: AddIsLoading }] = useAddFeatureProductMutation()
    const [UpdateProduct, { isSuccess: UpdateSuccess, isError: UpdateIsError, isLoading: UpdateIsLoading }] = useUpdateFeatureProductMutation()
    const [DeleteProduct, { isSuccess: DeleteSuccess, isError: DeleteIsError, isLoading: DeleteIsLoading }] = useDeleteFeatureProductMutation()


    const formik = useFormik({
        initialValues: {
            name: "",
            desc: "",
            price: "",
            stock: "",
            image: null,
        },
        validationSchema: yup.object({
            name: yup.string().required("Enter Product Name"),
            desc: yup.string().required("Enter Product Desc"),
            price: yup.string().required("Enter Product price"),
            stock: yup.string().required("Enter Product Stock"),
            image: yup.string().required("Upload Product Image"),
        }),
        onSubmit: (values, { resetForm }) => {
            const fd = new FormData()
            fd.append('name', values.name)
            fd.append('desc', values.desc)
            fd.append('price', values.price)
            fd.append('stock', values.stock)
            fd.append('image', values.image)
            AddProduct(fd)
            resetForm()
        }
    })
    useEffect(() => {
        if (AddIsSuccess) {
            toast.success("Product Add Success")
            window.my_modal_1.close()
        }
    }, [AddIsSuccess])
    useEffect(() => {
        if (DeleteSuccess) {
            toast.success("Product Delete Success")
        }
    }, [DeleteSuccess])
    return <>
        <div>
            <AdminNavbar />
            <div className='bg-slate-400'>
                <div className='md:flex '>
                    <div>
                        <Dashboard />
                    </div>
                    <div>
                        <div className='py-10 md:py-20 md:block'>
                            <div className='flex justify-between'>
                                <div className='my-2'>
                                    <button onClick={() => window.my_modal_1.showModal()} className="btn btn-primary">+ Add Feature Products</button>
                                    <dialog id="my_modal_1" className="modal">
                                        <div className="modal-box">
                                            <h1 className='text-xl font-bold text-center'>Feature Products</h1>
                                            <div className="modal-action">
                                                <form
                                                    onSubmit={formik.handleSubmit}
                                                    method="dialog"
                                                >
                                                    <input
                                                        {...formik.getFieldProps("name")}
                                                        name='name'
                                                        type="text"
                                                        placeholder="Enter Feature Products Name"
                                                        className={`input input-bordered w-full my-2 ${formik.errors.name && formik.touched.name && "input-error my-2"}`}
                                                    />
                                                    <input
                                                        {...formik.getFieldProps("desc")}
                                                        name='desc'
                                                        type="text"
                                                        placeholder="Enter Feature Products Desc"
                                                        className={`input input-bordered w-full my-2 ${formik.errors.desc && formik.touched.desc && "input-error my-2"}`}
                                                    />
                                                    <input
                                                        {...formik.getFieldProps("price")}
                                                        name='price'
                                                        type="number"
                                                        placeholder="Enter Feature Products Price"
                                                        className={`input input-bordered w-full my-2 ${formik.errors.price && formik.touched.price && "input-error my-2"}`}
                                                    />
                                                    <input
                                                        {...formik.getFieldProps("stock")}
                                                        name='stock'
                                                        type="number"
                                                        placeholder="Enter Feature Products stock"
                                                        className={`input input-bordered w-full my-2 ${formik.errors.stock && formik.touched.stock && "input-error my-2"}`}
                                                    />
                                                    {/* <input
                                                    name='image'
                                                    type="file"
                                                    placeholder="Enter Feature Products Image"
                                                    className={`input input-bordered w-full my-2 ${formik.errors.image && formik.touched.image && "input-error my-2"}`}
                                                /> */}
                                                    <input onChange={e => {
                                                        formik.setFieldValue('image', e.currentTarget.files[0]);
                                                    }} type="file" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                                                    <button type='submit' className="btn btn-primary w-full">Add</button>
                                                    <button className="btn">Close</button>
                                                </form>
                                            </div>
                                        </div>
                                    </dialog>
                                </div>
                            </div>
                            <div className='bg-white gap-5 p-5 md:w-[650px]'>
                                <h1 className='text-black font-bold text-center'>ALL Feature Product</h1>
                                <div className='overflow-y-auto mb-10'>
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th className='text-black text-center'>Name</th>
                                                <th className='text-black text-center'>Desc</th>
                                                <th className='text-black text-center'>Price</th>
                                                <th className='text-black text-center'>Stock</th>
                                                <th className='text-black text-center'>Image</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                data && data.result.map((item, i) => <tr key={i}>
                                                    <th className='text-black text-sm font-bold'>{item.name}</th>
                                                    <td className='text-black text-sm font-bold'>{item.desc}</td>
                                                    <td className='text-black text-sm font-bold'>{item.Price}</td>
                                                    <td className='text-black text-sm font-bold'>{item.stock}</td>
                                                    <td className='text-black text-sm font-bold'>
                                                        <img src={`${import.meta.env.VITE_BACKEND_URL}/${item.image}`} alt="Product-image" /></td>
                                                    <td className='text-black text-sm font-bold flex gap-5'>
                                                        <button className="btn btn-warning">Edit</button>
                                                        <button onClick={e => DeleteProduct(item._id)} className="btn btn-error">Delete</button>
                                                    </td>
                                                </tr>)
                                            }
                                        </tbody>
                                    </table>
                                </div>
                                <hr />
                                <span className='my-10'>
                                    <PopularProduct />
                                </span>
                                <div className='My-10'>
                                    <AdminSuggestProduct />
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

export default AdminProduct