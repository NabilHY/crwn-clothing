import { useState, useContext, useEffect } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { ReactComponent as ShoppingBag } from '../../assets/shopping-bag.svg';
import { CartDropdown } from '../cart-dropdown/cart-dropdown.component';
import './cart-icon.styles.scss';

export const CartIcon = () => {
    
    const { cartItems, toggled, setToggled } = useContext(CartContext)
    const [itemCount, setItemCount] = useState(0);
    
    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
    setItemCount(
        newCartCount
    )}, [cartItems]);
        
    const toogleHandler = () => {
        !toggled ? setToggled(true) : setToggled(false);
    }

    return (
        <div className='cart-icon-container' onClick={toogleHandler}>
            <ShoppingBag className='shopping-icon'  />
            <span className='item-count'>{itemCount}</span>
            {
                toggled && <CartDropdown />
            }
        </div>
    )
}