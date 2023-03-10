import React, { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { Button } from '../button/button.component';
import './product.styles.scss';

export const Product = ({product}) => {
  const { addItemToCart } = useContext(CartContext);
  const { id, name, imageUrl, price } = product;

  const handleClick = () => {
    addItemToCart(product);
  }

    return (
      <div key={id} className='product-card-container'>
        <img src={imageUrl} alt={`${name}`} />
        <div className='footer'>
          <span className='name'>{name}</span>
          <span className='price'>{price}</span>
        </div>
        <Button onClick={handleClick} buttonType='inverted'>Add to card</Button>
      </div>
  )
}
