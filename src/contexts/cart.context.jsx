import { createContext, useState } from 'react';

export const CartContext = () => {
    createContext({
        cartItems: [],
        setCartItems: () => {},
    })
}


export const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([]);
    return (
        <CartContext.Provider>{children}</CartContext.Provider>
    )

}