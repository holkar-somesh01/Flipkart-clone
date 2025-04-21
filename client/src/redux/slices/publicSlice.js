import { createSlice } from "@reduxjs/toolkit";

const publicSlice = createSlice({
    name: "publicSlice",
    initialState: { cart: JSON.parse(localStorage.getItem("AddCart")) || [] },
    reducers: {
        addToCart: (state, { payload }) => {
            state.cart = [...state.cart, payload]
            localStorage.setItem("AddCart", JSON.stringify(state.cart))
        },
        emptyCart: (state, { payload }) => {
            state.cart = []
            localStorage.removeItem('AddCart')
        },
        cancelOrder: (state, { payload }) => {
            console.log('Payload:', payload); // Debugging line
            state.cart = state.cart.filter(item => {
                console.warn('Item ID:', item.id); // Debugging line
                return item.id !== payload.id; // Corrected line
            });
            localStorage.setItem("AddCart") // Persisting the updated cart to localStorage
        }
    },
    extraReducers: builder => builder

})

export const { addToCart, emptyCart, cancelOrder } = publicSlice.actions
export default publicSlice.reducer