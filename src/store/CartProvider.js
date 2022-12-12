import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
    items: [],
    totalAmount: 0
}
const cartReducer = (state,action) => {
    if(action.type === 'ADD'){
        const updatedItems = state.items.concat(action.item);
        const updatedTotalAmount = state.totalAmount + action.item.price;
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }else if(action.type === 'REMOVE'){
        const itemIndex = state.items.findIndex((itm) => itm.id === action.id);
        const itemToRemove = state.items[itemIndex]; 
        const updatedTotalAmount = state.totalAmount - itemToRemove.price;
        const updatedItemsList = state.items.filter((itm) => itm.id !== action.id);
        return {
            items: updatedItemsList,
            totalAmount: updatedTotalAmount
        }
    }
    return defaultCartState;
}

const CartProvider = (props) => {
    
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)

    const addItemToCartHandler = (item) => {
        dispatchCartAction({type: 'ADD', item: item})
    }
    const removeItemFromCartHandler = (id) => {
        dispatchCartAction({type: 'REMOVE', id: id})
    }

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    }

    return(
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
}

export default CartProvider;