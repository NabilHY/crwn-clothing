import { createContext, useState, useEffect } from 'react';
import { addCollectionAndDocuments } from '../utils/firebase/firebase.utils.js';


export const ShopContext = createContext({
    shopItems: [],
})

export const ShopProvider = ({ children }) => {
    const [shopItems, setShopItems] = useState([]);
 
    const value = { shopItems }
    return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>
}