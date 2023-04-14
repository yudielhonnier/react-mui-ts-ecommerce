import { Delete as DeleteIcon } from '@mui/icons-material';
import { Badge, Box, Theme } from '@mui/material';
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
import { decQtyItem, removeFromBasket, addToBasket } from '@/store/slices/basket/basketSlice';
import { FlexBox, FlexRowCenter } from '@/common/flex-box';
import { SytledIconButton } from '@/common/layout/StyledIconButton';
import FlexBetweenCenter from '@/common/flex-box/FlexBetweenCenter';

export default function CheckoutCart({
  product: { id, name, productType, price, rating, quantity, image, decriptionProd },
}: {
  product: IItem;
}) {
  // const classes=useStyles();
  const dispatch = useAppDispatch();

  const priceFormated = useFormatMoney(price, '€');

  const CardMediaProps = {
    heigth: '0',
    paddingTop: '56.25%',
    image: image,
    alt: 'Running Shoes',
    sx: {
      padding: '1rem 1rem 0 1rem',
      height: '7rem',
      width: '10rem',
    },
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

  const incItem = () => {
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

  return (
    <Card
      sx={{
        // maxWidth: 345,
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
          p: '1rem',
          py: '.5rem',
        }}
      >
        <Box style={{ display: 'flex' }}>
          {Array(rating)
            .fill(0)
            .map((_, i) => (
              <p key={i}>&#11088;</p>
            ))}
        </Box>
        <FlexBetweenCenter gap={2} width='4rem'>
          <SytledIconButton
            sx={{ height: '1rem', width: '1rem' }}
            size='small'
            edge='start'
            aria-label='increment items'
            onClick={incItem}
          >
            +
          </SytledIconButton>
          <Typography sx={{ p: '0ppx' }}>{quantity}</Typography>
          <SytledIconButton
            sx={{ height: '1rem', width: '1rem' }}
            size='small'
            edge='start'
            aria-label='increment items'
            onClick={removeItem}
          >
            -
          </SytledIconButton>
        </FlexBetweenCenter>
      </CardActions>
    </Card>
  );
}
