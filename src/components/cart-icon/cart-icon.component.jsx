import { ReactComponent as ShoppingBag } from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';

export const CartIcon = () => {
    return (
        <div className='cart-icon-container'>
            <ShoppingBag className='shopping-icon' />
            <span className='item-count'>0</span>
        </div>
    )
}