import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { RxCross2 } from 'react-icons/rx';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

export const CheckoutItem = ({ item }) => {
    const { updateQuantity, removeProductFromCart } = useContext(CartContext);
    const { name, imageUrl, price, quantity } = item;

    const updateHandler = (e) => {
    e.target.className['baseVal'] === 'increment'
        ? updateQuantity(item, 'increment')
        : updateQuantity(item, 'decrement')
    }

    const removeHandler = () => {
        removeProductFromCart(item)
    }

    return (
        <tr>
            <td><img src={imageUrl} alt={name} /></td>
            <td>{name}</td>
            <td>
                <div className='quantity-container'>
                    <IoIosArrowBack className='decrement' onClick={updateHandler} />
                    <span>
                        {quantity}
                    </span>
                    <IoIosArrowForward className='increment' onClick={updateHandler} /> 
                </div>
            </td>
            <td>{price * quantity} $</td>
            <td><RxCross2 onClick={removeHandler} /></td>
        </tr>
    )
}