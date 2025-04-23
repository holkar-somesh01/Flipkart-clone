import React, { useEffect } from 'react'
import { useAddPopularProductMutation, useDeletePopularProductMutation, useGetAllPopularProductsQuery, useUpdatePopularProductMutation } from '../redux/Apis/popularApi'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { toast } from 'react-toastify'

const PopularProduct = () => {
    const { data: Popular } = useGetAllPopularProductsQuery()
    const [AddPopularProduct, { isSuccess: AddPopularProductSuccess, isLoading: AddPopularProductIsLoading }] = useAddPopularProductMutation()
    const [UpdatePopularProduct, { isSuccess: UpdatePopularProductSuccess, isLoading: UpdatePopularProductIsLoading }] = useUpdatePopularProductMutation()
    const [DeletePopularProduct, { isSuccess: DeletePopularProductSuccess, isLoading: DeletePopularProductIsLoading }] = useDeletePopularProductMutation()

    const PopularProductformik = useFormik({
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
            AddPopularProduct(fd)
            resetForm()
        }
    })
    useEffect(() => {
        if (AddPopularProductSuccess) {
            toast.success("Popular Product Add Success")
            window.PopularProduct.close()
        }
    }, [AddPopularProductSuccess])
    return <>
        <div className='my-2'>
            <button onClick={() => window.PopularProduct.showModal()} className="btn btn-primary">+ Add Popular Products</button>
            <dialog id="PopularProduct" className="modal">
                <div className="modal-box">
                    <h1 className='text-xl font-bold text-center'>Popular Products</h1>
                    <div className="modal-action">
                        <form
                            onSubmit={PopularProductformik.handleSubmit}
                            method="dialog"
                        >
                            <input
                                {...PopularProductformik.getFieldProps("hname")}
                                name='hname'
                                type="text"
                                placeholder="Enter Feature Products Heading Name"
                                className={`input input-bordered w-full my-2 ${PopularProductformik.errors.hname && PopularProductformik.touched.hname && "input-error my-2"}`}
                            />
                            <input
                                {...PopularProductformik.getFieldProps("name")}
                                name='name'
                                type="text"
                                placeholder="Enter Feature Products Name"
                                className={`input input-bordered w-full my-2 ${PopularProductformik.errors.name && PopularProductformik.touched.name && "input-error my-2"}`}
                            />
                            <input
                                {...PopularProductformik.getFieldProps("desc")}
                                name='desc'
                                type="text"
                                placeholder="Enter Feature Products Desc"
                                className={`input input-bordered w-full my-2 ${PopularProductformik.errors.desc && PopularProductformik.touched.desc && "input-error my-2"}`}
                            />
                            <input
                                {...PopularProductformik.getFieldProps("price")}
                                name='price'
                                type="number"
                                placeholder="Enter Feature Products Price"
                                className={`input input-bordered w-full my-2 ${PopularProductformik.errors.price && PopularProductformik.touched.price && "input-error my-2"}`}
                            />
                            <input
                                {...PopularProductformik.getFieldProps("stock")}
                                name='stock'
                                type="number"
                                placeholder="Enter Feature Products stock"
                                className={`input input-bordered w-full my-2 ${PopularProductformik.errors.stock && PopularProductformik.touched.stock && "input-error my-2"}`}
                            />
                            <input
                                type="file"
                                placeholder="Type here"
                                onChange={e => {
                                    PopularProductformik.setFieldValue('image', e.currentTarget.files[0]);
                                }}
                                className={`input input-bordered w-full my-2 ${PopularProductformik.errors.image && PopularProductformik.touched.image && "input-error my-2"}`} />
                            <button type='submit' className="btn btn-primary w-full">{AddPopularProductIsLoading ? "Adding Project..." : "Add"}</button>
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
                        Popular && Popular.result.map((item, i) => <tr key={i}>
                            <th className='text-black text-sm font-bold'>{item.name}</th>
                            <td className='text-black text-sm font-bold'>{item.desc}</td>
                            <td className='text-black text-sm font-bold'>{item.Price}</td>
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

export default PopularProduct