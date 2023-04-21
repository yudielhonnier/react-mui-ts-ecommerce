import { Badge, Box, CardContent, Theme, useTheme } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import useFormatMoney from '@/hooks/useFormatMoney';

import { actionTypes, IItem } from '@/context/reducer.types';
import { useAppDispatch } from '@/store/store';
import { decQtyItem, removeFromBasket, addToBasket } from '@/store/slices/basket/basketSlice';
import { FlexBox, FlexRowCenter } from '@/common/flex-box';
import { SytledIconButton } from '@/common/layout/StyledIconButton';
import FlexBetweenCenter from '@/common/flex-box/FlexBetweenCenter';
import FlexColBetween from '@/common/flex-box/FlexColBetween';
import { H5 } from '@/common/Typography';

export default function CheckoutCart({
  product: { id, name, productType, price, rating, quantity, image, decriptionProd },
}: {
  product: IItem;
}) {
  const dispatch = useAppDispatch();
  const theme = useTheme();
  const priceFormated = useFormatMoney(price, '€');

  const CardMediaProps = {
    heigth: '0',
    paddingTop: '56.25%',
    image: image,
    alt: 'Running Shoes',
    sx: {
      padding: '.8rem 1rem 0 1rem',
      height: '5rem',
      width: '7rem',
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
        margin: 'auto',
      }}
    >
      <CardContent sx={{ padding: '.5rem 1rem 0 1rem' }}>
        <Typography
          sx={{
            fontSize: '.8rem',
            display: 'flex',
            justifyContent: 'space-between',
          }}
          color='textSecondary'
        >
          <span>{name}</span>
        </Typography>
      </CardContent>
      <FlexBox>
        <CardMedia component='img' {...CardMediaProps} />
        <FlexColBetween sx={{ pt: '.5rem', pr: '1rem' }}>
          <Typography> {decriptionProd}</Typography>
          <Typography sx={{ fontWeight: 'bold' }}> {priceFormated}</Typography>
        </FlexColBetween>
      </FlexBox>
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
        <FlexBetweenCenter gap={1} sx={{ px: '.5rem' }}>
          <SytledIconButton
            sx={{ height: '1rem', width: '1rem' }}
            size='small'
            edge='start'
            aria-label='increment items'
            onClick={removeItem}
            theme={theme}
            colorIcon='primary'
          >
            <H5 sx={{ p: '0px' }}>-</H5>
          </SytledIconButton>
          <Typography sx={{ p: '0px' }}>{quantity}</Typography>
          <SytledIconButton
            sx={{ height: '1rem', width: '1rem' }}
            size='small'
            edge='start'
            aria-label='increment items'
            onClick={incItem}
            theme={theme}
            colorIcon='primary'
          >
            <H5 sx={{ p: '0px' }}>+</H5>
          </SytledIconButton>
        </FlexBetweenCenter>
      </CardActions>
    </Card>
  );
}
