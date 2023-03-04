import { createContext, useState } from 'react';


export const CartContext =  createContext({
    cartItems: [],
    setCartItems: () => {},
    toggled: false,
    setToggled: () => { },
    increaseProductQuantity: () => {},
    decreaseProductQuantity: () => {},
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

const settingProductQunatity = (cartItems, product, operation) => {
    if (operation === 'increment') {
        return cartItems.map((item) => 
            item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
    } else {
        return cartItems.map((item) => 
            item.id === product.id && item.quantity
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
    }
}

export const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([]);
    const [toggled, setToggled] = useState(false);

    const addItemToCart = (product) => {
        setCartItems(addCartItem(cartItems, product));
    }

    const updateQuantity = (product, operation) => {
        setCartItems(settingProductQunatity(cartItems, product, operation))
    }
    

    const value = { cartItems, setCartItems, toggled, setToggled, addItemToCart, updateQuantity};
    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}

