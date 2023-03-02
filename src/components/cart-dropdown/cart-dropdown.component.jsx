import { Button } from '../button/button.component';
import './cart-dropdown.styles.scss';

export const CartDropdown = () => {
    return (
        <div className='cart-dropdown-container'>
            <div className='empty-message' />
            <Button>
                Go to Checkout
            </Button>
        </div>
    )
}