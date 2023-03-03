import { createContext, useState } from 'react';


export const CartContext =  createContext({
    cartItems: [],
    setCartItems: () => {},
    toggled: false,
    setToggled: () => {},
})

const addCartItem = (cartItems, productToAdd) => {

    const exists = cartItems.find(item => item.id === productToAdd.id);
    if (exists) {
        return cartItems.map((cartItem) =>
            cartItem.id === productToAdd.id
                ? {...cartItem, quantity: cartItem.quantity + 1}
                : cartItem   
        )
    }
    return [...cartItems, { ...productToAdd, quantity: 1 }];
}

export const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([]);
    const [toggled, setToggled] = useState(false);

    const addItemToCart = (product) => {
        setCartItems(addCartItem(cartItems, product));
    }

    const value = { cartItems, setCartItems, toggled, setToggled, addItemToCart};
    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}