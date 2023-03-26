import { createContext, useState, useEffect } from 'react';
import SHOP_DATA from '../shop-data.js';

export const ShopContext = createContext({
    shopItems: [],
})

export const ShopProvider = ({ children }) => {
    const [shopItems, setShopItems] = useState([]);
    useEffect(() => {
        return setShopItems(SHOP_DATA[0].items);
    }, []);
    const value = { shopItems }
    return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>
}