import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

import { getBasketTotal } from '../../../../context/reducer';
import { useStateValue } from '../../../../context/StateProvider';
import useFormatMoney from '../../../../hooks/useFormatMoney';
import { useAppSelector } from '@/store/hooks';

const Review = () => {
  const { basket } = useAppSelector((state) => state.basket);

  return (
    <>
      <Typography variant='h6' gutterBottom>
        Review
      </Typography>
      <List disablePadding>
        {basket?.map((product) => (
          <ListItem key={product.id}>
            <ListItemText primary={product.name} secondary={`Qty:${product.quantity}`} />
            <Typography variant='body2'>
              {/* TODO:add format for this value */}
              {product.price * product.quantity}
            </Typography>
          </ListItem>
        ))}
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary='Total' />
          <Typography variant='subtitle1' sx={{ fontWeight: 700 }}>
            {useFormatMoney(getBasketTotal(basket), '€')}
          </Typography>
        </ListItem>
      </List>
    </>
  );
};

export default Review;
