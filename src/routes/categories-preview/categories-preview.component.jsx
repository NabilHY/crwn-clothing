import React, { Fragment } from "react";
import { useContext } from "react";
import { ShopContext } from "../../contexts/shop.context";
import CategoryPreview from "../../components/category-preview/category-preview.component";

export const CategoriesPreview = () => {
  const { shopCategories } = useContext(ShopContext);

  return (
    <Fragment>
      {Object.keys(shopCategories).map((category) => {
        const products = shopCategories[category];
        return <CategoryPreview key={category} title={category} items={products} />
      })}
    </Fragment>
      
  );
};
