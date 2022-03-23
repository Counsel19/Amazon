import React, { useEffect, useState } from "react";
import {
  collection,
  doc,
  onSnapshot,
  query,
  orderBy,
} from "firebase/firestore";
import { db } from "../../firebase";
import { useStateValue } from "../../context/StateProvider";
import { Order } from "../../components";
import "./orders.css"

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [{ user }] = useStateValue();

  useEffect(() => {
    if (user) {
      const userOrderRef = collection(db, "users", user?.uid, "orders");
      const userOrderedRef = query(userOrderRef, orderBy("created", "desc"));
      onSnapshot(userOrderedRef, (snapshot) => {
  
        setOrders(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
    }
  }, [user]);

  return (
    <div className="orders">
     
      <h1>Your Orders</h1>

      <div className="orders__order">
        {orders?.map((order) => (
          <Order key={order.id} order={order} />
        ))}
      </div>
    </div>
  );
};

export default Orders;
