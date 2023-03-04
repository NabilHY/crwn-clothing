import { useContext } from "react";
import { setShopContext } from "../../contexts/shop.context";

export const CheckoutItem = ({ item }) => {
    const {name, imageUrl, price, quantity } = item;
    return (
        <tr>
            <td>{imageUrl}</td>
            <td>{name}</td>
            <td>{price}</td>
            <td>{quantity}</td>
        </tr>
    )
}