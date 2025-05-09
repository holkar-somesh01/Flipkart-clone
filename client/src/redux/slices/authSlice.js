import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "../Apis/authApi";

const authSlice = createSlice({
    name: "authSlice",
    initialState: { user: JSON.parse(localStorage.getItem("user")) },
    reducers: {},
    extraReducers: builder => builder
        .addMatcher(authApi.endpoints.loginUser.matchFulfilled, (state, { payload }) => {
            state.user = payload
        })
        .addMatcher(authApi.endpoints.logout.matchFulfilled, (state, { payload }) => {
            state.user = null
        })

})

// export const { invalidate } = authSlice.actions
export default authSlice.reducer