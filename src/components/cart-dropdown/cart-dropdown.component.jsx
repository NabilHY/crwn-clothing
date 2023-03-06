import { Fragment, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/cart.context";
import { Button } from "../button/button.component";
import { CartDropdownItem } from "../cart-dropdown-item/cart-dropdown-item.component";
import "./cart-dropdown.styles.scss";

export const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  let navigate = useNavigate();

  const routeChange = () => {
    let path = `checkout`;
    navigate(path);
  }
  
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
          <Button onClick={routeChange}>Go to Checkout</Button>
        </Fragment>
      
      ) : (
        <p>Cart Is empty</p>           
      )
      }
    </div>
  );
};
