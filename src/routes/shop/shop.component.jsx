import React, { Fragment } from "react";
import { useContext } from "react";
import { ShopContext } from "../../contexts/shop.context";
import { Product } from "../../components/product/product.component";
import { Button } from "../../components/button/button.component";

import "./shop.styles.scss";

export const Shop = () => {
  const { shopCategories } = useContext(ShopContext);

  return (
      <>
        {Object.keys(shopCategories).map((category) => (
          <Fragment key={category}>
            <h2>{category.toUpperCase()}</h2>
            <div className="products-container">
              {shopCategories[category].slice(0,4).map((product) => (
                <Product product={product} key={product.id} />
              ))}
            </div>
            <Button type="button" buttonType='inverted'>
              View More
            </Button>
          </Fragment>
        ))}
      </>
  );
};
