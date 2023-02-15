// useEffect(() => {
//     const cartDetails = { cartItems: cartCtx.items, total: cartCtx.totalAmount }
//     const postCart = async (cartDetails, uID) => {
//         debugger
//         try {
//             if (cartCtx.items.length > 0) {
//                 const response = await axios.put(`cart/${uID}.json`, cartDetails);
//                 if (response.statusText === 'OK') {
//                     console.log('Cart posted successfully!');
//                 }
//             } else {
//                 console.log('Cart is empty.');
//             }
//         } catch (err) {
//             console.log(err);
//         }
//     }
//     postCart(cartDetails, uID)
// }, [cartCtx.items, cartCtx.totalAmount])
import axios from "../../axios/axios";
import { cartActions } from "../cart-slice/cart-slice";

export const fetchCartData = (uID) => {
    return async (dispatch) => {
        const getData = async () => {
            const response = await axios.get(`userData/${uID}.json`);
            // console.log('Get Req');
            if (response.statusText !== 'OK') {
                throw new Error("GET REQUEST FAIL.");
            }
            return response.data;
        }

        try {
            const data = await getData();
            if (data === null) {
                // console.log('Firebase is empty.');
            } else if (!data.cart) {
                dispatch(cartActions.replaceCart({ cart: [], total: 0 }));
            } else {
                dispatch(cartActions.replaceCart({ cart: data.cart, total: data.total }));
            }
        } catch (err) {
            console.log("CART-SLICE GET ERROR");
        }
    }
}

export const postCartData = (cartSlice, uID) => {
    return async (dispatch) => {
        const postData = async () => {
            // if (cartSlice.cart.length === 0) {
            //     console.log("Empty cart post request stopped!");
            // } else {
            // console.log('Post Req');
            const response = await axios.put(`userData/${uID}.json`, cartSlice);
            if (response.statusText !== 'OK') {
                throw new Error('POST REQUEST FAILED');
            } else {
                // console.log("SUCESS POST");
            }
            // }
        }

        try {
            await postData();
        } catch (err) {
            console.log("CART-SLICE POST ERROR");
        }
    }
}