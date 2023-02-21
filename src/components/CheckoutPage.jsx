import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";

import { Typography } from "@mui/material";

import CheckoutCart from "./CheckoutCart";
import Total from "./Total";

import { useStateValue } from "../StateProvider";

export default function CheckoutPage() {
  const [{ basket, user }, dispatch] = useStateValue();

  function FormRow() {
    return (
      <>
        {basket?.map((item) => (
          <Grid key={item.id} xs={12} sm={6} md={4} lg={3}>
            <CheckoutCart product={item} />
          </Grid>
        ))}
      </>
    );
  }

  return !user ? (
    <Typography align="center" gutterBottom variant="h4">
      User is not logged
    </Typography>
  ) : (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid xs={12}>
          <Typography align="center" gutterBottom variant="h4">
            Shopping Cart
          </Typography>
        </Grid>
        <Grid xs={12} sm={8} md={9} container spacing={3}>
          <FormRow />
        </Grid>
        <Grid xs={12} sm={4} md={3}>
          <Typography align="center" gutterBottom variant="h4">
            <Total />
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
