import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData } from "react-router-dom";
import CheckOut from './CheckOut'

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
  const booking = useLoaderData();
  const {  price} = booking;

  return (
    <div>
      <h2 className="text-3xl">payment for </h2>
      <p>
        please pay <strong>${price}</strong> for your appointment on 
      </p>
      <div className="w-96 my-12 card">
      <Elements stripe={stripePromise}>
        <CheckOut
            booking = {booking}
        />
      </Elements>
      </div>
    </div>
  );
};

export default Payment;
