import { CircularProgress } from '@mui/material';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { CardElement, Elements, useElements, useStripe } from '@stripe/react-stripe-js';
import { loadStripe, StripeCardElementOptions } from '@stripe/stripe-js';

import axios from 'axios';
import * as React from 'react';
import { useState } from 'react';

import Review from './Review';
import { getBasketTotal } from '../../../../context/reducer';
import { actionTypes } from '../../../../context/reducer.types';
import { useStateValue } from '../../../../context/StateProvider';
import useFormatMoney from '../../../../hooks/useFormatMoney';
import { IPaymentFunctions } from '../../../../types/payment.types';

const stripePromise = loadStripe(import.meta.env.VITE_APP_STRIPE_KEY);

const CARD_ELEMENT_OPTIONS: Partial<StripeCardElementOptions> = {
  iconStyle: 'solid',
  hidePostalCode: true,
  style: {
    base: {
      iconColor: 'rgb(240,57,122)',
      color: '#333',
      fontSize: '18px',
      '::placeholder': {
        color: '#ccc',
      },
    },
    invalid: {
      color: '#e5424d',
      ':focus': {
        color: '#303238',
      },
    },
  },
};

// TODO:ADD THIS TO ASYNC THUNK
const CheckoutForm = ({ handleBack, handleNext }: IPaymentFunctions) => {
  const {
    state: { basket },
    dispatch,
  } = useStateValue();
  const [loading, setLoading] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const bastketFormated = useFormatMoney(getBasketTotal(basket), '€');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const cardElement = elements!.getElement(CardElement);
    if (!cardElement) {
      return;
    }

    const { error, paymentMethod } = await stripe!.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });
    console.log(paymentMethod, error);
    setLoading(true);
    if (!error) {
      const { id } = paymentMethod;
      try {
        const { data } = await axios.post('http://localhost:3001/api/checkout', {
          id,

          amount: getBasketTotal(basket),
        });
        console.log('data : ', data);

        dispatch({
          type: actionTypes.SET_PAYMENT_MESSAGE,
          paymentMessage: data.message,
        });
        if (data.message == 'Successful Payment') {
          dispatch({
            type: actionTypes.EMPTY_BASKET,
            basket: [],
          });
        }
        alert(data.message);
        elements!.getElement(CardElement)!.clear();
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
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '1rem',
        }}
      >
        <Button variant='outlined' onClick={handleBack}>
          Back
        </Button>
        <Button disabled={!stripe} type='submit' variant='contained' color='primary'>
          {loading ? <CircularProgress /> : `Pay  ${bastketFormated}`}
        </Button>
      </div>
    </form>
  );
};

const PaymentForm = ({ handleBack, handleNext }: IPaymentFunctions) => {
  return (
    <>
      <Review />
      <Divider />
      <Typography variant='h6' gutterBottom style={{ margin: '20px 0' }}>
        Payment method
      </Typography>
      <Elements stripe={stripePromise}>
        <CheckoutForm handleBack={handleBack} handleNext={handleNext} />
      </Elements>
    </>
  );
};

export default PaymentForm;
