import { useFormik } from 'formik'
import React, { useEffect } from 'react'
import * as yup from 'yup'
import { useAddSuggestProductMutation, useDeleteSuggestProductMutation, useGetSuggestProductQuery, useUpdateSuggestProductMutation } from '../redux/Apis/suggestProductApi'
import { toast } from 'react-toastify'

const AdminSuggestProduct = () => {
    const { data } = useGetSuggestProductQuery()
    const [AddSuggestProduct, { isSuccess: AddSuggestProductSuccess, isLoading: AddSuggestProductLoading }] = useAddSuggestProductMutation()
    const [UpdateSuggestProduct, { isSuccess: UpdateSuggestProductSuccess, isLoading: UpdateSuggestProductLoading }] = useUpdateSuggestProductMutation()
    const [DeleteSuggestProduct, { isSuccess: DeleteSuggestProductSuccess, isLoading: DeleteSuggestProductLoading }] = useDeleteSuggestProductMutation()
    const SuggestedProductFormik = useFormik({
        initialValues: {
            hname: "",
            name: "",
            desc: "",
            price: "",
            stock: "",
            image: null,
        },
        validationSchema: yup.object({
            hname: yup.string().required("Enter Product Name"),
            name: yup.string().required("Enter Product Name"),
            desc: yup.string().required("Enter Product Desc"),
            price: yup.string().required("Enter Product price"),
            stock: yup.string().required("Enter Product Stock"),
            image: yup.string().required("Upload Product Image"),
        }),
        onSubmit: (values, { resetForm }) => {
            const fd = new FormData()
            fd.append('hname', values.hname)
            fd.append('name', values.name)
            fd.append('desc', values.desc)
            fd.append('price', values.price)
            fd.append('stock', values.stock)
            fd.append('image', values.image)
            AddSuggestProduct(fd)
            resetForm()
        }
    })
    useEffect(() => {
        if (AddSuggestProductSuccess) {
            toast.success("Suggested Product Added")
            window.SuggestedProduct.close()
        }
    }, [AddSuggestProductSuccess])
    return <>
        <div className='my-2'>
            <button onClick={() => window.SuggestedProduct.showModal()} className="btn btn-primary">+ Add Suggested Products</button>
            <dialog id="SuggestedProduct" className="modal">
                <div className="modal-box">
                    <h1 className='text-xl font-bold text-center'>Suggested Products</h1>
                    <div className="modal-action">
                        <form
                            onSubmit={SuggestedProductFormik.handleSubmit}
                            method="dialog"
                        >
                            <input
                                {...SuggestedProductFormik.getFieldProps("hname")}
                                name='hname'
                                type="text"
                                placeholder="Enter Feature Products Heading Name"
                                className={`input input-bordered w-full my-2 ${SuggestedProductFormik.errors.hname && SuggestedProductFormik.touched.hname && "input-error my-2"}`}
                            />
                            <input
                                {...SuggestedProductFormik.getFieldProps("name")}
                                name='name'
                                type="text"
                                placeholder="Enter Feature Products Name"
                                className={`input input-bordered w-full my-2 ${SuggestedProductFormik.errors.name && SuggestedProductFormik.touched.name && "input-error my-2"}`}
                            />
                            <input
                                {...SuggestedProductFormik.getFieldProps("desc")}
                                name='desc'
                                type="text"
                                placeholder="Enter Feature Products Desc"
                                className={`input input-bordered w-full my-2 ${SuggestedProductFormik.errors.desc && SuggestedProductFormik.touched.desc && "input-error my-2"}`}
                            />
                            <input
                                {...SuggestedProductFormik.getFieldProps("price")}
                                name='price'
                                type="number"
                                placeholder="Enter Feature Products Price"
                                className={`input input-bordered w-full my-2 ${SuggestedProductFormik.errors.price && SuggestedProductFormik.touched.price && "input-error my-2"}`}
                            />
                            <input
                                {...SuggestedProductFormik.getFieldProps("stock")}
                                name='stock'
                                type="number"
                                placeholder="Enter Feature Products stock"
                                className={`input input-bordered w-full my-2 ${SuggestedProductFormik.errors.stock && SuggestedProductFormik.touched.stock && "input-error my-2"}`}
                            />
                            <input
                                type="file"
                                placeholder="Type here"
                                onChange={e => {
                                    SuggestedProductFormik.setFieldValue('image', e.currentTarget.files[0]);
                                }}
                                className={`input input-bordered w-full my-2 ${SuggestedProductFormik.errors.image && SuggestedProductFormik.touched.image && "input-error my-2"}`} />
                            <button type='submit' className="btn btn-primary w-full">Add</button>
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
        <h1 className='text-black font-bold text-center'>ALL Popular Product</h1>
        <div className='overflow-y-auto'>
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
                            <td className='text-black text-sm font-bold'>{item.price}</td>
                            <td className='text-black text-sm font-bold'>{item.stock}</td>
                            <td className='text-black text-sm font-bold'>
                                <img src={item.image} alt="Product-image" /></td>
                            <td className='text-black text-sm font-bold flex gap-5'>
                                <button className="btn btn-warning">Edit</button>
                                <button onClick={e => DeletePopularProduct(item._id)} className="btn btn-error">Delete</button>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    </>
}

export default AdminSuggestProduct