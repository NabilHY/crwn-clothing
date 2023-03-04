import { useContext } from "react";
import { setShopContext } from "../../contexts/shop.context";
import { RxCross2 } from 'react-icons/rx';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

export const CheckoutItem = ({ item }) => {
    const {name, imageUrl, price, quantity } = item;
    return (
        <tr>
            <td><img src={imageUrl} alt={name} /></td>
            <td>{name}</td>
            <td>
                <div className='quantity-container'>
                    <IoIosArrowBack />
                    <span>
                        {quantity}
                    </span>
                    <IoIosArrowForward /> 
                </div>
            </td>
            <td>{price}</td>
            <td><RxCross2 /></td>
        </tr>
    )
}