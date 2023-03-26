import { createContext, useState, useEffect } from 'react';
import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils.js';


export const ShopContext = createContext({
    shopItems: [],
})

export const ShopProvider = ({ children }) => {
    const [shopItems, setShopItems] = useState([]);

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            console.log(categoryMap);
        }
        getCategoriesMap();
    }, []);
 
    const value = { shopItems }
    return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>
}