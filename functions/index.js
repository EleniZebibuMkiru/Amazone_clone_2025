require("dotenv").config();
const { onRequest } = require("firebase-functions/v2/https");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.status(200).json({ message: "success" });
});

// Stripe payment route
app.post("/payments/create", async (req, res) => {
  // Move Stripe init inside the handler to prevent boot-up timeouts
  const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

  try {
    const total = Number(req.body.total);

    if (!total || total <= 0) {
      return res.status(400).json({ error: "Invalid total amount" });
    }

    console.log("Payment Request Received >>>", total);

    const paymentIntent = await stripe.paymentIntents.create({
      amount: total, 
      currency: "usd",
    });
console.log("Payment Intent Created:", paymentIntent);
    res.status(201).json({
      clientSecret: paymentIntent.client_secret,
    });

  } catch (error) {
    console.error("Stripe Error:", error.message);
    res.status(500).json({ error: error.message });
  }
});

exports.api = onRequest(app);