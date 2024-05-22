import React, { createContext, useReducer } from "react";

const CartContext = createContext({
    items: [],
    totalAmount: 0,
    addItem: (item) => {},
    removeItem: (id) => {},
});

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            const existingCartItemIndex = state.items.findIndex( (item) => item.id === action.item.id);
            const updateItems = [...state.items]
            if(existingCartItemIndex > -1) {
                const existingItem = state.items[existingCartItemIndex]
                const updateItem = {...existingItem, quantity: existingItem.quantity + 1}
                updateItems[existingCartItemIndex] = updateItem
            }else{
                updateItems.push({...action.item, quantity: 1})
            }
            return{
                ...state,
                items: updateItems,
                totalAmount: state.totalAmount + +action.item.price
            }
        case 'REMOVE_ITEM':
            const existingCartItemsIndex = state.items.findIndex( (item) => item.id === action.id);
            const existingItem = state.items[existingCartItemsIndex]
            const removeItems = [...state.items]
            if(existingItem.quantity === 1) {
                removeItems.splice(existingCartItemsIndex, 1)
            }else{
                const updateItem = {...existingItem, quantity: existingItem.quantity - 1}
                removeItems[existingCartItemsIndex] = updateItem
            }
            return{
                ...state,
                items: removeItems,
                totalAmount: state.totalAmount - +action.item.price
            }
        default: return state;
    }
}

export const CartContextProvider = (props) => {
    const [cart, dispatchCart] = useReducer(cartReducer, {items: [], totalAmount: 0})   


    const cartContext = {
        items: cart.items,
        totalAmount: cart.totalAmount,
        addItem: (item) => {
            dispatchCart({type: 'ADD_ITEM', item})
        },
        removeItem: (id) => {
            dispatchCart({type: 'REMOVE_ITEM', id})
        }
    }
    console.log(cartContext);
    return (
        <CartContext.Provider  value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartContext;