import { useContext } from "react";
import Table from 'react-bootstrap/Table';
import { CartContext } from "../../contexts/cart.context";
import { CheckoutItem } from "../../components/checkout-item/checkout-item.component";


export const Checkout = () => {

    const { cartItems } = useContext(CartContext);

    return (
        <div className="checkout-container">
            {
                cartItems.length !== 0 ? (
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Description</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cartItems.map((item) => {
                                    return (
                                        <CheckoutItem key={item.id} item={item} />
                                    )
                                })
                            }
                        </tbody>
                    </Table>
                ) : (
                    <p>Your Cart is empty</p>
                )
            }
        </div>
    )
}