import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isCartOpen: false,
    cart: [],
    items: []
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        setItems: function (state, action) {
            state.items = action.payload
        },
        addToCart: function (state, action) {
            state.cart = [...state.cart, action.payload.item]
        },
        removeFromCart: function (state, action) {
            state.cart = state.cart.filter((item) => item.id !== action.payload.id)
        },
        increaseCount: function (state, action) {
            state.cart = state.cart.map(item => {
                if (item.id === action.payload.id) {
                    item.count++
                }
                return item;
            });
        },
        decreaseCount: function (state, action) {
            state.cart = state.cart.map(item => {
                if (item.id === action.payload.id && item.count > 1) {
                    item.count--
                }
                return item;
            });
        },
        setIsCartOpen: function (state) {
            state.isCartOpen = !state.isCartOpen;
        }
    }
})

export const {
    setItems,
    addToCart,
    removeFromCart,
    increaseCount,
    decreaseCount,
    setIsCartOpen
} = cartSlice.actions

export default cartSlice.reducer;