import React from "react";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../../context/StateProvider";
import { getBasketTotal } from "../../context/reducer";
import { Link } from "react-router-dom";
import "./subtotal.css";

const Subtotal = () => {
  const [{ basket }] = useStateValue();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <Link to="/payment">
        <span>
          <button className="proceed__checkoutButton">Proceed to Checkout</button>
        </span>
      </Link>
    </div>
  );
};

export default Subtotal;
