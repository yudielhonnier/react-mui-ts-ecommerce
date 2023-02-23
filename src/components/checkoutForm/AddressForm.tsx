import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import AddressInput from "./AddressInput";
import Button from "@mui/material/Button";
import { Link as RouteLink, useNavigate } from "react-router-dom";
import { useStateValue } from "../../context/StateProvider";
import { actionTypes, IShipingData } from "../../context/reducer.types";
import { useForm, FormProvider } from "react-hook-form";

export default function AddressForm({
  handleNext,
}: {
  handleNext: () => void;
}) {
  const methods = useForm();
  const {
    state: { shipingData },
    dispatch,
  } = useStateValue();

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit((data) => {
            dispatch({
              type: actionTypes.SET_SHIPPINGDATA,
              shipingData: data as IShipingData,
            });
            handleNext();
          })}
        >
          <Grid container spacing={3}>
            <AddressInput required name="firstName" label="First Name" />
            <AddressInput required name="lastName" label="Last Name" />
            <AddressInput required name="address" label="Address" />
            <AddressInput required name="email" label="Email address" />
            <AddressInput required name="city" label="City" />
            <AddressInput required name="postcode" label="Post Code" />
          </Grid>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "1rem",
            }}
          >
            <Button component={RouteLink} to="/checkout-page">
              Back to the Checkout Page
            </Button>
            <Button type="submit" variant="contained" color="primary">
              Next
            </Button>
          </div>
        </form>
      </FormProvider>
    </>
  );
}
