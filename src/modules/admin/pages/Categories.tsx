import { Box, Typography, useTheme } from '@mui/material';

import Page from '@/common/layout/Page';

import { useAppDispatch, useAppSelector } from '@/store/hooks';

import { useEffect, useState } from 'react';

import { tokens } from '@/theme';
import { getCategories } from '@/store/slices/categories';
import CategoriesTable from '../components/CategoriesTable';

export default function Products() {
  const dispatch = useAppDispatch();
  const { categories } = useAppSelector((state) => state.categories);

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  useEffect(() => {
    dispatch(getCategories(100));
  }, [dispatch]);

  return (
    <Page title='Admin Categories' help={<Typography>title</Typography>}>
      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Box display='flex' flexDirection='row' justifyContent='end' alignItems='center'></Box>
        {categories ? <CategoriesTable categories={categories} /> : <></>}
      </Box>
    </Page>
  );
}
