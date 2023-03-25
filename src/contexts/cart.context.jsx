import { createContext, useState } from 'react';

export const CartContext =  createContext({
    cartItems: [],
    setCartItems: () => {},
    toggled: false,
    setToggled: () => {},
    increaseProductQuantity: () => {},
    decreaseProductQuantity: () => {},
    removeProductFromCart: () => {},
    totalPrice: '',
    sumPrices: () => {},
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

const sumPrices = (cartItems) => cartItems.reduce((total, item) => total + (item.quantity * item.price), 0)

export const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([]);
    const [toggled, setToggled] = useState(false);
    const [totalPrice, setTotalPrice] = useState(0);

    const addItemToCart = (product) => {
        setCartItems(addCartItem(cartItems, product));
    }

    const updateQuantity = (product, operation) => {
        setCartItems(settingProductQuantity(cartItems, product, operation))
    }

    const removeProductFromCart = (product) => {
        setCartItems(removeProductFromCartHandler(cartItems, product))
    }

    const totalPurchasePrice = () => {
        setTotalPrice(sumPrices(cartItems))
    }

    const value = {
        cartItems,
        setCartItems,
        toggled,
        setToggled,
        addItemToCart,
        updateQuantity,
        removeProductFromCart,
        totalPrice,
        totalPurchasePrice,
    };
    
    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}


