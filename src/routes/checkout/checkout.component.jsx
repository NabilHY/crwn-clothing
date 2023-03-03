import { useContext } from "react";
import Table from 'react-bootstrap/Table';
import { ShopContext } from "../../contexts/shop.context";
import { CheckoutItem } from "../../components/checkout-item/checkout-item.component";


export const Checkout = () => {

    const { shopItems, setShopItems } = useContext(ShopContext);

    return (
        <Table>
            
        </Table>
    )
}