import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cart: [],
    total: 0
}

const cartSlice = createSlice({
    name: 'Cart',
    initialState,
    reducers: {
        addItem(state, action) {
            state.cart = [action.payload.item, ...state.cart];
            state.total = state.total + action.payload.item.price;
        },
        removeItem(state, action) {
            state.cart = state.cart.filter(itm => itm.id !== action.payload.item.id);
            state.total = state.total - action.payload.item.price;
        },
        clearCartOnLogout(state) {
            state.cart = [];
            state.total = 0;
        },
        replceCart(state, action) {
            state.cart = action.payload.cart;
            state.total = action.payload.total;
        }
    }
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;