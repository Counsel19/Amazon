import React from "react";
import moment from "moment";
import "./order.css";
import CheckoutProduct from "../checkoutProduct/CheckoutProduct";
import CurrencyFormat from "react-currency-format";

const Order = ({ order }) => {
  return (
    <div className="order">
      <h2>Order</h2>
      <p>
        {moment
          .unix(order?.data?.created)
          .format("dddd, MMMM Do YYYY, h:mm:ss a")}
      </p>
      <p className="order__id">
        <small>{order?.id}</small>
      </p>

      {order?.data?.basket.map((item) => (
        <CheckoutProduct
          key={`${order.id}_${Math.floor(Math.random() * 100000)}`}
          id={item.id}
          title={item.title}
          price={item.price}
          rating={item.rating}
          image={item.image}
          alt={item.alt}
          hideButton
        />
      ))}

      <CurrencyFormat
        renderText={(value) => (
          <h3 className="order__total">Order Total: {value}</h3>
        )}
        decimalScale={2}
        value={order?.data?.amount / 100}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
    </div>
  );
};

export default Order;
