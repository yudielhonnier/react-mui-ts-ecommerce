import accounting from "accounting";
import React from "react";
import { Button } from "@mui/material";
import { getBasketTotal, getTotalItems } from "../reducer";
import { useStateValue } from "../StateProvider";
import { Link as RouteLink, useNavigate } from "react-router-dom";

export default function Total() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "20vh",
      }}
    >
      <h5>Total items:{getTotalItems(basket)}</h5>
      <h5>{accounting.formatMoney(getBasketTotal(basket), "€")}</h5>
      <RouteLink to="/checkout">
        <Button variant="contained" color="primary">
          Check Out
        </Button>
      </RouteLink>
    </div>
  );
}
