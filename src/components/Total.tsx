import { Button } from "@mui/material";
import { getBasketTotal, getTotalItems } from "../context/reducer";
import { useStateValue } from "../context/StateProvider";
import { Link as RouteLink, useNavigate } from "react-router-dom";
import { useFormatMoney } from "../hooks/useFormatMoney";

export default function Total() {
  const {
    state: { basket },
  } = useStateValue();

  const basketsFormated = useFormatMoney(getBasketTotal(basket), "€");

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
      <h5>{basketsFormated}</h5>
      <RouteLink to="/checkout">
        <Button variant="contained" color="primary">
          Check Out
        </Button>
      </RouteLink>
    </div>
  );
}
