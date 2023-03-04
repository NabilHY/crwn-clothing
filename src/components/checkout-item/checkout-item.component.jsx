import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { RxCross2 } from 'react-icons/rx';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

export const CheckoutItem = ({ item }) => {
    const { updateQuantity } = useContext(CartContext);
    const { name, imageUrl, price, quantity } = item;

    const handleClick = (e) => {
        e.target.className['baseVal'] === 'increment'
            ? updateQuantity(item, 'increment')
            : updateQuantity(item, 'decrement')
        }

    return (
        <tr>
            <td><img src={imageUrl} alt={name} /></td>
            <td>{name}</td>
            <td>
                <div className='quantity-container'>
                    <IoIosArrowBack className='decrement' onClick={handleClick} />
                    <span>
                        {quantity}
                    </span>
                    <IoIosArrowForward className='increment' onClick={handleClick} /> 
                </div>
            </td>
            <td>{price}</td>
            <td><RxCross2 /></td>
        </tr>
    )
}