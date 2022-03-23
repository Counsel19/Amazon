import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import "./login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const isEmpty = email === "" && password === "" ? true : false;

  const signIn = async (e) => {
    e.preventDefault();
    setLoading(true);

    //Firebase Login
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (e) {
      alert(e.message);
    }
  };

  const register = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (e) {
      alert(e.message);
     
    }
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="amazon logo"
        />
      </Link>

      <div className="login__container">
        <h1>Sign In</h1>
        <form>
          <h5>Email: </h5>
          <input
            type="text"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
          />

          <h5>Password: </h5>
          <input
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            type="password"
          />

          <button
            disabled={loading || isEmpty}
            onClick={signIn}
            className="login__signInButton"
          >
            Sign In
          </button>
        </form>

        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>

        <button
          onClick={register}
          className="login__registerButton"
          disabled={loading || isEmpty}
        >
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
};

export default Login;
