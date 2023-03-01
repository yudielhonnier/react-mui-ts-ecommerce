import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { IItem, actionTypes } from "@/context/reducer.types";
import { useStateValue } from "@/context/StateProvider";
import useFormatMoney from "@/hooks/useFormatMoney";
import { AddShoppingCart } from "@mui/icons-material";
import { useState } from "react";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 345,
}));

export default function CardProduct({
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
}: {
  product: IItem;
}) {
  const [expanded, setExpanded] = useState(false);

  const {
    state: { basket },
    dispatch,
  } = useStateValue();

  const priceFormated = useFormatMoney(price, "€");

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
        });
  };

  const convertRating = (rating: number) => {
    if (rating > 10) return Math.round(parseInt(rating.toString().slice(0, 1)));
    else return rating;
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 200, margin: "auto" }}>
      <CardMedia
        component="img"
        image={image}
        alt="Running Shoes"
        sx={{
          padding: "0",
          width: "100%",
          height: "150px",
          objectFit: "cover",
        }}
      />

      <CardContent sx={{ padding: ".5rem" }}>
        <Typography
          sx={{
            fontSize: ".8rem",
            display: "flex",
            justifyContent: "space-between",
          }}
          color="textSecondary"
        >
          <span>{name}</span>
          <span> {priceFormated}</span>
        </Typography>
        {/* <Typography variant="body2" color="text.secondary">
          {productType}
        </Typography> */}
      </CardContent>
      <CardActions disableSpacing sx={{ height: 20 }}>
        {/* TODO:Add iconbutton globally */}
        <IconButton aria-label="Add to Cart" onClick={addToBasket}>
          <AddShoppingCart fontSize="medium" />
        </IconButton>
        {Array(convertRating(rating))
          // .fill()
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
          <Typography variant="body2" paragraph>
            {decriptionProd}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
