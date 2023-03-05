import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

import Page from '@/common/layout/Page';
import { IItem } from '@/context/reducer.types';

import CardProduct from '../components/CardProduct';
import { useAppDispatch, useAppSelector } from '@/store/hooks';

import { useEffect } from 'react';
import { getProducts } from '@/store/slices/products';

export default function Products() {
  const dispatch = useAppDispatch();
  const { products } = useAppSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts(100));
  }, [dispatch]);

  return (
    <Page title='Products' help={<Typography>title</Typography>}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
          {products &&
            products.map((product: IItem) => (
              <Grid key={product.id} xs={12} sm={6} md={4} lg={3}>
                <CardProduct product={product} />
              </Grid>
            ))}
        </Grid>
      </Box>
    </Page>
  );
}
