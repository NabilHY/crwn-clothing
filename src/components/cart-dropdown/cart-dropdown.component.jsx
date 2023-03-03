import { Fragment, useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { Button } from "../button/button.component";
import { CartDropdownItem } from "../cart-dropdown-item/cart-dropdown-item.component";
import "./cart-dropdown.styles.scss";

export const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  console.log(cartItems.length);
  return (
    <div className="cart-dropdown-container">
      {
        cartItems.length !== 0 ? (
        <Fragment>
          <div>
            {cartItems &&
              cartItems.map((item) => {
                return <CartDropdownItem key={item.id} item={item} />;
              })}
          </div>
          <Button>Go to Checkout</Button>
        </Fragment>
      
      ) : (
        <p>Cart Is empty</p>           
      )
      }
    </div>
  );
};
