import React, { createContext, useState } from "react";



const OrderModal = createContext({
    progress:'',
    showCart : () => {},
    hideCart : () => {},
    ShowCheckout : () => {},
    hideCheckout : () => {},
});



export const OrderContextProvider = (props) => {
    const [userProgress, setUserProgress] = useState('');


    const showCart = () => {
        setUserProgress('Cart');
    }

    const hideCart = () => {
        setUserProgress('');
    }

    const ShowCheckout = () => {
        setUserProgress('Checkout');
    }

    const hideCheckout = () => {
        setUserProgress('');
    }

    const modalStateCtx = {
        progress: userProgress,
        showCart,
        hideCart,
        ShowCheckout,
        hideCheckout
    }

    return (
        <OrderModal.Provider value={modalStateCtx}>
            {props.children}
        </OrderModal.Provider>
    );
};


export default OrderModal