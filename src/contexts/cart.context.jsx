import { createContext, useState } from 'react';

export const CartContext =  createContext({
    cartItems: [],
    setCartItems: () => {},
    toggled: false,
    setToggled: () => {},
    increaseProductQuantity: () => {},
    decreaseProductQuantity: () => {},
    removeProductFromCart: () => {},
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

const settingProductQuantity = (cartItems, product, operation) => {
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

const removeProductFromCartHandler = (cartItems, product) => { 
    return cartItems.filter(item => item.id !== product.id);
}

export const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([]);
    const [toggled, setToggled] = useState(false);

    const addItemToCart = (product) => {
        setCartItems(addCartItem(cartItems, product));
    }

    const updateQuantity = (product, operation) => {
        setCartItems(settingProductQuantity(cartItems, product, operation))
    }

    const removeProductFromCart = (product) => {
        setCartItems(removeProductFromCartHandler(cartItems, product))
    }
    

    const value = { cartItems, setCartItems, toggled, setToggled, addItemToCart, updateQuantity, removeProductFromCart};
    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}

