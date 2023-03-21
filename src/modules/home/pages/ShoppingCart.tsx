import { Box, Typography } from '@mui/material';

import Grid from '@mui/material/Unstable_Grid2';
import { FlexBetween, FlexBox, FlexRowCenter } from '@/common/flex-box';

import Page from '@/common/layout/Page';
import { useStateValue } from '@/context/StateProvider';

import CheckoutCart from '../components/CheckoutCart';
import Total from '../components/Total';
import { useAppSelector } from '@/store/hooks';
import Product from '../models/Product';
import FlexBetweenStart from '@/common/flex-box/FlexBetweenStart';

// TODO: FIX THIS PAGE
export default function ShoppingCart() {
  const { basket } = useAppSelector((state) => state.basket);
  function FormRow() {
    return (
      <>
        {basket ? (
          basket?.map((item: Product) => (
            <Grid key={item.id}>
              <CheckoutCart product={item} />
            </Grid>
          ))
        ) : (
          <></>
        )}
      </>
    );
  }

  return (
    <Page title='Shopping Cart' help={<Typography>title</Typography>}>
      <FlexBetweenStart>
        <Grid container spacing={3} xs={8} direction='column'>
          <FormRow />
        </Grid>
        <Grid xs={4}>
          <Typography align='center' gutterBottom variant='h4'>
            <Total />
          </Typography>
        </Grid>
      </FlexBetweenStart>
    </Page>
  );
}
