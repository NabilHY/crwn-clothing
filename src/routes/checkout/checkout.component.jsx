import { useContext } from "react";
import { ShopContext } from "../../contexts/shop.context";
import { CheckoutItem } from "../../components/checkout-item/checkout-item.component";

export const Checkout = () => {

    const { shopItems, setShopItems } = useContext(ShopContext);

    return (
        <div className='checkout-container'>
            {
                shopItems &&
                shopItems.map((item) => {
                    return (
                        <CheckoutItem item={item} />
                    )
                })
            }
        </div>
    )
}