import { useContext } from "react";
import { setShopContext } from "../../contexts/shop.context";

export const CheckoutItem = ({ item }) => {
    const {name, imgUrl, price, quantity } = item;
    return (
        <tr>
            <td>{name}</td>
            <td>{imgUrl}</td>
            <td>{price}</td>
            <td>{quantity}</td>
        </tr>
    )
}