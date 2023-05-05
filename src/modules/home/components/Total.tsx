import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import useFormatMoney from '@/hooks/useFormatMoney';

import { getBasketTotal, getTotalItems } from '@/context/reducer';
import { FlexRowBetween } from '@/common/flex-box';
import FlexColBetween from '@/common/flex-box/FlexColBetween';
import { H5, H6 } from '@/common/Typography';
import { useAppSelector } from '@/store/hooks';

export default function Total() {
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
      }}
    >
      <H5>Summary</H5>
      <FlexRowBetween>
        <h5>Total :</h5>
        <H6>{basketsFormated}</H6>
      </FlexRowBetween>
      <Button variant='contained' color='secondary' onClick={() => navigate('checkout')}>
        Check Out
      </Button>
    </FlexColBetween>
  );
}
