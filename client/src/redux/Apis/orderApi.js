import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const orderApi = createApi({
    reducerPath: "orderApi",
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_BACKEND_URL,
        credentials: "include"
    }),
    tagTypes: ["order"],
    endpoints: (builder) => {
        return {
            getUserOrders: builder.query({
                query: (user) => {
                    return {
                        url: `/api/order/place-order/${user._id}`,
                        method: "GET"
                    }
                },
                transformResponse: data => data.result,
                providesTags: ["order"]
            }),
            getOrders: builder.query({
                query: (user) => {
                    return {
                        url: `/api/order/get-orders`,
                        method: "GET"
                    }
                },
                transformResponse: data => data.result,
                providesTags: ["order"]
            }),
            addOrder: builder.mutation({
                query: orderData => {
                    return {
                        url: "/api/order/place-order",
                        method: "POST",
                        body: orderData
                    }
                },
                invalidatesTags: ["order"]
            }),
            cancelOrder: builder.mutation({
                query: orderData => {
                    return {
                        url: `/api/order/update-order/${orderData._id}`,
                        method: "PUT",
                        body: orderData
                    }
                },
                invalidatesTags: ["order"]
            }),

        }
    }
})

export const {
    useGetUserOrdersQuery,
    useAddOrderMutation,
    useCancelOrderMutation,
    useGetOrdersQuery
} = orderApi
