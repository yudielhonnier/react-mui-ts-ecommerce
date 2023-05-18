import { Button, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import useFormatMoney from '@/hooks/useFormatMoney';

import { getBasketTotal, getTotalItems } from '@/context/reducer';
import { FlexRowBetween } from '@/common/flex-box';
import FlexColBetween from '@/common/flex-box/FlexColBetween';
import { H5, H6 } from '@/common/Typography';
import { useAppSelector } from '@/store/hooks';

export default function Total() {
  const theme = useTheme();
  const navigate = useNavigate();
  const { basket } = useAppSelector((state) => state.basket);

  const basketsFormated = useFormatMoney(getBasketTotal(basket), '€');

  return (
    <FlexColBetween
      sx={{
        width: '25%',
        height: '20vh',
        position: 'fixed',
        top: '100',

        [theme.breakpoints.down('sm')]: {
          alignItems: 'flex-end',
          paddingLeft: '30px',
        },
        [theme.breakpoints.down('xs')]: {
          display: 'none',
          width: '50%',
        },
      }}
    >
      <H5>Summary</H5>
      <FlexRowBetween
        sx={{
          [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
          },
        }}
      >
        <h5>Total :</h5>
        <H6>{basketsFormated}</H6>
      </FlexRowBetween>
      <Button
        variant='contained'
        color='secondary'
        onClick={() => navigate('checkout')}
        disabled={basket.length === 0}
      >
        Check Out
      </Button>
    </FlexColBetween>
  );
}
