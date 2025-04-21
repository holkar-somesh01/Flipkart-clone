import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const suggestProductApi = createApi({
    reducerPath: "suggestProductApi",
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BACKEND_URL, credentials: "include" }),
    tagTypes: ["suggest"],
    endpoints: (builder) => {
        return {
            getSuggestProduct: builder.query({
                query: () => {
                    return {
                        url: "/api/suggest/suggest-products",
                        method: "GET"
                    }
                },
                providesTags: ["suggest"]
            }),
            addSuggestProduct: builder.mutation({
                query: suggestData => {
                    return {
                        url: "/api/suggest/add-suggest-products",
                        method: "POST",
                        body: suggestData
                    }
                },
                invalidatesTags: ["suggest"]
            }),
            UpdateSuggestProduct: builder.mutation({
                query: suggestData => {
                    return {
                        url: `/api/suggest/update-suggest-products/${suggestData._id}`,
                        method: "PUT",
                        body: suggestData
                    }
                },
                invalidatesTags: ["suggest"]
            }),
            DeleteSuggestProduct: builder.mutation({
                query: suggestData => {
                    return {
                        url: `/api/suggest/delete-suggest-products/${suggestData._id}`,
                        method: "DELETE",
                        // body: suggestData
                    }
                },
                invalidatesTags: ["suggest"]
            }),

        }
    }
})

export const {
    useGetSuggestProductQuery,
    useAddSuggestProductMutation,
    useUpdateSuggestProductMutation,
    useDeleteSuggestProductMutation
} = suggestProductApi
