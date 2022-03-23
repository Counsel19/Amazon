import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header, Home, Footer} from "./components";
import { Login, Payment, Checkout, Orders } from "./pages/";
import { auth } from "./firebase";
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
    const listener = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        localStorage.setItem('authUser', JSON.stringify(authUser))
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        localStorage.removeItem('authUser');
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });

    return () => listener();
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
              <Footer />
              
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
                <Footer />
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
                <Footer />
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
                <Footer />
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
