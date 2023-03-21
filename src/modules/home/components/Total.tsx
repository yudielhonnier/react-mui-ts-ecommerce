<<<<<<< HEAD
import { Box, Button } from '@mui/material';
=======
import { Button } from '@mui/material';
>>>>>>> 6d42ad3 (fix: lint fix)
import { useNavigate } from 'react-router-dom';

import useFormatMoney from '@/hooks/useFormatMoney';

import { getBasketTotal, getTotalItems } from '@/context/reducer';
import { useStateValue } from '@/context/StateProvider';

export default function Total() {
  const navigate = useNavigate();
  const {
    state: { basket },
  } = useStateValue();

  const basketsFormated = useFormatMoney(getBasketTotal(basket), '€');

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: '20vh',
      }}
    >
      <h5>Total items:{getTotalItems(basket)}</h5>
      <h5>{basketsFormated}</h5>
      <Button variant='contained' color='primary' onClick={() => navigate('checkout')}>
        Check Out
      </Button>
<<<<<<< HEAD
    </Box>
=======
    </div>
>>>>>>> 6d42ad3 (fix: lint fix)
  );
}
