import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const popularApi = createApi({
    reducerPath: "popularApi",
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BACKEND_URL, credentials: "include" }),
    tagTypes: ["admin"],
    endpoints: (builder) => {
        return {
            getAllPopularProducts: builder.query({
                query: () => {
                    return {
                        url: "/api/popular/popular-product",
                        method: "GET"
                    }
                },
                providesTags: ["admin"]
            }),
            addPopularProduct: builder.mutation({
                query: popularData => {
                    return {
                        url: "/api/popular/add-popular-product",
                        method: "POST",
                        body: popularData
                    }
                },
                invalidatesTags: ["admin"]
            }),
            updatePopularProduct: builder.mutation({
                query: popularData => {
                    return {
                        url: `/api/popular/update-popular-product/${popularData._id}`,
                        method: "PUT",
                        body: popularData
                    }
                },
                invalidatesTags: ["admin"]
            }),
            deletePopularProduct: builder.mutation({
                query: id => {
                    return {
                        url: `/api/popular/delete-popular-product/${id}`,
                        method: "DELETE",
                        // body: popularData
                    }
                },
                invalidatesTags: ["admin"]
            }),

        }
    }
})

export const {
    useGetAllPopularProductsQuery,
    useAddPopularProductMutation,
    useUpdatePopularProductMutation,
    useDeletePopularProductMutation
} = popularApi
