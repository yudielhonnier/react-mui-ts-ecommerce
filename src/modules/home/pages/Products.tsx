import { Box, Typography, useTheme } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

import Page from '@/common/layout/Page';
import { IItem } from '@/context/reducer.types';

import CardProduct from '../components/CardProduct';
import { useAppDispatch, useAppSelector } from '@/store/hooks';

import { useEffect, useState } from 'react';
import { getProducts } from '@/store/slices/products';
import { SytledIconButton } from '@/common/layout/StyledIconButton';
import {
  Menu as MenuIcon,
  GridViewOutlined as GridViewOutlinedIcon,
  ViewListOutlined as ViewListOutlinedIcon,
} from '@mui/icons-material';
import ProductTable from '../components/ProductTable';
import { tokens } from '@/theme';
import Calendar from '@/common/display/Calendar';
import Link from '@/common/navigation/Link';

export default function Products() {
  const [view, setView] = useState<'grid' | 'cards'>('cards');
  const dispatch = useAppDispatch();
  const { products } = useAppSelector((state) => state.products);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  useEffect(() => {
    dispatch(getProducts(100));
  }, [dispatch]);

  return (
    <Page title='Products' help={<Typography>title</Typography>}>
      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Box display='flex' flexDirection='row' justifyContent='end' alignItems='center'>
          View :
          <SytledIconButton
            size='large'
            edge='start'
            aria-label='toggle-view-products'
            onClick={() => setView('cards')}
            sx={{ display: 'flex', alignSelf: 'end', height: '30%' }}
            theme={theme}
            colorIcon={colors.greenAccent[400]}
          >
            <GridViewOutlinedIcon />
          </SytledIconButton>
          <SytledIconButton
            size='large'
            edge='start'
            aria-label='toggle-view-products'
            onClick={() => setView('grid')}
            sx={{ display: 'flex', alignSelf: 'end', height: '30%' }}
            theme={theme}
            colorIcon={colors.greenAccent[400]}
          >
            <ViewListOutlinedIcon />
          </SytledIconButton>
          <Link to='orders'>TestCalendar</Link>
        </Box>
        {view === 'grid' ? (
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
