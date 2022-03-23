import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header, Home } from "./components";
import { Login, Payment, Checkout, Orders } from "./pages/";
import { auth, app } from "./firebase";
import { useStateValue } from "./context/StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { ProtectedRoute } from "./helpers/routes";

const promise = loadStripe(
  "pk_test_51KehgHDExzWGiqB97A45PiK1ipHB4ua4oztxzW3pjqZ7hMx6VWsoPyt7iKhnaW8qWfExCm5oiP8waxvutgfGKKXG00f7wUaQPB"
);

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });

      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });

    return () => {};
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          exact
          element={
            <>
              <Header />
              <Home />
            </>
          }
        />
        <Route element={<ProtectedRoute user={user} redirectPath="/login" />}>
          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          />
        </Route>
        <Route element={<ProtectedRoute user={user} redirectPath="/login" />}>
          <Route
            path="/payment"
            element={
              <>
                <Header />
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
              </>
            }
          />
        </Route>

        <Route element={<ProtectedRoute user={user} redirectPath="/login" />}>
          <Route
            path="/orders"
            element={
              <>
                <Header />
                <Orders />
              </>
            }
          />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
