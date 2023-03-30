import { createContext, useState, useEffect } from 'react';
import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils.js';


export const ShopContext = createContext({
    shopCategories: [],
})

export const ShopProvider = ({ children }) => {
    const [shopCategories, setShopCategories] = useState({});

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            setShopCategories(categoryMap);
        }
        getCategoriesMap();
    }, []);
 
    const value = { shopCategories }
    return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>
}