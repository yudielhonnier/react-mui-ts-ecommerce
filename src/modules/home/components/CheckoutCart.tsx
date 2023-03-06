import { Delete as DeleteIcon } from '@mui/icons-material';
import { Badge } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

import useFormatMoney from '@/hooks/useFormatMoney';

import { actionTypes, IItem } from '@/context/reducer.types';
import { useAppDispatch } from '@/store/store';
import { decQtyItem, removeFromBasket } from '@/store/slices/basket/basketSlice';

export default function CheckoutCart({
  product: { id, name, productType, price, rating, quantity, image, decriptionProd },
}: {
  product: IItem;
}) {
  // const classes=useStyles();
  const dispatch = useAppDispatch();

  const [expanded, setExpanded] = useState(false);

  const priceFormated = useFormatMoney(price, '€');

  const CardMediaProps = {
    heigth: '0',
    paddingTop: '56.25%',
    image: image,
    alt: 'Running Shoes',
    sx: {
      padding: '1rem 1rem 0 1rem',
      height: 250,
      width: '90%',
    },
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const removeItem = () => {
    quantity > 1
      ? dispatch(
          decQtyItem({
            id,
            name,
            productType,
            price,
            rating,
            quantity,
            image,
            decriptionProd,
          })
        )
      : dispatch(
          removeFromBasket({
            id,
            name,
            productType,
            price,
            rating,
            quantity,
            image,
            decriptionProd,
          })
        );
  };

  return (
    <Card
      sx={{
        maxWidth: 345,
        margin: 'auto',
      }}
    >
      <CardHeader
        action={
          <Typography variant='h5' color='textSecondary'>
            {priceFormated}
          </Typography>
        }
        title={name}
        titleTypographyProps={{ noWrap: true }}
        subheader='In Stock'
        sx={{
          '& .MuiCardHeader-content': {
            overflow: 'hidden',
          },
        }}
      />

      <CardMedia component='img' {...CardMediaProps} />
      <CardActions
        disableSpacing
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          textAlign: 'center',
        }}
      >
        <div style={{ display: 'flex' }}>
          {Array(rating)
            // .fill()
            .map((_, i) => (
              <p key={i}>&#11088;</p>
            ))}
        </div>
        <Badge color='error' badgeContent={quantity}></Badge>
        <IconButton onClick={removeItem}>
          <DeleteIcon fontSize='large' />
        </IconButton>
      </CardActions>
    </Card>
  );
}
