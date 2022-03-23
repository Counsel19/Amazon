const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

const stripe = require("stripe")(
// eslint-disable-next-line max-len
    "sk_test_51KehgHDExzWGiqB9QwhkuG1O6scqUXjy5uRJnxfeW65eU2aL9PP77L8QszJaCSGN7eP7kKLT2epm0AbjXYyqyNKL009vklLgOT"
);

// API

// App Configuration
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// API Routes
app.get("/", (req, res) => {
  res.status(200).send("hello world");
});

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;

  console.log("payment request recieved", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listen command
exports.api = functions.https.onRequest(app);

