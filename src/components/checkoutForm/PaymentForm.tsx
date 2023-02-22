import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Review from "./Review";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useStateValue } from "../../context/StateProvider";
import { getBasketTotal } from "../../context/reducer";
import accounting from "accounting";
import { actionTypes } from "../../context/reducer";
import { useState } from "react";
import { CircularProgress } from "@mui/material";

import axios from "axios";

const stripePromise = loadStripe(
  "pk_test_51LpFAZIdQtsXmsq3GwTzEFktCyQ1rI3aYtmKmTZjd4bYt6NvlwI2o7tMbpGfjPNY5TnQSVNeEBH7dDokqt6id3PE00c8NYYdgC"
);

const CARD_ELEMENT_OPTIONS = {
  iconStyle: "solid",
  hidePostalCode: true,
  style: {
    base: {
      iconColor: "rgb(240,57,122)",
      color: "#333",
      fontSize: "18px",
      "::placeholder": {
        color: "#ccc",
      },
    },
    invalid: {
      color: "#e5424d",
      ":focus": {
        color: "#303238",
      },
    },
  },
};

const CheckoutForm = ({ handleBack, handleNext }) => {
  const [{ basket, paymentMessage }, dispatch] = useStateValue();
  const [loading, setLoading] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
    console.log(paymentMethod, error);
    setLoading(true);
    if (!error) {
      const { id } = paymentMethod;
      try {
        const { data } = await axios.post(
          "http://localhost:3001/api/checkout",
          {
            id,

            amount: getBasketTotal(basket),
          }
        );
        console.log("data : ", data);

        dispatch({
          type: actionTypes.SET_PAYMENT_MESSAGE,
          paymentMessage: data.message,
        });
        if (data.message == "Successful Payment") {
          dispatch({
            type: actionTypes.EMPTY_BASKET,
            basket: [],
          });
        }
        alert(data.message);
        elements.getElement(CardElement).clear();
        handleNext();
      } catch (error) {
        console.log(error);
        handleNext();
      }
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement options={CARD_ELEMENT_OPTIONS} />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "1rem",
        }}
      >
        <Button variant="outlined" onClick={handleBack}>
          Back
        </Button>
        <Button
          disabled={!stripe}
          type="submit"
          variant="contained"
          color="primary"
        >
          {loading ? (
            <CircularProgress />
          ) : (
            `Pay  ${accounting.formatMoney(getBasketTotal(basket), "€")}`
          )}
        </Button>
      </div>
    </form>
  );
};

const PaymentForm = ({ handleBack, handleNext }) => {
  return (
    <>
      <Review />
      <Divider />
      <Typography variant="h6" gutterBottom style={{ margin: "20px 0" }}>
        Payment method
      </Typography>
      <Elements stripe={stripePromise}>
        <CheckoutForm handleBack={handleBack} handleNext={handleNext} />
      </Elements>
    </>
  );
};

export default PaymentForm;
