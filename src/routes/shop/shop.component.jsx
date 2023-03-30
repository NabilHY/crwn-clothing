import React, { Fragment } from "react";
import { useContext } from "react";
import { ShopContext } from "../../contexts/shop.context";
import { Product } from "../../components/product/product.component";
import { Button } from "../../components/button/button.component";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import "./shop.styles.scss";

export const Shop = () => {
  const { shopCategories } = useContext(ShopContext);

  return (
      <div className='shop-container'>
        {Object.keys(shopCategories).map((category) => {
          const products = shopCategories[category];
          return <CategoryPreview key={category} title={category} items={products} />
        })}
      </div>
  );
};
