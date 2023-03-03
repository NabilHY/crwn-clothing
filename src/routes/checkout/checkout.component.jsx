import { useContext } from "react";
import Table from 'react-bootstrap/Table';
import { ShopContext } from "../../contexts/shop.context";
import { CheckoutItem } from "../../components/checkout-item/checkout-item.component";


export const Checkout = () => {

    const { shopItems, setShopItems } = useContext(ShopContext);

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Remove</th>
                </tr>
            </thead>
            {
                shopItems.map((item) => {
                    return (
                        <CheckoutItem item={item} />
                    )
                })
            }
        </Table>
    )
}