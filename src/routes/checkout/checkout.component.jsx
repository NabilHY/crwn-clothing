import { Fragment, useContext, useEffect } from "react";
import Table from 'react-bootstrap/Table';
import { CartContext } from "../../contexts/cart.context";
import { CheckoutItem } from "../../components/checkout-item/checkout-item.component";
import './checkout.styles.scss';


export const Checkout = () => {

    const { cartItems, totalPrice, totalPurchasePrice } = useContext(CartContext);

    const filteredCartItems = cartItems.filter((item) => item.quantity !== 0);
    
    useEffect(() => {
        const unsubscribe = totalPurchasePrice();
        return unsubscribe
    }, [cartItems, totalPurchasePrice])

    return (
        <div className="checkout-container">
            {
                filteredCartItems.length !== 0 ? (
                    <div className='products-container'> 
                        <p className='empty-message'>
                            Total Purchases: {totalPrice} $
                        </p>
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
                                    filteredCartItems.map((item) => {
                                        return (
                                            <CheckoutItem key={item.id} item={item} />
                                        )
                                    })
                                }
                            </tbody>
                        </Table>
                    </div>
                ) : (
                    <p className='cart-empty-message'>Your Cart is empty</p>
                )
            }
        </div>
    )
}