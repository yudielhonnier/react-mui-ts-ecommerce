import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

import Page from '@/common/layout/Page';
import { IItem } from '@/context/reducer.types';

import CardProduct from '../components/CardProduct';
import { useAppDispatch, useAppSelector } from '@/store/hooks';

import { useEffect, useState } from 'react';
import { getProducts } from '@/store/slices/products';
import { SytledIconButton } from '@/common/layout/StyledIconButton';
import { Menu as MenuIcon, GridViewOutlined, ViewListOutlined } from '@mui/icons-material';
import ProductTable from '../components/ProductTable';

export default function Products() {
  const [toggleView, setToggleView] = useState(false);
  const dispatch = useAppDispatch();
  const { products } = useAppSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts(100));
  }, [dispatch]);

  const handleChangeViewList = () => {
    setToggleView((toggleView) => !toggleView);
  };

  return (
    <Page title='Products' help={<Typography>title</Typography>}>
      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <SytledIconButton
          size='large'
          edge='start'
          aria-label='toggle-view-products'
          onClick={handleChangeViewList}
          sx={{ display: 'flex', alignSelf: 'end', height: '30%' }}
        >
          {toggleView ? <GridViewOutlined /> : <ViewListOutlined />}
        </SytledIconButton>
        {toggleView ? (
          <ProductTable />
        ) : (
          <Grid container spacing={3}>
            {products &&
              products.map((product: IItem) => (
                <Grid key={product.id} xs={12} sm={6} md={4} lg={3}>
                  <CardProduct product={product} />
                </Grid>
              ))}
          </Grid>
        )}
      </Box>
    </Page>
  );
}
