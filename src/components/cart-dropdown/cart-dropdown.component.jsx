import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { Button } from "../button/button.component";
import { CartDropdownItem } from "../cart-dropdown-item/cart-dropdown-item.component";
import "./cart-dropdown.styles.scss";

export const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="cart-dropdown-container">
      <div>
        {cartItems &&
          cartItems.map((item) => {
            return <CartDropdownItem key={item.id} item={item} />;
          })}
      </div>
      <Button>Go to Checkout</Button>
    </div>
  );
};
