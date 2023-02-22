import * as React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import { useStateValue } from "../../context/StateProvider";
import { getBasketTotal } from "../../context/reducer";
import accounting from "accounting";

const Review = () => {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Review
      </Typography>
      <List disablePadding>
        {basket?.map((product) => (
          <ListItem key={product.id}>
            <ListItemText
              primary={product.name}
              secondary={`Qty:${product.quantity}`}
            />
            <Typography variant="body2">
              {accounting.formatMoney(product.price * product.quantity, "€")}
            </Typography>
          </ListItem>
        ))}
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            {accounting.formatMoney(getBasketTotal(basket), "€")}
          </Typography>
        </ListItem>
      </List>
    </>
  );
};

export default Review;