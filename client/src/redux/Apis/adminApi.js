import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const adminApi = createApi({
    reducerPath: "adminApi",
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BACKEND_URL, credentials: "include" }),
    tagTypes: ["admin"],
    endpoints: (builder) => {
        return {
            getAllFeatureProducts: builder.query({
                query: () => {
                    return {
                        url: "/api/admin/get-feature-product",
                        method: "GET"
                    }
                },
                providesTags: ["admin"]
            }),
            addFeatureProduct: builder.mutation({
                query: userData => {
                    return {
                        url: "/api/admin/add-feature-product",
                        method: "POST",
                        body: userData
                    }
                },
                invalidatesTags: ["admin"]
            }),
            updateFeatureProduct: builder.mutation({
                query: featureData => {
                    return {
                        url: `/api/admin/update-feature-product/${featureData._id}`,
                        method: "PUT",
                        body: featureData
                    }
                },
                invalidatesTags: ["admin"]
            }),
            deleteFeatureProduct: builder.mutation({
                query: id => {
                    return {
                        url: `/api/admin/delete-feature-product/${id}`,
                        method: "DELETE",
                        // body: featureData
                    }
                },
                invalidatesTags: ["admin"]
            }),

        }
    }
})

export const {
    useGetAllFeatureProductsQuery,
    useAddFeatureProductMutation,
    useUpdateFeatureProductMutation,
    useDeleteFeatureProductMutation
} = adminApi
