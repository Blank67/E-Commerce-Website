import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth-slice/auth-slice";
import cartReducer from "./cart-slice/cart-slice";

const store = configureStore({
    reducer: {
        auth: authReducer,
        cart: cartReducer
    }
})

export default store;