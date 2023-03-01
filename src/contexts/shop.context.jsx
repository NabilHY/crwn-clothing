import { createContext, useState, useEffect } from 'react';
import SHOP_ITEMS from '../shop-data.json';

export const ShopContext = createContext({
    shopItems: [],
})

export const ShopProvider = ({ children }) => {
    const [shopItems, setShopItems] = useState([]);
    useEffect(() => {
        return setShopItems(SHOP_ITEMS);
    }, []);
    const value = { shopItems }
    console.log(shopItems);
    return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>
}