import React from 'react';
import { useContext } from 'react';
import { ShopContext } from '../../contexts/shop.context';
import { Product } from '../../components/product/product.component';
import './shop.styles.scss';

export const Shop = () => {
  const { shopItems } = useContext(ShopContext);
  console.log(shopItems);

  return (
    <div className='products-container'>
      {
        shopItems && shopItems.map(item => {
          return (
            <Product product={item} key={item.id} />
          )
        })
      }
    </div>
  )
}