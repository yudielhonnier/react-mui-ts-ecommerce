import * as React from "react";
import { makeStyles } from "@mui/styles";
import { createStyles, styled } from "@mui/material/styles";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { AddShoppingCart } from "@mui/icons-material";

import accounting from "accounting";
import { actionTypes } from "../reducer";
import { useStateValue } from "../StateProvider";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 345,
    margin: "auto",
  },
  action: {
    marginTop: "1rem",
  },
  media: {
    padding: "1rem 1rem 0 1rem",
    height: 250,
    width: "90%",
  },
  // expand:{
  //         transform:"rotate(0deg)",
  //         marginLeft:"auto",
  //         transition:theme.transition.create("transform",{
  //           duration:theme.transition.duration.shortest,
  //         }),
  //       },
  //       expandOpen:{
  //         transform:"rotate(180deg)"
  //       }
}));

export default function Product({
  product: {
    id,
    name,
    productType,
    price,
    rating,
    quantity,
    image,
    decriptionProd,
  },
}) {
  const classes = useStyles();
  const [{ basket }, dispatch] = useStateValue();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const addToBasket = () => {
    const index = basket.findIndex((basketItem) => basketItem.id === id);
    index === -1
      ? dispatch({
          type: actionTypes.ADD_TO_BASKET,
          item: {
            id,
            name,
            productType,
            image,
            price,
            rating,
            quantity,
            decriptionProd,
          },
        })
      : dispatch({
          type: actionTypes.INCREASE_QUANTITY_ITEM,
          id,
        });
  };

  const convertRating = (rating) => {
    if (rating > 10) return Math.round(parseInt(rating.toString().slice(0, 1)));
    else return rating;
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        action={
          <Typography
            className={classes.action}
            variant="h5"
            color="textSecondary"
          >
            {accounting.formatMoney(price, "€")}
          </Typography>
        }
        title={name}
        titleTypographyProps={{ noWrap: true }}
        sx={{
          "& .MuiCardHeader-content": {
            overflow: "hidden",
          },
        }}
        subheader="In Stock"
      />
      <CardMedia
        // todo:see the diference
        //  className={classes.media}
        component="img"
        image={image}
        alt="Running Shoes"
        sx={{
          padding: "1rem 1rem 0 1rem",
          height: 250,
          width: "90%",
        }}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {productType}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="Add to Cart" onClick={addToBasket}>
          <AddShoppingCart fontSize="large" />
        </IconButton>
        {Array(convertRating(rating))
          .fill()
          .map((_, i) => (
            <p key={i}>&#11088;</p>
          ))}

        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{decriptionProd}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
