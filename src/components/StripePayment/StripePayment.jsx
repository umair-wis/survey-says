import React, { useState } from "react";

import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { toast } from "react-toastify";
import "./stripePayment.scss";
import axios from "axios";
import { Navigate } from "react-router-dom";
import routes from "../../config/routes";
import "./stripePayment.scss";
import { RiseLoader } from "react-spinners";

const StripePayment = () => {

  const colorCode = '#1686F6';

  const stripe = useStripe();
  const elements = useElements();

  const [redirect, setRedirect] = useState(false);
  const [loader, setLoader] = useState(false);

  const surveryDataToParse = localStorage.getItem("survey-data");
  const surveyData = surveryDataToParse
    ? JSON.parse(surveryDataToParse)
    : surveryDataToParse;

  const handleSubmit = (stripe, elements) => async () => {
    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      toast.error(error?.message);
      console.log("[error]", error);
    } else {
      setLoader(true);
      const payload = {
        amount: surveyData?.amount,
      };
      axios
        .post("https://api-form.surveysays.xyz/Survey/transaction", payload)
        .then((response) => {
          const data = {
            paid: true
          }
          axios.put(`https://api-form.surveysays.xyz/Survey/${surveyData?._id}`, data)
            .then((response) => {
              setLoader(false);

            })
            .catch((err) => {
              setLoader(false);

              console.log({ err })
            })
          toast.success("Payment Success");
          setRedirect(true);
        })
        .catch((err) => {
          setLoader(false);
          toast.error("Error with payment. Try Again...");
        });
    }
  };

  if (redirect) {
    return <Navigate to={routes.home} />;
  }

  const style = {
    border: "2px solid red !important",
  };

  return (
    <>
      {/* <form id="payment-form" onSubmit={handleSubmit}>
      <LinkAuthenticationElement id="link-authentication-element"
        // Access the email value like so:
        // onChange={(event) => {
        //  setEmail(event.value.email);
        // }}
        //
        // Prefill the email field like so:
        // options={{defaultValues: {email: 'foo@bar.com'}}}
        />
      <PaymentElement id="payment-element" />
      <button disabled={isLoading || !stripe || !elements} id="submit">
        <span id="button-text">
          {isLoading ? <div className="spinner" id="spinner"></div> : "Pay now"}
        </span>
      </button>
      {/* Show any error or success messages */}
      {/* {message && <div id="payment-message">{message}</div>} */}
      {/* </form> */}
      {/* } */}
      {
        loader ?
          <div className="loaderWrapper">
            <RiseLoader className="login-clip-loader" color={colorCode} />
            <h1
              style={{
                color: { colorCode },
                fontSize: "2.4rem",
              }}
            >
              &nbsp;&nbsp;&nbsp;&nbsp;Making a payment. Please wait...
            </h1>
          </div>
          :
          <section id="stripe-form">
            <div className="stripe-payment-form">
              <CardElement style={style} />
              <button onClick={handleSubmit(stripe, elements)} className="pay_btn">
                Pay Now
              </button>
            </div>
          </section>
      }
    </>
  );
};

export default StripePayment;
