import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { CheckoutProduct } from "../../components/";
import { useStateValue } from "../../context/StateProvider";
import "./payment.css";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../../context/reducer";
import axios from "../../helpers/axios";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase";

const Payment = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  const stripe = useStripe();
  const elements = useElements();

  const navigate = useNavigate();

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [processing, setProcessing] = useState(false);
  const [succeeded, setSucceeded] = useState(false);
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    //generate client secret which allows us to charge a customer

    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        //Stripe Expects subtotal in a currency subunits
        url: `/payments/create?total=${Math.round(
          getBasketTotal(basket) * 100
        )}`,
      });

      setClientSecret(response.data.clientSecret);
    };

    return getClientSecret();
  }, [basket]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    const { paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });
    if (paymentIntent) {
      //Basically the payment confirmation
      // response.paymentIntent

      const userRef = doc(db, "users", user?.uid, "orders", paymentIntent.id);
      setDoc(userRef, {
        basket: basket,
        amount: paymentIntent.amount,
        created: paymentIntent.created,
      });

      setSucceeded(true);
      setError(null);
      setProcessing(false);

      navigate("/orders", { replace: true });
    }

    dispatch({
      type: "EMPTY_BASKET",
    });
  };

  const handleChange = async (e) => {
    // Listen for errors in the card
    //and display any errors as  the customer types
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout <Link to="/checkout">({basket?.length} items)</Link>
        </h1>

        {/* Delivery Address */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>123 React Lane</p>
            <p>Lagos, Nigeria</p>
          </div>
        </div>

        {/* Review  Items */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review ites and delivery</h3>
          </div>
          <div className="payment__item">
            {/* All the products are to be dispayed here */}
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

        {/* Payement  Methon */}
        <div className="payment__section">
          <h3 className="payment__title">Payment Method</h3>
          <div className="payment__details">
            {/* strip functionality */}
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />

              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => (
                    <>
                      <h3>Order Total: {value}</h3>
                    </>
                  )}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />

                <button
                  type="submit"
                  disabled={processing || disabled || succeeded}
                >
                  <span>{processing ? "Processing" : "Buy Now"}</span>
                </button>
              </div>

              {/* Error */}
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
