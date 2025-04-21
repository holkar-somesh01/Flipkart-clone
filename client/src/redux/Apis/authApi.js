import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BACKEND_URL, credentials: "include" }),
    tagTypes: ["auth"],
    endpoints: (builder) => {
        return {
            GetUsers: builder.query({
                query: () => {
                    return {
                        url: "/api/auth/get",
                        method: "GET",
                        // body: userData
                    }
                },
                // providesTags: ["auth"]
            }),
            registerUser: builder.mutation({
                query: (userData) => {
                    return {
                        url: "/api/auth/register",
                        method: "POST",
                        body: userData
                    }
                },

            }),
            loginUser: builder.mutation({
                query: userData => {
                    return {
                        url: "/api/auth/login",
                        method: "POST",
                        body: userData
                    }
                },
                transformResponse: data => {
                    localStorage.setItem("user", JSON.stringify(data.result))
                    return data.result
                }
            }),
            logout: builder.mutation({
                query: usersData => {
                    return {
                        url: "/api/auth/logout",
                        method: "POST",
                        body: usersData
                    }
                },
                transformResponse: data => {
                    localStorage.removeItem("user")
                    return data.result
                }
                // invalidatesTags: ["auth"]
            }),
            UserDelete: builder.mutation({
                query: usersData => {
                    return {
                        url: `/api/auth/delete-user/${usersData._id}`,
                        method: "DELETE",
                        // body: usersData
                    }
                }
            }),

        }
    }
})

export const {
    useGetUsersQuery,
    useRegisterUserMutation,
    useLoginUserMutation,
    useLogoutMutation,
    useUserDeleteMutation
} = authApi
