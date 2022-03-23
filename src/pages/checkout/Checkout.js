import React from "react";
import Subtotal from "../../components/subtotal/Subtotal";
import { useStateValue } from "../../context/StateProvider";
import "./checkout.css";
import {CheckoutProduct} from "../../components/";


const Checkout = () => {
  const [{ basket, user }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/01/credit/img16/CCMP/newstorefront/amazoncards/desktop-PLCC-unloggedin-header.png"
          alt="banner"
        />

        <div>
          <h3>{user?.email}</h3>
          <h2 className="checkout__title">Your shopping basket</h2>

          {basket?.map((item) => (
            <CheckoutProduct
              key={Math.floor(Math.random() * 1000000)}
              id={item.id}
              title={item.title}
              price={item.price}
              rating={item.rating}
              image={item.image}
              alt={item.alt}
            />
          ))}
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
