import { Box, Typography, useTheme } from '@mui/material';

import Grid from '@mui/material/Unstable_Grid2';

import Page from '@/common/layout/Page';

import CheckoutCart from '../components/CheckoutCart';
import Total from '../components/Total';
import { useAppSelector } from '@/store/hooks';
import Product from '../models/Product';
import FlexBetweenStart from '@/common/flex-box/FlexBetweenStart';

// TODO: FIX THIS PAGE
export default function Shopping() {
  const theme = useTheme();

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
        <Grid container xs={4}>
          <Total />
        </Grid>
      </FlexBetweenStart>
    </Page>
  );
}
