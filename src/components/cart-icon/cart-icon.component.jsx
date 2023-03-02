import { useState } from 'react';
import { ReactComponent as ShoppingBag } from '../../assets/shopping-bag.svg';
import { CartDropdown } from '../cart-dropdown/cart-dropdown.component';
import './cart-icon.styles.scss';

export const CartIcon = () => {
    const [toggled, setToggled] = useState(false);

    const handleClick = () => {
        !toggled ? setToggled(true) : setToggled(false);
    }

    return (
        <div className='cart-icon-container'>
            <ShoppingBag className='shopping-icon' onClick={handleClick} />
            <span className='item-count' onClick={handleClick}>0</span>
            {
                toggled && <CartDropdown />
            }
        </div>
    )
}