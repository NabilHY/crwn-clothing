import { Fragment, useContext, useEffect } from "react";
import Table from 'react-bootstrap/Table';
import { CartContext } from "../../contexts/cart.context";
import { CheckoutItem } from "../../components/checkout-item/checkout-item.component";


export const Checkout = () => {

    const { cartItems, totalPrice, totalPurchasePrice } = useContext(CartContext);
    
    useEffect(() => {
        const unsubscribe = totalPurchasePrice();
        return unsubscribe
    }, [cartItems, totalPurchasePrice])

    return (
        <div className="checkout-container">
            {
                cartItems.length !== 0 ? (
                    <Fragment> 
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
                        <div>
                            Total Purchases: {totalPrice} $
                        </div>
                    </Fragment>
                ) : (
                    <p>Your Cart is empty</p>
                )
            }
        </div>
    )
}