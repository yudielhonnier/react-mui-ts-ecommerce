import { AddShoppingCart } from '@mui/icons-material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Collapse from '@mui/material/Collapse';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

import useFormatMoney from '@/hooks/useFormatMoney';

import { IItem } from '@/context/reducer.types';
import { useAppDispatch } from '@/store/store';
import { useAppSelector } from '@/store/hooks';
import { addToBasket } from '@/store/slices/basket/basketSlice';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function CardProduct({
  product: { id, name, productType, price, rating, quantity, image, decriptionProd },
}: {
  product: IItem;
}) {
  const [expanded, setExpanded] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const priceFormated = useFormatMoney(price, '€');

  const addProductToBasket = () => {
    dispatch(
      addToBasket({
        id,
        name,
        productType,
        image,
        price,
        rating,
        quantity,
        decriptionProd,
      })
    );
  };

  const convertRating = (rating: number) => {
    if (rating > 10) return Math.round(parseInt(rating.toString().slice(0, 1)));
    else return rating;
  };

  const handleExpandClick = () => {
    setExpanded((expanded) => !expanded);
  };

  return (
    <Card sx={{ maxWidth: 200, margin: 'auto' }}>
      <CardMedia
        component='img'
        image={image}
        alt='Running Shoes'
        sx={{
          padding: '0',
          width: '100%',
          height: '150px',
          objectFit: 'cover',
        }}
      />

      <CardContent sx={{ padding: '.5rem' }}>
        <Typography
          sx={{
            fontSize: '.8rem',
            display: 'flex',
            justifyContent: 'space-between',
          }}
          color='textSecondary'
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
        <IconButton aria-label='Add to Cart' onClick={addProductToBasket}>
          <AddShoppingCart fontSize='medium' />
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
          aria-label='show more'
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout='auto' unmountOnExit>
        <CardContent>
          <Typography variant='body2' paragraph>
            {decriptionProd}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
