import * as React from "react";
import { styled, makeStyles } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import accounting from "accounting";
import { Delete as DeleteIcon } from "@mui/icons-material";
import { actionTypes } from "../reducer";
import { useStateValue } from "../StateProvider";
import { Badge } from "@mui/material";

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
// todo:check why this not work
// const useStyles=makeStyles((theme)=>(
//   {
//     root:{
//       maxWidth:345,
//     },
//     action:{
//       marginTop:"1rem",
//     },
//     media:{
//       heigth:0,
//       paddingTop:"56.25%",//16:9
//     },
//     expand:{
//       transform:"rotate(0deg)",
//       marginLeft:"auto",
//       transition:theme.transition.create("transform",{
//         duration:theme.transition.duration.shortest,
//       }),
//     },
//     expandOpen:{
//       transform:"rotate(180deg)"
//     }
//   }
// ))

export default function CheckoutCart({
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
  // const classes=useStyles();
  const [{ basket }, dispatch] = useStateValue();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const removeItem = () => {
    quantity > 1
      ? dispatch({
          type: actionTypes.DECREASE_QUANTITY_ITEM,
          id,
        })
      : dispatch({
          type: actionTypes.DELETE_FROM_BASKET,
          id: id,
        });
  };

  return (
    <Card
      sx={{
        maxWidth: 345,
        margin: "auto",
      }}
    >
      <CardHeader
        action={
          <Typography variant="h5" color="textSecondary">
            {accounting.formatMoney(price, "€")}
          </Typography>
        }
        title={name}
        titleTypographyProps={{ noWrap: true }}
        subheader="In Stock"
        sx={{
          "& .MuiCardHeader-content": {
            overflow: "hidden",
          },
        }}
      />

      <CardMedia
        component="img"
        heigth="0"
        paddingTop="56.25%"
        image={image}
        alt="Running Shoes"
        sx={{
          padding: "1rem 1rem 0 1rem",
          height: 250,
          width: "90%",
        }}
      />

      <CardActions
        disableSpacing
        sx={{
          display: "flex",
          justifyContent: "space-between",
          textAlign: "center",
        }}
      >
        <div style={{ display: "flex" }}>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>&#11088;</p>
            ))}
        </div>
        <Badge color="error" badgeContent={quantity}></Badge>
        <IconButton onClick={removeItem}>
          <DeleteIcon fontSize="large" />
        </IconButton>
      </CardActions>
    </Card>
  );
}
