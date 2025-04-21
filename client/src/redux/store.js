import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./Apis/authApi";
import authSlice from "./slices/authSlice";
import publicSlice from "./slices/publicSlice";
import { adminApi } from "./Apis/adminApi";
import { popularApi } from "./Apis/popularApi";
import { orderApi } from "./Apis/orderApi";
import { suggestProductApi } from "./Apis/suggestProductApi";

const reduxStore = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        [adminApi.reducerPath]: adminApi.reducer,
        [popularApi.reducerPath]: popularApi.reducer,
        [orderApi.reducerPath]: orderApi.reducer,
        [suggestProductApi.reducerPath]: suggestProductApi.reducer,
        auth: authSlice,
        public: publicSlice
    },
    middleware: def => [...def(), suggestProductApi.middleware, authApi.middleware, adminApi.middleware, popularApi.middleware, orderApi.middleware]
})

export default reduxStore